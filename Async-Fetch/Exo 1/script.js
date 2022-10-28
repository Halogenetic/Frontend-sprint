const body = document.querySelector('body');
const myul = document.createElement("ul");
body.appendChild(myul);

but = document.querySelector(".br")
but.addEventListener("click", () => {
    fetch('becode.json')
.then(response => {return response.json()})
.then(data => data.forEach(element => {
    const mylis = document.createElement("li");
    myul.appendChild(mylis);
    mylis.textContent=(element)
}))

})

