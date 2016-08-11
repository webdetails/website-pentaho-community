var pentahoLibraryApp = angular.module('pentahoLibraryApp', []);

pentahoLibraryApp.controller('libraryCtrl', function ($scope, $http) {

	$http.get('books.json')
		.then(function (res) {
			$scope.books = res.data;
			$scope.subjects = ['All'];

			$.each(res.data, function (index, value) {
				if ($.inArray(value.subject, $scope.subjects) === -1) {
					$scope.subjects.push(value.subject);
				}
			});

			$scope.selectedSubject = "All";

			$scope.selectSubject = function (subject) {
				$scope.selectedSubject = subject;
			}

			$scope.customSubjectsFilter = function (books) {
				if (books.subject === $scope.selectedSubject) {
					return true;
				} else if ($scope.selectedSubject === "All") {
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