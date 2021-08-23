const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* 添加图片循环 */
for(let i = 1; i <= 5; ++i) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/pic' + i + '.jpg');
    thumbBar.appendChild(newImage);

    newImage.onclick = function(event) {
        displayedImage.setAttribute('src', event.target.getAttribute('src'));
    } 
}

btn.onclick = function() {
    if(btn.getAttribute('class') === 'dark') {
        btn.setAttribute('class', 'light');
        overlay.textContent = '变亮';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    }
    else {
        btn.setAttribute('class', 'dark');
        overlay.textContent = '变暗';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    }
}
