let seconds = 1000
let sco = 0


const startGame = () => {
    let randomnbr = Math.floor(Math.random() * 12)
    console.log(randomnbr)
    let moles = document.getElementsByClassName("mole")
    moles[randomnbr].style.visibility = "visible";
    stopi = setTimeout(startGame, seconds)
    if (sco==3) {
        clearInterval(stopi);
        alert("GUACAMOLE !");
        let holes = document.getElementsByClassName("hole")
        holes.style.visibility = "hidden";
        let guaca = document.getElementsByClassName("viewer")
        guaca.style.background = "-moz-element()";
    }
}

timerStart = document.querySelector("button")
timerStart.addEventListener("click", () => {
    startGame()
});



moles = document.querySelectorAll(".mole")
moles.forEach((mole) => {
    mole.addEventListener('click', (event) => {
    event.target.style.visibility = "hidden";
    score = document.querySelector(".score")
    sco++
    seconds -= 10
    score.innerHTML = sco
    })
}
)
