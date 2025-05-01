// script.js

let currentIndex = 0;

function changeSlide(direction) {
    const items = document.querySelectorAll('.reason-item');
    items[currentIndex].classList.remove('active');
    
    currentIndex = (currentIndex + direction + items.length) % items.length;
    
    items[currentIndex].classList.add('active');
}

// Function to check the password and unlock content
function checkPassword() {
    const passwordInput = document.getElementById("password").value;
    const surpriseContent = document.getElementById("surprise-content");
    
    // Replace 'yourPassword' with the actual password you want to use
    if (passwordInput === 'yourPassword') {
        surpriseContent.style.display = "block";
    } else {
        alert("Incorrect password. Please try again.");
    }
}

// Optional: To handle interaction with quiz buttons
document.querySelectorAll('#love-question .options button').forEach(button => {
    button.addEventListener('click', (event) => {
        const selectedAnswer = event.target.innerText;
        // Handle the response, e.g., display an alert or log the answer
        alert(`You selected: ${selectedAnswer}`);
    });
});