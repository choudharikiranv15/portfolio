// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple form validation
document.getElementById('contact-form').addEventListener('submit', function (e) {
    let isValid = true;

    // Check if all fields are filled
    this.querySelectorAll('input, textarea').forEach(input => {
        if (!input.value) {
            isValid = false;
            input.style.border = '1px solid red';
        } else {
            input.style.border = '1px solid #ddd';
        }
    });

    if (!isValid) {
        e.preventDefault(); // Prevent form submission if validation fails
        alert('Please fill out all fields.');
    }
});
