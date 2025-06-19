// Dark Mode Toggle
document.getElementById('darkToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Skill Bar Animation on Scroll
const skillBars = document.querySelectorAll('.bar');
window.addEventListener('scroll', () => {
    skillBars.forEach(bar => {
        const section = bar.closest('#skills');
        const top = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight - 100) {
            bar.style.width = bar.dataset.skill + '%';
        }
    });
});

// Form Submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && email && message) {
        document.getElementById("formMessage").classList.remove("hidden");
        this.reset();
        document.getElementById("charCount").textContent = "0";
    }
});

// Character Counter
document.getElementById("message").addEventListener("input", function () {
    document.getElementById("charCount").textContent = this.value.length;
});
