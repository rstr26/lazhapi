var cartCount = document.getElementById('cart-count');
var template = ``;
var target = document.getElementById('cart-container');

const fetchCartCount = async () => {
    lazhapi.cart.retrieve().then((response) => {
        cartCount.innerHTML = response.total_items;
        //console.log(response)
    })
}

const fetchCart = async () => {
    const fetch = await lazhapi.cart.retrieve().then((response) => {

        for(let i = 0; i < response.line_items.length; i++){
            var a = document.createElement("div");
            a.setAttribute("class", "cartContents")
            a.setAttribute("data-prod-id", response.line_items[i].product_id)
            a.setAttribute("onclick", "viewProduct(this)")
            a.innerHTML =`
            <img src="${response.line_items[i].media.source}" alt="">
            <h3>${response.line_items[i].product_name}</h3>
            <h3>${response.line_items[i].price.formatted_with_symbol}</h3>
            <h4>Quantity: ${response.line_items[i].quantity}</h4>
            `;

            target.appendChild(a);
        }console.log(target)
    });
}

const emptyCart = async () => {
    if(confirm("Are you sure to empty cart?")){
        lazhapi.cart.empty().then((next) => {
            fetchCartCount();
            location.reload();
        })
        alert("Cart is now empty!")
    }
}

const viewProduct = async (id) => {
    const productId = id.getAttribute("data-prod-id")
    var target = document.getElementById('product');
    var template = ``;
    const hide = document.getElementById('cart');
    const show = document.getElementById('view-product');

    hide.style.display = "none";
    show.style.display = "block";
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
        target.innerHTML = template

    })
    target.innerHTML = template;
}
