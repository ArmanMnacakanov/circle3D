let circle = document.querySelector('.circle');
circle.addEventListener('click',()=>{
    let i = 0;
    while(i < 50){
        let particles = document.createElement('i');
        particles.setAttribute('class','particles');
        document.body.appendChild(particles);
        let randomX = (Math.random() - 0.5) * window.innerWidth;
        let randomY = (Math.random() - 0.5) * window.innerHeight;
        particles.style.setProperty('--x',randomX + 'px');
        particles.style.setProperty('--y',randomY + 'px');
        let randomSize = Math.random() * 80 + 10;
        particles.style.width = randomSize + 'px'
        particles.style.height = randomSize + 'px'
        let duration = Math.random() * 3 + 2;
        particles.style.animation = `animate ${duration}s ease forwards`
        setTimeout(() => {
            particles.remove()
        }, 5000);
        i++
    }
})