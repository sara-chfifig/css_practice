document.querySelectorAll('.banner .slider .item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        const slider = document.querySelector('.banner .slider');
        
        slider.style.animationPlayState = 'paused';
    });

    item.addEventListener('mouseleave', function() {
        const slider = document.querySelector('.banner .slider');
        
        slider.style.animationPlayState = 'running';
    });
});
