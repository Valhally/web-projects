let image = document.querySelector('img');

image.onclick = function() {
    let src = image.getAttribute('src');
    if(src === 'images/firefox.png') image.setAttribute('src', 'images/firefox2.png');
    else image.setAttribute('src', 'images/firefox.png');
}