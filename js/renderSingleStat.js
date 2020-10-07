function renderSingleStat(data) {
 
    return `<div class="stats">
                <div class="stats-top">
                    <p class="title">${data.title}</p>
                    <i class="${data.icon2}" aria-hidden="true"></i>
                </div>
                <div class="stats-bottom">
                    <p class="number">${data.number2}</p>
                    <div>
                        <i class="${data.arrow2}" aria-hidden="true"></i>
                        <p class="${data.class}">${data.percentage}</p>
                    </div>
                    </div>
            </div>`;         
}

export default renderSingleStat;