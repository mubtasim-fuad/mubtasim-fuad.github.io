// Theme toggling functionality
const themeToggle = document.getElementById('theme-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
// Mobile menu functionality
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const navLinksContainer = document.querySelector('.nav-links-container');

// Toggle the mobile menu
mobileMenuToggle.addEventListener('click', () => {
    navLinksContainer.classList.toggle('active');
});

// Close the menu when clicking outside
document.addEventListener('click', (event) => {
    if (
        !navLinksContainer.contains(event.target) &&
        !mobileMenuToggle.contains(event.target)
    ) {
        navLinksContainer.classList.remove('active');
    }
});



const getCurrentTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        return savedTheme;
    }
    return prefersDarkScheme.matches ? 'dark' : 'light';
};

const applyTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    const icon = themeToggle.querySelector('i');
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
};

// Initialize theme
applyTheme(getCurrentTheme());

// Toggle on click
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
});
