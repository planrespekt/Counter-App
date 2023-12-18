const counterEl = document.querySelector(".counterdata");
const incrcounterBtn = document.querySelector("#incbutton");
const decrcounterBtn = document.querySelector("#decrbutton");
const clearcounterBtn = document.querySelector("#clearbutton");
const borderEl = document.querySelector('#header');
let counter = 0;
function incrCounter(){
    counter++;
    counterEl.innerHTML = counter;
    borderEl.style.background = 'rgb(0, 255, 0,0.7)';
}
function decrCounter(){
    if(counter > 0){
        counter--;
        counterEl.innerHTML = counter;
        borderEl.style.background = 'rgb(255,0,0,0.7)';
    }
    if(counter == 0){
        borderEl.style.background = 'rgb(138,43,226)';
    }
}
function clearCounter(){
    alert("You are about to clear the counter")
    counter =0
    counterEl.innerHTML = counter;
    borderEl.style.background = 'rgb(138,43,226)';
}
incrcounterBtn.addEventListener("click",incrCounter)
decrcounterBtn.addEventListener("click",decrCounter)
clearcounterBtn.addEventListener("click",clearCounter)