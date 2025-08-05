const albums = Array.from(document.getElementsByClassName('album'));

function arrayRotate(arr, reverse) {
  if (reverse) arr.unshift(arr.pop());
  else arr.push(arr.shift());
  return arr;
}

function cycleAlbumsRight() {
    arrayRotate(albums, true);
    albums[0].id="zero";
    albums[1].id="one";
    albums[2].id="two";
}

function cycleAlbumsLeft() {
    arrayRotate(albums);
    albums[0].id="zero";
    albums[1].id="one";
    albums[2].id="two";
}