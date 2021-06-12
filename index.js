var hamburger = document.querySelector(".hamburger");
var navItems = document.querySelector(".navTable");
var hamburgerMenu = document.querySelector(".hamburgerMenu");
var condition = true;
hamburger.addEventListener("click", function() {
    if (condition == true) {
        navItems.classList.add("clicked");
        hamburger.classList.add("opened");
        condition = false;
    } else {
        navItems.classList.remove("clicked");
        hamburger.classList.remove("opened");
        condition = true;
    }

});