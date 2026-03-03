// ===== NAV =====
var open_nav = document.getElementById('open-nav');
var nav_list = document.getElementById('nav-list');
var nav_open = false;

open_nav.addEventListener('click', function () {
    if (nav_open) {
        closeNavMenu();
    } else {
        openNavMenu();
    }
});

function openNavMenu() {
    nav_open = true;
    nav_list.classList.add('active');
    open_nav.innerHTML = '<i class="bi bi-x"></i>';
    document.body.dataset.scrollY = window.scrollY;
    document.body.style.top = '-' + window.scrollY + 'px';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    document.body.style.overflow = 'hidden';
}

function closeNavMenu() {
    nav_open = false;
    nav_list.classList.remove('active');
    open_nav.innerHTML = '<i class="bi bi-list"></i>';
    var scrollY = parseInt(document.body.dataset.scrollY || '0');
    document.body.style.position = '';
    document.body.style.width = '';
    document.body.style.overflow = '';
    document.body.style.top = '';
    window.scrollTo(0, scrollY);
}

window.onresize = function () {
    if (window.innerWidth > 992) {
        nav_open = false;
        nav_list.classList.remove('active');
        nav_list.style.display = '';
        open_nav.innerHTML = '<i class="bi bi-list"></i>';
        document.body.style.position = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        document.body.style.top = '';
    }
};

function checkNav() {
    if (window.innerWidth <= 992 && nav_open) {
        closeNavMenu();
    }
}

// Close nav when a link is clicked
document.addEventListener('DOMContentLoaded', function () {
    nav_list.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            if (window.innerWidth <= 992 && nav_open) {
                closeNavMenu();
            }
        });
    });
});

// ===== SCROLL =====
function handleScroll() {
    const topNav = document.getElementById('top-nav');
    if (window.scrollY > 50) {
        topNav.classList.add('scrolled');
    } else {
        topNav.classList.remove('scrolled');
    }
}
window.addEventListener('scroll', handleScroll);
document.addEventListener('DOMContentLoaded', handleScroll);

// ===== DARK MODE =====
(function () {
    const root = document.documentElement;
    const saved = localStorage.getItem('megz-theme') || 'light';
    root.setAttribute('data-theme', saved);
    updateToggleIcon(saved);

    document.getElementById('theme-toggle').addEventListener('click', function () {
        const current = root.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', next);
        localStorage.setItem('megz-theme', next);
        updateToggleIcon(next);
    });

    function updateToggleIcon(theme) {
        const btn = document.getElementById('theme-toggle');
        if (!btn) return;
        if (theme === 'dark') {
            btn.innerHTML = '<i class="bi bi-sun-fill"></i> Light';
        } else {
            btn.innerHTML = '<i class="bi bi-moon-fill"></i> Dark';
        }
    }
})();

// ===== IMAGE MODAL =====
(function () {
    const modal = document.getElementById('img-modal');
    const modalImg = document.getElementById('img-modal-img');
    const modalCaption = document.getElementById('img-modal-caption');
    const modalClose = document.getElementById('img-modal-close');

    function openModal(src, alt) {
        modalImg.src = src;
        modalCaption.textContent = alt || '';
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('open');
        document.body.style.overflow = '';
        setTimeout(() => { modalImg.src = ''; }, 300);
    }

    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', function (e) {
        if (e.target === modal) closeModal();
    });
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeModal();
    });

    document.addEventListener('DOMContentLoaded', function () {
        setTimeout(function () {
            document.querySelectorAll('img[data-modal]').forEach(function (img) {
                img.style.cursor = 'zoom-in';
                img.addEventListener('click', function () {
                    openModal(this.src, this.alt);
                });
            });
        }, 400);
    });

    window.openImgModal = openModal;
})();