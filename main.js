const mainbox = document.querySelector(".game-display");
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const easyBtn = document.querySelector("#easy");
const mediumBtn = document.querySelector("#medium");
const hardBtn = document.querySelector("#hard");
const userName = document.querySelector("#username");
const highScore = document.querySelector("#high-score");
const score = document.querySelector("#score");

let gameScore = 0;

let interval = 1500;
easyBtn.addEventListener("click", () => {
    interval = 1500;
    easyBtn.disabled = true
    mediumBtn.disabled = false
    hardBtn.disabled = false
})
mediumBtn.addEventListener("click", () => {
    interval = 1000;
    mediumBtn.disabled = true
    easyBtn.disabled = false
    hardBtn.disabled = false
})
hardBtn.addEventListener("click", () => {
    interval = 500;
    
    hardBtn.disabled = true
    easyBtn.disabled = false
    mediumBtn.disabled = false
})

startBtn.addEventListener("click", () => {
    // console.log("startBtn:",interval)
    startBtn.disabled = true
    stopBtn.disabled = false
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

        itemBallon.addEventListener("click", (e) => {
            itemBallon.remove();

            if (interval == 1500) {
                gameScore += 1;
                score.innerHTML = gameScore
            } else if (interval == 1000) {
                gameScore += 2;
                score.innerHTML = gameScore
            } else if (interval == 500) {
                gameScore += 3;
                score.innerHTML = gameScore
            }




        })

    }, interval)
    stopBtn.addEventListener("click", () => {
        startBtn.disabled = false
        stopBtn.disabled = true
        clearInterval(_tick);
        // console.log("stopbtn:",interval)
    })

})
