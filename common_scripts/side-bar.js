const toggle = document.querySelector(".toggle");

toggle.addEventListener("click", function () {
    let item = document.getElementById("sidebar");
    item.classList.toggle("active-me");
});