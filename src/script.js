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

    const calc = () => {

        const typeSeptic = document.getElementById('myonoffswitch'),
            titleText = document.querySelectorAll('.title-text'),
            selectBox = document.querySelectorAll('.select-box'),
            typeSepticTwo = document.getElementById('myonoffswitch-two'),
            calcResult = document.getElementById('calc-result'),
            selectBoxType = document.querySelectorAll('select');

        let resultValue = 0;

        class appData {
            constructor() {
                this.oneChamber = 1000;
                this.twoChamber = 1500;
                this.diameterPercentage = 20;
                this.numberOfRingsSecond = 30;
                this.numberOfRingsThird = 50;
                this.ifIs = 1000;
                this.ifIsNot = 2000;
            }
            start() {
                this.firstLevel();
                this.secondLevel();
                this.thirdLevel();
            }
            firstLevel() {
                titleText[1].style.display = 'none';
                selectBox[2].style.display = 'none';
                selectBox[3].style.display = 'none';

                typeSeptic.addEventListener('change', () => {
                    if (typeSeptic.checked) {
                        titleText[1].style.display = 'none';
                        selectBox[2].style.display = 'none';
                        selectBox[3].style.display = 'none';
                    } else {
                        titleText[1].style.display = 'block';
                        selectBox[2].style.display = 'inline-block';
                        selectBox[3].style.display = 'inline-block';
                    }
                });
            }
            secondLevel() {

                typeSepticTwo.removeAttribute('checked');
                selectBoxType.forEach((elem, index) => {
                    elem.addEventListener('change', (event) => {
                        let target = event.target,
                            selectIndex = target.options[target.selectedIndex].value;

                        if (index == 0) {
                            if (selectIndex === '1.4') {
                                resultValue = this.oneChamber;
                            } else if (selectIndex === '2') {
                                resultValue = this.oneChamber + (this.oneChamber / 100 * this.diameterPercentage);
                            }
                        }

                        if (index == 1) {
                            if (selectIndex === '1') {
                                resultValue = this.oneChamber;
                            } else if (selectIndex === '2') {
                                resultValue = this.oneChamber + (this.oneChamber / 100 * this.diameterPercentage);
                                resultValue = resultValue + (resultValue / 100 * this.numberOfRingsSecond);
                            } else if (selectIndex === '3') {
                                resultValue = this.oneChamber + (this.oneChamber / 100 * this.diameterPercentage);
                                resultValue = resultValue + (resultValue / 100 * this.numberOfRingsThird);
                            }
                        }

                        if (index == 2) {
                            if (selectIndex === '1.4') {
                                resultValue = this.twoChamber;
                            } else if (selectIndex === '2') {
                                resultValue = this.twoChamber + (this.twoChamber / 100 * this.diameterPercentage);
                            }
                        }

                        if (index == 3) {
                            if (selectIndex === '1') {
                                resultValue = this.twoChamber;
                            } else if (selectIndex === '2') {
                                resultValue = this.twoChamber + (this.twoChamber / 100 * this.diameterPercentage);
                                resultValue = resultValue + (resultValue / 100 * this.numberOfRingsSecond);
                            } else if (selectIndex === '3') {
                                resultValue = this.twoChamber + (this.twoChamber / 100 * this.diameterPercentage);
                                resultValue = resultValue + (resultValue / 100 * this.numberOfRingsThird);
                            }
                        }

                        typeSepticTwo.addEventListener('click', () => {
                            if (typeSepticTwo.checked) {
                                if (index == 0) {
                                    resultValue += this.ifIs;
                                }
                                if (index == 2) {
                                    resultValue += this.ifIsNot;
                                }
                            } else {
                                if (index == 0) {
                                    resultValue -= this.ifIs;
                                }
                                if (index == 2) {
                                    resultValue -= this.ifIsNot;
                                }
                            }
                            calcResult.innerHTML = resultValue;
                        });

                        calcResult.removeAttribute('disabled');
                        calcResult.innerHTML = resultValue;

                    });
                });

            }
            thirdLevel() {
                const metrDistance = document.querySelector('.constructor .panel-four input');
                metrDistance.addEventListener('input', () => {
                    metrDistance.value = metrDistance.value.replace(/[^+0-9]+/gi, '');
                });
            }
            eventsListeners() {
                this.start();
            }
        }

        const calculator = new appData();
        calculator.eventsListeners();

    };

    calc();

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
                    formInput = document.querySelector('.director-form input'),
                    typeSeptic = document.getElementById('myonoffswitch'),
                    typeSepticTwo = document.getElementById('myonoffswitch-two'),
                    calcResult = document.getElementById('calc-result'),
                    selectBoxType = document.querySelectorAll('select'),
                    metrDistance = document.querySelector('.constructor .panel-four input');

                if (formDirector) {
                    body = {
                        'user_quest': formInput.value,
                        'typeSeptic': typeSeptic.value,
                        'firstDiametp': selectBoxType[0].options[selectBoxType[0].selectedIndex].text,
                        'firstNumberOfRings': selectBoxType[1].options[selectBoxType[1].selectedIndex].text,
                        'secondDiametp': selectBoxType[2].options[selectBoxType[2].selectedIndex].text,
                        'secondNumberOfRings': selectBoxType[3].options[selectBoxType[3].selectedIndex].text,
                        'typeSepticTwo': typeSepticTwo.value,
                        'distance': metrDistance.value,
                        'calc_res': calcResult.value
                    };
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

});