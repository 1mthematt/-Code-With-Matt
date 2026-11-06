
const root = document.documentElement;

const themeToggle = document.getElementById("themeToggle");
const themeLabel = document.getElementById("themeLabel");

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");


// THEME SWITCH

themeToggle.addEventListener("click", () => {

    const nextTheme =
        root.dataset.theme === "light" ? "dark" : "light";

    root.dataset.theme = nextTheme;

    themeLabel.textContent =
        nextTheme === "light" ? "LIGHT MODE" : "DARK MODE";

    themeToggle.setAttribute(
        "aria-label",
        nextTheme === "light"
            ? "Switch to dark theme"
            : "Switch to light theme"
    );

});


// MOBILE NAVIGATION

menuToggle.addEventListener("click", () => {

    const isOpen = mainNav.classList.toggle("open");

    menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
    );

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
    );

});


// CLOSE MENU AFTER CLICKING A LINK

mainNav.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

        mainNav.classList.remove("open");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuToggle.setAttribute(
            "aria-label",
            "Open navigation"
        );

    });

});
