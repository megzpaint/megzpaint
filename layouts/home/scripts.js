document.addEventListener('DOMContentLoaded', function () {

    document.body.removeAttribute('style');

    var images = document.getElementsByClassName('home-img-landing');
    var dots = document.querySelectorAll('.img-dot span');
    var timer = 200;
    var slideIndex = -1;
    auto_carousel();

    function set_carousel() {
        for (var i = 0; i < images.length; i++) {
            dots[i].className = 'img-dot span';
            images[i].style.display = 'none';
        }
        if (images.length <= slideIndex) {
            slideIndex = 0;
        }
        if (0 > slideIndex) {
            slideIndex = images.length - 1;
        }
        images[slideIndex].style.display = 'block';
        dots[slideIndex].className = 'img-dot-active';
        timer = 0;
    }
    function auto_carousel() {
        if (timer == 200) {
            slideIndex++;
            if (images.length <= slideIndex) {
                slideIndex = 0;
            }
            for (var i = 0; i < images.length; i++) {
                dots[i].className = 'img-dot span';
                images[i].style.display = 'none';
            }
            images[slideIndex].style.display = 'block';
            dots[slideIndex].className = 'img-dot-active';
            timer = 0;
        }
        else {
            timer++;
        }
        setTimeout(auto_carousel, 10);
    }
    for (var i = 0; i < dots.length; i++) {
        dots[i].addEventListener('click', function (e) {
            slideIndex = this.getAttribute('data-id');
            set_carousel();
        });
    }

    var start = null;
    for (var i = 0; i < images.length; i++) {
        images[i].addEventListener("touchstart", function (e) {
            if (e.touches.length === 1) {
                //just one finger touched
                start = e.touches.item(0).clientX;
            } else {
                //a second finger hit the screen, abort the touch
                start = null;

            }
        });

        images[i].addEventListener("touchend", function (event) {
            var offset = 100;//at least 100px are a swipe
            if (start) {
                //the only finger that hit the screen left it
                var end = event.changedTouches.item(0).clientX;
                if (end > start + offset) {
                    slideIndex++;
                    set_carousel();
                }
                if (end < start - offset) {
                    slideIndex--;
                    set_carousel();
                }
            }
        });

    }


});