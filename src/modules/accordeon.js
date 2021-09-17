const accordeon = () => {
    const accordeonBlock = document.querySelector('.accordeon'),
          elems = accordeonBlock.querySelectorAll('.element'),
          elemsContent = accordeonBlock.querySelectorAll('.element-content');

    elems.forEach(item => {
        item.classList.remove('active');
    });
    elemsContent.forEach(item => {
        item.style.display = 'none';
    });

    const setActive = (index) => {
        for (let i = 0; i < elems.length; i++) {
            if (i === index) {
                elems[i].classList.add('active');
                elemsContent[i].style.display = 'block';
            } else {
                elems[i].classList.remove('active');
                elemsContent[i].style.display = 'none';
            }
        }
    };

    accordeonBlock.addEventListener('click', (event) => {
        let target = event.target;
        target = target.closest('.title');

        if (target) {
            elems.forEach((item, index) => {
                if (item === target.parentNode) {
                    setActive(index);
                }
            });
        }
    })
    /* const removeActive = (elems, selector) => {
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
    }); */

};

export default accordeon;