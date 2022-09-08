const mainbox = document.querySelector(".game-display");
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const easyBtn = document.querySelector("#easy");
const mediumBtn = document.querySelector("#medium");
const hardBtn = document.querySelector("#hard");
const userName = document.querySelector("#username");
const highScore = document.querySelector("#high-score");
const score = document.querySelector("#score");

startBtn.addEventListener("click", () => {

    var _tick = setInterval(function () {
        const itemBallon = document.createElement("div");
        itemBallon.classList.add("ballon");

        var randomColor = Math.floor(Math.random() * 16777215).toString(16);
        if (randomColor.length < 6) {
            randomColor = "cbe114";
        }
        itemBallon.style.backgroundColor = "#" + randomColor;

        var randomLeft = Math.floor(Math.random() * 535);
        var randomTop = Math.floor(Math.random() * 460);
        var randomRight = Math.floor(Math.random() * 535);
        var randomBottom = Math.floor(Math.random() * 460);

        itemBallon.style.left = randomLeft + "px";
        itemBallon.style.top = randomTop + "px";
        itemBallon.style.right = randomRight + "px";
        itemBallon.style.bottom = randomBottom + "px";


        mainbox.appendChild(itemBallon);
        let scoreNum =1;
        itemBallon.addEventListener("click", (e) => {
            scoreNum +=3;
            console.log(scoreNum)
            score.innerHTML = scoreNum
            itemBallon.remove();
            

        })
        
    }, 1000)
    stopBtn.addEventListener("click", () => {
        clearInterval(_tick);
    })

})
