
var dataRank = [
    {
        rank_card_title: "ACE",
        url: "/assets/img/rank/ace.png",
        price: 44.99,
        prefix: "/assets/img/rank/description/aceYou.png",
        info: [
            {
                sub_title: "Perks",
                content: [
                    "Prefix:",
                    "Highest priority in the queue",
                    "Restricted Hub with YouTubers & Staff",
                    "Join Messages (<span class='hight-light'>Hubs</span>)",
                    "/club create (<span class='hight-light'>Up to 50 members</span>)",
                    "/color (<span class='hight-light'>Change your name color</span>)",
                    "/disguise (<span class='hight-light'>Change your in-game name</span>)",
                    "Flying enabled in lobbies",
                    "Support the server!"
                ]
            }, {
                sub_title: "Practice",
                content: [
                    "Sidebar customization",
                    "9 Cosmetic Armor colors",
                    "4 Boxing Sword cosmetics",
                    "/tournament host (<span class='hight-light'>Host your own tournaments</span>)",
                    "/tournament start (<span class='hight-light'>Force-start your tournaments</span>)",
                    "/party announce (<span class='hight-light'>Promote your party to the server</span>)",
                    "Duels Map Selector (<span class='hight-light'>100+ Maps</span>)",
                    "/tpv (<span class='hight-light'>See players in the lobby</span>)",
                    "/event host (<span class='hight-light'>Host your own events</span>)",
                    "9 Death Effects"
                ]
            }, {
                sub_title: "Mini Games",
                content: [
                    "/announce (<span class='hight-light'>Alert entire network to join</span>)"
                ]
            }
        ]
    },
    {
        rank_card_title: "MVP",
        url: "/assets/img/rank/mvp.png",
        price: 29.99,
        prefix: "/assets/img/rank/description/mvpYou.png",
        info: [
            {
                sub_title: "Perks",
                content: [
                    "Prefix:",
                    "#2 highest priority in the queue",
                    "More Friends (<span class='hight-light'>Up to 200</span>)",
                    "/club create (<span class='hight-light'>Up to 35 members</span>)",
                    "/color (<span class='hight-light'>Change your name color</span>)",
                    "Flying enabled in lobbies",
                    "Support the server!"
                ]
            }, {
                sub_title: "Practice",
                content: [
                    "Sidebar customization",
                    "9 Cosmetic Armor colors",
                    "4 Boxing Sword cosmetics",
                    "/tournament host (<span class='hight-light'>Host your own tournaments</span>)",
                    "/party announce (<span class='hight-light'>Promote your party to the server</span>)",
                    "Duels Map Selector (<span class='hight-light'>100+ Maps</span>)",
                    "/tpv (<span class='hight-light'>See players in the lobby</span>)",
                    "/event host (<span class='hight-light'>Host your own events</span>)",
                    "9 Death Effects"
                ]
            }, {
                sub_title: "Mini Games",
                content: [
                    "/announce (<span class='hight-light'>Alert entire network to join</span>)"
                ]
            }
        ]
    },
    {
        rank_card_title: "PRO",
        url: "/assets/img/rank/pro.png",
        price: 14.99,
        prefix: "/assets/img/rank/description/proYou.png",
        info: [
            {
                sub_title: "Perks",
                content: [
                    "Prefix:",
                    "#3 highest priority in the queue",
                    "More Friends (<span class='hight-light'>Up to 175</span>)",
                    "/club create (<span class='hight-light'>Up to 25 members</span>)",
                    "/color (<span class='hight-light'>Change your name color</span>)",
                    "Flying enabled in lobbies",
                    "Support the server!"
                ]
            }, {
                sub_title: "Practice",
                content: [
                    "Duels Map Selector (<span class='hight-light'>100+ Maps</span>)",
                    "/tpv (<span class='hight-light'>See players in the lobby</span>)",
                    "/event host (<span class='hight-light'>Host your own events</span>)",
                    "Basic Cosmetic Armor",
                    "9 Death Effects"
                ]
            }, {
                sub_title: "Mini Games",
                content: [
                    "/announce (<span class='hight-light'>Alert entire network to join</span>)"
                ]
            }
        ]
    },
    {
        rank_card_title: "VIP",
        url: "/assets/img/rank/vip.png",
        price: 7.49,
        prefix: "/assets/img/rank/description/vipYou.png",
        info: [
            {
                sub_title: "Perks",
                content: [
                    "Prefix:",
                    "#4 highest priority in the queue",
                    "More Friends (<span class='hight-light'>Up to 150</span>)",
                    "Flying enabled in lobbies",
                    "Bypass chat cooldown",
                    "Support the server!"
                ]
            },
            {
                sub_title: "Practice",
                content: [
                    "9 Death Effects"
                ]
            }
        ]
    }
];

