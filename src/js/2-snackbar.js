// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
// Імпорт іконок
import check2circle from '../img/check2circle.svg';
import octagon from '../img/octagon.svg';

const form = document.querySelector('.form');

// варіант new Promise

const showMessage = (title, message, backgroundColor, iconUrl) => {
  // частково короткі властивості
  iziToast.show({
    title,
    titleColor: 'white',
    message,
    backgroundColor,
    messageColor: 'white',
    closeOnEscape: true,
    position: 'topRight',
    iconUrl,
    iconColor: 'white',
  });
};

const fulfilledPromise = delay => {
  setTimeout(() => {
    showMessage(`OK`, `Fulfilled promise in ${delay}ms`, 'green', check2circle);
  }, delay);
};

const rejectedPromise = delay => {
  setTimeout(() => {
    showMessage(`ERROR`, `Rejected promise in ${delay}ms`, 'red', octagon);
  }, delay);
};

const formSubmit = event => {
  event.preventDefault();

  const promise = new Promise((resolve, reject) => {
    const delay = document.querySelector('[name="delay"]').value;
    const state = document.querySelector('input[name="state"]:checked').value;

    if (state === 'fulfilled') resolve(fulfilledPromise(delay));
    else reject(rejectedPromise(delay));
  });

  form.reset();
};

form.addEventListener('submit', formSubmit);

// варіант просто
// const fulfilledPromise = delay => {
//   setTimeout(() => {
//     iziToast.show({
//       title: `OK`,
//       titleColor: 'white',
//       message: `Fulfilled promise in ${delay}ms`,
//       backgroundColor: 'green',
//       messageColor: 'white',
//       closeOnEscape: true,
//       position: 'topRight',
//       iconUrl: check2circle,
//       iconColor: 'white',
//     });
//   }, delay);
// };
// const rejectedPromise = delay => {
//   setTimeout(() => {
//     iziToast.show({
//       title: `ERROR`,
//       titleColor: 'white',
//       message: `Rejected promise in ${delay}ms`,
//       backgroundColor: 'red',
//       messageColor: 'white',
//       closeOnEscape: true,
//       position: 'topRight',
//       iconUrl: octagon,
//       iconColor: 'white',
//     });
//   }, delay);
// };

// const formSubmit = event => {
//   event.preventDefault();

//   const delay = document.querySelector('[name="delay"]').value;
//   const state = document.querySelector('input[name="state"]:checked').value;

//   if (state === 'fulfilled') fulfilledPromise(delay);
//   else rejectedPromise(delay);

//   form.reset();
// };

// form.addEventListener('submit', formSubmit);
