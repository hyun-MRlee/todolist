const clockContainer = document.querySelector(".js-clock"),
      clockTitle = clockContainer.querySelector("h1");

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}`: hours}:${minutes < 10 ? `0${minutes}`: minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
                        //간단한 if 연산자(조건 ?(if) 맞으면 ?(if) 뒤에, 틀리면 :(else) 실행)
}

function init() {
    getTime();
    setInterval(getTime, 10);
}

init();
