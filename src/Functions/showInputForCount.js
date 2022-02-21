function showInputForCount(event) {
  const input = event.currentTarget.querySelector('input');
  const button = event.currentTarget.querySelector('button');
  const name = event.currentTarget.querySelector('.coin__info-name');
  const symbol = event.currentTarget.querySelector('.coin__info-symbol');
  const element = event.target.parentElement.querySelector('.coin__form');
  const visible = document.querySelectorAll('.coin__form');
  if (event.target === input || event.target === button || event.target === name || event.target === symbol) return;
  visible.forEach((elem) => {
    if (!elem.classList.contains('coin__form--display--none')) {
      elem.classList.add('coin__form--display--none');
    }
  });
  element.classList.remove('coin__form--display--none');
}

export default showInputForCount;
