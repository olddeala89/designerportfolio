var behance = document.getElementById('behance');
var linkedin = document.getElementById('linkedin');
var instagram = document.getElementById('instagram');
var dribble = document.getElementById('dribble');

behance.addEventListener('click', openBehance);
linkedin.addEventListener('click', openlinkedin);
instagram.addEventListener('click', openInstagram);
dribble.addEventListener('click', openDribble);

function openBehance() {
    window.open('https://www.behance.net/', '_blank').focus();
}

function openInstagram() {
    window.open('https://www.instagram.com/', '_blank').focus();
}

function openlinkedin() {
    window.open('https://linkedin.com/', '_blank').focus();
}

function openDribble() {
    window.open('https://dribbble.com/', '_blank').focus();
}