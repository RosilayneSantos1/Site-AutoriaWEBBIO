const logo = document.getElementById('logo');
const menu = document.getElementById('menu');

logo.addEventListener('click', () => {
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
});
