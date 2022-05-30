// Add the coffee to local storage with key "coffee"
//api :- https://masai-mock-api.herokuapp.com/coffee/menu

const url= "https://masai-mock-api.herokuapp.com/coffee/menu";
fetch(url)
      .then(function(res){
          return res.json()
      })
      .then(function(res){
          //console.log(res);
          displayitems(res)
      })
      .catch(function(err){
          console.log(err);
      });

      let menu= document.querySelector("#menu");
      function displayitems(res){
          console.log(res.menu.data);
          res.menu.data.map(function(el){
            let box=document.createElement("div");
            // box.setAttribute("id","bucket");
            let image= document.createElement("img")
            image.src=el.image;
            let title= document.createElement("h4")
            title.innerText=el.title;
            let price=document.createElement("p");
            price.innerText=el.price;
            let btn=document.createElement("button")
            btn.setAttribute("id","add_to_bucket");
            btn.innerText="add to bucket";
            btn.style.backgroundColor="green";
            btn.addEventListener("click",function(){
                addToBucket(el);
            });

            box.append(image,title,price,btn);
            document.querySelector("#menu").append(box);
          })

      }

      let cart= JSON.parse(localStorage.getItem("coffee"))||[];
      function addToBucket(el){
          cart.push(el);
          localStorage.setItem("coffee",JSON.stringify(cart));
          window.location.reload();
      }

      let count=document.querySelector("#coffee_count");
      count.innerText=cart.length;