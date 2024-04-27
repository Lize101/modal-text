// Variables
const btn = document.getElementById('btn');
const container = document.getElementById('modal-container');
const close = document.getElementById('close-modal');

// Function to view the modal
function openModal () {
    container.style.display = 'block';
}

// Click event listener to open the modal when the button is clicked
btn.addEventListener('click', openModal);


// Function to hide the modal
function closeModal () {
    container.style.display = 'none';
}

// Click event listener to close the modal when the 'X' is clicked
close.addEventListener('click', closeModal);