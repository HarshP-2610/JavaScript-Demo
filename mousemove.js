const follower = document.getElementById('follower');

window.addEventListener('mousemove', (e) => {

    const x = e.clientX;
    const y = e.clientY;

    follower.style.transform = `translate(${x - 40}px, ${y - 40}px)`;
});