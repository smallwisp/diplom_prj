'use strict';

import toggleModal from './modules/toggleModal';
import scrollToSection from './modules/scrollToSection';
import topSlider from './modules/topSlider';
import smoothScroll from './modules/smoothScroll';
import sendForm from './modules/sendForm';
import checkInputsAll from './modules/checkInputsAll';
import accordeon from './modules/accordeon';
import SliderCarousel from './modules/sliderCarousel';

// scrolling to section
scrollToSection();

// calling a modal window
toggleModal();

// top slider
topSlider();

// scroll to top
smoothScroll();

// checking form inputs
checkInputsAll();

// send form
sendForm();

// faq accordeon
accordeon();

// slider carousel
const carousel = new SliderCarousel({
    main: '.carousel',
    wrap: '.services-carousel',
    prev: '.arrow-left',
    next: '.arrow-right',
    slidesToShow: 3,
    infinity: true,
    responsive: [{
        breakpoint: 1024,
        slidesToShow: 3
    }, 
    {
        breakpoint: 768,
        slidesToShow: 2
    },
    {
        breakpoint: 576,
        slidesToShow: 1
    }
    ]
});

carousel.init();




