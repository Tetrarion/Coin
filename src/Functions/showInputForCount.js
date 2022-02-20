function showInputForCount(event) {
  const input = event.currentTarget.querySelector('input');
  const button = event.currentTarget.querySelector('button');
  const thisElement = event.target.parentElement.querySelector('.coin__form');
  const visible = document.querySelectorAll('.coin__form');
  const element = event.target.parentElement.querySelector('.coin__form--display--none');
  if (event.target === input || event.target === button || !thisElement.classList.contains('coin__form--display--none')) return;
  visible.forEach((elem) => {
    if (!elem.classList.contains('coin__form--display--none')) {
      elem.classList.add('coin__form--display--none');
    }
  });
  element.classList.remove('coin__form--display--none');
}

export default showInputForCount;
