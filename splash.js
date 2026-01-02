const splash = document.getElementById('splash');
const splashNum = Math.floor(Math.random() * 2);

switch (splashNum) {
    case 0:
        splash.src = 'assets/images/splaaash.png';
        break;
    case 1:
        splash.src = 'assets/images/humberto.png';
        break;
}