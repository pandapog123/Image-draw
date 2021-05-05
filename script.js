let ismousedown = true;

const sorc = document.querySelector('#src');
const scale = document.querySelector('#scale');
const webIcon = document.querySelector('#web-icon');

document.addEventListener('mousedown', () => {
    ismousedown = false;
});

document.addEventListener('mouseup', () => {
    ismousedown = true;
});

document.addEventListener('touhstart', () => {
    ismousedown = false;
}, false);

document.addEventListener('touchend', () => {
    ismousedown = true;
}, false);

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
    webIcon.href = sorc.value;
});

