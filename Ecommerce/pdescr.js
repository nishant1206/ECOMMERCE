// const details = require("./Product.json");

var btns = document.getElementsByClassName("btn");

let price = document.getElementsByClassName("price");

let Qty_prod = 0;

let qty = document.getElementById("qty");

var products = [
    // "Products" : {
        [
            "product1",
            23 ,
            "newsroom-innovation-13th-gen-intel-core-1-feat.jpg.rendition.intel_.web_.1648.927.jpg",
            "This is Product 1",
            1
        ],
        [
            "product2",
            32 ,
            "newsroom-innovation-13th-gen-intel-core-1-feat.jpg.rendition.intel_.web_.1648.927.jpg",
            "This is Product 1",
            1
        ],
        [
            "product3",
            13 ,
            "newsroom-innovation-13th-gen-intel-core-1-feat.jpg.rendition.intel_.web_.1648.927.jpg",
            "This is Product 1",
            1
        ],
        [
            "product4",
            15 ,
            "newsroom-innovation-13th-gen-intel-core-1-feat.jpg.rendition.intel_.web_.1648.927.jpg",
            "This is Product 1",
            1
        ]
    // }
    ];

window.addEventListener("load", ()=>{
    for (var i = 0; i < price.length; i++){
        price[i].innerHTML = products[i][1];
        console.log(products[i][1]);
    }
    qty.innerText = `${Qty_prod}`;
});

function func(){
    count++;
    qty.innerText = `${Qty_prod}`;
}