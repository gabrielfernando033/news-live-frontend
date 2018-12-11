NewsLive.controller('NewsLiveController', ['NewsLiveService', function(NewsLiveService) {

    var vm = this;

    vm.noticias = [];
    vm.esportes = [];
    vm.eventos = [];
    
    // Methods
    vm.init = init;
    vm.listarNoticias = listarNoticias;
    vm.listarEsportes = listarEsportes;
    vm.listarEventos = listarEventos;

    function init() {
        listarNoticias();
        listarEsportes();
        listarEventos();
    }

    function listarNoticias() {
        NewsLiveService.getNoticias().then(function(response) {
            vm.noticias = response.data.noticias;
        }, function(err) {
            console.log(err);
        });
    }

    function listarEsportes() {
        NewsLiveService.getNoticiasPorCategoria(6).then(function(response) {
            vm.esportes = response.data.noticias;
        }, function(err) {
            console.log(err);
        });
    }

    function listarEventos() {
        NewsLiveService.getEventos().then(function(response) {
            vm.eventos = response.data.eventos;
        }, function(err) {
            console.log(err);
        });
    }

}]);