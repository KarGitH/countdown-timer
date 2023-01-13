const techSpardhaEve = '26 Jan 2023';

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

function countDown()
{
    const techSpardhaEveDate = new Date(techSpardhaEve);
    const currentDate = new Date();

    const totalSeconds = (techSpardhaEveDate - currentDate)/1000;

    const days = Math.floor(totalSeconds/3600/24);
    const hours = Math.floor(totalSeconds/3600)%24;
    const minutes = Math.floor(totalSeconds/60)%60;
    const seconds = Math.floor(totalSeconds)%60;

    daysEl.innerHTML = days;
    minsEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
    hoursEl.innerHTML = formatTime(hours);
}
function formatTime(time)
{
    return time<10?(`0${time}`):time
}
countDown();
setInterval(countDown,1000);