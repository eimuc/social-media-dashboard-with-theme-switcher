import data from './data.js';
import renderDashboard from './renderDashboard.js';
import renderStats from './renderStats.js';

const {dashboard, stats} = data;

renderDashboard(dashboard);
renderStats(stats);


const btn = document.querySelector(".btn-toggle");

btn.addEventListener("click", function () {
  document.body.classList.toggle("light-mode");
});
