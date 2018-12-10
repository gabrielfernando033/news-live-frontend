NewsLive.service("NewsLiveService", ['$http', function($http) {

    var _getNoticias = function() {
        AllowAccesServiceAPI();
        return $http.get("https://cors-anywhere.herokuapp.com/https://projeto-final-gabrielfernando033.c9users.io/noticias");
    };

    var _searchNoticias = function(busca) {
        AllowAccesServiceAPI();
        return $http.get("https://cors-anywhere.herokuapp.com/https://projeto-final-gabrielfernando033.c9users.io/noticias/buscar/" + busca);
    };

    function AllowAccesServiceAPI() {
        $http.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
        $http.defaults.headers.post['dataType'] = 'json';
        $http.defaults.headers.post['Content-Type'] = 'application/json';
    }

    this.getNoticias = _getNoticias;
    this.searchNoticias = _searchNoticias;

}]);