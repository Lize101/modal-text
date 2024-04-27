// Variables

const btn = document.getElementById('btn');
const container = document.getElementById('modal-container');
const close = document.getElementById('close-modal');

function openModal () {
    container.style.display = 'block';
}

btn.addEventListener('click', openModal);