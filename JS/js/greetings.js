/*1.const loginForm = document.querySelector("#login-form");
2.const loginInput = loginForm.querySelector("input");
3.const loginButton = loginForm.querySelector("button");
*/
/*
document.getElementById("login-form"); 1번쨰랑 같음
 */
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME ="hidden";
const USERNAME_KEY="username";


function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username =loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}
function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if(savedUsername === null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}else{
    //show the greeting
    greeting.classList.remove(HIDDEN_CLASSNAME);
    paintGreetings(savedUsername);
}