document.getElementById('confettiButton').addEventListener('click', function() {
    // Create confetti element
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    
    // Set random position and rotation
    const randomX = Math.random() * 100;
    const randomRotation = Math.random() * 360;
    
    confetti.style.left = randomX + 'vw';
    confetti.style.transform = 'rotate(' + randomRotation + 'deg)';
    
    // Append confetti to container
    document.getElementById('confettiContainer').appendChild(confetti);
    
    // Remove confetti after animation
    confetti.addEventListener('animationend', function() {
        confetti.remove();
    });
});