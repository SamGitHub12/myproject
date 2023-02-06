const btn = document.querySelector('button');
btn.addEventListener('click', displayMessage);

function displayMessage(event) {
    //event.preventDefault();
    const body = document.body;

    console.log("Here...")
    const panel = document.createElement('div');
    panel.setAttribute('class', 'msgBox');
    body.appendChild(panel);
    const msg = document.createElement('h1');
    msg.textContent = "Your data has been stored successfully.";
    panel.appendChild(msg);
    const closeBtn = document.createElement('button');
    closeBtn.textContent = 'x';
    panel.appendChild(closeBtn);
    closeBtn.addEventListener('click', () => panel.parentNode.removeChild(panel));
}
