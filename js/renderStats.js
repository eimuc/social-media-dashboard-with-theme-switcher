import renderSingleStat from './renderSingleStat.js';

function renderStats(data) {
    let HTML = '';
    for (let i = 0; i < data.length; i++) {
        const stats = data[i];
        HTML += renderSingleStat(stats);
    }
    const containerDOM = document.querySelector('.container2');
    containerDOM.innerHTML += HTML;
}


export default renderStats;