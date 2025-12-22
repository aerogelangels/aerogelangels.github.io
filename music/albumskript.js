let selected = false;
let albumNum = 2;
const noSelection = document.getElementById('noSelection');
const albumPage = document.getElementById('albumPage');
albumPage.src = '';
function selectAlbum() {
    if (selected) {
        if(!this.classList.contains('active')) {
            for (let i = 0; i <= albumNum - 1; i++) {
                document.getElementById('a' + i).classList.remove('active');
            }
            this.classList.add('active');
            albumPage.src = ''
            loadAlbumPage(this.id);
        }
        else {
            this.classList.remove('active');
            noSelection.classList.remove('hidden');
            selected = !selected;
            albumPage.src = '';
        }
    }
    else {
        this.classList.add('active');
        noSelection.classList.add('hidden');
        selected = !selected;
        loadAlbumPage(this.id);
    }
}

function loadAlbumPage(id) {
    switch (id) {
        case 'a0':
            albumPage.src = '../albumpages/chrysalis.html';
            break; 
        case 'a1':
            albumPage.src = '../albumpages/ep.html';
            break;
    }
}

function addPageListeners() {
    for (let i = 0; i <= albumNum - 1; i++) {
        document.getElementById('a' + i).addEventListener('click', selectAlbum);
    }
}