const daysEl = document.getElementById('days');
const hoursEL = document.getElementById('hours');
const minsEL = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const newYear = "01 jan 2023"; /**star with the first date to year */

function countdown() {
  /**create objects */
  const newYearsDate = new Date(newYear);
  const currentDate = new Date();
  /**declare varaibles  */
  const totalSeconds = (newYearsDate - currentDate) / 1000;

  /*operations to find  days, hours, minuts and seconds*/
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;
//   console.log(days, hours, mins, seconds);
daysEl.innerHTML = days;
hoursEL.innerHTML = formatTime(hours);
minsEL.innerHTML = formatTime(mins);
secondsEl.innerHTML =formatTime(seconds);

}

function formatTime(time){
    return time < 10 ?`0${time}` : time;
}
/*   initial call  function */
countdown();
setInterval(countdown, 1000);
