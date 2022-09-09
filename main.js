const mainbox = document.querySelector(".game-display");
const overlay = document.querySelector(".stop-overlay");
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const resetBtn = document.querySelector("#reset");
const easyBtn = document.querySelector("#easy");
const mediumBtn = document.querySelector("#medium");
const hardBtn = document.querySelector("#hard");
const userName = document.querySelector("#username");
const highScore = document.querySelector("#high-score");
const score = document.querySelector("#score");

let userNickName = prompt("adinizi daxil edin!");
if(userNickName===null || userNickName.trim()==''){
    userName.innerText="Anonim Gamer"  
}else{
    userName.innerText=userNickName
}

let gameScore = 0;
let highGameScore = 0;

let interval = 1500;

stopBtn.disabled = true;
resetBtn.disabled = true;


startBtn.addEventListener("click", () => {
    // console.log("startBtn:",interval)
    startBtn.disabled = true
    stopBtn.disabled = false
    resetBtn.disabled = true;

    overlay.style.zIndex = "-1";

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
        resetBtn.disabled = false;

        clearInterval(_tick);

        overlay.style.zIndex = "1"
    })

    easyBtn.addEventListener("click", () => {
        clearInterval(_tick);
        overlay.style.zIndex = "1"
    })
    mediumBtn.addEventListener("click", () => {
        clearInterval(_tick);
        overlay.style.zIndex = "1"
    })
    hardBtn.addEventListener("click", () => {
        clearInterval(_tick);
        overlay.style.zIndex = "1"
    })

})


easyBtn.addEventListener("click", () => {
    interval = 1500;
    easyBtn.disabled = true
    mediumBtn.disabled = false
    hardBtn.disabled = false
    startBtn.disabled = false
    stopBtn.disabled = true
})
mediumBtn.addEventListener("click", () => {
    interval = 1000;
    mediumBtn.disabled = true
    easyBtn.disabled = false
    hardBtn.disabled = false
    startBtn.disabled = false
    stopBtn.disabled = true
})
hardBtn.addEventListener("click", () => {
    interval = 500;
    hardBtn.disabled = true
    easyBtn.disabled = false
    mediumBtn.disabled = false
    startBtn.disabled = false
    stopBtn.disabled = true
})



resetBtn.addEventListener("click", () => {

    if (gameScore > highGameScore) {
        highGameScore = gameScore;
        highScore.innerHTML = highGameScore
    }

    var child = mainbox.lastElementChild;
    while (child) {
        mainbox.removeChild(child);
        child = mainbox.lastElementChild;
    }
    resetBtn.disabled = true;
    gameScore = 0;
    score.innerHTML = gameScore
})


