export const showInputForCount = (event) => {
    let input = event.currentTarget.querySelector('input');
    let button = event.currentTarget.querySelector('button');
    let thisElement = event.target.parentElement.querySelector('.display');
    let visible = document.querySelectorAll('.display');
    let element = event.target.parentElement.querySelector('.none');
    if (event.target === input || event.target === button || !thisElement.classList.contains('none')) return;
    visible.forEach(elem => {
        if (!elem.classList.contains('none')) {
            elem.classList.add('none');
        }
    });
    element.classList.remove('none');
};