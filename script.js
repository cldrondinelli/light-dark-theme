document.getElementById('light-theme-btn').addEventListener('click', () => {
    document.documentElement.style.setProperty('--background-color', 'white');
});

document.getElementById('dark-theme-btn').addEventListener('click', () => {
    document.documentElement.style.setProperty('--background-color', 'black');
});
