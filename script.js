// subtle mouse parallax
document.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;

    document.querySelector(".links").style.transform =
        `rotateY(${x}deg) rotateX(${-y}deg)`;
});

// Disclaimer popup
window.addEventListener('load', () => {
    const popup = document.getElementById('disclaimer-popup');
    popup.style.display = 'flex';
});

document.getElementById('close-popup').addEventListener('click', () => {
    const popup = document.getElementById('disclaimer-popup');
    popup.style.display = 'none';
});