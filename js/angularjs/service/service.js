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

    var _inserirAdmin = function(admin) {
        AllowAccesServiceAPI();
        return $http.post("https://cors-anywhere.herokuapp.com/https://projeto-final-gabrielfernando033.c9users.io/admin/", admin);
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
    this.inserirAdmin = _inserirAdmin;

}]);