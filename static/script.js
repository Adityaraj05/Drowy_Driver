$(document).ready(function() {
    const videoFeed = document.getElementById('video-feed');
    const counterValue = document.getElementById('counter-value');
    const resetButton = document.getElementById('reset-button');
    
    let counter = 0;

    // Reset counter function
    function resetCounter() {
        counter = 0;
        counterValue.textContent = counter;
        $.get('/reset_counter'); // Send request to reset counter on server
    }

    // Event listener for reset button
    resetButton.addEventListener('click', resetCounter);

    // Function to update counter
    function updateCounter() {
        // Implement your drowsiness detection logic here for demo purpose, let's randomly update the counter
        // This is where you would typically analyze the video feed for drowsiness
        // For demo purpose, let's simulate drowsiness detection
        // For demo purpose, let's randomly update the counter
        if (Math.random() > 0.85) {
            counter++;
            counterValue.textContent = counter;
        }

        // Call this function periodically for continuous update
        setTimeout(updateCounter, 1000);
    }

    // Call the updateCounter function to start updating the counter
    updateCounter();
});
