const topSlider = () => {
    const itemSlide = document.querySelectorAll('.item'),
          table = document.querySelectorAll('.table'),
          sliderTop = document.querySelector('.top-slider');
    let itemActive = document.createElement('style');
    itemActive.cssText = `.active {
                        opacity: 1;
                        -webkit-transition: opacity .5s;
                        transition: opacity .5s;
                    }`;
    document.getElementsByTagName('head')[0].appendChild(itemActive);
    console.log(itemActive);

    let currentSlide = 0;
    let interval;
    
    const prevSlide = (item, table, index) => {
        item[index].style.background = `url(images/slide${index + 1}.jpg) 50% 50% no-repeat`;
        item[index].style.backgroundSize = 'cover';
        table[index].style.opacity = '0';
        table[index].style.visibility = 'hidden';
        // item[index].style.transition = 'opacity .5s';
        item[index].style.display = 'none';
        // elem[index].classList.remove(strClass);
    };

    const nextSlide = (item, table, index) => {
        item[index].style.background = `url(images/slide${index + 1}.jpg) 50% 50% no-repeat`;
        item[index].style.backgroundSize = 'cover';
        table[index].style.opacity = '1';
        table[index].style.visibility = 'visible';
        item[index].style.display = 'block';
        /* item[index].style.transition = 'opacity .5s';
        item[index].style.display = 'none'; */
    };

    const autoPlaySlide = () => {
        prevSlide(itemSlide, table, currentSlide);
        currentSlide++;
        if (currentSlide >= itemSlide.length) {
            currentSlide = 0;
        }
        nextSlide(itemSlide, table, currentSlide);
    };

    const startSlide = (time = 3000) => {
        interval = setInterval(autoPlaySlide, time);
    };

    startSlide();  

    console.log(sliderTop);
};

export default topSlider;