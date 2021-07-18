const calc = document.querySelector('.calc');
const result = document.querySelector('#result');


calc.addEventListener('click', (e) => {
    if (!e.target.classList.contains('calc__btn')) return

    const value = e.target.textContent;

    switch (value) {
        case 'C':
            result.textContent = '';
            break;
        case '=':
            if (result.textContent.search(/[^0-9*/+-.]/mi))
                result.textContent = eval(result.textContent).toFixed(2);
            break;
        default:
            result.textContent += value;
    }

});