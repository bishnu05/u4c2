// On clicking remove button the item should be removed from DOM as well as localstorage.
let cart= JSON.parse(localStorage.getItem("coffee"));

let cartdiv= document.querySelector("#bucket");
let total=0;
for(var i=0;i<cart.length;i++){
    total=total+cart[i].price;
}

document.querySelector("#total_amount").innerText=total;

cart.map(function(el){
    console.log(el)
    let box=document.createElement("div");
            
    let image= document.createElement("img")
    image.src=el.image;
    let title= document.createElement("h2")
    title.innerText=el.title;
    let price=document.createElement("p");
    price.innerText=el.price;
    let btn=document.createElement("button");
    btn.innerText="Remove coffee";
    btn.setAttribute("id","remove_coffee");
    btn.style.backgroundColor="red";
    btn.addEventListener("click",function(){
        remove(el)
    });
    box.append(image,title,price,btn);
    document.querySelector("#bucket").append(box)
});

function remove(el){
    cart.splice(el,1)
    localStorage.setItem("coffee",JSON.stringify(cart));
     window.location.reload();
}
