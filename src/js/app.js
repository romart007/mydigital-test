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