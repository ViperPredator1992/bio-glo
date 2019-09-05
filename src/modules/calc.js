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

export default calc;