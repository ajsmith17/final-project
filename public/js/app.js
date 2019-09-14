const app = angular.module('NewsApp', []);

app.controller('MainController', ['$http', function($http){
  const controller = this;
  this.baseURL = 'https://newsapi.org/v2/';
  this.headlineType = 'top-headlines?';
  this.sources = 'category=sports&';
  this.apiKey = 'apiKey=ff8d29868e384305916c64afd64aaa59';

  this.getNews = (index) => {
    $http({
      method: 'GET',
      url: this.baseURL + this.headlineType + this.sources + this.apiKey
    }).then( response => {
      this.news = response.data.articles
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  }


}]);
