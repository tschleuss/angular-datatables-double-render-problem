exports.start = function(port) {

    const express = require('express')
    const fs = require('fs')
    const os = require('os')
    const app = express();

    app.use(express.static('.'))

    // Endpoints
    app.get('/data', (req, res) => {
        res.set('Content-Type', 'application/json');
        res.json({
            draw: req.query.draw,
            recordsTotal: 8,
            recordsFiltered: 8,
            data: [
                { "name": "file 1", "date": "2018-01-31T10:47:12.000Z" },
                { "name": "file 2", "date": "2018-01-31T10:52:18.000Z" },
                { "name": "file 3", "date": "2018-01-31T11:01:03.000Z" },
                { "name": "file 4", "date": "2018-01-31T11:01:39.000Z" },
                { "name": "file 5", "date": "2018-01-31T11:18:14.000Z" },
                { "name": "file 6", "date": "2018-01-31T11:22:47.000Z" },
                { "name": "file 7", "date": "2018-01-31T12:38:34.009Z" },
                { "name": "file 8", "date": "2018-01-31T12:38:36.000Z" }
            ]
        });
    });

    app.get('/*', (req, res) => {
        try {
            const path = req.params[0] || 'index.html';
            res.set('Content-Type', 'text/html');
            res.end(fs.readFileSync(`./src/${path}`));
        } catch (e) {}
    });

    app.listen(3000, function() {
        console.log('Running in localhost 3000');
    });
};
