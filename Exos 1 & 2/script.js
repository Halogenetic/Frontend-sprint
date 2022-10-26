function theExplosion() {
    alert("BOOM!");
  }
  
  const button = document.createElement("button");
  button.textContent = "WARNING";
  button.addEventListener("click", () => {
    // this will delay the event by 5 seconds
    setTimeout(theExplosion, 5000);
  });
  document.body.appendChild(button);

  const button = document.createElement("button");
  button.textContent = "WARNING";
  button.addEventListener("click", () => {
    // this will delay the event by 5 seconds
    heyYou();
  });
  document.body.appendChild(button);

let times = 0;
function heyYou() {
  console.log("Hey! You! I called you " + times + " times!");
  times++;

  const nextCall = Math.floor(Math.random() * 2000); // Random delay until heyYou() is called again
  setTimeout(heyYou, nextCall);
}

let times = 0;
function heyYou() {
  console.log("Hey! You! I called you " + times + " times!");
  times++;
}

setInterval(heyYou, 1000);

let interval;
let times = 0;

function heyYou() {
  console.log("Hey! You! I called you " + times + " times!");
  times++;
}

timerStart = document.createElement("button");
timerStart.textContent = "say hey every 3 seconds";
timerStart.addEventListener("click", () => {
  interval = setInterval(heyYou, 3000);
});

buttonStop = document.createElement("button");
buttonStop.textContent = "Stop saying hey";
buttonStop.addEventListener("click", () => {
  // We must first check if there is an interval
  if (interval != undefined) {
    clearInterval(interval);
  }
});

document.body.appendChild(timerStart);
document.body.appendChild(buttonStop);


write = document.createElement("button");
write.textContent = "Start";
document.body.appendChild(write)

write.addEventListener("click", () => {
  let str = "Mmmmh le caca c'est délicieux!".split('');

  const interval = setInterval(() => {
    document.write(str[0]);
    str = str.slice(1);
    
    if (!str.length) {
      clearInterval(interval);
    }
  }, 100);
});


let interval;
let times = 0;

function myTimer() {
  document.body.innerHTML = ''
  if (times<60){
  let thetime = (times + " seconds")
  document.write(thetime);
  times++;}
  else {
    let thetime = (((times - times % 60)/60) + " minutes "+(times % 60) + " seconds")
    let timestr = ("<br>"+((times - times % 60)/60) + " minutes has passed")
    document.write(thetime);
    document.write(timestr);
    times++;}
}

timerStart = document.createElement("button");
timerStart.textContent = "Start timer";
timerStart.addEventListener("click", () => {
  interval = setInterval(myTimer, 100);
});

document.body.appendChild(timerStart);

