const topSlider = () => {
    const itemSlide = document.querySelectorAll('.item'),
          table = document.querySelectorAll('.table');

    let currentSlide = 0;
    let interval;
    
    const prevSlide = (item, table, index) => {
        item[index].style.background = `url(images/slide${index + 1}.jpg) 50% 50% no-repeat`;
        item[index].style.backgroundSize = 'cover';
        table[index].style.opacity = '0';
        table[index].style.visibility = 'hidden';
        item[index].style.display = 'none';
    };

    const nextSlide = (item, table, index) => {
        item[index].style.background = `url(images/slide${index + 1}.jpg) 50% 50% no-repeat`;
        item[index].style.backgroundSize = 'cover';
        table[index].style.opacity = '1';
        table[index].style.visibility = 'visible';
        item[index].style.display = 'block';
        
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
};

export default topSlider;