if (window.innerWidth < 860) {
    console.error("device-is-not-compatible-for-paralax-effect-sorry-error")
} else {
document.addEventListener("mousemove", parallax);
function parallax(e) {
    document.querySelectorAll('.layer').forEach((layer) => {
        const speed = layer.getAttribute('data-speed');
        const y = (window.innerHeight - e.pageY*speed)/100; 
        const x = (window.innerWidth - e.pageX*speed)/100; 
        layer.style.transform = `translateX(${x}px) translateY(${y}px)` 
    })
}
}