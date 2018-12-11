NewsLive.controller('NewsLiveControllerNoticia', ['NewsLiveService', '$location', function(NewsLiveService, $location) {

    var vm = this;

    // Methods
    vm.init = init;

    function init() {
        var paramValue = $location.search().id;
        console.log(paramValue);
        getNoticia(paramValue);
    }

    function getNoticia(id) {
        NewsLiveService.getNoticia(id).then(function(response) {
            console.log(response);
        }, function(err) {
            console.log(err);
        });
    }

}]);