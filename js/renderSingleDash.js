function renderSingleDash(data) {
 
    return `<div class="social">
                <div class="social-top">
                    <i class="${data.icon}" aria-hidden="true"></i>
                    <p class="nick">${data.nick}</p>
                </div>
                <p class="numb">${data.number}</p>
                <p class="follsub">${data.followers}</p>
                <div class="social-bottom">
                    <i class="${data.arrow}" aria-hidden="true"></i>
                    <p class="today">${data.today}</p>
                </div>
            </div>`;         
}

export default renderSingleDash;