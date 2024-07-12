const vidchange = document.getElementById('changevideo');
const largecont = document.getElementById('largevideo');
function closeVideo() {
    largecont.style.display = 'none';
}
function videoClick(source) {
    vidchange.src = source;
    largecont.style.display = 'block';
}

