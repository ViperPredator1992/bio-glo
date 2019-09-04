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
        }
        start() {
            this.firstLevel();
            this.secondLevel();
            this.thirdLevel();
            this.fourthLevet();
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

            selectBoxType.forEach((elem) => {
                elem.addEventListener('change', (event) => {
                    let target = event.target,
                        selectIndex = target.options[target.selectedIndex].value;

                    if (selectIndex === '1.4') {
                        resultValue = this.oneChamber;
                        //resultValue = this.twoChamber;
                    }
                    if (selectIndex === '2') {
                        resultValue = this.oneChamber + (this.oneChamber / 100 * this.diameterPercentage);
                        //resultValue = this.twoChamber + (this.twoChamber / 100 * this.diameterPercentage);
                    }

                    calcResult.removeAttribute('disabled');
                    calcResult.innerHTML = resultValue;

                });
            });

        }
        thirdLevel() {
            typeSepticTwo.addEventListener('change', () => {
                if (typeSepticTwo.checked) {
                    typeSepticTwo.setAttribute('display', 'block');
                } else {
                    typeSepticTwo.setAttribute('display', 'none');
                }
            });
        }
        fourthLevet() {



        }
        eventsListeners() {
            this.start();

        }
    }

    const calculator = new appData();
    calculator.eventsListeners();

};

export default calc;