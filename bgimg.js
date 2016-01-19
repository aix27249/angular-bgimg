/**
 * An AngularJS directive that allows to produce responsive images
 * with specified aspect ratio, like 16:9 or 1:1
 *
 * See README.md for details and usage examples
 */

;(function() {
	'use strict';

	angular
		.module('angular-bgimg', [])
		.directive('bgimg', bgimg);

	function bgimg() {
		return {
			restrict : 'AE',
			replace: true,
			scope: {
				src: '=',
				ratio: '=',
				cover: '=',
				contain: '='
			},
			template: '<div class="bgimg-box {{ratioClass}}"><div class="bgimg {{fitClass}}" style="background-image: url(\'{{src}}\');"></div></div>',
			link: function(scope, element, attrs) {
				scope.ratioClass = '';
				if (attrs.ratio) scope.ratioClass = 'ratio' + scope.ratio;

				scope.fitClass = 'bgimg-cover';
				if (attrs.contain) scope.fitClass = 'bgimg-contain';
			}
		}
	}
})();
