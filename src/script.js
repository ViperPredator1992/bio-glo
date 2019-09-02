window.addEventListener('DOMContentLoaded', () => {

    'use strict';

    // popup
    const popup = () => {

        const popups = (buttonsSelector, dialogSelector) => {

            const buttons = document.querySelectorAll(buttonsSelector),
                dialog = document.querySelector(dialogSelector);

            buttons.forEach(n => n.addEventListener('click', (event) => {
                event.preventDefault();
                dialog.style.display = 'block';
            }));

            dialog.addEventListener('click', ({
                target
            }) => {
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
        popups('.call-btn', '.popup-discount');
        popups('.check-btn', '.popup-check');
        popups('.director .director-btn', '.popup-consultation');

    };
 
    popup();

    // accordeon
    const accordeon = () => {
        
        document.addEventListener('click', (event) => {
            const target = event.target,
                heading = target.closest('.panel-heading'),
                nextStep = target.closest('.construct-btn');

            const collapse = heading ? heading.nextElementSibling : 
                nextStep ? target.closest('.panel').nextElementSibling.querySelector('.panel-collapse') : null;

            if (collapse) {
                event.preventDefault();
                target.closest('.panel-group').querySelectorAll('.panel-collapse').forEach(n => {
                    n.classList.toggle('in', n === collapse && !n.classList.contains('in'));
                });
            }
        });
        
    };

    accordeon();

    // More
    const moreCart = () => {

        const moreBtn = document.querySelector('.add-sentence-btn');

        moreBtn.addEventListener('click', (event) => {
            event.target.parentNode.querySelectorAll('.hidden, .visible-sm-block').forEach(n => {
                n.classList.remove('hidden');
                n.classList.remove('visible-sm-block');
            });
            moreBtn.style.display = 'none';
        });

    };

    moreCart();

    // send form
    const sendForm = () => {

        const errorMessage = 'Ошибка...',
            loadMessage = 'Идет отправка...',
            successMessage = 'Отправлено!';

        const statusMessage = document.createElement('div');
        statusMessage.style.cssText = 'font-size: 2rem; color: #000;';

        const allForm = document.querySelectorAll('form'),
            allInput = document.querySelectorAll('input');

        allForm.forEach((elem) => {

            elem.addEventListener('submit', (event) => {

                event.preventDefault();
                elem.appendChild(statusMessage);
                statusMessage.textContent = loadMessage;

                const formData = new FormData(elem);
                let body = {};

                let formDirector = document.querySelector('.director-form'),
                    formInput = document.querySelector('.director-form input');
                
                if (formDirector) {
                    body = { 'user_quest': formInput.value };
                }

                formData.forEach((val, key) => {
                    body[key] = val;
                });

                postData(body)
                    .then((response) => {
                        if (response.status !== 200) {
                            throw new Error('status network is not 200');
                        }
                        statusMessage.textContent = successMessage;
                    })
                    .then(allInput.forEach((item) => item.value = ''))
                    .catch((error) => {
                        statusMessage.textContent = errorMessage;
                        console.error(error);
                    });

            });

            elem.addEventListener('input', (elem) => {

                if (elem.target.name === 'user_phone') {
                    elem.srcElement.value = elem.srcElement.value.replace(/[^+0-9]/gi, ``);
                } else {
                    return;
                }

            });

        });

        const postData = (body) => {

            return fetch('./server.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });

        };

    };

    sendForm();

    // Calc
    const calc = () => {

        

    };

    calc();

});