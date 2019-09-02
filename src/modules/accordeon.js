const accordeon = () => {

    document.addEventListener('click', (event) => {
        const target = event.target,
            heading = target.closest('.panel-heading'),
            nextStep = target.closest('.construct-btn');

        const collapse = heading ? heading.nextElementSibling :
            nextStep ? target.closest('.panel').nextElementSibling.querySelector('.panel-collapse') : false;

        if (collapse) {
            event.preventDefault();
            target.closest('.panel-group').querySelectorAll('.panel-collapse').forEach(n => {
                n.classList.toggle('in', n === collapse && !n.classList.contains('in'));
            });
        }
    });

};

export default accordeon;