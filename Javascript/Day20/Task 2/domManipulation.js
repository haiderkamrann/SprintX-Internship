let text = document.getElementById('main-heading');
let btn = document.getElementById('submit')

setTimeout(() => {
    text.innerHTML = "WEB TECH!"
}, 2000)

document.addEventListener('DOMContentLoaded', function () {
    function changeTextColor() {
        const colors = ['red', 'blue', 'green'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        const text = document.getElementById('main-heading');
        text.style.color = randomColor;
    }

    setInterval(() => {
        changeTextColor();
    }, 2000);

    window.changeTextColor = changeTextColor;
});

btn.style.cssText = 'padding: 10px 15px; background-color: green; color: white; border: none; border-radius: 10px;';