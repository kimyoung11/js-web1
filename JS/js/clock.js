const clock = document.querySelector("#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText=`${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock, 1000); // 1초마다 sayhello함수 계속 불림
//setInterval(sayHello, 5000); 5초마다 sayhello함수 계속 불림
//setTimeout(sayHello, 5000); 5초후에 sayhello함수 한번만 불림