NewsLive.controller('NewsLiveController', ['NewsLiveService', '$modal', function(NewsLiveService, $modal) {

    var vm = this;

    // Modal
    vm.Modal = "";
    vm.ModalGif = "";
    vm.Title = "";
    vm.Mensagem = "";
    
    // Methods
    vm.init = init;
    vm.listarNoticias = listarNoticias;

    function init() {
        console.log("teste");
    }

    function listarNoticias() {
        openGifModal();
        NewsLiveService.getNoticias().then(function(response) {
            console.log(response.data);
        }, function(err) {
            ct.Mensagem = "Funcionalidade não respondendo.";
            closeGifModal();
            modal();
        });
    }

}]);