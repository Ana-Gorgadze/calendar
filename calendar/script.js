const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");



const today = new Date();

const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 
const allMonths = ["January", "February", "March", "April", "May", "June", "Jule", "August", "September", "oqtomber", "november", "dicember"]

date.innerHTML = (today.getDate()<10?"0":"")+today.getDate();
day.innerHTML = weekDays [today.getDay()]; 
month.innerHTML = allMonths [today.getMonth()];
year.innerHTML = today.getFullYear();



const mititeba = document.getElementById("mititeba")

if(today === 8){
    mititeba.textContent = ("wake up anuki!!!!");
}else if(today > 2 && today < 8){
    mititeba.textContent = ("keep sleeping");
}else if(today > 22 && today <2){
    mititeba.textContent = ("time to sleep");
}else if(today === 9){
    mititeba.textContent = ("time to go to school")
}else{
    mititeba.textContent = ("happy day")
}