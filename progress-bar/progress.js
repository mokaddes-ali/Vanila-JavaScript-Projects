const progress = document.querySelector(".progress-done");
const input = document.querySelector(".input");
const maxInput = document.querySelector(".maxInput");

let finalValue = 0;
let max = 0;

function changeWidth() {
    if (max === 0) return;

    const percent = Math.min((finalValue / max) * 100, 100);

    progress.style.width = percent + "%";
    progress.innerText = Math.ceil(percent) + "%";
    if(percent<40){
        progress.style.background = "#e74c3c";
    } else if( percent<70){
        progress.style.background = "#f39c12";
    } else{
        progress.style.background = "#2ecc71";
    }
}

input.addEventListener("keyup", function () {
    finalValue = parseInt(input.value, 10) || 0;
    changeWidth();
});

maxInput.addEventListener("keyup", function () {
    max = parseInt(maxInput.value, 10) || 0;
    changeWidth();
});
