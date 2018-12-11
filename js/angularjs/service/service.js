NewsLive.service("NewsLiveService", ['$http', function($http) {

    var _getNoticias = function() {
        AllowAccesServiceAPI();
        return $http.get("https://cors-anywhere.herokuapp.com/https://projeto-final-gabrielfernando033.c9users.io/noticias");
    };

    var _searchNoticias = function(busca) {
        AllowAccesServiceAPI();
        return $http.get("https://cors-anywhere.herokuapp.com/https://projeto-final-gabrielfernando033.c9users.io/noticias/buscar/" + busca);
    };

    var _getCategorias = function() {
        AllowAccesServiceAPI();
        return $http.get("https://cors-anywhere.herokuapp.com/https://projeto-final-gabrielfernando033.c9users.io/categorias/");
    };

    var _inserirNoticia = function(noticia) {
        AllowAccesServiceAPI();
        return $http.post("https://cors-anywhere.herokuapp.com/https://projeto-final-gabrielfernando033.c9users.io/noticia/", noticia);
    };

    var _inserirCategoria = function(categoria) {
        AllowAccesServiceAPI();
        return $http.post("https://cors-anywhere.herokuapp.com/https://projeto-final-gabrielfernando033.c9users.io/categoria/", categoria);
    };

    var _inserirEvento = function(evento) {
        AllowAccesServiceAPI();
        return $http.post("https://cors-anywhere.herokuapp.com/https://projeto-final-gabrielfernando033.c9users.io/evento/", evento);
    };

    var _inserirAdmin = function(admin) {
        AllowAccesServiceAPI();
        return $http.post("https://cors-anywhere.herokuapp.com/https://projeto-final-gabrielfernando033.c9users.io/admin/", admin);
    };

    var _getNoticiasPorCategoria = function(categoriaid) {
        AllowAccesServiceAPI();
        return $http.get("https://cors-anywhere.herokuapp.com/https://projeto-final-gabrielfernando033.c9users.io/noticias/categoria/" + categoriaid);
    };

    var _getNoticia = function(noticiaid) {
        AllowAccesServiceAPI();
        return $http.get("https://cors-anywhere.herokuapp.com/https://projeto-final-gabrielfernando033.c9users.io/noticia/" + noticiaid);
    };

    var _getEventos = function() {
        AllowAccesServiceAPI();
        return $http.get("https://cors-anywhere.herokuapp.com/https://projeto-final-gabrielfernando033.c9users.io/eventos/");
    };

    function AllowAccesServiceAPI() {
        $http.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
        $http.defaults.headers.post['dataType'] = 'json';
        $http.defaults.headers.post['Content-Type'] = 'application/json';
    }

    this.getNoticias = _getNoticias;
    this.searchNoticias = _searchNoticias;
    this.getCategorias = _getCategorias;
    this.inserirNoticia = _inserirNoticia;
    this.inserirCategoria = _inserirCategoria;
    this.inserirEvento = _inserirEvento;
    this.inserirAdmin = _inserirAdmin;
    this.getNoticiasPorCategoria = _getNoticiasPorCategoria;
    this.getNoticia = _getNoticia;
    this.getEventos = _getEventos;

}]);