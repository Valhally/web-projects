let promise = fetch('images/coffee.jpg');
let promise2 = promise.then(response => {
    if(!response.ok) 
        throw new Error(`Http error! stuatus: ${response.status}`);
    else
        return response.blob();
});
let promise3 = promise2.then(myBlob => {
    let objectURL = URL.createObjectURL(myBlob);
    let image = document.createElement('img');
    image.src = objectURL;
    document.body.appendChild(image);
});