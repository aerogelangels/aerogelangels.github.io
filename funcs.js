var on = false;
function dropBar() {
    var arrow = document.getElementById('arrow');
    var dropdown = document.getElementById('dropdown');
    var pulltab = document.getElementById('pulltab');
    if (on == false) {
        arrow.src="css/images/arrowUp.png";
        dropdown.style.top = '0px';
        pulltab.style.opacity = '0.3';
    } else {
        arrow.src="css/images/arrowDown.png";
        dropdown.style.top = '';
        pulltab.style.opacity = '';
    }
    on = !on
}