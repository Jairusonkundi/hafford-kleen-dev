document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.createElement("button");
    darkModeToggle.id = "dark-mode-toggle";
    darkModeToggle.textContent = "🌙 Dark Mode";
    document.querySelector("header").appendChild(darkModeToggle);

    // Check local storage for dark mode preference
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        darkModeToggle.textContent = "☀️ Light Mode";
    }

    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
            darkModeToggle.textContent = "☀️ Light Mode";
        } else {
            localStorage.setItem("darkMode", "disabled");
            darkModeToggle.textContent = "🌙 Dark Mode";
        }
    });

    // Apply animations after page load
    setTimeout(() => {
        document.querySelectorAll(".hero, .services, .testimonials, .team, .contact").forEach(el => {
            el.style.opacity = "1";
        });
    }, 200);
});
// Dark Mode Toggle
const darkModeToggle = document.createElement('button');
darkModeToggle.innerText = "🌙 Toggle Dark Mode";
darkModeToggle.style.position = "fixed";
darkModeToggle.style.top = "10px";
darkModeToggle.style.right = "10px";
darkModeToggle.style.padding = "10px";
darkModeToggle.style.border = "none";
darkModeToggle.style.borderRadius = "5px";
darkModeToggle.style.cursor = "pointer";
darkModeToggle.style.background = "#FFD700";
darkModeToggle.style.color = "#333";

document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Add dark mode styles
const darkModeStyles = document.createElement('style');
darkModeStyles.innerHTML = `
    .dark-mode {
        background: #222;
        color: #f8f9fa;
    }
    .dark-mode header {
        background: #333;
    }
    .dark-mode .btn {
        background: #FFC107;
        color: black;
    }
    .dark-mode .service-item, .dark-mode .testimonial-item, .dark-mode .faq-item {
        background: #444;
        color: white;
    }
    .dark-mode footer {
        background: #111;
    }
`;
document.head.appendChild(darkModeStyles);


// Smooth Scroll for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact Form Validation
document.getElementById("contact-form").addEventListener("submit", function(event) {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields before submitting.");
        event.preventDefault();
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert("Please enter a valid email address.");
        event.preventDefault();
    }
});

// Testimonials Carousel
let testimonials = document.querySelectorAll(".testimonial-item");
let index = 0;

function showTestimonial() {
    testimonials.forEach((testimonial, i) => {
        testimonial.style.display = (i === index) ? "block" : "none";
    });
}

setInterval(() => {
    index = (index + 1) % testimonials.length;
    showTestimonial();
}, 4000); // Change testimonial every 4 seconds

showTestimonial(); // Initial display
