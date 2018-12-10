NewsLive.controller('NewsLiveController', ['NewsLiveService', '$modal', function(NewsLiveService, $modal) {

    var vm = this;

    // Modal
    vm.Modal = "";
    vm.ModalGif = "";
    vm.Title = "";
    vm.Mensagem = "";
    
    // Methods
    vm.init = init;

    function init() {
        
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