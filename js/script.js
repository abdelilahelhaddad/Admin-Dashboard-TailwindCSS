//Profile dropdown menu

const dropdown = document.querySelector('.dropdown');
const dropdownMenu = document.querySelector('.dropdown-menu');

dropdown.addEventListener('click', (e) => {
  e.preventDefault();
  dropdownMenu.classList.toggle('hidden');
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