let input = document.getElementById('inputBox');

input.addEventListener('keydown', (e) => {
    let keypressed = e.key;
    let keyString = e.key.toString();

    console.log(keyString);
});