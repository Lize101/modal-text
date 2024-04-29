// Variables
const btn = document.getElementById('btn');
const container = document.getElementById('modal-container');
const close = document.getElementById('close-modal');
const body = document.getElementById('body');

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



window.addEventListener('click', function(e) {
    //Test, in the console, to see whether body matches e.target
    console.log(body); 
    //Test, in the console, to see whether e.target matches body
    console.log(e.target);
    // If statement that closes the modal if the user clicks anywhere in the body
    if (e.target === body) {
        container.style.display = 'none';
    }
})