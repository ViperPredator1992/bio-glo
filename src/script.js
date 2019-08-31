window.addEventListener('DOMContentLoaded', () => {

    'use strict';

    // popup
    const popup = () => {

        const popupCall = document.querySelector('.popup-call'),
            popupDiscount = document.querySelector('.popup-discount'),
            popupCheck = document.querySelector('.popup-check'),
            contactsPopupBtn = document.querySelectorAll('header .contacts a'),
            sentenceBtn = document.querySelectorAll('.sentence-btn'),
            checkBtn = document.querySelectorAll('.check-btn');

        contactsPopupBtn.forEach((elem) => {
            elem.addEventListener('click', (event) => {
                event.preventDefault();
                popupCall.style.display = 'block';
            });
        });

        popupCall.addEventListener('click', (event) => {
            let target = event.target;
            if (target.classList.contains('popup-close')) {
                document.getElementById('name_1').setAttribute('disabled', true);
                document.getElementById('phone_1').setAttribute('disabled', true);
                popupCall.style.display = 'none';
            } else {
                target = target.closest('.popup-content');
                if (!target) {
                    popupCall.style.display = 'none';
                }
            }
        });

        sentenceBtn.forEach((elem) => {
            elem.addEventListener('click', () => {
                popupDiscount.style.display = 'block';
            });
        });

        popupDiscount.addEventListener('click', (event) => {
            let target = event.target;
            if (target.classList.contains('popup-close')) {
                document.getElementById('name_1').setAttribute('disabled', true);
                document.getElementById('phone_1').setAttribute('disabled', true);
                popupDiscount.style.display = 'none';
            } else {
                target = target.closest('.popup-content');
                if (!target) {
                    popupDiscount.style.display = 'none';
                }
            }
        });

        checkBtn.forEach((elem) => {
            elem.addEventListener('click', () => {
                popupCheck.style.display = 'block';
            });
        });

        popupCheck.addEventListener('click', (event) => {
            event.preventDefault();
            let target = event.target;
            if (target.classList.contains('popup-close')) {
                document.getElementById('name_1').setAttribute('disabled', true);
                document.getElementById('phone_1').setAttribute('disabled', true);
                popupCheck.style.display = 'none';
            } else {
                target = target.closest('.popup-content');
                if (!target) {
                    popupCheck.style.display = 'none';
                }
            }
        });

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

});