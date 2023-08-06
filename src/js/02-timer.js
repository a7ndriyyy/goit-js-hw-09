import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import convertMs from './conversMs';
import { Report } from 'notiflix';


const refs = {
    inputEl: document.querySelector('input[type="text"]'),
    btnEl: document.querySelector('[data-start]'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
};
const { inputEl, btnEl, seconds, minutes, hours, days } = refs;

btnEl.disabled = true;
btnEl.addEventListener('click', onStartClick, { once: true });

function onStartClick(e) {
    inputEl.disabled = true;
    const timerId = setInterval(() => {
      const deltaTime = selectedDate - Date.now();
      const timeComponents = convertMs(deltaTime);
      if (deltaTime <= 1000) {
        clearInterval(timerId);
      }
      timer(timeComponents);
    }, 1000);
  }

  flatpickr(inputEl, options);
function addingZero(value) {
  return String(value).padStart(2, 0);
}