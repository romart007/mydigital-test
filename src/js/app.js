'use strict';

import 'bootstrap';
import '../css/style.scss';

$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    centerMode: true,
    dots: true,
    speed: 500,
    responsive: [{
        breakpoint: 767,
        settings: {
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: false
        },
    }],
});

MediumWidget.Init({
    renderTo: '#medium-widget',
    params: {
        "resource": "https://medium.com/@addirktive",
        "postsPerLine": 1,
        "limit": 2,
        "picture": "big",
        "fields": ["description", "author", "claps", "likes", "publishAt"],
        "ratio": "landscape"
    }
})


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

$('.twitter-block').delegate('#twitter-widget-0', 'DOMSubtreeModified propertychange', function() {
    //function call to override the base twitter styles
    customizeTweetMedia();
});

var customizeTweetMedia = function() {

    //overrides font styles and removes the profile picture and media from twitter feed
    $('.twitter-block').find('.twitter-timeline').contents().find('.timeline-Header').css('display', 'none');
    // $('.twitter-block').find('.twitter-timeline').contents().find('img.Avatar').css('display', 'none');
    // $('.twitter-block').find('.twitter-timeline').contents().find('span.TweetAuthor-avatar.Identity-avatar').remove();
    $('.twitter-block').find('.twitter-timeline').contents().find('span.TweetAuthor-screenName').css('font-size', '16px');
    $('.twitter-block').find('.twitter-timeline').contents().find('span.TweetAuthor-screenName').css('font-family', 'Raleway');

    $('.twitter-block').find('.twitter-timeline').contents().find('.timeline-Widget').css('background-color', 'transparent');

    $('.twitter-block').find('.twitter-timeline').contents().find('.TweetAuthor-name').css({
        "font-size": "16px",
        "line-height": "1.8",
        "letter-spacing": ".05em",
        "color": "#73718a",
        "font-family": "Poppins",
        "font-weight": "400"
    });

    $('.twitter-block').find('.twitter-timeline').contents().find('.TweetAuthor-screenName').css({
        "font-size": "16px",
        "line-height": "1.8",
        "letter-spacing": ".05em",
        "color": "#73718a",
        "font-family": "Poppins",
        "font-weight": "400"
    });

    $('.twitter-block').find('.twitter-timeline').contents().find('.timeline-Tweet').css({
        "display": "flex",
        "flex-direction": "column-reverse",
        "padding": "0"
    });

    $('.twitter-block').find('.twitter-timeline').contents().find('.timeline-TweetList-tweet').css('margin-top', '52');
    $('.twitter-block').find('.twitter-timeline').contents().find('.MediaCard-mediaContainer').css('border-radius', '0');
    $('.twitter-block').find('.twitter-timeline').contents().find('.timeline-Tweet-text').css('color', 'white');
    $('.twitter-block').find('.twitter-timeline').contents().find('.timeline-Tweet-brand').css('display', 'none');
    $('.twitter-block').find('.twitter-timeline').contents().find('.timeline-Footer').css('display', 'none');
    $('.twitter-block').find('.twitter-timeline').contents().find('.timeline-Tweet-actions').css('display', 'none');
    $('.twitter-block').find('.twitter-timeline').contents().find('.dt-updated').css('display', 'none');
    $('.twitter-block').find('.twitter-timeline').contents().find('.PrettyLink').css('color', '#32a1f6');

    $('.twitter-block').find('.twitter-timeline').contents().find('.timeline-Tweet-media').css({
        "margin-left": "0",
        "margin-bottom": "26"
    });
    $('.twitter-block').find('.twitter-timeline').contents().find('.timeline-Tweet-text').css('margin-left', '0');

    $('.twitter-block').find('.twitter-timeline').contents().find('.NaturalImage-image').css({
        "max-height": "330px;",
        "display": "flex;",
        "flex-direction": "column-reverse",
        "width": "auto",
    });

    $('.twitter-block').find('.twitter-timeline').contents().find('.MediaCard-media').css('max-height', '330px');

    $('.twitter-block').find('.twitter-timeline').contents().find('.timeline-Body').css('border', '0 none');

    //also call the function on dynamic updates in addition to page load
    $('.twitter-block').find('.twitter-timeline').contents().find('.timeline-TweetList').bind('DOMSubtreeModified propertychange', function() {
        customizeTweetMedia(this);
    });
}