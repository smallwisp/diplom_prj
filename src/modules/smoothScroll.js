const smoothScroll = () => {
    const scrollUp = document.querySelector('.up');
    const servicesSection = document.querySelector('.services-section');
    document.addEventListener('scroll', () => {
        let scrollTop = document.documentElement.scrollTop;
        const servicesSectionTop = servicesSection.getBoundingClientRect().top;
        if (scrollTop > servicesSectionTop) {
            scrollUp.style.display = 'block';
            scrollUp.addEventListener('click', (event) => {
                window.scrollBy({
                    top: -scrollTop,
                    behavior: 'smooth'
                });
            })
        } else {
            scrollUp.style.display = 'none';
        }
    })
    
};

export default smoothScroll;