const toggleBtn = document.getElementById('toggle');
const navbar = document.getElementById('navbar');

toggleBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
})