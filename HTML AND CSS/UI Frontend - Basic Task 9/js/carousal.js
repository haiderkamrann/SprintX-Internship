document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;

    function showCard(index) {
        cards.forEach((card, i) => {
            card.style.display = i === index ? 'block' : 'none';
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    function nextCard() {
        currentIndex = (currentIndex + 1) % cards.length;
        showCard(currentIndex);
    }

    function prevCard() {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        showCard(currentIndex);
    }

    document.getElementById('next').addEventListener('click', nextCard);
    document.getElementById('prev').addEventListener('click', prevCard);

    // Initialize
    showCard(currentIndex);
});
