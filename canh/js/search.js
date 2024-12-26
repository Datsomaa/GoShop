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
// Lấy tất cả các mục trong dropdown và danh sách sản phẩm
const dropdownLinks = document.querySelectorAll(".dropdown-content a");
const aproducts = document.querySelectorAll("#ourshelf .col");

// Thêm sự kiện click vào từng mục trong dropdown
dropdownLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Ngăn chuyển hướng mặc định
    const category = link.getAttribute("data-category"); // Lấy loại sản phẩm

    // Ẩn/Hiển thị sản phẩm dựa trên loại
    aproducts.forEach((aproduct) => {
      const aproductCategory = aproduct.getAttribute("data-category");
      if (category === aproductCategory || !category) {
        aproduct.style.display = "block"; // Hiển thị sản phẩm phù hợp
      } else {
        aproduct.style.display = "none"; // Ẩn sản phẩm không phù hợp
      }
    });
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