let image = document.querySelector('img');

image.onclick = function() {
    let src = image.getAttribute('src');
    if(src === 'images/firefox.png') image.setAttribute('src', 'images/chrome.png');
    else image.setAttribute('src', 'images/firefox.png');
}

let button = document.querySelector('button');
let heading = document.querySelector('h1');

function setUserName() {
    myName = prompt('请输入你的名字');
    if(!myName || myName === null) setUserName();
    localStorage.setItem('name', myName);
    heading.textContent = '你好， ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let myName = localStorage.getItem('name');
    heading.textContent = '你好， ' + myName;
}

button.onclick = function() {
    setUserName();
}