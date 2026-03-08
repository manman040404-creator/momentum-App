const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
  const date = new Date();
  const hour = date.getHours();

  let message = "";

  if (hour < 12) {
    message = "행복한 아침이야";
  } else if (hour < 18) {
    message = "오늘도 반이 지났네? 힘내보자고";
  } else {
    message = "넌 오늘도 해냈어! 고마워!";
  }

  greeting.innerText = `${message}, ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
   loginForm.classList.remove(HIDDEN_CLASSNAME);
   loginForm.addEventListener("submit", onLoginSubmit);
} else {
   paintGreetings(savedUsername);
}

const changeUserButton = document.querySelector("#change-user");

function handleChangeUser() {
  localStorage.removeItem(USERNAME_KEY);
  location.reload();
}

changeUserButton.addEventListener("click", handleChangeUser);