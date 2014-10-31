/*
 * @fileOverview
 * @description
 * Angular JCrop wrapper for easy usage of jCrop plugin
 */

(function(angular) {

    var module = angular.module('angular-crop', []);

    module.controller('angularCropCtrl', ['$scope', '$element',
        function($scope, $element) {

            var _instance;

            // initialises jCrop instance
            function init() {
                $element.Jcrop({
                    onSelect: $scope.onSelect(),
                    onChange: $scope.onChange(),
                    onRelease: $scope.onRelease(),
                    bgColor: $scope.bgColor,
                    bgOpacity: $scope.bgOpacity,
                    setSelect: $scope.setSelect,
                    aspectRatio: $scope.aspectRatio,
                    boxWidth: $scope.boxWidth,
                    boxHeight: $scope.boxHeight,
                    keySupport: $scope.keySupport,
                    trueSize: [$element[0].naturalWidth, $element[0].naturalHeight],
                    trackDocument: true
                }, function() {
                    _instance = this;
                });
            }

            // call init when image has loaded
            $element.on('load', function() {
                if (_instance) {
                    _instance.destroy();
                }
                init();
            });
        }
    ]);

    module.directive('angularCrop', function() {
        return {
            restrict: 'AE',
            require: 'ngSrc',
            scope: {
                angularCrop: '=',
                bgColor: '=',
                bgOpacity: '=',
                setSelect: '=',
                aspectRatio: '=',
                boxWidth: '=',
                boxHeight: '=',
                keySupport: '=',
                onChange: '&',
                onSelect: '&',
                onRelease: '&',
            },
            controller: 'angularCropCtrl'
        };
    });

})(angular);
