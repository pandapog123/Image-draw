let ismousedown = true;

const sorc = document.querySelector('#src');

document.addEventListener('mousedown', e => {
    ismousedown = false;
});

document.addEventListener('mouseup', e => {
    ismousedown = true;
});

document.addEventListener('mousemove', e => {
    if (!ismousedown) {
        if (sorc.value != '') {
            const img = document.createElement('img');
            img.className = 'img';
            img.src = sorc.value;
            document.body.appendChild(img);
            img.style.top = e.clientY + 10 + 'px';
            img.style.left = e.clientX + 10 + 'px';
        }
    } else if (ismousedown) {}
});
