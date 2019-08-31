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

        const popupClickAll = (event) => {
            let target = event.target;
            if (target.classList.contains('popup-close')) {
                event.preventDefault();
                popupCall.style.display = 'none';
                popupDiscount.style.display = 'none';
                popupCheck.style.display = 'none';
            } else {
                target = target.closest('.popup-content');
                if (!target) {
                    popupCall.style.display = 'none';
                    popupDiscount.style.display = 'none';
                    popupCheck.style.display = 'none';
                }
            }
        };

        const eachElem = (elem) => {
            elem.addEventListener('click', () => {
                popupDiscount.style.display = 'block';
            });
        };

        popupCall.addEventListener('click', popupClickAll);
        sentenceBtn.forEach(eachElem);
        popupDiscount.addEventListener('click', popupClickAll);
        checkBtn.forEach(eachElem);
        popupCheck.addEventListener('click', popupClickAll);

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