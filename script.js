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
    var videos = document.querySelectorAll('video');
    videos.forEach(function (video) {
        video.addEventListener('loadedmetadata', function () {
            video.currentTime = 0.1;
        });
        video.addEventListener('play', function () {
            videos.forEach(function (outro) {
                if (outro !== video && !outro.paused) {
                    outro.pause();
                }
            });
        });
    });
});

// ===========================
// FILTRO DO PORTFÓLIO
// ===========================
function filterGallery(category, btnClicado) {
    document.querySelectorAll('.filtro-btn').forEach(function(btn) {
        btn.classList.remove('active');
    });
    btnClicado.classList.add('active');

    document.querySelectorAll('.portfolio-item').forEach(function(item) {
        var itemCategory = item.getAttribute('data-category');
        if (category === 'all' || (itemCategory && itemCategory.toLowerCase().includes(category.toLowerCase()))) {
            item.classList.remove('hidden');
            item.style.display = '';
        } else {
            item.classList.add('hidden');
            item.style.display = 'none';
            var video = item.querySelector('video');
            if (video) video.pause();
        }
    });
}
