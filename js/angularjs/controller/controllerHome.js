NewsLive.controller('NewsLiveController', ['NewsLiveService', '$modal', function(NewsLiveService, $modal) {

    var vm = this;

    var noticia = {
        id: null,
        categoriaid: null,
        titulo: null,
        subtitulo: null,
        conteudo: null,
        imagem: null,
        dataPostagem: null
    };
    vm.noticias = [];
    
    // Methods
    vm.init = init;
    vm.listarNoticias = listarNoticias;

    function init() {
        listarNoticias();
    }

    function listarNoticias() {
        NewsLiveService.getNoticias().then(function(response) {
            vm.noticias = response.data.noticias;
        }, function(err) {
            console.log(err);
        });
    }

}]);