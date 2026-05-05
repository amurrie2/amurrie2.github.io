// Handles contact form submission and clears form fields
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Thank you! Your request has been submitted.");

            form.reset();
        });
    }
});

// Toggle extra service info on Services page
const toggleBtn = document.getElementById("toggleBtn");

if (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
        const extra = document.getElementById("extraInfo");

        if (extra.style.display === "none") {
            extra.style.display = "block";
            toggleBtn.textContent = "Show Less";
        } else {
            extra.style.display = "none";
            toggleBtn.textContent = "More Info";
        }
    });
}

// Scroll back to top when button is clicked
const topBtn = document.getElementById("topBtn");

if (topBtn) {
    topBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}