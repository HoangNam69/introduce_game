
// Xử lý dark mode + light mode:
var mode_Page = document.getElementById('modePage')
var mode_count = sessionStorage.getItem("mode_count")
if (mode_count === null) {
    mode_count = 1
    sessionStorage.setItem('mode_count', mode_count);
} else {
    mode_count = parseInt(mode_count);
}

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

if (mode_count % 2 == 0) {
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
    // footer
    footer_Light.classList.add("light")
    footer_Contact_Light.classList.add("text-light-hover")
    // Start Home page
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
    // End Home page

}



mode_Page.addEventListener('click', (e) => {
    e.preventDefault();
    var header_Light = document.getElementById('header')
    var li_NavHeader = document.querySelectorAll('ul.nav-header li');
    var footer_Light = document.getElementById("footer")
    var footer_Contact_Light = document.querySelector("#footer a i")
    // Start Home page
    var banner_Light = document.getElementById('banner');
    var banner_Text_Light = document.querySelectorAll(".banner-title, .banner-server-text")
    var notifications_Light = document.getElementById("notifications")
    var noti_Name_light = document.getElementById('noti-name')
    var noti_item = document.querySelectorAll(".notifications-information, .swiper-slide")
    var noti_Title = document.querySelectorAll(".notifications-title , .notifications-sub-title, .swiper-slide .content .title")
    var noti_Info_Description = document.getElementById("noti-info-description")
    var advertise_Light = document.getElementById("advertise")
    // End Home page


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
        // footer
        footer_Light.classList.add("light")
        footer_Contact_Light.classList.add("text-light-hover")
        // Start Home page
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
        // End Home page

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
        // footer
        footer_Light.classList.remove("light")
        footer_Contact_Light.classList.remove("text-light-hover")
        // Start Home page
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
        // End Home page
    }
    mode_count++;
    sessionStorage.setItem('mode_count', mode_count)
})