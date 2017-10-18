document.addEventListener("DOMContentLoaded", function () {

    // Variables //
    var links = document.querySelectorAll('a');

    console.log(links);

    // Media query on mobile //
    const mq = window.matchMedia( "(min-width: 768px)" );

    if (mq.matches) {
    // window width is at least 768px
        // Parralax content on background //
        let wrapper = document.querySelector('.wrapper'),
            layerOne = document.querySelector('.background_container');

        wrapper.addEventListener('mousemove', function (e) {
            let pageX = e.clientX - 2000,
                pageY = e.clientY - 2000;
            layerOne.style.webkitTransform = 'translateX(' + pageX / 800 + '%) translateY(' + pageY / 200 + '%)';
            layerOne.style.transform = 'translateX(' + pageX / 800 + '%) translateY(' + pageY / 200 + '%)';
        });
    } else {
    // window width is less than 768px
    // Parralax content on background //
            let wrapper = document.querySelector('.wrapper'),
            layerOne = document.querySelector('.background_container');

        wrapper.addEventListener('mousemove', function (e) {
            let pageX = e.clientX - 500,
                pageY = e.clientY - 500;
            layerOne.style.webkitTransform = 'translateX(' + pageX / 800 + '%) translateY(' + pageY / 200 + '%)';
            layerOne.style.transform = 'translateX(' + pageX / 800 + '%) translateY(' + pageY / 200 + '%)';
        });
    }

    // Typing animation //
    let p = document.getElementById('text');
    let n = 0;
    let str = p.innerHTML;
    p.innerHTML = '';
    setInterval(function () {
        n = n + 1;
        p.innerHTML = str.slice(0, n)
    }, 150);

    

    

});