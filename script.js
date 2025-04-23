// Dark mode functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get the toggle button
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    
    // Check for saved user preference
    const savedTheme = localStorage.getItem('theme');
    
    // Apply saved theme or default to light
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        darkModeToggle.checked = true;
    }
    
    // Listen for toggle changes
    darkModeToggle.addEventListener('change', function() {
        if (this.checked) {
            // Switch to dark mode
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            // Switch to light mode
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    });
});