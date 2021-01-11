var div_viewProduct = document.getElementById("view-product");
var div_featured = document.getElementById("featured");
var div_banner = document.getElementById("banner");
var div_categories = document.getElementById("categories");
var cartCount = document.getElementById('cart-count');

const featuredProducts = async () => {
    const {data} = await lazhapi.products.list();
    const target = document.getElementById('featured');
    var template = ``;
    let i = 0;
    for(let items of data){ 
        template = `
        <div class="product-card" data-prod-id="${items.id}" onclick="viewProduct(this)">
            <img src="${items.media.source}" alt="product">
            <h3>${items.name}</h3>
            <h3 class="price">${items.price.formatted_with_symbol}</h3>
        </div>
        `
        target.innerHTML += template
        i += 1
        if(i == 5){
            break;
        }
    }
    cart();
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
        div_banner.style.display = "none";
        div_viewProduct.style.display = "block";
        div_categories.style.display = "none";
        div_featured.style.display = "none"
        target1.setAttribute("data-prod-id", product.id)
    })
    target.innerHTML = template;
}

const cart = async () => {
    const lazhapi = new Commerce('pk_21415491f3a4fd43c3ae099e7b73f2b7569335ffe7ff5', true);
    lazhapi.cart.retrieve().then((response) => {
        cartCount.innerHTML = response.total_items
    });
}

const addToCart = async () => {
    const target = document.getElementById('add-cart');
    const prodId = target.getAttribute("data-prod-id");
    
    lazhapi.cart.add(prodId, 1).then((upd) => {
        cart();
    })
}

const normal = () => {
    div_banner.style.display = "block"
    div_categories.style.display = "flex"
    div_featured.style.display = "block"
    div_viewProduct.style.display = "none"
    cart();
}