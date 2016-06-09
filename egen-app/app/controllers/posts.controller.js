(function () {
    'use strict';

    angular
        .module('plunker')
        .controller('PostsCtrl', PostsController);

    PostsController.$inject = ['dataService'];

    function PostsController(dataService) {
        var postsVm = this;

        dataService.getPosts()
            .then(function (posts) {
                postsVm.posts = posts;
            },
            function(err){
                console.log(err);
            });
    }

})();