NewsLive.controller('NewsLiveControllerAgenda', ['NewsLiveService', function(NewsLiveService) {

    var vm = this;

    vm.eventos = [];
    
    // Methods
    vm.init = init;
    vm.listarEventos = listarEventos;

    function init() {
        listarEventos();
    }

    function listarEventos() {
        NewsLiveService.getEventos().then(function(response) {
            vm.eventos = response.data.eventos;
        }, function(err) {
            console.log(err);
        });
    }

}]);