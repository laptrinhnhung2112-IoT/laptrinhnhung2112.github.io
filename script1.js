const btn = document.getElementById("btn");
const fname = document.getElementById("fname");
const error = document.getElementById("error");

btn.addEventListener("click", function () {
  let name = fname.value.trim();

  if (name === "") {
    error.innerText = "⚠️ Vui lòng nhập tên trước khi xác nhận!";
  } else {
    error.innerText = "";

    // lưu tên vào localStorage
    localStorage.setItem("username", name);

    // chuyển sang trang khác
    window.location.href = "index1.html";
  }
});
