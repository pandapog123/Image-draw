// For all of you in github, visit https://image-draw.netlify.app

let ismousedown = true;

const sorc = document.querySelector('#src');
const scale = document.querySelector('#scale');
const webIcon = document.querySelector('#web-icon');

// Jquery is over powered

// document.addEventListener('mousedown', () => {
//     ismousedown = false;
// });

// document.addEventListener('mouseup', () => {
//     ismousedown = true;
// });

$(document).ready(() => {
    $(document).on('mousedown', () => {
        ismousedown = false;
    }).on('mouseup', () => {
        ismousedown = true;
    });
});

// function gets called every time the mouse moves
document.addEventListener('mousemove', e => {
    if (!ismousedown) {
        if (sorc.value != '' && scale.value != '') {
            const img = document.createElement('img');
            img.className = 'img';
            img.style.width = scale.value + 'px';
            img.style.height = scale.value + 'px';
            img.src = sorc.value;
            document.body.appendChild(img);
            img.style.top = e.clientY + 10 + 'px';
            img.style.left = e.clientX + 10 + 'px';
        }
    }
    webIcon.href = sorc.value; // makes icon of the window the source of the 
});

