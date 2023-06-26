class TimeConv {
  constructor(hours, minutes, seconds) {
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
  }

  convert() {
    if (this.seconds >= 60) {
      this.minutes += Math.floor(this.seconds / 60);
      this.seconds %= 60;
    }
    if (this.minutes >= 60) {
      this.hours += Math.floor(this.minutes / 60);
      this.minutes %= 60;
    }
  }

  logTime() {
    console.log(`Time: ${this.hours}h ${this.minutes}m ${this.seconds}s`);
  }
}

const time1 = new TimeConv(0, 0, 180);
time1.convert();
time1.logTime();
