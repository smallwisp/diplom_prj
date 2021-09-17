

class SliderCarousel {
    constructor({main, wrap, position = 0}) {
        this.main = document.querySelector(main);
        this.wrap = document.querySelector(wrap);
        this.slides = document.querySelector(wrap).children;
        this.position = position;
    }

    init(){
        console.log(this);
        this.addClass();
        this.addStyles();
    }

    addClass() {
        this.main.classList.add('slider-carousel');
        this.wrap.classList.add('slider-carousel__wrap');
        for( const item of this.slides) {
            item.classList.add('slider-carousel__item');
        }
    }
// 39.45 сво-ва flex испортили верстку
    addStyles() {
        const style = document.createElement('style');
        style.id = 'sliderCarousel-style';
        style.textContent = `
            .slider-carousel {
                overflow: hidden !important;
            }
            .slider-carousel__wrap {
                display: flex !important;
                transition: transform 0.5s !important;
                will-change: transform !important;
            }
            slider-carousel__item {
                flex: 0 0 25% !important;
                margin: auto 0 !important;
            }
            `;
        document.head.appendChild(style);
    }
}

export default SliderCarousel;