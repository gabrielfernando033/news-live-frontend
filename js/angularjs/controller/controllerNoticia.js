NewsLive.controller('NewsLiveControllerNoticia', ['NewsLiveService', function(NewsLiveService) {

    var vm = this;

    vm.noticiaUrl = {};
    vm.comentarios = [];
    vm.id = null;

    // Methods
    vm.init = init;
    vm.getNoticia = getNoticia;
    vm.getComentariosPorNoticia = getComentariosPorNoticia;
    vm.inserirComentario = inserirComentario;
    vm.listarNoticias = listarNoticias;

    function init() {
        const urlParams = new URLSearchParams(window.location.search);
        vm.id = urlParams.get('id');
        listarNoticias();
        getNoticia(vm.id);
        getComentariosPorNoticia(vm.id);
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

    function getComentariosPorNoticia(id) {
        NewsLiveService.getComentariosPorNoticia(id).then(function(response) {
            vm.comentarios = response.data.comentarios;
        }, function(err) {
            console.log(err);
        });
    }

    function inserirComentario(formObj) {
        var today = new Date();
        var data = today.getDate() + "-" + (today.getMonth()+1) + "-" + today.getFullYear() + " " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        formObj = {
            autor: formObj.autor,
            conteudo: formObj.conteudo,
            dataPostagem: data,
            noticiaid: Number(vm.id),
        };
        NewsLiveService.inserirComentario(formObj).then(function(response) {
            if (response.data.comentario != null && response.data.comentario != undefined)
            {
                alert("Inserido com sucesso!");
                location.reload();
            }
            else
            {
                location.reload();
            }
        }, function(err) {
            console.log(err);
        });
    }

    function listarNoticias() {
        NewsLiveService.getNoticias().then(function(response) {
            vm.noticias = response.data.noticias;
        }, function(err) {
            console.log(err);
        });
    }

}]);