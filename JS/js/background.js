const images =["0.jpeg","1.jpeg","2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img"); 
//javascript에서 html element만듬

bgImage.src =`img/${chosenImage}`;
bgImage.classList.add("background");

const h2 =document.querySelector("#clock");
document.body.insertBefore(bgImage,h2); // 노드 이전에 추가


//appendChild 맨마지막에 넣기
//prepend 맨앞에 넣기
//insertBefore 노드 이전에 추가