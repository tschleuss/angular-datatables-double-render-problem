angular.module('datatablesSampleApp', ['datatables']).controller('SimpleCtrl', SimpleCtrl);

function SimpleCtrl(DTOptionsBuilder, DTColumnBuilder, $compile, $scope, $http) {

    var vm = this;

    function doAjaxRequest(filter, callback, settings) {
        const url = 'http://localhost:3000/data';
        const params = {};
        $http.get(url, { params }).then(function(response) {
            const result = response.data;
            callback(result);
        });
    }

    vm.datatableOptions = DTOptionsBuilder.newOptions()
        .withDataProp('data')
        .withOption('ajax', doAjaxRequest)
        .withOption('serverSide', true)
        .withOption('processing', true)
        .withOption('searching', false)
        .withOption('autoWidth', true)
        .withOption('ordering', true)
        .withOption('order', [
            [0, 'desc']
        ]);

    vm.datatableColumns = [
        DTColumnBuilder.newColumn('date', 'Date'),
        DTColumnBuilder.newColumn('name', 'File namne')
    ];
}
