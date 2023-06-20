
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
                sub_title:"Perks",
                content: [
                    "Prefix:",
                    "#2 highest priority in the queue",
                    "More Friends (<span class='hight-light'>Up to 200</span>)",
                    "/club create (<span class='hight-light'>Up to 35 members</span>)",
                    "/color (<span class='hight-light'>Change your name color</span>)",
                    "Flying enabled in lobbies",
                    "Support the server!"
                ]
            },{
                sub_title:"Practice",
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
            },{
                sub_title:"Mini Games",
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
                sub_title:"Perks",
                content: [
                    "Prefix:",
                    "#3 highest priority in the queue",
                    "More Friends (<span class='hight-light'>Up to 175</span>)",
                    "/club create (<span class='hight-light'>Up to 25 members</span>)",
                    "/color (<span class='hight-light'>Change your name color</span>)",
                    "Flying enabled in lobbies",
                    "Support the server!"
                ]
            } , {
                sub_title:"Practice",
                content: [
                    "Duels Map Selector (<span class='hight-light'>100+ Maps</span>)",
                    "/tpv (<span class='hight-light'>See players in the lobby</span>)",
                    "/event host (<span class='hight-light'>Host your own events</span>)",
                    "Basic Cosmetic Armor",
                    "9 Death Effects"
                ]
            },{
                sub_title:"Mini Games",
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
                sub_title:"Perks",
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
                sub_title:"Practice",
                content: [
                    "9 Death Effects"
                ]
            }
        ]
    }
];

// var el = dataRank[0].

console.log(dataRank[0].info[0].content[0])

var btn_View = document.querySelectorAll(".btn-view")
var rank_Card_Armorial = document.querySelectorAll(".rank-card-armorial")
var btn_close = document.getElementById("modal-close")
var modal = document.getElementById("modal")

btn_close.addEventListener("click", () => {
    modal.style.display = "none"
})

btn_View.forEach((n, index) => {
    n.addEventListener("click", (e) => {
        modal.style.display = "block"
        dataRank.forEach((elements, i) => {
            if (index == i) {
                
            }
        });
    })
})

