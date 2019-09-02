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

export default sendForm;