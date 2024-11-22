let count = 0;

function renderApp() {
    document.getElementById('counter').innerText = count;
    const message = document.getElementById('message');
    if (count > 10) {
        message.innerText = "Threshold crossed!";
    } else {
        message.innerText = "";
    }
}

document.getElementById('increment').addEventListener('click', () => {
    count++;
    renderApp();
});

document.getElementById('reset').addEventListener('click', () => {
    count = 0;
    renderApp();
});
