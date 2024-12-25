let cart

try {
  cart = localStorage.getItem("cart") === null ? [] : JSON.parse(localStorage.getItem("cart"));
  loginToken = localStorage.getItem("login") === null ? "" : JSON.parse(localStorage.getItem("login"));
} catch (error) {
  console.error(error);
}


// Display amount of items in cart
const cartCount = document.getElementById("cartCount");
const cartCount2 = document.getElementById("cartCount2");

function updateCart() {
  const total = cart.reduce((accumulator, currentValue) => accumulator + (currentValue == null ? 0 : 1), 0,);
  cartCount.innerText = total;
  if (cartCount2 != null) {
    cartCount2.innerText = total;
  }
}


// Fixed cart button
const fixedCart = document.getElementById("fixedCart");

if (fixedCart != null) {
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 200) {
      fixedCart.classList.remove("d-none");
    } else {
      fixedCart.classList.add("d-none");
    }
  });
}



function handleAddspEvent(id) {
  if (cart[id] == null) {
    cart[id] = {
      id: id,
      amount: 1
    }
  } else {
    cart[id].amount = cart[id].amount + 1;
  }
  localStorage.setItem("cart", JSON.stringify(cart))

  updateCart();
}

function formatPrice(price) {
  let preRes = new Intl.NumberFormat().format(price);
  return (preRes.replaceAll(",", "."));
}


updateCart();


const addBtnList = document.querySelectorAll(".add-button");

addBtnList.forEach(button => {
  button.onclick = () => {
    const id = parseInt(button.nextElementSibling.value);
    handleAddspEvent(id);
    document.getElementById("modalBody").firstElementChild.innerText = `"${sp[0].name}"`;
  }
});