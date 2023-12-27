console.clear();

const products = [{
        id: 0,
        name: "Air Force",
        price: "$149",
        colors: [{
                color: "#000",
                img: "https://github.com/safak/youtube/blob/html-css-js-ecommerce/img/air.png?raw=true"
            },
            {
                color: "#01008C",
                img: "https://github.com/safak/youtube/blob/html-css-js-ecommerce/img/air2.png?raw=true"
            }

        ]

    }, {
        id: 1,
        name: "Air Jordan",
        price: "$149",
        colors: [{
                color: "#ddd",
                img: "https://github.com/safak/youtube/blob/html-css-js-ecommerce/img/jordan.png?raw=true"
            },
            {
                color: "#6e6",
                img: "https://github.com/safak/youtube/blob/html-css-js-ecommerce/img/jordan2.png?raw=true"
            }
        ]
    },
    {
        id: 2,
        name: "Blazer Nike",
        price: "$109",
        colors: [{
            color: "#fff",
            img: "https://github.com/safak/youtube/blob/html-css-js-ecommerce/img/blazer.png?raw=true"
        }, {
            color: "#1b1",
            img: "https://github.com/safak/youtube/blob/html-css-js-ecommerce/img/blazer2.png?raw=true"
        }]
    },
    {
        id: 3,
        name: "Crater",
        price: "$129",
        colors: [{
                color: "#555",
                img: "https://github.com/safak/youtube/blob/html-css-js-ecommerce/img/crater.png?raw=true"
            },
            {
                color: "#ccc",
                img: "https://github.com/safak/youtube/blob/html-css-js-ecommerce/img/crater2.png?raw=true"
            }
        ]
    },
    {
        id: 4,
        name: "Hippie",
        price: "$129",
        colors: [{
                color: "#888",
                img: "https://github.com/safak/youtube/blob/html-css-js-ecommerce/img/hippie.png?raw=true"
            },
            {
                color: "#222",
                img: "https://github.com/safak/youtube/blob/html-css-js-ecommerce/img/hippie2.png?raw=true"
            }
        ]
    }
];

const shoesCards = document.querySelector(".shoesCards"),
cards = document.querySelectorAll(".card"),
shoeLinks = document.querySelectorAll(".shoeLink");

const shoeImg = document.querySelector(".shoeImg"),
shoeName = document.querySelector(".shoeName"),
shoePrice = document.querySelector(".shoePrice"),
chooseColors = document.querySelectorAll(".chooseColor"),
shoeSize = document.querySelectorAll(".size"),
buyBtn = document.getElementById("buyBtn"),
closeBtn = document.querySelector(".close"),
paymentCon = document.querySelector(".paymentCon");

shoesCards.style.transform = `translateX(200vw)`;

let chosenShoe = products[0];

shoeLinks.forEach((item, index) =>{
    item.addEventListener("click", ()=>{
        shoesCards.style.transform = `translateX(${index * -100 + 200}vw)`;
        
        chosenShoe = products[index];

        shoeName.textContent = chosenShoe.name;
        shoePrice.textContent= chosenShoe.price;
        shoeImg.src = chosenShoe.colors[0].img;

        chooseColors.forEach((color, i) =>{
            color.style.backgroundColor = chosenShoe.colors[i].color;
        });
    });
});

chooseColors.forEach((color, index)=>{
    color.addEventListener("click", ()=>{
        shoeImg.src = chosenShoe.colors[index].img
    });
});

shoeSize.forEach((size,index) =>{
    size.addEventListener("click", () =>{
        document.querySelector(".active").classList.remove("active");
        
        size.classList.add("active");
    });
});

buyBtn.addEventListener("click",()=>{
    paymentCon.style.display = "flex";

    closeBtn.addEventListener("click", ()=>{
        paymentCon.style.display = "none";

    });
});

