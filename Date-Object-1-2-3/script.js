const calcTime = (city, offset) => {

    // create Date object for current location
    const d = new Date();
   
    // get UTC time in msec
    const utc = d.getTime();
   
    // create new Date object for different city
    // using supplied offset
    const nd = new Date(utc + (3600000*offset));
   
    // document.write time as a string
    document.write("The local time in " + city + " is " + nd.toLocaleString()+"<br>")
}

calcTime("Brussels (Belgium)", 0)
calcTime("Anchorage (USA)", -10)
calcTime("Reykjavik (Iceland)", -2)
calcTime("Saint-Petersburg (Russia)", +1)


// To set two dates to two constiables
const thedate = new Date("09/22/1991");
const today = new Date();
  
// To calculate the time difference of two dates
const Difference_In_Time = today.getTime() - thedate.getTime();
  
// To calculate the no. of days between two dates
const Difference_In_Days = (Math.trunc(Difference_In_Time / (1000 * 3600 * 24)));
  
//To display the final no. of days (result)
document.write("<br> Total number of days between dates  <br>"
               + thedate + " and <br>" 
               + today + " is: <br> " 
               + Difference_In_Days);


const daysDifference = (thedate, today) => {
    const Difference_In_Time = today.getTime() - thedate.getTime();
    const Difference_In_Days = (Math.trunc(Difference_In_Time / (1000 * 3600 * 24)));
    document.write("<br> <br> Total number of days between dates  <br>"
               + thedate + " and <br>" 
               + today + " is: <br> " 
               + Difference_In_Days);}
            
daysDifference (new Date("09/11/2001"), new Date())



newdiv = document.createElement("div")
document.body.appendChild(newdiv)
newinput = document.createElement("input")
newdiv.appendChild(newinput)
newinput.type="number";
newp = document.createElement("p")
newdiv.appendChild(newp)


newinput.addEventListener('keyup', (event) => {
    const today = new Date();
    const tdtime = today.getTime();
    const hrtime = ((newinput.value)*(60*60*1000));
    const tdhr = new Date ((tdtime + hrtime));

    newp.textContent = ("In "+newinput.value+" hours, it will be "+tdhr.toLocaleString())

})





