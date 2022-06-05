const checkbox = document.getelementById('Dark_Theme');
alert('Dark mode is on');
checkbox.addEventListener('change', (event) => {
    if (event.target.checked) {
        document.documentElement.classList.add('dark');
        
    }
    else {
        document.documentElement.classList.add('light');
    }
})