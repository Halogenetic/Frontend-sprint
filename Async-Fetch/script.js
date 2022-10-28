const myinput = document.querySelector('.tryname');
const mybutton = document.querySelector('button');
const mybody = document.querySelector('body');
const myselect = document.querySelector('select');



mybutton.addEventListener('click', () => {
  let myname = myinput.value
  let mycountry = myselect.value
  let fetcho

if (mycountry != "") 
  fetcho = fetch('https://api.agify.io/?name=' + myname + "&country_id=" + mycountry)
  else 
    fetcho = fetch('https://api.agify.io/?name=' + myname)

      fetcho.then(response => {return response.json()})
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

