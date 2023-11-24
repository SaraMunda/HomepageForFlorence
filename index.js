const menuIcon = document.getElementById('menu-icon')
const navRight = document.getElementById('nav-right')

menuIcon.addEventListener("click", () => {
    if (navRight.style.display === "block" || navRight.style.display === "") {
        navRight.style.display = "none"
    } else {
        navRight.style.display = "block"
    }
})