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

export default moreCart;