// Bubble creation logic
const createBubble = () => {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    
    // Randomize bubble size and position
    const size = Math.random() * 20 + 10 + 'px';
    bubble.style.width = size;
    bubble.style.height = size;
    bubble.style.left = Math.random() * 100 + 'vw';
    bubble.style.animationDuration = Math.random() * 3 + 4 + 's';
    
    // Randomize bubble color
    const colors = ['#ff5c93', '#ff66c4', '#66ccff', '#ffcc66', '#66ff99'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    bubble.style.background = `radial-gradient(circle, ${color}, ${color})`;
    
    document.body.appendChild(bubble);

    // Remove bubble after animation ends
    bubble.addEventListener('click', () => {
        const bubbleSound = new Audio('bubble-pop.mp3');
        bubbleSound.play();
        bubble.remove();
    });
    setTimeout(() => bubble.remove(), 6000);
};

// Start generating bubbles
setInterval(createBubble, 150);
