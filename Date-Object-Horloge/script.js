

const joury = document.querySelector(".jour");
const dayy = document.querySelector(".day");
const monthy = document.querySelector(".month");
const anneey = document.querySelector(".annee");
const hoursy = document.querySelector(".hours");
const minutesy = document.querySelector(".minutes");
const secondsy = document.querySelector(".seconds");

let am = 0

const heure = document.querySelector(".heure");
let today = new Date();

let hoursz = today.getHours();

const refresh = () => {
    today = new Date();
    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const dayz = days[today.getDay()];

    let datez = today.getDate();

    if (datez < 10) {
        datez = "0" + datez;
    }

    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    const monthz = months[today.getMonth()];

    const yearz = today.getFullYear();

    

    let minutesz = today.getMinutes();

    if (minutesz < 10) {
        minutesz = "0" + minutesz;
    }

    let secondsz = today.getSeconds();

    if (secondsz < 10) {
        secondsz = "0" + secondsz;
    }
    

    joury.textContent = (dayz);
    dayy.textContent = (datez);
    monthy.textContent = (monthz);
    anneey.textContent = (yearz);
    hoursy.textContent = (hoursz + ":");
    minutesy.textContent = (minutesz + ":");
    secondsy.textContent = (secondsz);

    setTimeout(refresh, 100);
}


heure.addEventListener('click', () => {
    if (hoursz > 11 && am == 0) {
        hoursz = (hoursz - 12);
        am = 1;
    }

    else if (am == 1) {
        hoursz = (hoursz + 12);
        am = 0;
    }
})

refresh();
