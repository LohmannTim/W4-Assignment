console.log('client.js has been loaded');


var app =angular.module('RecordsApp', []); //Starting Angular

app.controller('RecordsController', ['$http', function($http){
    console.log('Records controller has been loaded');
    var self = this;
    self.records = [];
    self.newRecord= {};
    
    
    self.getRecords = function() {
        $http({
            method: 'GET',
            url: '/records'
    }).then(function(response){
            console.log(response);
            console.log(response.data);
            self.records = response.data;
    }); //end of http
    }; // end of getRecords

    self.postNewRecord = function() {
        console.log('posting record');
        
        $http({
            method: 'POST',
            url: '/records',
            data: self.newRecord
        }).then(function(response){
            console.log(response);
            self.getRecords();

        });
    };
  self.getRecords();

  self.getSum = function() {
    $http({
        method: 'GET',
        url: '/records/sum'
}).then(function(response){
        console.log(response);
        console.log(response.data);
        self.sum = response.data[0].sum;
        
}); //end of http
}; // end of getRecords
self.getSum();
}]);