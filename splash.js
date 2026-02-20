const splash = document.getElementById('splash');
const splashNum = Math.floor(Math.random() * 1000);

switch (true) {
    case splashNum === 0:
        splash.src = 'assets/images/youngcool.png';
        break;
    case (1 <= splashNum && splashNum <= 333):
        splash.src = 'assets/images/splaaash.png';
        document.getElementById('fungtext').classList.remove('hidden');
        break;
    case (334 <= splashNum && splashNum <= 666):
        splash.src = 'assets/images/humberto.png';
        break;
    case (667 <= splashNum && splashNum <= 999):
        splash.src = 'assets/images/youngsplasher.png';
        break;
}