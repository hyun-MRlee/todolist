const clockContainer = document.querySelector(".js-clock"),
      clockTitle = clockContainer.querySelector("h1");
const clockNal = document.querySelector(".js-day") ,     
      clockDay = clockNal.querySelector("h2");

function getTime() {
    const date = new Date();
    const year = date.getFullYear();
    const month = (date.getMonth()+1);
    const day1 = date.getDate();
    const weekDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const day2 = date.getDay();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}`: hours}:${minutes < 10 ? `0${minutes}`: minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
                        //간단한 if 연산자(조건 ?(if) 맞으면 ?(if) 뒤에, 틀리면 :(else) 실행)
    clockDay.innerText = `${year} / ${month < 10 ? `0${month}`: month} / ${day1 < 10 ? `0${day1}`: day1} / ${weekDay[day2]}`;
}

function init() {
    getTime();
    setInterval(getTime, 10);
}

init();
