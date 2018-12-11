NewsLive.controller('NewsLiveControllerAdmin', ['NewsLiveService', function(NewsLiveService) {

    var vm = this;

    vm.noticias = [];
    vm.categorias = [];
    vm.categoria = {};
    
    // Methods
    vm.init = init;
    vm.listarNoticias = listarNoticias;
    vm.getCategorias = getCategorias;
    vm.inserirNoticia = inserirNoticia;
    vm.inserirAdmin = inserirAdmin;
    vm.inserirEvento = inserirEvento;
    vm.inserirCategoria = inserirCategoria;

    function init() {
        listarNoticias();
        getCategorias();
    }

    function listarNoticias() {
        NewsLiveService.getNoticias().then(function(response) {
            vm.noticias = response.data.noticias;
        }, function(err) {
            console.log(err);
        });
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

    function inserirCategoria(formObj) {
        formObj = {
            nome: formObj.nome
        };
        NewsLiveService.inserirCategoria(formObj).then(function(response) {
            console.log(response);
        }, function(err) {
            console.log(err);
        });
    }

    function inserirEvento(formObj) {
        formObj = {
            tipo: formObj.tipo,
            titulo: formObj.titulo,
            descricao: formObj.descricao,
            dataEvento: formObj.dataEvento,
            preco: Number(formObj.preco),
            imagem: formObj.imagem
        };
        NewsLiveService.inserirEvento(formObj).then(function(response) {
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
        NewsLiveService.inserirAdmin(formObj).then(function(response) {
            console.log(response);
        }, function(err) {
            console.log(err);
        });
    }

}]);