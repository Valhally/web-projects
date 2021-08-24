const spinner = document.querySelector('div');
let rotateCount = 0;
let rAF;
let startTime = null;

function draw(timestamp) {
    if(!startTime) startTime = timestamp;
}