const body = document.getElementsId('bdy');

document.getElementById('btn').addEventListener('click', changeBackground);

function changeBackground() {
    body.classList.add('background-color');
}