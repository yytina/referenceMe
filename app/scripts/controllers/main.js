'use strict';

angular.module('referenceMeApp')
  .controller('MainCtrl', function ($scope,$rootScope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    console.log(hipchatLinks.length);
    var numTags = 0;
    $scope.Tags = [];
    $rootScope.subject="";
    $scope.makeTags = function(){
    	for (var i=0;i<hipchatLinks.length-1;i++){
    	
    		
    		if (($scope.Tags.indexOf(hipchatLinks[i].tag))<0){
    			
    			$scope.Tags.push(hipchatLinks[i].tag);
    		}
    		else{
    			
    		}
    	}
    }	
    $scope.handleClick=function(tag){
    	$rootScope.subject=tag;
    }
    $scope.makeTags();
    console.log($scope.Tags);
    
  });
