const heading = document.getElementById('heading');
const message = document.getElementById('message');

setTimeout(() => {
    heading.style.opacity = 1;
    heading.style.transition = 'opacity 0.5s ease-in-out';
}, 1000);

setTimeout(() => {
    message.innerHTML = "Not Found The Page.<br>Error:404 page.<br>not grade up<br>";
    message.style.opacity = 1;
}, 500);

const background = document.getElementById('background');

document.addEventListener('mousemove', e => {
    const moveX = e.clientX / window.innerWidth * 10 - 5;
    const moveY = e.clientY / window.innerHeight * 10 - 5;
    background.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`;
});
