// document.getElementById('third').style.color='green';
// document.querySelector('.green').style.color = 'green';
const green = document.querySelector('.green');
green.onclick = greenFn;

function greenFn() {
    green.style.color = 'green';
}