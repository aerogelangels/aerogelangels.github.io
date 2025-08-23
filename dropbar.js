let hasDropdownBeenHovered = false;
function pointToDropBar() {
    if (hasDropdownBeenHovered == false) {
        document.getElementById('notification').style.opacity=0.5;
    }
}

function unblur() {
    document.getElementsByTagName('body')[0].style.filter = 'blur(0px)';
}

function deleteBullshit() {
    hasDropdownBeenHovered = true;
    document.getElementById('notification').style.opacity=0;
}

let on = false;
function dropBar() {
    const arrow = document.getElementById('arrow');
    const dropdown = document.getElementById('dropdown');
    const pulltab = document.getElementById('pulltab');
    if (on == false) {
        arrow.src='css/images/arrowUp.png';
        dropdown.style.top = '0px';
        pulltab.style.opacity = '0.3';
    } else {
        arrow.src='css/images/arrowDown.png';
        dropdown.style.top = '';
        pulltab.style.opacity = '';
    }
    on = !on
}


