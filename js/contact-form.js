document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const form = e.target;
    const btn = document.getElementById('submit-btn');
    const originalText = btn.textContent;
    btn.textContent = 'ENVIANDO...';
    btn.disabled = true;

    fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
    })
    .then(r => r.ok ? r.json() : Promise.reject())
    .then(() => {
        form.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        form.style.opacity = '0';
        form.style.transform = 'scale(0.96)';

        setTimeout(() => {
            form.style.display = 'none';
            const success = document.getElementById('form-success');
            success.classList.add('active');
            spawnConfetti();
        }, 400);
    })
    .catch(() => {
        btn.textContent = originalText;
        btn.disabled = false;
        alert('Erro ao enviar. Tente novamente.');
    });
});

function spawnConfetti() {
    const container = document.getElementById('confetti-container');
    const colors = ['#C9A96E', '#fff', '#8B7340', '#D4B87A', '#E8D5A8', '#6B5B3A'];

    for (let i = 0; i < 30; i++) {
        const piece = document.createElement('div');
        piece.classList.add('confetti-piece');
        piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        piece.style.setProperty('--cx', (Math.random() - 0.5) * 300 + 'px');
        piece.style.setProperty('--cy', (Math.random() - 0.8) * 250 + 'px');
        piece.style.setProperty('--cr', Math.random() * 720 - 360 + 'deg');
        piece.style.animationDelay = Math.random() * 0.3 + 's';
        piece.style.width = Math.random() * 6 + 5 + 'px';
        piece.style.height = Math.random() * 6 + 5 + 'px';
        piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
        container.appendChild(piece);
    }
}
