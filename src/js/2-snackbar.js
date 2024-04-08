// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
// Імпорт іконок
import check2circle from '../img/check2circle.svg';
import octagon from '../img/octagon.svg';

const form = document.querySelector('.form');

const showMessage = (title, message, backgroundColor, iconUrl) => {
  // частково короткі властивості
  iziToast.show({
    title,
    titleColor: 'white',
    message,
    messageColor: 'white',
    backgroundColor,
    closeOnEscape: true,
    position: 'topRight',
    iconUrl,
    iconColor: 'white',
  });
};

const formSubmit = event => {
  event.preventDefault();

  const promise = new Promise((resolve, reject) => {
    const delay = Number(document.querySelector('input[name="delay"]').value);
    const state = document.querySelector('input[name="state"]:checked').value;

    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then(delay => {
      showMessage(
        'OK',
        `Fulfilled promise in ${delay}ms`,
        '#59A10D',
        check2circle
      );
    })
    .catch(delay => {
      showMessage(
        'ERROR',
        `Rejected promise in ${delay}ms`,
        '#EF4040',
        octagon
      );
    });

  form.reset();
};

form.addEventListener('submit', formSubmit);
