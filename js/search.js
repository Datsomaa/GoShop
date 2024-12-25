const searchInput = document.getElementById("searchInput");
const products = document.querySelectorAll(".card");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();

  products.forEach((product) => {
    const productName = product.querySelector(".fw-bold").textContent.toLowerCase();
    if (productName.includes(query)) {
      product.parentElement.style.display = "block"; // Hiển thị
    } else {
      product.parentElement.style.display = "none"; // Ẩn
    }
  });
});

const buyNowButtons = document.querySelectorAll(".btn-dark.mt-auto");

buyNowButtons.forEach((button, index) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const productName = button.closest(".card").querySelector(".fw-bold").textContent;

    // Lưu sản phẩm vào localStorage
    localStorage.setItem("buyNowProduct", productName);

    // Chuyển hướng tới trang thanh toan
    window.location.href = "../pages/sau_thanh_toan.html";
  });
});