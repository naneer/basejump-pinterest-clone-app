'use strict';

angular.module('workspaceApp')
  .directive('rePint', [ '$window', '$modal', 'Auth', '$state', 'Imgwr', function ($window, $modal, Auth, $state, Imgwr) {
    return {
      templateUrl: 'components/re-pint/re-pint.html',
      restrict: 'E',
      controller: angular.noop,
      controllerAs: 'pint',
      bindToController: true,
      replace: true,
      scope: {
        items: '='
      },
      link: function (scope, element, attrs, pint) {
        var grid = element[0];
        var iso = new Isotope( grid, {
          itemSelector: '.grid-item',
          layoutMode: 'masonry',
          masonry: {
            columnWidth: '.grid-sizer',
            percentPosition: true
          },
          getSortData: {
            created_at: function(itemElem){
              return $( itemElem ).find('time').attr('data-time');
            }
          },
          sortBy: 'created_at',
          sortAscending: false
        });
        scope.$watchCollection('pint.items', function(n, o) {
          if(n === undefined) { return; }
          var imgLd = imagesLoaded(grid.getElementsByClassName('hidden'));
          imgLd.on('progress', function(instance, image){
            if(!image.isLoaded){
              image.img.src = "/assets/images/page-not-found.png";
            }
            var item = $(image.img).parents('.grid-item');
            item.removeClass('hidden');
            iso.insert(item);
          });
        });
        pint.load = function(){
          console.log("load");
          var query = Imgwr.query({ offset: pint.items.length }).$promise;
          query.then(function(result){
            for(var i = 0; i < result.length; i++){
              pint.items.push(result[i]);
            }
          });
        };

        angular.element($window).bind("scroll", function() {
            var windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
            var body = document.body, html = document.documentElement;
            var docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
            var windowBottom = windowHeight + window.pageYOffset;

            if (windowBottom >= docHeight) {
                pint.load();
            }
        });
          scope.$on('$destroy', function() {
            console.log("destroy");
            angular.element($window).unbind();
          });

    
      }
    };
  }]);