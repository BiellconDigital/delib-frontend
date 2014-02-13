'use strict';

define(['app'], function (app) {

    var carroController = function ($scope, $rootScope, $routeParams, $filter, $http, $location, dataService) {
        $scope.cart = dataService.cart;
        
        $('#rootwizardCart').bootstrapWizard({
                'nextSelector': '.button-next', 'previousSelector': '.button-previous',
                onTabShow: function(tab, navigation, index) {
//                        var $total = navigation.find('li').length;
//                        var $current = index+1;
//                        var $percent = ($current/$total) * 100;
//                        $('#rootwizardCart').find('.bar').css({width:$percent+'%'});
                }
                ,onTabClick: function(tab, navigation, index) {
                    return false;
                }
                ,onNext: function(tab, navigation, index) {
//			if(index==2) {
//				// Make sure we entered the name
//				if(!$('#name').val()) {
//					alert('You must enter your name');
//					$('#name').focus();
//					return false;
//				}
//			}
//			// Set the name for the next tab
//			$('#tab3').html('Hello, ' + $('#name').val());
			
		}
        });
    };
    
    app.register.controller('CarroController', ['$scope', '$rootScope', '$routeParams', '$filter', '$http', '$location', 'dataService', carroController]);
    
});