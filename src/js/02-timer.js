import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import convertMs from "./conversMs";

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

let selectedDate;
const options = {
  enableTime: true,
  time_24hr: true,
  minuteIncrement: 1,
  defaultDate: new Date(),
  onClose(selectedDates) {
    selectedDate = selectedDates[0].getTime();
    if (selectedDate <= Date.now()) {
      Report.warning('Please choose a date in the future', '');
    } else {
      Report.success('Good! Click on start!', '', 'Okay');
      btnEl.disabled = false;
    }
  },
};

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
  function timer(components) {
    days.textContent = addingZero(components.days);
    hours.textContent = addingZero(components.hours);
    minutes.textContent = addingZero(components.minutes);
    seconds.textContent = addingZero(components.seconds);
  }

  flatpickr(inputEl, options);
function addingZero(value) {
  return String(value).padStart(2, 0);
}