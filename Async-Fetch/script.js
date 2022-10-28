const myinput = document.querySelector('.tryname');
const mybutton = document.querySelector('button');
const mybody = document.querySelector('body');




mybutton.addEventListener('click', () => {
  let myname = myinput.value
  fetch('https://api.agify.io/?name=' + myname)

      .then(response => {return response.json()})
      .then(data => {
        const newdiv = document.createElement("div")
        mybody.appendChild(newdiv)
        const jsontostring = JSON.stringify(data)
        newdiv.textContent = (jsontostring)
      })
      .catch(error => {
        console.log('There was an error!', error)
      })
  })

