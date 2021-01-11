var cartCount = document.getElementById('cart-count');

const cart = async () => {
    lazhapi.cart.retrieve().then((response) => {
        cartCount.innerHTML = response.total_items
    });
}

const fetchGadgets = async() => {
    var {data} = await lazhapi.products.list();
    var template = ``;
    var target = document.getElementById('product-cont')

    for(let items of data){
        for(let i = 0; i < items.categories.length; i++){
            if(items.categories[i].name == "Gadgets"){
                template = `
                <div class="product" data-prod-id="${items.id}" onclick="viewProduct(this)">
                <img src="${items.media.source}">
                <h3>${items.name}</h3>
                <h3>${items.price.formatted_with_symbol}</h3>
                </div>
                `
                target.innerHTML += template
            }
        }
    }
}

const fetchFashion = async () => {
    var {data} = await lazhapi.products.list();
    var template = ``;
    var target = document.getElementById('product-cont')

    for(let items of data){
        for(let i = 0; i < items.categories.length; i++){
            if(items.categories[i].name == "Fashion"){
                template = `
                <div class="product" data-prod-id="${items.id}" onclick="viewProduct(this)">
                <img src="${items.media.source}">
                <h3>${items.name}</h3>
                <h3>${items.price.formatted_with_symbol}</h3>
                </div>
                `
                target.innerHTML += template
                console.log(items)
            }
        }
    }
}

const fetchFurniture = async () => {
    var {data} = await lazhapi.products.list();
    var template = ``;
    var target = document.getElementById('product-cont')

    for(let items of data){
        for(let i = 0; i < items.categories.length; i++){
            if(items.categories[i].name == "Furniture"){
                template = `
                <div class="product" data-prod-id="${items.id}" onclick="viewProduct(this)">
                <img src="${items.media.source}">
                <h3>${items.name}</h3>
                <h3>${items.price.formatted_with_symbol}</h3>
                </div>
                `
                target.innerHTML += template
            }
        }
    }
}

const fetchTools = async () => {
    var {data} = await lazhapi.products.list();
    var template = ``;
    var target = document.getElementById('product-cont')

    for(let items of data){
        for(let i = 0; i < items.categories.length; i++){
            if(items.categories[i].name == "Tools"){
                template = `
                <div class="product" data-prod-id="${items.id}" onclick="viewProduct(this)">
                <img src="${items.media.source}">
                <h3>${items.name}</h3>
                <h3>${items.price.formatted_with_symbol}</h3>
                </div>
                `
                target.innerHTML += template
            }
        }
    }
}

const fetchBooks = async () => {
    var {data} = await lazhapi.products.list();
    var template = ``;
    var target = document.getElementById('product-cont')

    for(let items of data){
        for(let i = 0; i < items.categories.length; i++){
            if(items.categories[i].name == "Books"){
                template = `
                <div class="product" data-prod-id="${items.id}" onclick="viewProduct(this)">
                <img src="${items.media.source}">
                <h3>${items.name}</h3>
                <h3>${items.price.formatted_with_symbol}</h3>
                </div>
                `
                target.innerHTML += template
                console.log(items)
            }
        }
    }
}

const viewProduct = async (id) => {
    const productId = id.getAttribute("data-prod-id")
    var target = document.getElementById('product');
    var target1 = document.getElementById('add-cart');
    var template = ``;
    
    const products = await lazhapi.products.retrieve(productId).then((product) => {
        template = `
        <div class="product-image">
            <img src="${product.media.source}" alt="">
        </div>

        <div class="product-details">
            <h1>${product.name}</h1>
            <h2>${product.price.formatted_with_symbol}</h2>
            <br><br>
            <h4>Product Description:<h4><br>
            <h4>${product.description}</h4>
        </div>
        `;
        document.getElementById('content').style.display = "none";
        document.getElementById('view-product').style.display = "block";
        target1.setAttribute("data-prod-id", product.id)
    })
    target.innerHTML = template;
}