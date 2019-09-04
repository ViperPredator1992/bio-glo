const popup = () => {

    const popups = (buttonsSelector, dialogSelector) => {

        const buttons = document.querySelectorAll(buttonsSelector),
            dialog = document.querySelector(dialogSelector);

        buttons.forEach(n => n.addEventListener('click', (event) => {
            event.preventDefault();
            dialog.style.display = 'block';
        }));

        dialog.addEventListener('click', ({ target }) => {
            if (target.classList.contains('popup-close')) {
                event.preventDefault();
                dialog.style.display = 'none';
            } else {
                target = target.closest('.popup-content');
                if (!target) {
                    dialog.style.display = 'none';
                }
            }
        });

    };

    popups('header .contacts a', '.popup-call');
    popups('.sentence-btn', '.popup-discount');
    popups('.constructor .panel-four .call-btn', '.popup-discount');
    popups('.check-btn', '.popup-check');
    popups('.director .director-btn', '.popup-consultation');
    
};

export default popup;