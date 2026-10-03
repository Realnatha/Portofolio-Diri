// =========================
// HAMBURGER MENU
// =========================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", function () {

        menuToggle.classList.toggle("active");

        navMenu.classList.toggle("active");

    });

}


// =========================
// DARK MODE
// =========================

const themeToggle = document.getElementById("themeToggle");


// Cek mode yang tersimpan

if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark-mode");

    if (themeToggle) {
        themeToggle.textContent = "☀️";
    }

}


// Tombol dark mode

if (themeToggle) {

    themeToggle.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");


        // Jika dark mode aktif

        if (document.body.classList.contains("dark-mode")) {

            themeToggle.textContent = "☀️";

            themeToggle.setAttribute(
                "aria-label",
                "Aktifkan light mode"
            );

            localStorage.setItem("theme", "dark");

        }

        // Jika light mode aktif

        else {

            themeToggle.textContent = "🌙";

            themeToggle.setAttribute(
                "aria-label",
                "Aktifkan dark mode"
            );

            localStorage.setItem("theme", "light");

        }

    });

}