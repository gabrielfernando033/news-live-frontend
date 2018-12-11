NewsLive.controller('NewsLiveControllerAdmin', ['NewsLiveService', '$modal', function(NewsLiveService, $modal) {

    var vm = this;

    vm.categorias = [];
    vm.categoria = {};
    
    // Methods
    vm.init = init;
    vm.getCategorias = getCategorias;
    vm.inserirNoticia = inserirNoticia;
    vm.inserirAdmin = inserirAdmin;

    function init() {
        getCategorias();
    }

    function getCategorias() {
        NewsLiveService.getCategorias().then(function(response) {
            vm.categorias = response.data.categorias;
        }, function(err) {
            console.log(err);
        });
    }

    function inserirNoticia(formObj) {
        var today = new Date();
        var data = today.getDate() + "-" + (today.getMonth()+1) + "-" + today.getFullYear() + " " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        formObj = {
            categoriaid: Number(vm.categoria),
            titulo: formObj.titulo,
            subtitulo: formObj.subtitulo,
            conteudo: formObj.conteudo,
            imagem: formObj.imagem,
            dataPostagem: data
        };
        NewsLiveService.inserirNoticia(formObj).then(function(response) {
            console.log(response);
        }, function(err) {
            console.log(err);
        });
    }

    function inserirAdmin(formObj) {
        formObj = {
            nome: formObj.nome,
            sobrenome: formObj.sobrenome,
            email: formObj.email,
            usuario: formObj.usuario,
            senha: formObj.senha
        };
        console.log(formObj);
        NewsLiveService.inserirAdmin(formObj).then(function(response) {
            console.log(response);
        }, function(err) {
            console.log(err);
        });
    }

}]);