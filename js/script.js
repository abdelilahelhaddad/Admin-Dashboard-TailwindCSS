//Profile dropdown menu

const dropdown = document.querySelector('.dropdown');
const dropdownMenu = document.querySelector('.dropdown-menu');

dropdown.addEventListener('click', (e) => {
  e.preventDefault();
  dropdownMenu.classList.toggle('hidden');
});

//Mobile sider bar

const sliderBtn = document.querySelector('#sliderBtn');
const closeSlider = document.querySelector('#closeSlider');
const sideBar = document.querySelector('#sideBar');

sliderBtn.addEventListener('click', (e) => {
  e.preventDefault();
  sideBar.classList.add('-ml-0');
  sideBar.classList.remove('-ml-80');
});

closeSlider.addEventListener('click', (e) => {
  e.preventDefault();
  sideBar.classList.add('-ml-80');
  sideBar.classList.remove('-ml-0');
});

//Mobile navbar toggle

const navbarToggle = document.querySelector('#navbarToggle');
const NavBar = document.querySelector('#navBar');

navbarToggle.addEventListener('click', (e) => {
  e.preventDefault();
  if (navBar.classList.contains('hidden')) {
    navBar.classList.remove("hidden");
  } else {
    navBar.classList.add("hidden");
  }
});

//Sales Overview Chart

var options = {
  chart: {
    type: 'bar'
  },
  series: [{
    name: 'Sales',
    data: [74, 42, 37, 55, 49, 60, 70, 91, 111, 230, 470, 588]
  }],
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  }
}

var chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();