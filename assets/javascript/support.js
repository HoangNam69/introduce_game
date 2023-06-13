var ask = document.querySelectorAll(".ask")
var question_sub_contents = document.querySelectorAll(".question-sub-contents")
ask.forEach((n, idx) => {
    n.addEventListener("click", () => {
        question_sub_contents.forEach((qsc, ele) => {
            if (idx != ele) {
                qsc.classList.remove("show_answer")
            }
        })
        if (window.getComputedStyle(question_sub_contents[idx]).getPropertyValue("display") == "none") {
            question_sub_contents[idx].classList.add("show_answer")
        } else {
            question_sub_contents[idx].classList.remove("show_answer")
        }
    })
})
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
    // End Staff page
}


mode_Page.addEventListener('click', (e) => {
    e.preventDefault();

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
        
    }
    mode_count++;
    localStorage.setItem('mode_count', mode_count)
})