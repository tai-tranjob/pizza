function calcTotal(price) {
  var quantity = document.getElementById('quantity')
  var total = document.getElementById('totalPrice')
  total.innerHTML = quantity.value * price;
  document.getElementById('pay_amount').value = parseInt(document.getElementById('totalPrice').innerHTML)
}
// const orderStatus = document.querySelector('#order_status')
// if(orderStatus.innerHTML == "Delivered")
//     orderStatus.style.color = "green"

const orderStatus = document.getElementsByClassName("order_status")
for (let i=0;i<orderStatus.length;i++){
    if(orderStatus[i].textContent== "Delivered"){
        orderStatus[i].style.color = "green"
    }
    if(orderStatus[i].textContent=="Issued"){
      orderStatus[i].style.color = "red"
    }
}

let text_parallax = document.getElementById('text_parallax')
let burger = document.getElementById('burger')

window.addEventListener('scroll', () => {
  let value = window.scrollY;

  text_parallax.style.marginTop = value * 1 + 'px';
});
