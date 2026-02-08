const btn = document.getElementById('theme-btn');

btn.addEventListener('click', () => {
    // This flips the 'dark-mode' class on or off every click
    document.body.classList.toggle('dark-mode');
    
    // Check the console in Chrome (F12) to see this running!
    console.log("Theme switched!");
});