// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

// Імпорт іконок
import octagon from '../img/octagon.svg';

const inputEl = document.querySelector('#datetime-picker');
const clockTimer = document.querySelector('.timer');
const startBtn = document.querySelector('[data-start]');

let userDate;

startBtn.disabled = true;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);

    if (selectedDates[0] < new Date()) {
      return iziToast.show({
        message: 'Please choose a date in the future',
        backgroundColor: 'red',
        color: 'red',
        messageColor: 'white',
        closeOnEscape: true,
        position: 'topRight',
        iconUrl: octagon,
        iconColor: 'white',
      });

      // return alert('Please choose a date in the future');
    }

    startBtn.disabled = false;
    userDate = selectedDates[0];
  },
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addZero(value) {
  return String(value).padStart(2, '0');
}

flatpickr(inputEl, options);

startBtn.addEventListener('click', () => {
  const intervalId = setInterval(() => {
    startBtn.disabled = true;
    inputEl.disabled = true;
    const diff = userDate - Date.now();
    if (diff <= 1000) {
      clearInterval(intervalId);
      inputEl.disabled = false;
    }

    const { days, hours, minutes, seconds } = convertMs(diff);

    clockTimer.querySelector('[data-days]').textContent = addZero(days);
    clockTimer.querySelector('[data-hours]').textContent = addZero(hours);
    clockTimer.querySelector('[data-minutes]').textContent = addZero(minutes);
    clockTimer.querySelector('[data-seconds]').textContent = addZero(seconds);
  }, 1000);
});
