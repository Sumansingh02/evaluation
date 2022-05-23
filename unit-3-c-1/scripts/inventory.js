function append(){
    let data=JSON.parse(localStorage.getItem("products")) || []

    let all_products=document.getElementById("all_products")

    data.forEach(function (el,index){
        let div=document.createElement("div");
        let img=document.createElement("img");
        img.src=el.image;
        let type=document.createElement("p");
        p.innerText=el.type;
        let descr=document.createElement("p");
        p.innerText=el.desc;
        let price=document.createElement("p");
        p.innerText=el.price;

        let btn=document.createElement("button");
        btn.innerText=" Remove Product";

        btn.addEventListener("click",function({
            remove(index);
        }));

        div.append(img,type,descr,price,btn);
        all_products.append(div)

        
    });
}

append();

function remove(index){
    let data=JSON.parse(localStorage.getItem("products")) || [];

    let newdata=data.filter(function(el,i){
        return i!==index;
    });

    console.log(newdata)
}