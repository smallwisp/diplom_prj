

class SliderCarousel {
    constructor({
        main,
        wrap, 
        prev,
        next,
        infinity = false,
        position = 0,
        slidesToShow = 3,
        responsive = []
    }) {
        if (!(main && wrap)) {
            console.warn('slider-carousel: Нужно задать свойства "main" и "wrap"');
        }
        this.main = document.querySelector(main);
        this.wrap = document.querySelector(wrap);
        this.slides = document.querySelector(wrap).children;
        this.prev = document.querySelector(prev);
        this.next = document.querySelector(next);
        this.slidesToShow = slidesToShow;
        this.options = {
            position,
            infinity,
            widthSlide: Math.floor(100 / this.slidesToShow),
            maxPosition: this.slides.length - this.slidesToShow,
        };
        this.responsive = responsive;
    }

    init(){
        // console.log(this);
        this.addClass();
        this.addStyles();
        if (this.prev && this.next) {
            this.controlSlider();
        } else {
            // this.addArrow();
            this.controlSlider();
        }
        if (this.responsive) {
            this.responseInit();
            
        }
    }

    addClass() {
        this.main.classList.add('slider-carousel');
        this.wrap.classList.add('slider-carousel__wrap');
        for( let item of this.slides) {
            item.classList.add('slider-carousel__item');
        }
    }
// 39.45 сво-ва flex испортили верстку
    addStyles() {
        let style = document.getElementById('sliderCarousel-style');
        if (!style) {
            style = document.createElement('style');
            style.id = 'sliderCarousel-style';
        }
        style.textContent = `
            .slider-carousel {
                overflow: hidden !important;
            }
            .slider-carousel__wrap {
                width: 1180px;
                transition: transform 0.5s !important;
                will-change: transform !important;
            }
            slider-carousel__item {
                
                display: flex !important;
                flex: 0 0 ${this.options.widthSlide}!important;
                margin: auto 0 !important;
            }
            `;
        document.head.appendChild(style);
    }

    /* .slider-carousel__wrap {
        display: flex !important;
        transition: transform 0.5s !important;
        will-change: transform !important;
    }
    slider-carousel__item {
        display: flex !important;
        align-items: center;
        justify-content: center;
        flex: 0 0 ${this.options.widthSlide}!important;
        margin: auto 0 !important;
    } */
    controlSlider() {
        this.prev.addEventListener('click', this.prevSlider.bind(this));
        this.next.addEventListener('click', this.nextSlider.bind(this));
    }

    prevSlider() {
        if (this.options.infinity || (this.options.position > 0)) {
            --this.options.position;
            console.log(this.options.position);
            if (this.options.position < 0) {
                this.options.position = this.options.maxPosition;
            }
            this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
        }
    }
    
    nextSlider() {
        if (this.options.infinity || (this.options.position < this.options.maxPosition)) {
            ++this.options.position;
            console.log(this.slidesToShow);
            if (this.options.position > this.options.maxPosition) {
                this.options.position = 0;
            }
            this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
        }

    }

    addArrow() {
        this.prev = document.createElement('button');
        this.next = document.createElement('button');

        this.prev.className = 'slider-carousel__prev';
        this.next.className = 'slider-carousel__next';   
        
        this.main.appendChild(this.prev);
        this.main.appendChild(this.next);

        const style = document.createElement('style');
        style.id = 'sliderCarousel-style';
        style.textContent = `
            .slider-carousel__prev,
            .slider-carousel__next{
                margin: 0 10px;
                border: 20px solid transparent;
                background: transparent;
                cursor: pointer
            }
            .slider-carousel__next {
                border-left-color: #19bbff
            }


            `;

            document.head.appendChild(style);
    }

    responseInit() {
        const slidesToShowDefault = this.slidesToShow;
        const allResponse = this.responsive.map(item => item.breakpoint);
        const maxResponse = Math.max( ...allResponse);
        const checkResponse = () => {
            const widthWindow = document.documentElement.clientWidth;
            if (widthWindow < maxResponse) {
                for (let i = 0; i < allResponse.length; i++) {
                    if (widthWindow < allResponse[i]) {
                        this.slidesToShow = this.responsive[i].slidesToShow;
                        this.options.widthSlide = Math.floor(100 / this.slidesToShow);
                        this.addStyles();
                    } 
                } 
            } else {
                this.slidesToShow = slidesToShowDefault;
                this.options.widthSlide = Math.floor(100 / this.slidesToShow);
                this.addStyles();
            };
        };

        checkResponse();

        window.addEventListener('resize', checkResponse);
    }
}

export default SliderCarousel;