const parentEl = document.getElementsById('parent');
const childEl = document.getElementById('child');
const parentCountEl = document.getElementsById('parentCount');
const childCountEl = document.getElementById('childCount')

let parentCount = 0;
let childCount = 0;

parentEl.addEventListener('click', () => {
    parentCount += 1;
    parentCountEl.textCotent = parentCount;
});

childEl.addEventListener('click', (e) => {
    e.stopPropagation();
    childCount += 1;
    childCountEl.textContent = childCount;
});