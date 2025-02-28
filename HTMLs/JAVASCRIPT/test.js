
const sections = document.querySelectorAll('section');
for (const section of sections) {
    section.style.border = '2px solid black';
}
console.log(sections);
const headr = document.querySelectorAll('header');
console.log(headr);
for (const h of headr) {
    h.style.border = '2px solid blue'
}

const ft = document.getElementById('fruits-tittle');
ft.style.backgroundColor = 'yellow';