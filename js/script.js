const dropdown = document.querySelector('.dropdown');
const dropdownMenu = document.querySelector('.dropdown-menu');

dropdown.addEventListener('click', (e) => {
  e.preventDefault();
  dropdownMenu.classList.toggle('hidden');
});