document.querySelector("form").addEventListener("submit", function (event) {
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("passwordConfirmation").value;
  const errorMessage = document.getElementById("errorMessage");

  if (password !== confirmPassword) {
    errorMessage.textContent = "Mật khẩu xác nhận không khớp!";
    event.preventDefault(); // Ngăn form gửi đi
  } else {
    errorMessage.textContent = ""; // Xóa thông báo lỗi (nếu có)
    alert("Đăng ký thành công!");
  }
});
// Hiển thị hoặc ẩn mật khẩu
document.getElementById("showPassword").addEventListener("change", () => {
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("passwordConfirmation");
  const isChecked = document.getElementById("showPassword").checked;

  const type = isChecked ? "text" : "password";
  password.setAttribute("type", type);
  confirmPassword.setAttribute("type", type);
});

