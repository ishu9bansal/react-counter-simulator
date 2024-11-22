let count = 0;

function setCount(value){
    count = value;
    renderApp();
}

function renderApp() {
    const root = document.getElementById('root')
    root.innerHTML = '';

    const counterDiv = document.createElement('div');
    counterDiv.id = "counter";
    counterDiv.innerText = count;
    root.appendChild(counterDiv);

    const incrementButton = document.createElement('button');
    incrementButton.id = "increment";
    incrementButton.className = "button";
    incrementButton.innerText = "Increment";
    incrementButton.onclick = () => setCount(count + 1);
    root.appendChild(incrementButton);

    const resetButton = document.createElement('button');
    resetButton.id = "reset";
    resetButton.className = "button";
    resetButton.innerText = "Reset";
    resetButton.onclick = () => setCount(0);
    root.appendChild(resetButton);

    const messageDiv = document.createElement('div');
    messageDiv.id = "message";
    messageDiv.innerText = count > 10 ? "Threshold crossed!" : "";
    root.appendChild(messageDiv);
}

renderApp();
