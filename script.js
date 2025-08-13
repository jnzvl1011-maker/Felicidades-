document.addEventListener('DOMContentLoaded', () => {
    const surpriseButton = document.getElementById('surpriseButton');
    const surpriseMessage = document.getElementById('surpriseMessage');

    surpriseButton.addEventListener('click', () => {
        surpriseMessage.classList.remove('hidden');
        surpriseButton.style.display = 'none'; // Oculta el botón después del clic
    });
});
