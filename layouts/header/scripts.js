var open_nav = document.getElementById('open-nav');
var close_nav = document.getElementById('close-nav');
var nav_list = document.getElementById('nav-list');
open_nav.addEventListener('click', function (e) {
    nav_list.style.display = 'block';
});

close_nav.addEventListener('click', function (e) {
    nav_list.style.display = 'none';
});


window.onresize = function (e) {
    if (window.innerWidth > 992) {
        nav_list.style.display = 'block';
    }
    else {
        nav_list.style.display = 'none';
    }
}


function checkNav() {
    if (window.innerWidth > 992) {
        nav_list.style.display = 'block';
    }
    else {
        nav_list.style.display = 'none';
    }
}




// Function to handle the scroll event
function handleScroll() {
    const topNav = document.getElementById('top-nav');
    if (window.scrollY > 50) { // Adjust the value as needed
        topNav.classList.add('scrolled');
    } else {
        topNav.classList.remove('scrolled');
    }
}

// Add the scroll event listener
window.addEventListener('scroll', handleScroll);

// Call the function on page load to handle the initial scroll position
document.addEventListener('DOMContentLoaded', handleScroll);