const stars = document.querySelectorAll('.star');

stars.forEach((star, index) => {
    star.addEventListener('click', function () {
        resetStarsColor();
        for (let i = 0; i <= index; i++) {
            stars[i].classList.add('active');
        }
    });

    star.addEventListener('mouseover', function () {
        resetStarsColor();
        for (let i = 0; i <= index; i++) {
            stars[i].classList.add('active');
        }
    });

    star.addEventListener('mouseout', function () {
        resetStarsColor();
    });
});

function resetStarsColor() {
    stars.forEach(star => {
        star.classList.remove('active');
    });
}