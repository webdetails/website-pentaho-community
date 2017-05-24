var userGroupsApp = angular.module('userGroupsApp', []);

userGroupsApp.controller('userGroupsCtrl', function ($scope, $http) {

	$http.get('user-groups.json')
		.then(function (res) {
			$scope.userGroups = res.data;
			$scope.countries = ['All countries'];

			$.each(res.data, function (index, value) {
				if ($.inArray(value.country, $scope.countries) === -1) {
					if (value.country != "") {
						$scope.countries.push(value.country);
					}
				}
			});

			$scope.selectedCountry = "All countries";

			$scope.selectCountry = function (country) {
				$scope.selectedCountry = country;
			}

			$scope.customCountriesFilter = function (userGroups) {
				if (userGroups.country === $scope.selectedCountry) {
					return true;
				} else if ($scope.selectedCountry === "All countries") {
					return true;
				} else {
					return false;
				}
			};
		});
});

angular.module('fallback', []).directive('fallbackSrc', function () {
	return {
		link: function postLink(scope, element, attrs) {
			element.bind('error', function () {
				angular.element(this).attr("src", attrs.fallbackSrc);
			});
		}
	}
});
