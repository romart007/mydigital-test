'use strict';

import 'bootstrap';
import '../css/style.scss';

$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    centerMode: true,
    dots: true,
    speed: 500
});


//dynacmic dots 
const imgBuilding = document.querySelector('.building').offsetWidth / 2;
const imgBuilding2 = document.querySelector('.building2').offsetWidth / 2;
const img1 = document.querySelector('.dots-1');

function setDots() {
    img1.style.right = `${imgBuilding}px`;
    img1.style.left = `${imgBuilding2}px`;
    const temp = imgBuilding + imgBuilding;

    img1.style.width = `calc(100% - ${temp}px)`;
}

window.addEventListener('load', setDots);
window.onresize = setDots;