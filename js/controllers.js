angular.module('editorApp', [
	'contenteditable',
	'ui.sortable'
]).controller('ContenteditableController', function($scope) {
	$scope.contents = [
		'There can be more &gt;1 element',
		"<i>Hello</i> world...<br><br>This is some content<br><br>Isn't it awesome?<br><br>I like it...",
		'<b>This one is bold</b>',
		'<i>This one is italic</i>'
	];
	$scope.addContent = function(index) {
		$scope.contents.splice(index + 1, 0, 'Enter text');
	}
	$scope.removeContent = function(index) {
		if ($scope.contents.length > 1)
			$scope.contents.splice(index, 1);
	}
	$scope.sortableOptions = {
		cancel: '[contenteditable], .btn'
	};
});
