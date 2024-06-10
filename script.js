document.addEventListener('DOMContentLoaded', function() {
    const floatingButton = document.querySelector('.botao__flutuante-imagem');
    const overlay = document.getElementById('overlay');
    const extraButtons = document.getElementById('extra-buttons');

    floatingButton.addEventListener('click', function() {
        overlay.classList.toggle('show-overlay');
        extraButtons.classList.toggle('show-overlay');
    });

    overlay.addEventListener('click', function() {
        overlay.classList.remove('show-overlay');
        extraButtons.classList.remove('show-overlay');
    });
});

document.querySelectorAll('.item__menu-mobile').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('.item__menu-mobile').forEach(el => el.classList.remove('active'));
        this.classList.add('active');
    });
});
