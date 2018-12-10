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
        listarNoticias();
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

    function modal() {
        var lModal = $modal.open({
            templateUrl: 'js/ui-bootstrap/modal-form.html',
            controller: function($modalInstance, $scope) {
                $scope.Mensagem = vm.Mensagem;
                $scope.Title = vm.Title;
                $scope.cancel = function() {
                    vm.Mensagem = "";
                    $modalInstance.dismiss('cancel');
                };
            }
        });
    }

    function openGifModal() {
        vm.ModalGif = $modal.open({
            templateUrl: 'js/ui-bootstrap/modal-gif.html',
            controller: function($modalInstance) {}
        });
    }

    function closeGifModal() {
        if (vm.ModalGif !== undefined)
            vm.ModalGif.close();
    }

}]);