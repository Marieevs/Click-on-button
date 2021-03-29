const button = document.getElementById('btn');
const fChild = document.body.querySelectorAll('.f-child');
const sChild = document.body.querySelectorAll('.s-child');
const tChild = document.body.querySelectorAll('.t-child');

button.addEventListener('click',()=>{
    fChild.forEach((child) => {
        child.classList.toggle('first');
    })
});

button.addEventListener('click',()=>{
    sChild.forEach((child) => {
        child.classList.toggle('second');
    })
});

button.addEventListener('click',()=>{
    tChild.forEach((child) => {
        child.classList.toggle('third');
    })
});