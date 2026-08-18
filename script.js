// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetElement = document.querySelector(this.getAttribute('href'));
        
        window.scrollTo({
            top: targetElement.offsetTop - 70, // Adjusts for the fixed navigation bar
            behavior: 'smooth'
        });
    });
});

// Dynamic Greeting based on time of day
window.onload = function() {
    const hour = new Date().getHours();
    let greetingText = "Hi, I'm Manantsoa";
    
    if (hour < 12) {
        greetingText = "Good Morning! I'm Manantsoa";
    } else if (hour < 18) {
        greetingText = "Good Afternoon! I'm Manantsoa";
    } else {
        greetingText = "Good Evening! I'm Manantsoa";
    }
    
    document.getElementById('greeting').innerText = greetingText;
}