function drawNavbar() {
    for (let i = 0; i < 6; i++) {
        document.getElementById('button'+i).style.top = (i*70) + 'px';
    }
}