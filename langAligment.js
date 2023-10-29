var russian = document.getElementById('ru');
var english = document.getElementById('en');

english.classList.add('active_lang');

russian.addEventListener('click', nowRu);
english.addEventListener('click', nowEng);

function nowEng() {
    russian.classList.remove('active_lang');
    english.classList.add('active_lang');
}

function nowRu() {
    english.classList.remove('active_lang');
    russian.classList.add('active_lang');
}
