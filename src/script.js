window.addEventListener('DOMContentLoaded', () => {

    'use strict';

    // popup
    const popup = () => {

        const popups = (buttonsSelector, dialogSelector) => {

            const buttons = document.querySelectorAll(buttonsSelector);
            const dialog = document.querySelector(dialogSelector);

            buttons.forEach(n => n.addEventListener('click', (event) => {
                event.preventDefault();
                dialog.style.display = 'block';
            }));

            dialog.addEventListener('click', ({
                target
            }) => {
                if (target.classList.contains('popup-close')) {
                    dialog.style.display = 'none';
                } else {
                    target = target.closest('.popup-content');
                    if (!target) {
                        dialog.style.display = 'none';
                    }
                }
            });

            popups('header .contacts a', '.popup-call');
            popups('.sentence-btn', '.popup-discount');
            popups('.check-btn', '.popup-check');

        };

    };
 
    popup();

    // accordeon
    const accordeonTwo = () => {
        
        document.addEventListener('click', (event) => {
            const heading = event.target.closest('.panel-heading');
            if (heading) {
                event.preventDefault();
                const collapse = heading.nextElementSibling;
                heading.closest('.panel-group').querySelectorAll('.panel-collapse').forEach(now => {
                    now.classList.toggle('in', now === collapse && !now.classList.contains('in'));
                });
            }
        });
        
    };

    accordeonTwo();

    // More
    const moreCart = () => {

        const more = document.querySelector('.add-sentence-btn'),
            hide = document.querySelectorAll('hidden');

        hide.forEach((elem) => {
            elem.addEventListener('click', () => {
                elem.previousElementSibling.classList.remove('hidden');
            });
        });

    };

    moreCart();

});