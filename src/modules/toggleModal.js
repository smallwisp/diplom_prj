const toggleModal = () => {
    const modalCallback = document.querySelector('.modal-callback'),
          modalOverlay = document.querySelector('.modal-overlay');

    document.addEventListener('click', (event) => {
        let target = event.target;
        if (target.classList.contains('callback-btn')) {
            modalCallback.style.display = 'block';
            modalOverlay.style.display = 'block';
        } else if (target.closest('.modal-close') || target.classList.contains('modal-overlay')) {
            modalCallback.style.display = 'none';
            modalOverlay.style.display = 'none';
        };


    });
    /* callbackBtn.forEach((item) => {
        item.addEventListener('click', () => {
            modalCallback.style.display = 'block';
            modalOverlay.style.display = 'block';
        })
    });

    modalCallback.addEventListener('click', event => {
            let target = event.target;

            if (target.classList.contains('modal-close')) {
                modalCallback.style.display = 'none';
                modalOverlay.style.display = 'none';
            } else {

            }

    });

    modalOverlay.addEventListener('click', (event) => {
        
            modalCallback.style.display = 'none';
            modalOverlay.style.display = 'none';
        // }
            
    }) */

};

export default toggleModal;