// var el = dataRank[0].



var btn_View = document.querySelectorAll(".btn-view")
var rank_Card_Armorial = document.querySelectorAll(".rank-card-armorial")
var btn_close = document.getElementById("modal-close")
var modal = document.getElementById("modal")
var img_Armorial = document.querySelector(".modal-armorial img")
var name_Armorial = document.querySelector(".modal-armorial .name-armorial")
var price_Arimorial = document.querySelector(".modal-armorial .handle .price .number")
var modal_Information = document.querySelector(".modal-description .modal-info")


btn_close.addEventListener("click", () => {
    modal.style.display = "none"
})

btn_View.forEach((n, index) => {
    n.addEventListener("click", (e) => {
        modal.style.display = "block"
        dataRank.forEach((elements, i) => {
            if (index == i) {
                img_Armorial.src = dataRank[i].url
                name_Armorial.innerHTML = dataRank[i].rank_card_title
                price_Arimorial.innerHTML = dataRank[i].price
                var xhtml = ""
                dataRank[i].info.forEach(j => {
                    xhtml += `<div class="modal-sub-title">` + j.sub_title + `</div>`
                    xhtml += `<ul class="modal-list-description">`
                    j.content.forEach(k => {
                        if (k == "Prefix:") {
                            console.log(dataRank[i].prefix)
                            xhtml += `<li>` + k + `<img src="` + dataRank[i].prefix + `">` + `</li>`
                        } else {
                            xhtml += `<li>` + k + `</li>`
                        }
                    })
                    xhtml += `</ul>`
                })
                modal_Information.innerHTML = xhtml
            }
        });
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
var rank_light = document.getElementById("rank")
var rank_Card_Light = document.querySelectorAll(".rank-card")
var rank_Card_Title_light = document.querySelectorAll(".rank-card-title")
var modal_Content_Light = document.querySelector("#modal .modal-content")
var modal_Armorial_Light = document.querySelector("#modal .modal-content .modal-armorial")
var modal_price = document.querySelector("#modal .handle .price")

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
    // banner
    banner_Light.classList.add("banner-light", "banner-text-black-light")
    // footer
    footer_Light.classList.add("light")
    footer_Contact_Light.classList.add("text-light-hover")
    // Start rank
    rank_light.classList.add("light-rank-bg")
    rank_Card_Light.forEach(i => {
        i.classList.add("light")
    })
    rank_Card_Title_light.forEach(i => {
        i.classList.add("light-rank-title-bg")
    })
    modal_Content_Light.classList.add("light-modal-content-bg")
    modal_Armorial_Light.classList.add("light-modal-bg")
    modal_price.classList.add("banner-text-black-light")
    // End rank
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
        // banner
        banner_Light.classList.add("banner-light", "banner-text-black-light")
        // footer
        footer_Light.classList.add("light")
        footer_Contact_Light.classList.add("text-light-hover")
        // Start rank
        rank_light.classList.add("light-rank-bg")
        rank_Card_Light.forEach(i => {
            i.classList.add("light")
        })
        rank_Card_Title_light.forEach(i => {
            i.classList.add("light-rank-title-bg")
        })
        modal_Content_Light.classList.add("light-modal-content-bg")
        modal_Armorial_Light.classList.add("light-modal-bg")
        modal_price.classList.add("banner-text-black-light")
        // End rank

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
        banner_Light.classList.remove("banner-light", "banner-text-black-light")
        // footer
        footer_Light.classList.remove("light")
        footer_Contact_Light.classList.remove("text-light-hover")
        // Start rank
        rank_light.classList.remove("light-rank-bg")
        rank_Card_Light.forEach(i => {
            i.classList.remove("light")
        })
        rank_Card_Title_light.forEach(i => {
            i.classList.remove("light-rank-title-bg")
        })
        modal_Content_Light.classList.remove("light-modal-content-bg")
        modal_Armorial_Light.classList.remove("light-modal-bg")
        modal_price.classList.remove("banner-text-black-light")
        // End rank
    }
    mode_count++;
    localStorage.setItem('mode_count', mode_count)
})

