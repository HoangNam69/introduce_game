
// Xử lý hiện ứng scroll hiển thị nội dung
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
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
let mode_count = localStorage.getItem("mode_count")
if (mode_count === null) {
    mode_count = 1
    localStorage.setItem('mode_count', mode_count);
} else {
    mode_count = parseInt(mode_count);
}



var header_Light = document.getElementById('header')
var li_NavHeader = document.querySelectorAll('ul.nav-header li');
var banner_Light = document.getElementById('banner');
var footer_Light = document.getElementById("footer")
var footer_Contact_Light = document.querySelector("#footer a i")
var staff = document.getElementById("staff")
var regency_title = document.querySelectorAll(".regency-title")
var text_name_light = document.querySelectorAll(".owner-name,.manager-title,.manager-name,.admin-name,.helper-name")
var department_In_Manager = document.querySelectorAll(".manager-survival, .manager-skyblock, .manager-ninjaschool")

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
    // Start Staff page
    // banner
    banner_Light.classList.add("banner-light", "banner-text-black-light")
    // background
    staff.classList.add("staff-background-light")
    // Reency title
    regency_title.forEach(i => {
        i.classList.add("regency-title-light")
    })
    // Text name 
    text_name_light.forEach(k => {
        k.classList.add("regency-name-light")
    })
    // Background department in manager
    department_In_Manager.forEach(g => {
        g.classList.add("manager-department-light")
    })
    // End Staff page
}


mode_Page.addEventListener('click', (e) => {
    e.preventDefault();
    var staff = document.getElementById("staff")
    var regency_title = document.querySelectorAll(".regency-title")
    var text_name_light = document.querySelectorAll(".owner-name,.manager-title,.manager-name,.admin-name,.helper-name")
    var department_In_Manager = document.querySelectorAll(".manager-survival, .manager-skyblock, .manager-ninjaschool")
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
        // Start Staff page
        // banner
        banner_Light.classList.add("banner-light", "banner-text-black-light")
        // background
        staff.classList.add("staff-background-light")
        // Reency title
        regency_title.forEach(i => {
            i.classList.add("regency-title-light")
        })
        // Text name 
        text_name_light.forEach(k => {
            k.classList.add("regency-name-light")
        })
        // Background department in manager
        department_In_Manager.forEach(g => {
            g.classList.add("manager-department-light")
        })
        // End Staff page
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
        // Start Staff page
        // banner
        banner_Light.classList.remove("banner-light", "banner-text-black-light")
        // background
        staff.classList.remove("staff-background-light")
        // Reency title
        regency_title.forEach(i => {
            i.classList.remove("regency-title-light")
        })
        // Text name 
        text_name_light.forEach(k => {
            k.classList.remove("regency-name-light")
        })
        // Background department in manager
        department_In_Manager.forEach(g => {
            g.classList.remove("manager-department-light")
        })
        // End Staff page
    }
    mode_count++;
    localStorage.setItem('mode_count', mode_count)
})