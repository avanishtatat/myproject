var data = [
    {
        imgUrl:"https://th.bing.com/th/id/OIP.yPUXbMzOhsNQf0WlEr-GXgHaHa?w=201&h=201&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        name:"LATEST MEN’S SNEAKER",
        price:"$25.00",
        strikedOffPrice:"$95.00"
    },{
        imgUrl:"https://th.bing.com/th/id/OIP.JxxS_vGFOXBQUlIxCdqpPQHaHa?w=189&h=189&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        name:"LATEST MEN’S SNEAKER",
        price:"$35.00",
        strikedOffPrice:"$100.00"
    },{
        imgUrl:"https://th.bing.com/th/id/OIP.wYsjIMSB58MqHEreJlleJQHaHa?w=225&h=220&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        name:"LATEST MEN’S SNEAKER",
        price:"$35.00",
        strikedOffPrice:"$100.00"
    },
    {
        imgUrl:"https://th.bing.com/th/id/OIP.kWsvyj5yIL7D-Uu1IKpNMgHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        name:"LATEST MEN’S SNEAKER",
        price:"$35.00",
        strikedOffPrice:"$100.00"
    }
]

data.map(function(el){
    var div = document.createElement("div");
    var image = document.createElement("img");
    image.setAttribute("id","image")
    image.src = el.imgUrl
    var text = document.createElement("p");
    text.setAttribute("class","class")
    text.innerText = el.name;
    var price = document.createElement('h5');
    price.setAttribute("class","class")
    price.innerText = el.price;
    var strPrice = document.createElement("span");
    strPrice.setAttribute("class","class class1")
    strPrice.innerText = el.strikedOffPrice;
    price.append(strPrice)
    div.append(image,text,price)
    document.querySelector("#container").append(div);
})