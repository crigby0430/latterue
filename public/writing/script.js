function lightmode() {
    document.getElementById('colortheme').setAttribute('href', 'styles/lightmode.css');
    localStorage.setItem('theme', 'light');
}

function darkmode() {
    document.getElementById('colortheme').setAttribute('href', 'styles/darkmode.css')
    localStorage.setItem('theme', 'dark');
}

if(localStorage.getItem('theme') == 'dark'){
    darkmode();
}

if(localStorage.getItem('theme') == 'light'){
    lightmode();
}