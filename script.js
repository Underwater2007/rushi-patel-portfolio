// Theme Toggle Functionality
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Load theme from localStorage or default to dark
const currentTheme = localStorage.getItem('theme') || 'dark';
html.classList.toggle('dark', currentTheme === 'dark');

themeToggle.addEventListener('click', () => {
    const isDark = html.classList.contains('dark');
    html.classList.toggle('dark', !isDark);
    if(isDark){
        themeToggle.innerHTML = '<img src="dark mode.png" alt="" class="theme">';
       
    }
    else{
        themeToggle.innerHTML = '<img src="light mode.png" alt="" class="theme">';

    }
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
});

// Typing Animation for Skills
const skills = ['Java', 'Python', 'C#', 'JavaScript', 'Data Structures', 'Git'];
let currentSkillIndex = 0;
const typingText = document.getElementById('typingText');

function rotateSkills() {
    currentSkillIndex = (currentSkillIndex + 1) % skills.length;
    typingText.textContent = skills[currentSkillIndex];
}

setInterval(rotateSkills, 2000);

// Smooth Scroll Function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Copy Email Functionality
function copyEmail() {
    const email = 'patelrushi2007@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
        alert('Email copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy email:', err);
    });
}

//Add fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});
