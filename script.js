// Theme toggle
const themeToggle = document.getElementById("themeToggle");
const html = document.documentElement;

const savedTheme = localStorage.getItem("theme") || "dark";

function updateThemeIcon() {
    const isDark = html.classList.contains("dark");

    themeToggle.innerHTML = `
        <img
            src="${isDark ? "light mode.png" : "dark mode.png"}"
            alt=""
            class="theme"
        >
    `;

    themeToggle.setAttribute(
        "aria-label",
        isDark ? "Switch to light mode" : "Switch to dark mode"
    );
}

html.classList.toggle("dark", savedTheme === "dark");
updateThemeIcon();

themeToggle.addEventListener("click", () => {
    html.classList.toggle("dark");

    const newTheme = html.classList.contains("dark") ? "dark" : "light";

    localStorage.setItem("theme", newTheme);
    updateThemeIcon();
});


// Rotating technologies
const skills = [
    "Python",
    "Java",
    "React",
    "Next.js",
    "Full-Stack Development",
    "AI / LLM Integration",
    "Desktop Applications",
    "Software Engineering"
];

const typingText = document.getElementById("typingText");
let currentSkillIndex = 0;

function rotateSkills() {
    currentSkillIndex = (currentSkillIndex + 1) % skills.length;
    typingText.textContent = skills[currentSkillIndex];
}

const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;

if (!prefersReducedMotion) {
    setInterval(rotateSkills, 2000);
}


// Smooth scrolling
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);

    if (section) {
        section.scrollIntoView({
            behavior: prefersReducedMotion ? "auto" : "smooth"
        });
    }
}


// Copy email
function copyEmail() {
    const email = "YOUR_EMAIL_HERE";

    navigator.clipboard.writeText(email)
        .then(() => {
            const button = document.querySelector(
                '.contact-item button .contact-txt'
            );

            if (!button) return;

            const originalText = button.textContent;

            button.textContent = "Copied!";

            setTimeout(() => {
                button.textContent = originalText;
            }, 1800);
        })
        .catch((error) => {
            console.error("Failed to copy email:", error);
        });
}


// Fade-in animation
if (!prefersReducedMotion) {
    const observerOptions = {
        threshold: 0.08,
        rootMargin: "0px 0px -60px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            entry.target.classList.add("section-visible");
            observer.unobserve(entry.target);
        });
    }, observerOptions);

    document.querySelectorAll("main section").forEach((section) => {
        section.classList.add("section-hidden");
        observer.observe(section);
    });
}