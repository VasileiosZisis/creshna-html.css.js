const header = document.querySelector('header');
const text = document.querySelectorAll('.text');

document.body.classList.add('js-loading');

window.addEventListener("load", showPage);

function showPage() {
  document.body.classList.remove('js-loading');
}

window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 0);
});

observerText = new IntersectionObserver((entriesText) => {
    entriesText.forEach(entryText => {
        if(entryText.isIntersecting === true) {
        entryText.target.classList.add('textAnimation');
        }
        else
        entryText.target.classList.remove('textAnimation');
    })
})
  
text.forEach(pathText => {
    observerText.observe(pathText);
})