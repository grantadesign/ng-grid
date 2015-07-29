ngGridDirectives.directive('ngRightClick', function ($parse) {

    return function ($scope, $element, $attrs) {

        var eventHandler = $parse($attrs.ngRightClick);

        $element.on('contextmenu', function (event) {
            event.preventDefault();
            eventHandler($scope, { $event: event });

            if (!$scope.$root.$$phase) {
                $scope.$apply();
            }

        });

    };

});