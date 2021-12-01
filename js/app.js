$('.counter').countUp();

// popup time interval
let popUpMsg = document.getElementById('popUpMessage');
setInterval(function() {
    popUpMsg.style.visibility = 'visible';
}, 3000)

// popup close function
let popUp = document.getElementById('popUpMessage');
let btn = document.getElementById('close');
btn.addEventListener('click', closePopUP);

function closePopUP(e) {

    e.target.parentNode.remove(popUp);
}