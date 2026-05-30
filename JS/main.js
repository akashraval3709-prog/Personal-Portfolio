document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.querySelector('#theme-toggle');
    const rootElement = document.documentElement;
    const savedTheme = localStorage.getItem('portfolio-theme');

    if (savedTheme === 'dark') {
        rootElement.setAttribute('data-theme', 'dark');
        themeToggle.checked = true;
        document.addEventListener('mouseover', () =>{

        })
    } else {
        rootElement.setAttribute('data-theme', 'light');
        themeToggle.checked = false;
    }

    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            rootElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('portfolio-theme', 'dark');
        } else {
            rootElement.setAttribute('data-theme', 'light');
            localStorage.setItem('portfolio-theme', 'light');
        }
    });
});
