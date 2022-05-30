let checkout = document.querySelector("form");

checkout.addEventListener("submit",checkfun);

function checkfun(){
    event.preventDefault();

    setTimeout(func1,0)

    function func1(){
        alert("Your order is accepted ");
    }

    setTimeout(func2,3000)
    function func2(){
        alert("Your order is being Prepared");
    }
    
    setTimeout(func3,8000)
    function func3(){
        alert("Your order is being packed  ");
    }

    setTimeout(func4,10000)
    function func4(){
        alert("Your order is out for delivery ");
    }

    setTimeout(func5,12000)
    function func5(){
        alert("Order delivered");
    }
}
