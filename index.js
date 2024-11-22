let count = 0;

function setCount(value){
    count = value;
    document.dispatchEvent(new Event('CounterUpdated'));
}

function renderApp() {
    const root = document.getElementById('root');
    function updateComponent() {
        root.innerHTML = '';
        root.appendChild(renderComponent());
    }

    document.addEventListener('CounterUpdated', updateComponent, false);
    
    updateComponent();
}

function renderComponent() {
    const mainDiv = document.createElement('div');

    const counterDiv = document.createElement('div');
    counterDiv.id = "counter";
    counterDiv.innerText = count;
    mainDiv.appendChild(counterDiv);

    const incrementButton = document.createElement('button');
    incrementButton.id = "increment";
    incrementButton.className = "button";
    incrementButton.innerText = "Increment";
    incrementButton.onclick = () => setCount(count + 1);
    mainDiv.appendChild(incrementButton);

    const resetButton = document.createElement('button');
    resetButton.id = "reset";
    resetButton.className = "button";
    resetButton.innerText = "Reset";
    resetButton.onclick = () => setCount(0);
    mainDiv.appendChild(resetButton);

    const messageDiv = document.createElement('div');
    messageDiv.id = "message";
    messageDiv.innerText = count > 10 ? "Threshold crossed!" : "";
    mainDiv.appendChild(messageDiv);

    return mainDiv;
}

renderApp();
