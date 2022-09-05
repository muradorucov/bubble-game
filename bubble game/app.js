const mainbox = document.querySelector("#bubble-box");
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const easyBtn = document.querySelector("#btn-easy");
const mediumBtn = document.querySelector("#btn-medium");
const hardBtn = document.querySelector("#btn-hard");
const userName = document.querySelector(".userName");
const scoreNumber = document.querySelector(".score-number");

let uname =prompt("adinizi daxil edin!").trim();
if(!uname==''){
    userName.innerHTML=uname;
}else{
    userName.innerHTML= "Anonyms";
}
    


let interval=3000;
easyBtn.addEventListener("click", () => {
    interval = 3000;
})
mediumBtn.addEventListener("click", () => {
    interval = 2000;
})
hardBtn.addEventListener("click", () => {
    interval = 1000;
})

startBtn.addEventListener('click', () => {

    var _tick = setInterval(function () {
        const item = document.createElement("div");
        item.classList.add("bubble-item");

        var randomColor = Math.floor(Math.random() * 16777215).toString(16);
        if (randomColor.length < 6) {
            randomColor = "cbe114";
        }

        console.log(randomColor)
        item.style.backgroundColor = "#" + randomColor;


        var randomLeft = Math.floor(Math.random() * 278);
        var randomTop = Math.floor(Math.random() * 248);
        var randomRight = Math.floor(Math.random() * 278);
        var randomBottom = Math.floor(Math.random() * 248);

        item.style.left = randomLeft + "px";
        item.style.top = randomTop + "px";
        item.style.left = randomRight + "px";
        item.style.top = randomBottom + "px";

        mainbox.appendChild(item)

        document.querySelectorAll(".bubble-item").forEach(item=>{
            item.addEventListener("click",(e)=>{
                item.style.display="none";
                let score =0
                if(interval==1000){
                    score=score+3
                    scoreNumber.innerHTML=score
                    console.log(score)
                }
            })
        })
    }, interval)
    stopBtn.addEventListener("click", () => {
        clearInterval(_tick);
    })
})























