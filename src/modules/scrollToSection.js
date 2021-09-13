const scrollToSection = () => {
    const mobileMenu = document.querySelector('.mobile-menu');

    document.addEventListener('click', (event) => {
        let target = event.target;
        if (target.closest('ul')) {
            let targetUlList = target.closest('a');
            event.preventDefault();
            let href = targetUlList.getAttribute('href').slice(1);
            const scrollTarget = document.getElementById(href);
            const topOffset = mobileMenu.offsetHeight;
            const elementPosition = scrollTarget.getBoundingClientRect().top;
            const offsetPosition = elementPosition - topOffset;
            window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });

        }
    });
    
};

export default scrollToSection;