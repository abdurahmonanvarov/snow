function falling() {
    let e = document.createElement("div");
    e.setAttribute("class", "circle");
    document.body.appendChild(e);

    let size = Math.random() * 25;
    e.style.width = 5 + size + 'px'; 
    e.style.left = Math.random() * + innerWidth + 'px';

    let angel = Math.random() * 360;
    e.style.filter = `hue-rotate(${angel}deg)`

    setTimeout(function () {
        document.body.removeChild(e);
    }, 10000);
}
setInterval(function () {
    falling();
},200);

// let randomNum = Math.floor(Math.random() * 100);
// console.log(randomNum);
