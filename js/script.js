document.addEventListener("DOMContentLoaded", function() {

    var wrapper = document.querySelector('.wrapper'),
        layerOne = document.querySelector('.background_container');

    wrapper.addEventListener('mousemove',function(e){
        var pageX = e.clientX - 1200,
            pageY = e.clientY - 1200;
        layerOne.style.webkitTransform = 'translateX(' + pageX/400 + '%) translateY(' + pageY/200 + '%)';
        layerOne.style.transform = 'translateX(' + pageX/400 + '%) translateY(' + pageY/200 + '%)';

    });

});