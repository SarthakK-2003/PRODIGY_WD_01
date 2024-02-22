
const toggleMenu = document.getElementById('toggleMenu');
const toggleButton = document.getElementById('toggleButton');
const closeButton = document.getElementById('closeButton');

toggleButton.addEventListener('click', () => {
  toggleMenu.classList.toggle('hidden');
});

closeButton.addEventListener('click', () => {
  toggleMenu.classList.add('hidden');
});

function toggleNavbar() {
  const navbar = document.getElementById('navbar');
  if (window.innerWidth < 1040) {
    navbar.classList.add('hidden');
  } else {
    navbar.classList.remove('hidden');
    }
}

toggleNavbar();
window.addEventListener('resize', toggleNavbar);