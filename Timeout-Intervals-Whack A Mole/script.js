let seconds = 1000
let sco = 0


const startGame = () => {
    let randomnbr = Math.floor(Math.random() * 12)
    let moles = document.getElementsByClassName("mole")
    moles[randomnbr].style.visibility = "visible";
    stopi = setTimeout(startGame, seconds)
    if (sco>=100) {
        clearInterval(stopi);
        let holes = document.querySelectorAll(".hole")
        holes.forEach((hole) => {        
            hole.style.visibility = "hidden"; })
        let moles = document.querySelectorAll(".mole")
        moles.forEach((mole) => {        
        mole.style.visibility = "hidden"; })
        let guacam = document.querySelector(".viewer")
            guacam.style.backgroundimage = 'url(./images/guaca.jpg)';

        // alert("GUACAMOLE !");
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
