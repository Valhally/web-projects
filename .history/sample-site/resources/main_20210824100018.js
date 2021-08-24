const spinner = document.querySelector('div');
let rotateCount = 0;
let rAF;
let startTime = null;
let isRun = true;

const body = document.querySelector('body');

function draw(timestamp) {
    if(!startTime) startTime = timestamp;

    rotateCount = (timestamp - startTime) / 3 % 360;

    spinner.style.transform = `rotate(${rotateCount}deg)`;

    rAF = requestAnimationFrame(draw);
}

draw();

body.onclick = function() {
    if(isRun) {
        cancelAnimationFrame(rAF);
    }
    else {
        draw();
    }
}