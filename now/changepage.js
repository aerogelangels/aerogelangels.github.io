const left = document.getElementById('leftDate');
const right = document.getElementById('rightDate');
const page = document.getElementById('blogpage');
const date = document.getElementById('datetext');
const dates = [
    '1.24.2026',
    '5.14.2026',
    '6.25.2026',
]

const mostRecentPage = 2;
let currentPage = 2;
page.src = 'pages/p' + mostRecentPage + '.html'
date.innerHTML = dates[mostRecentPage];

function pageLeft() {
    if (currentPage > 0) {
        currentPage -= 1;
        page.src = 'pages/p' + currentPage + '.html'
        date.innerHTML = dates[currentPage];
    }
}

function pageRight() {
    if (currentPage < mostRecentPage) {
        currentPage += 1;
        page.src = 'pages/p' + currentPage + '.html'
        date.innerHTML = dates[currentPage];
    }
}

left.addEventListener('click', pageLeft);
right.addEventListener('click', pageRight);