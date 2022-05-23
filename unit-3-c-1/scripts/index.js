//store the products array in localstorage as "products"


function product(t,d,p,ig){
    this.Type=t;
    this.Desc=d;
    this.Price=p;
    this.Img=ig;
}

function addData(e){
    e.preventDefault();

    let form =document.getElementById("“products");
    let Type=form.type.value;
    let Desc=form.desc.value;
    let Price=form.price.value;
    let Img=form.image.value;

    let p1=new product(Type,Desc,Price,Img)

    let data=JSON.parse(localStorage.getItem("products")) || []
    data.push(p1);

    
    localStorage.setItem("products",JSON.stringify(data));

    console.log(p1)
    
}


