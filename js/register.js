document.querySelector("form").addEventListener("submit" ,function(){
  alert("Đăng ký thành công")
});

// Hiện mật khẩu
document.getElementById("showPassword").addEventListener("change", () => {
  if (showPassword.checked) {
    password.setAttribute("type", "text");
  } else {
    password.setAttribute("type", "password");
  }
});