const ESC_CODE = 27;
const modalWriteUs = document.querySelector('.modal--write-us');

const openWriteUs = document.querySelector('.sub-header__btn');
const closeWriteUs = modalWriteUs.querySelector('.modal__close');

const modalOpen = () => {
  modalWriteUs.classList.remove('modal--closed');
  document.addEventListener('keydown', onEscKeyDown);
};

const modalClose = () => {
  modalWriteUs.classList.add('modal--closed');
  document.addEventListener('keydown', onEscKeyDown);
};

openWriteUs.addEventListener('click', modalOpen);
closeWriteUs.addEventListener('click', modalClose);

window.addEventListener('keydown', (evt) => {
  if (evt.keyCode === ESC_CODE) {
    modalClose();
  }
});
