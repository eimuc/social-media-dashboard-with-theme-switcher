import renderSingleDash from './renderSingleDash.js';

function renderDashboard(data) {
    let HTML = '';
    for (let i = 0; i < data.length; i++) {
        const dashboard = data[i];
        HTML += renderSingleDash(dashboard);
    }
    const containerDOM = document.querySelector('.container');
    containerDOM.innerHTML = HTML;
}


export default renderDashboard;