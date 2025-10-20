document.addEventListener('DOMContentLoaded', function () {

    // Dentro do seu app.js
const sidebar = document.querySelector('.sidebar');
const openMenuBtn = document.querySelector('.open-menu-btn');
const closeBtn = document.querySelector('.close-btn');

if (openMenuBtn && closeBtn && sidebar) {
    function openSidebar() {
        sidebar.classList.add('is-active');
    }
    function closeSidebar() {
        sidebar.classList.remove('is-active');
    }
    openMenuBtn.addEventListener('click', openSidebar);
    closeBtn.addEventListener('click', closeSidebar);
}


    // --- CÓDIGO DO CARROSSEL (SWIPER) ---
    const swiperContainer = document.querySelector('.swiper');

    // Verifica se existe um carrossel na página atual
    if (swiperContainer) {
        const swiper = new Swiper('.swiper', {
            // Parâmetros de configuração do seu carrossel
            direction: 'horizontal',
            loop: true,

            // Setas de navegação
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            // Autoplay (passar fotos sozinho)
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
        });
    }

});
