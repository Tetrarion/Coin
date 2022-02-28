export default function showInputForCount(targetElement, prevElement) {
  if (prevElement) {
    prevElement.querySelector('.coin__form').classList.add('coin__form--display--none');
  }
  const element = targetElement.querySelector('.coin__form');
  if (!element.classList.contains('coin__form--display--none')) return;
  element.classList.remove('coin__form--display--none');
}
