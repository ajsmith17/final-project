const app = angular.module('NewsApp', []);

app.controller('MainController', ['$http', function($http){
  const controller = this;
  this.baseURL = 'https://newsapi.org/v2/';
  this.headlineType = 'top-headlines?';
  this.sources = 'country=us&category=sports&';
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

  this.addComment = function(){
    $http({
      method: 'POST',
      url: '/comments',
      data: {
        name: this.name,
        comment: this.comment
      }
    }).then(function(response){
      controller.getComments();
      controller.name = null;
      controller.comment = null;
      // console.log(response);
    }, function(error){
      console.log(error);
    });
  };
  // Get Cities
  this.getComments = function(){
    $http({
      method: 'GET',
      url: '/comments',
    }).then(function(response){
      controller.comments = response.data;
    }, function(error){
      console.log(error);
    });
  };


}]);
