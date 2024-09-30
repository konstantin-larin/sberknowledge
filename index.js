let openMenuBtn = document.getElementById('open-menu')
let menuList = document.getElementById('menu-list');
openMenuBtn.onclick = () => {
    if (menuList.classList.contains('menu__list_opened')) {
        menuList.classList.remove('menu__list_opened');
        openMenuBtn.querySelector('.text').textContent = 'Меню';
        openMenuBtn.querySelector('.sign').textContent = '—';
        openMenuBtn.classList.remove('menu__button_opened');
    } else {
        menuList.classList.add('menu__list_opened');
        openMenuBtn.querySelector('.text').textContent = 'Свернуть';
        openMenuBtn.querySelector('.sign').textContent = '✕';
        openMenuBtn.classList.add('menu__button_opened');
    }

}


let popup = document.getElementById('popup-cover');
let img;
let removeTimeout;
let opacityTimeout;
popup.onmouseover = () => {
    clearTimeout(opacityTimeout);
    clearTimeout(removeTimeout);
    setTimeout(() => {
        img.style.opacity = 1;
    }, 0);
    if (!img) {
        img = document.createElement('img');
        img.src = 'img/book-covers/crux.png';
        img.width = '228';
        img.height = '353';
        popup.append(img);
    }

}

popup.onmouseout = () => {
    opacityTimeout = setTimeout(() => {
        img.style.opacity = 0;
    }, 100);
    removeTimeout = setTimeout(() => {
        img.remove();
        img = null;
    }, 1000);
}

document.querySelectorAll('.video__player-button').forEach(btn => {
    btn.onclick = function () {
        let frameContainer = btn.closest('.video__player');
        let videoFrame = document.createElement('iframe');
        videoFrame.src = btn.dataset.video;
        videoFrame.frameborder = '0';
        videoFrame.allow = "fullscreen; autoplay";
        frameContainer.append(videoFrame);
    }
});


let swiper;
function activeSwiper() {
    if (window.innerWidth <= 768) {
        if (!swiper || swiper.destroyed) {
            swiper = new Swiper('.books', {
                // Optional parameters
                direction: 'horizontal',
                spaceBetween: 20,
                loop: false,
            });
        }
    }
    else {
        console.log(swiper);
        if (swiper) swiper.destroy();
    }
}
window.addEventListener('resize', activeSwiper);
activeSwiper();


let books = document.getElementById('books');

books.onclick = function(e){
    if(e.target.classList.contains('books__book-cover-bg')){
        
    }
}