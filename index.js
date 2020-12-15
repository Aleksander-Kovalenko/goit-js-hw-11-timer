const refs = {
  days: document.querySelector('span[data-value="days"]'),
  hours: document.querySelector('span[data-value="hours"]'),
  mins: document.querySelector('span[data-value="mins"]'),
  secs: document.querySelector('span[data-value="secs"]'),
};

class CountDownTimer {
  constructor({ selector, targetDate }) {
    this.refs = {
      timer: document.querySelector(selector),
      futureDate: new Date(targetDate),
    };

    this.timerId = setInterval(function () {
      this.currentDate = Date.now();
      this.futureTime = targetDate;
      this.countTimer = this.futureTime - this.currentDate;
      updateClockFace(this.countTimer);
    }, 1000);
  }
}

function updateClockFace(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  refs.days.textContent = days;

  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  refs.hours.textContent = hours;

  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  refs.mins.textContent = mins;

  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
  refs.secs.textContent = secs;
}

function pad(value) {
  return String(value).padStart(2, "0");
}

new CountDownTimer({
  selector: "#timer-1",
  targetDate: new Date("Dec 31, 2020"),
});
