NewsLive.controller('NewsLiveControllerNoticiaCategoria', ['NewsLiveService', function(NewsLiveService) {

    var vm = this;

    vm.noticias = [];
    vm.negocios = [];
    vm.entretenimentos = [];
    vm.saudes = [];
    vm.ciencias = [];
    vm.tecnologias = [];
    vm.esportes = [];
    
    // Methods
    vm.init = init;
    vm.listarNoticias = listarNoticias;
    vm.listarNegocios = listarNegocios;
    vm.listarEntretenimentos = listarEntretenimentos;
    vm.listarSaudes = listarSaudes;
    vm.listarCiencias = listarCiencias;
    vm.listarTecnologias = listarTecnologias;
    vm.listarEsportes = listarEsportes;

    function init(categoria) {
        listarNoticias();
        if (categoria == "negocios")
            listarNegocios();
        if (categoria == "entretenimento")
            listarEntretenimentos();
        if (categoria == "saude")
            listarSaudes();
        if (categoria == "ciencia")
            listarCiencias();
        if (categoria == "tecnologia")
            listarTecnologias();
        if (categoria == "esporte")
            listarEsportes();
    }

    function listarNoticias() {
        NewsLiveService.getNoticias().then(function(response) {
            vm.noticias = response.data.noticias;
        }, function(err) {
            console.log(err);
        });
    }

    function listarNegocios() {
        console.log("Negocios");
        NewsLiveService.getNoticiasPorCategoria(1).then(function(response) {
            vm.negocios = response.data.noticias;
        }, function(err) {
            console.log(err);
        });
    }

    function listarEntretenimentos() {
        console.log("Entretenimento");
        NewsLiveService.getNoticiasPorCategoria(2).then(function(response) {
            vm.entretenimentos = response.data.noticias;
        }, function(err) {
            console.log(err);
        });
    }

    function listarSaudes() {
        NewsLiveService.getNoticiasPorCategoria(3).then(function(response) {
            vm.saudes = response.data.noticias;
        }, function(err) {
            console.log(err);
        });
    }

    function listarCiencias() {
        NewsLiveService.getNoticiasPorCategoria(4).then(function(response) {
            vm.ciencias = response.data.noticias;
        }, function(err) {
            console.log(err);
        });
    }

    function listarTecnologias() {
        NewsLiveService.getNoticiasPorCategoria(5).then(function(response) {
            vm.tecnologias = response.data.noticias;
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

}]);