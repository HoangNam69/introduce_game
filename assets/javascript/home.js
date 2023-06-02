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


// Xử lý hiện ứng scroll hiển thị nội dung
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 200;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("show");
        } else {
            reveals[i].classList.remove("show");
        }
    }
}

window.addEventListener("scroll", reveal);