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
});

function setTop() {
    // document.querySelector('.img-floated').style.top = imgBottom + 'px';
    //dynacmic dots 
    // const imgBuilding = document.querySelector('.building img');
    // const imgBottom = imgBuilding.offsetTop + imgBuilding.offsetHeight;  

    const imgBuilding = document.querySelector('.building');
    var divOffset = offset(imgBuilding);
    var $el = $('.building');
    var bottom = $el.position().top + $el.outerHeight(true) / 1.2;

    // document.querySelector('.img-floated').style.marginTop = $el.position().top + 'px';
    document.querySelector('.img-floated').style.top = bottom + 'px';
}

function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollTop = (window.pageYOffset || document.documentElement.scrollTop);
    return { top: scrollTop }
}

// example use


window.addEventListener('load', setTop);
window.addEventListener('resize', setTop);
window.onresize = setTop;

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

function myFunction(x) {
    if (x.matches) { 
        $('.twitter-block').find('.twitter-timeline').contents().find('.timeline-Tweet-text').css('font-size', '16px');
        $('.twitter-block').find('.twitter-timeline').contents().find('.MediaCard-mediaContainer').css('max-height', '167px');
        console.log('test')
    } else  {
        $('.twitter-block').find('.twitter-timeline').contents().find('.timeline-Tweet-text').css('font-size', '21px');
        $('.twitter-block').find('.twitter-timeline').contents().find('.MediaCard-mediaContainer').css('max-height', '100%');
        console.log('testing')
    }
  }
  
  var x = window.matchMedia("(max-width: 767px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes