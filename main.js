
let score = 0;

//äänitiedosto
const lionVoice = new Audio("voices/lion.mp3")
lionVoice.volume = 1.0;
const jaguarVoice = new Audio("voices/roar.mp3")
let playSound = true
const leijona = document.getElementById("leijona");

leijona.addEventListener("click", () => {
    score++;
    document.getElementById('score').innerText = score;
    if (playSound) {
        lionVoice.play();

        if (score % 50 === 0) {
            jaguarVoice.play();
        }
    }   
    leijona.classList.add("jump");
    setTimeout(() => {
        leijona.classList.remove("jump");
    }, 200);
});


const backgroundSound = new Audio("voices/jungle.mp3")
backgroundSound.loop = true;
backgroundSound.volume = 0.5;

let isBackgroundSoundOn = false;

function toggleBackgroundSound() {
    if (isBackgroundSoundOn) {
        backgroundSound.pause();
        isBackgroundSoundOn = false;
    } else {
        backgroundSound.play();
        isBackgroundSoundOn = true;
        
    }
}

document.getElementById('resetButton').addEventListener('click', function() {
    score = 0;
    document.getElementById('score').innerText = score;
})

backgroundSound.play();