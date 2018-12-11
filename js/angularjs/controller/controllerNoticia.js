NewsLive.controller('NewsLiveControllerNoticia', ['NewsLiveService', function(NewsLiveService) {

    var vm = this;

    vm.noticiaUrl = {};

    // Methods
    vm.init = init;
    vm.getNoticia = getNoticia;

    function init() {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        getNoticia(id);
    }

    function getNoticia(id) {
        NewsLiveService.getNoticia(id).then(function(response) {
            if (response.data.noticia.length == 0)
            {
                window.location.href = 'index.html'
            }
            else
            {
                vm.noticiaUrl = response.data.noticia[0];
            }
        }, function(err) {
            console.log(err);
        });
    }

}]);