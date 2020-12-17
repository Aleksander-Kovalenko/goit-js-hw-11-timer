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
    this.intervalId = null;
  }
  timer() {
    if (this.intervalId <= 0) {
      this.updateClockFace(0);
    }
    this.intervalId = setInterval(() => {
      console.log(this.intervalId);
      const currentTime = Date.now();
      const resDate = this.refs.futureDate - currentTime;
      this.updateClockFace(resDate);
    }, 1000);
  }

  updateClockFace(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    this.creatTime(days, hours, mins, secs);
  }

  creatTime(days, hours, mins, secs) {
    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.mins.textContent = mins;
    refs.secs.textContent = secs;

    return `${days}:${hours}:${mins}:${secs}`;
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }
}

const time = new CountDownTimer({
  selector: "#timer-1",
  targetDate: new Date("Dec 31, 2020"),
});

time.timer();
