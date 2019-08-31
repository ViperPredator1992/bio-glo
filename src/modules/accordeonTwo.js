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

export default accordeonTwo;