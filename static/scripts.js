// JavaScript to toggle the mobile menu
document.addEventListener("DOMContentLoaded", function () {
    const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
    const leftNavbar = document.querySelector("#left-navbar");

    mobileMenuToggle.addEventListener("click", function () {
        leftNavbar.classList.toggle("show");
        mobileMenuToggle.classList.toggle("open");
    });
});
