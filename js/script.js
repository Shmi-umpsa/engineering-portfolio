
const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("#nav-links");

menuButton.addEventListener("click", function() {
    navLinks.classList.toggle("active");
    menuButton.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");
    menuButton.setAttribute("aria-expanded", isOpen);
});

navLinks.querySelectorAll("a").forEach(function(link) {
    link.addEventListener("click", function() {
        navLinks.classList.remove("active");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.classList.remove("active");
    });
});

const filterButtons = document.querySelectorAll(".filter-btn");
const skillCategories = document.querySelectorAll(".skill-category");

filterButtons.forEach(function(button) {
    button.addEventListener("click", function() {

        const selectedFilter = button.dataset.filter;

        filterButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        skillCategories.forEach(function(category) {
            if (
                selectedFilter === "all" ||
                category.dataset.category === selectedFilter
            ) {
                category.hidden = false;
            } else {
                category.hidden = true;
            }
        });

    });
});

/* Contact Form Validation */

const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();
        const status = document.getElementById("form-status");

        if (name === "" || email === "" || message === ""|| subject === "") {
            status.textContent = "Please fill in all fields.";
            status.style.color = "#FF6B6B";
            return;
        }
        
            const emailPattern = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

        if (!emailPattern.test(email)) {
            status.textContent = "Please enter a valid email address.";
            status.style.color = "#FF6B6B";
            return;
        }

        status.textContent = "Form validated successfully! (Demo only)";
        status.style.color = "#22D3EE";

        contactForm.reset();
    });
}

/* Clear old status when the user edits the form */

if (contactForm) {
    contactForm.addEventListener("input", function() {
        const status = document.getElementById("form-status");
        status.textContent = "";
    });
}
/* Automatic copyright year */
const yearSpan = document.getElementById("year");
yearSpan.textContent = new Date().getFullYear();