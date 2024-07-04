fetch("https://fakestoreapi.com/products")
.then((response)=>response.json())
// .then((data)=>console.log(data))
.then((data)=>{
    data.map((value)=>{
        // console.log(value.title);
        let card = `<div class="card" style="width: 18rem;">
        <img src="${value.image}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${value.title}</h5>
        <p class="card-text">${value.description}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>`
        document.getElementById("div").innerHTML+=card;
    })
})
