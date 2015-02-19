angular.module('cobApp',[])

.controller('MainCtrl', function($scope, $http) {
	$http.get('podcastfeed').then(function(resp) {
		console.log('Success', resp);
	}, function(err) {
		console.error('ERR', err);
	})
})