const app = angular.module('NewsApp', []);

app.controller('MainController', ['$http', function($http){
  const controller = this;
  this.baseURL = 'https://newsapi.org/v2/';
  this.headlineType = 'top-headlines?';
  this.sources = 'country=us&';
  this.apiKey = 'apiKey=ff8d29868e384305916c64afd64aaa59';

  this.getNews = (index) => {
    // var url = 'https://newsapi.org/v2/top-headlines?' +
    //       'country=us&' +
    //       'apiKey=ff8d29868e384305916c64afd64aaa59';
    // var req = new Request(url);
    // fetch(req)
    //   .then(function(response) {
    //     console.log(response.json());
    // })
    $http({
      method: 'GET',
      url: this.baseURL + this.headlineType + this.sources + this.apiKey
    }).then( response => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  }

}]);
