const accordeon = () => {
    const elemsContent = document.querySelectorAll('.element');

    const removeActive = (elems, selector) => {
        elems.forEach(item => {
            item.classList.remove(selector);
            item.lastChild.previousSibling.style.display = 'none';
        });
    };
    
    removeActive(elemsContent, 'active');
    
    elemsContent.forEach((item) => {
        item.addEventListener('click', (event) => {
            let target = event.target;
            removeActive(elemsContent, 'active');
            
            target.parentNode.classList.toggle('active');
            if (target.parentNode.classList.contains('active')) {
                target.nextSibling.nextSibling.style.display = 'block';
            } else {
                target.nextSibling.nextSibling.style.display = 'none';
            }
        })
    });
};

export default accordeon;