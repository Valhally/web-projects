const spinner = document.querySelector('div');
let rotateCount = 0;
let rAF;
let startTime = null;

function draw(timestamp) {
    if(!startTime) startTime = timestamp;

    rotateCount = (timestamp - startTime) / 3 % 360;

    spinner.style.transform = `rotate(${rotateCount}deg)`;

    rAF = requestAnimationFrame(draw);
}

draw();