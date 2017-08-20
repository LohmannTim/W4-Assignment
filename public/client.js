console.log('client.js has been loaded');


var app =angular.module('RecordsApp', []); //Starting Angular

app.controller('RecordsController', ['$http', function($http){
    console.log('Records controller has been loaded');
    var self = this;
    self.records = [];
    
    self.getRecords = function() {
        $http({
            method: 'GET',
            url: '/record'
    }).then(function(response){
            console.log(response);
            console.log(response.data);
            self.records = response.data;
    }); //end of http
    }; // end of getRecords

    self.postNewRecord = function() {
        $http({
            method: 'POST',
            url: '/record',
            data: self.newRecord
        }).then(function(response){
            console.log(response);
            self.getRecords();

        });
    };
  self.getRecords();
}]);