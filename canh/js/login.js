// Hiển thị hoặc ẩn mật khẩu
document.getElementById("showPassword").addEventListener("change", () => {
  const password = document.getElementById("password");
  const isChecked = document.getElementById("showPassword").checked;
  const type = isChecked ? "text" : "password";
  password.setAttribute("type", type);
});
