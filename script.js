// Toggle mobile menu visibility
document.getElementById("menu-icon").addEventListener("click", function() {
    const navLinks = document.querySelector(".nav ul");
    navLinks.classList.toggle("active");
});

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll(".nav a");
navLinks.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault(); 
        const targetId = this.getAttribute("href"); 
        const targetSection = document.querySelector(targetId);
        const offset = targetSection.offsetTop; 

        // Smoothly scroll to the target section
        window.scrollTo({
            top: offset,
            behavior: "smooth"
        });
    });
});

// Button click events (Download CV and Contact)
document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", function() {
        if (this.textContent === "Download CV") {
            // Replace with the actual CV file link
            window.location.href = "img/Richard Hans.pdf"; 
        } else if (this.textContent === "Contact") {
            // Example contact action (open an email client)
            window.location.href = "rchardhans@example.com"; 
        }
    });
});

// Close mobile menu on link click (for better UX)
navLinks.forEach(link => {
    link.addEventListener("click", function() {
        const navLinks = document.querySelector(".nav ul");
        navLinks.classList.remove("active");
    });
});
