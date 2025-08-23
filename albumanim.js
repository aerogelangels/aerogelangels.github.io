const albums = Array.from(document.getElementsByClassName('album'));
document.getElementsByClassName('a1')[0].addEventListener('click', expandMenu);
document.getElementById('leftButton').addEventListener('click', cycleAlbumsRight);
document.getElementById('rightButton').addEventListener('click', cycleAlbumsLeft)

function arrayRotate(arr, reverse) {
  if (reverse) arr.unshift(arr.pop());
  else arr.push(arr.shift());
  return arr;
}

function cycleAlbumsRight() {
    retractMenu();
    albums[1].removeEventListener('click', expandMenu);
    albums[0].classList.remove('a0');
    albums[1].classList.remove('a1');
    albums[2].classList.remove('a2')
    arrayRotate(albums, true);
    albums[0].classList.add('a0');
    albums[1].classList.add('a1');
    albums[2].classList.add('a2');
    albums[1].addEventListener('click', expandMenu)
}

function cycleAlbumsLeft() {
    retractMenu();
    albums[1].removeEventListener('click', expandMenu);
    albums[0].classList.remove('a0');
    albums[1].classList.remove('a1');
    albums[2].classList.remove('a2');
    arrayRotate(albums);
    albums[0].classList.add('a0');
    albums[1].classList.add('a1');
    albums[2].classList.add('a2');
    albums[1].addEventListener('click', expandMenu)
}

function expandMenu() {
  const center = document.getElementsByClassName('a1')[0];
  center.classList.add('clicked');
  center.getElementsByClassName('top_bar')[0].classList.add('moved');
  center.removeEventListener('click',expandMenu);
  setTimeout(() => {
    center.getElementsByClassName('overlay')[0].classList.add('moved');
    center.getElementsByClassName('xbutton')[0].addEventListener('click', retractMenu);
  }, 500);
  setTimeout(() => {
    center.getElementsByClassName('info_page')[0].classList.add('shown');
  }, 1100);
}

function retractMenu() {
  const center = document.getElementsByClassName('a1')[0];
  center.getElementsByClassName('info_page')[0].classList.remove('shown');
  center.classList.remove('clicked');
  center.getElementsByClassName('overlay')[0].classList.remove('moved');
  setTimeout(() => {
    center.getElementsByClassName('top_bar')[0].classList.remove('moved');
    center.addEventListener('click', expandMenu)
  }, 500)
}