const form = document.querySelector(".js-form"),
      input = form.querySelector("input"),
      greeting = document.querySelector(".js-greetings");
    //   greetingBtn = document.querySelector(".greetingEditHide");

const USER_LS = "currentUser",
      SHOWING_CN = "showing";

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}      

function deleteGreeting() {
    localStorage.removeItem(USER_LS);
    form.classList.add(SHOWING_CN);
    greeting.classList.remove(SHOWING_CN);
}

function paintGreeting(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Good Luck! ${text}`;
    delBtn.addEventListener("click", deleteGreeting);
    li.appendChild(delBtn);
    greeting.appendChild(li);
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();