// ===========================
// SCROLL REVEAL
// ===========================
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        if (elementTop < windowHeight - 150) {
            reveals[i].classList.add("active");
        }
    }
}
window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

// ===========================
// MENU MOBILE
// ===========================
var toggle = document.getElementById('menu-toggle');
var mobileMenu = document.getElementById('mobile-menu');
var menuIcon = document.getElementById('menu-icon');

toggle.addEventListener('click', function () {
    mobileMenu.classList.toggle('open');
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-xmark');
});

document.querySelectorAll('.mobile-link').forEach(function (link) {
    link.addEventListener('click', function () {
        mobileMenu.classList.remove('open');
        menuIcon.classList.add('fa-bars');
        menuIcon.classList.remove('fa-xmark');
    });
});

window.addEventListener('resize', function () {
    if (window.innerWidth >= 768) {
        mobileMenu.classList.remove('open');
        menuIcon.classList.add('fa-bars');
        menuIcon.classList.remove('fa-xmark');
    }
});

// ===========================
// PAUSA AUTOMÁTICA DE VÍDEOS
// ===========================
window.addEventListener('load', function () {
    document.addEventListener('play', function (e) {
        var videos = document.querySelectorAll('video');
        videos.forEach(function (video) {
            if (video !== e.target && !video.paused) {
                video.pause();
            }
        });
    }, true);
});

// ===========================
// FILTRO DO PORTFÓLIO
// ===========================
function filterGallery(category, btn) {
    // Atualiza botões
    document.querySelectorAll('.filtro-btn').forEach(function (b) {
        b.classList.remove('active');
    });
    btn.classList.add('active');

    // Filtra itens
    document.querySelectorAll('.portfolio-item').forEach(function (item) {
        var cat = item.getAttribute('data-category') || '';
        var mostrar = category === 'all' || cat === category || cat.split(' ').indexOf(category) !== -1;

        if (mostrar) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
            var video = item.querySelector('video');
            if (video && !video.paused) video.pause();
        }
    });
}

// Garante que os filtros funcionam após o DOM carregar
window.addEventListener('load', function () {
    document.querySelectorAll('.filtro-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var category = this.getAttribute('data-filter');
            filterGallery(category, this);
        });
    });
});
