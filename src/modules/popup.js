const popup = () => {

    const popupCall = document.querySelector('.popup-call'),
        contactsPopupBtn = document.querySelectorAll('header .contacts a'),
        popupDiscount = document.querySelector('.popup-discount'),
        sentenceBtn = document.querySelectorAll('.sentence-btn');

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
            popupCall.style.display = 'none';
        } else {
            target = target.closest('.popup-content');
            if (!target) {
                popupCall.style.display = 'none';
            }
        }
    });

};

export default popup;