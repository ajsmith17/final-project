const app = angular.module('NewsApp', []);

app.controller('MainController', ['$http', function($http){
  const controller = this;

  this.includePath = '../partials/us.html';

  this.changeInclude = (path) => {
    this.includePath = '../partials/' + path + '.html';
  }

  this.getUSNews = (index) => {
    const pageTitle = 'US';
    $http({
      method: 'GET',
      url: 'https://newsapi.org/v2/top-headlines?country=us&apiKey=ff8d29868e384305916c64afd64aaa59'
      // url: this.baseURL + this.headlineType + this.sources + this.apiKey
    }).then( response => {
      this.news = response.data.articles;
      this.page = pageTitle;
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  }

  this.getScienceNews = (index) => {
    const pageTitle = 'Science';
    $http({
      method: 'GET',
      url: 'https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=ff8d29868e384305916c64afd64aaa59'
    }).then( response => {
      this.news = response.data.articles;
      this.page = pageTitle;
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  }

  this.getBusinessNews = (index) => {
    const pageTitle = 'Business';
    $http({
      method: 'GET',
      url: 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ff8d29868e384305916c64afd64aaa59'
    }).then( response => {
      this.news = response.data.articles;
      this.page = pageTitle;
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  }

  this.getHealthNews = (index) => {
    const pageTitle = 'Health';
    $http({
      method: 'GET',
      url: 'https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=ff8d29868e384305916c64afd64aaa59'
    }).then( response => {
      this.news = response.data.articles;
      this.page = pageTitle;
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  }

  this.getSportsNews = (index) => {
    const pageTitle = 'Sports';
    $http({
      method: 'GET',
      url: 'https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=ff8d29868e384305916c64afd64aaa59'
    }).then( response => {
      this.news = response.data.articles;
      this.page = pageTitle;
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  }

  this.getEntertainmentNews = (index) => {
    const pageTitle = 'Entertainment';
    $http({
      method: 'GET',
      url: 'https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=ff8d29868e384305916c64afd64aaa59'
    }).then( response => {
      this.news = response.data.articles;
      this.page = pageTitle;
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  }

  this.getTechnologyNews = (index) => {
    const pageTitle = 'Technology';
    $http({
      method: 'GET',
      url: 'https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=ff8d29868e384305916c64afd64aaa59'
    }).then( response => {
      this.news = response.data.articles;
      this.page = pageTitle;
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

  this.getComments = function(){
    $http({
      method: 'GET',
      url: '/comments',
    }).then(function(response){
      controller.comments = response.data;
      console.log(response);
    }, function(error){
      console.log(error);
    });
  };


}]);
