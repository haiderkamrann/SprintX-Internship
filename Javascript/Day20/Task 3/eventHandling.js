// let btn = document.getElementById('submit');

document.addEventListener('DOMContentLoaded', () => {
    let btn = document.createElement("button");
    btn.innerText = "Click me to Change Text";
    btn.id = "changeText";
    document.body.appendChild(btn);

    btn.addEventListener('click', () => {
        btn.innerHTML = 'Text Changed!'
    })

    btn.style = "padding: 10px 20px; background-color: green; color: white; border: none; border-radius: 12px;"
})

