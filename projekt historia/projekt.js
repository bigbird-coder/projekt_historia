document.querySelectorAll('.tipbox').forEach(box => {
    box.querySelector('.tiptitle').addEventListener('click', () => {
        box.classList.toggle('active');
    });
});


const skutki = document.querySelector('.skutki');
const skutkipod = document.querySelector('.skutkipod');

document.getElementById('showSkutkipod').addEventListener('click', () => {
    skutki.style.display = 'none';
    skutkipod.style.display = 'block';
});

document.getElementById('showSkutki').addEventListener('click', () => {
    skutki.style.display = 'block';
    skutkipod.style.display = 'none';
});


