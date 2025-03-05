var on = false;
function dropBar() {
    let arrow = document.getElementById('arrow');
    let dropdown = document.getElementById('dropdown');
    let pulltab = document.getElementById('pulltab');
    if (on == false) {
        arrow.src="css/images/arrowUp.png";
        dropdown.style.top = '0px';
        pulltab.style.opacity = '0.3';
    } else {
        arrow.src="css/images/arrowDown.png";
        dropdown.style.top = '-40px';
        pulltab.style.opacity = '';
    }
    on = !on
}