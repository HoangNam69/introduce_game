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

// Xử lý dark mode + light mode:
var mode_Page = document.getElementById('modePage')
let mode_count = 1
mode_Page.addEventListener('click', (e) => {
    var header_Light = document.getElementById('header')
    var li_NavHeader = document.querySelectorAll('ul.nav-header li');
    var banner_Light = document.getElementById('banner');
    var banner_Text_Light = document.querySelectorAll(".banner-title, .banner-server-text")
    var notifications_Light = document.getElementById("notifications")
    var noti_Name_light = document.getElementById('noti-name')
    var noti_item = document.querySelectorAll(".notifications-information, .swiper-slide")
    var noti_Title = document.querySelectorAll(".notifications-title , .notifications-sub-title, .swiper-slide .content .title")
    var noti_Info_Description = document.getElementById("noti-info-description")
    var advertise_Light = document.getElementById("advertise")
    var footer_Light = document.getElementById("footer")
    var footer_Contact_Light = document.querySelector("#footer a i")

    if (mode_count % 2 != 0) {
        // Change icon
        mode_Page.classList.remove("light-mode", "bxs-sun")
        mode_Page.classList.add("dark-mode", "bxs-moon")
        // header
        header_Light.classList.add("light")
        // nav header
        li_NavHeader.forEach(i => {
            var a = i.querySelectorAll('a');
            a.forEach(j => {
                if (j.className !== "nav-under") {
                    j.classList.add("text-light-hover");
                } else if (j.className === "nav-under") {
                    j.classList.add("text-light");
                }

            });
        });
        // banner
        banner_Light.classList.add("banner-light")
        banner_Text_Light.forEach(i => {
            i.classList.add("banner-text-light")
        })
        // notifications
        notifications_Light.classList.add('light')
        noti_Name_light.classList.add('text-light')
        noti_item.forEach(item => {
            item.classList.add("notification-item")
        });
        noti_Title.forEach(item => {
            item.classList.add("text-light")
        })
        noti_Info_Description.classList.add("noti-infomation-description")
        // advertise
        advertise_Light.classList.add("banner-light")
        // footer
        footer_Light.classList.add("light")
        footer_Contact_Light.classList.add("text-light-hover")
    } else if (mode_count % 2 == 0) {
        // Change icon
        mode_Page.classList.remove("dark-mode", "bxs-moon")
        mode_Page.classList.add("light-mode", "bxs-sun")
        // header
        header_Light.classList.remove("light")
        // nav header
        li_NavHeader.forEach(i => {
            var a = i.querySelectorAll('a');
            a.forEach(j => {
                if (j.className !== "nav-under") {
                    j.classList.remove("text-light-hover");
                }
                j.classList.remove("text-light");
            });
        });
        // banner
        banner_Light.classList.remove("banner-light")
        banner_Text_Light.forEach(i => {
            i.classList.remove("banner-text-light")
        })
        // notifications
        notifications_Light.classList.remove('light')
        noti_Name_light.classList.remove('text-light')
        noti_item.forEach(item => {
            item.classList.remove("notification-item")
        });
        noti_Title.forEach(item => {
            item.classList.remove("text-light")
        })
        noti_Info_Description.classList.remove("noti-infomation-description")
        advertise_Light.classList.remove("banner-light")
        // footer
        footer_Light.classList.remove("light")
        footer_Contact_Light.classList.remove("text-light-hover")
    }
    mode_count++;
})