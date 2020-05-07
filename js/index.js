const deg = 6; // 360 / 60
const hourToDegree = 30; // 360 / 12
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

updateClock();
setInterval(updateClock, 1000);

function updateClock() {
    let day = new Date();
    let hh = day.getHours() * hourToDegree;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
}