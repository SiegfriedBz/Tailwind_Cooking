
const burger = document.getElementById("burger");
const menuList = document.getElementById("menu-list");

const toggleVisibility = () => {
  if (menuList.className.includes("hidden")) {
    menuList.classList.remove("hidden");
  } else {
    menuList.classList.add("hidden");
  }
}

burger.addEventListener(("click"), () => {
  toggleVisibility()
})
