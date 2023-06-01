// Copy text of btn-server in banner - home page
const btnServer = document.getElementById('btn-copy');
btnServer.addEventListener('click', (e) => {
    e.preventDefault();
    navigator.clipboard.writeText("Punshub.com");
    // show message successfully
    const message = document.getElementById('messCopy')
    message.classList.add("show-message-copy")
    setTimeout(() => {
        message.classList.remove("show-message-copy")
    }, 2000);
    // sound click buttom
    const click_Sound = document.getElementById('clickSound');
    click_Sound.play();

})

