window.addEventListener('DOMContentLoaded', () => {

    'use strict';

    // popup
    const popupForms = () => {

        const popup = document.querySelector('.popup'), 
            contactsPopupBtn = document.querySelectorAll('header .contacts a');

        contactsPopupBtn.forEach((elem) => {
            elem.addEventListener('click', (event) => {
                event.preventDefault();
                popup.style.display = 'block';
            });
        });

        popup.addEventListener('click', (event) => {
            let target = event.target;
            if (target.classList.contains('popup-close')) {
                document.getElementById('name_1').setAttribute('disabled', true);
                document.getElementById('phone_1').setAttribute('disabled', true);
                popup.style.display = 'none';
                
            } else {
                target = target.closest('.popup-content');
                if (!target) {
                    popup.style.display = 'none';
                }
            }
        });

    };
 
    popupForms();

    // accordeon
    const accordeon = () => {

        

        
        
    };

    accordeon();

});