// Main JavaScript file for CareerConnect Job Portal

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
    
    // Password visibility toggle
    const togglePasswordButtons = document.querySelectorAll('.toggle-password');
    
    togglePasswordButtons.forEach(button => {
        button.addEventListener('click', function() {
            const input = this.previousElementSibling;
            
            // Toggle the password visibility
            if (input.type === 'password') {
                input.type = 'text';
                this.classList.remove('fa-eye');
                this.classList.add('fa-eye-slash');
            } else {
                input.type = 'password';
                this.classList.remove('fa-eye-slash');
                this.classList.add('fa-eye');
            }
        });
    });
    
    // Password strength meter
    const passwordInput = document.getElementById('password');
    const strengthBar = document.querySelector('.strength-bar');
    
    if (passwordInput && strengthBar) {
        passwordInput.addEventListener('input', function() {
            const password = this.value;
            let strength = 0;
            
            // Check password length
            if (password.length >= 8) {
                strength += 25;
            }
            
            // Check for lowercase letters
            if (password.match(/[a-z]/)) {
                strength += 25;
            }
            
            // Check for uppercase letters
            if (password.match(/[A-Z]/)) {
                strength += 25;
            }
            
            // Check for numbers or special characters
            if (password.match(/[0-9]/) || password.match(/[^a-zA-Z0-9]/)) {
                strength += 25;
            }
            
            // Update the strength bar
            strengthBar.style.width = strength + '%';
            
            // Change color based on strength
            if (strength <= 25) {
                strengthBar.style.backgroundColor = '#ef4444'; // Red
            } else if (strength <= 50) {
                strengthBar.style.backgroundColor = '#f59e0b'; // Orange
            } else if (strength <= 75) {
                strengthBar.style.backgroundColor = '#facc15'; // Yellow
            } else {
                strengthBar.style.backgroundColor = '#10b981'; // Green
            }
        });
    }
});