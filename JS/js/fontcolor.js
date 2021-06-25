const toDoListPart = document.querySelector("#todo-list");
const quotePart = document.querySelector("#quote");
const weatherPart = document.querySelector("#weather");
const greetingPart = document.querySelector("#greeting");
const clockPart = document.querySelector("#clock");
const loginformPart = document.querySelector("#login-form");
const todoformPart = document.querySelector("#todo-form");

function coloring(target){
    target.classList.add("font");
}

const partArray = [];
partArray.push(toDoListPart,quotePart,weatherPart,greetingPart,clockPart,loginformPart,todoformPart);
for(var i=0;i<partArray.length;i++){
    coloring(partArray[i]);
}