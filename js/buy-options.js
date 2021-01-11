var cartCount = document.getElementById('cart-count');
var hide = document.getElementById('pay-opt');

const cart = async () => {
    lazhapi.cart.retrieve().then((response) => {
        cartCount.innerHTML = response.total_items
    });
}
function showCod() {
    var show = document.getElementById('cod');

    hide.style.display="none";
    show.style.display="block";
}

function showCc() {
    var show = document.getElementById('cc');

    hide.style.display="none";
    show.style.display="block";
}

function payOpt(){
    const a = document.getElementById('cod');
    const b = document.getElementById('cc');
    const c = document.getElementById('pay-opt');

    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "block";
}

function fieldValidationCod(){
    const check1 = document.getElementById('cod-1');
    const check2 = document.getElementById('cod-2');
    const check3 = document.getElementById('cod-3');
    const check4 = document.getElementById('cod-4');
    const check5 = document.getElementById('cod-5');
    const check6 = document.getElementById('cod-6');
    const check7 = document.getElementById('cod-7');
    const check8 = document.getElementById('cod-8');

    if(check1.value == "" || check2.value == "" || check3.value == "" || check4.value == "" || check5.value == "" || check6.value == "" || check7.value == "" || check8.value == ""){
        alert("Please fill out all the fields");
    }
    else{
        location.href="order-placed.html"
    }
}

function fieldValidationCc(){
    const check1 = document.getElementById('cc-1');
    const check2 = document.getElementById('cc-2');
    const check3 = document.getElementById('cc-3');
    const check4 = document.getElementById('cc-4');
    const check5 = document.getElementById('cc-5');
    const check6 = document.getElementById('cc-6');
    const check7 = document.getElementById('cc-7');
    const check8 = document.getElementById('cc-8');
    const check9 = document.getElementById('cc-9');
    const check10 = document.getElementById('cc-10');
    const check11 = document.getElementById('cc-11');

    if(check1.value == "" || check2.value == "" || check3.value == "" || check4.value == "" || check5.value == "" || check6.value == "" || check7.value == "" || check8.value == "" || check9.value == "" || check10.value == "" || check11.value == ""){
        alert("Please fill out all the fields");
    }
    else{
        location.href="order-placed.html"
    }
}