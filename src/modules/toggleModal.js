const toggleModal = () => {
    const modalCallback = document.querySelector('.modal-callback'),
          modalOverlay = document.querySelector('.modal-overlay');

    document.addEventListener('click', (event) => {
        let target = event.target;
        if (target.classList.contains('callback-btn') || target.classList.contains('button-services') || target.classList.contains('absolute')) {
            modalCallback.style.display = 'block';
            modalOverlay.style.display = 'block';
        } else if (target.closest('.modal-close') || target.classList.contains('modal-overlay')) {
            modalCallback.style.display = 'none';
            modalOverlay.style.display = 'none';
        };


    });
};

export default toggleModal;