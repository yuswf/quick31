function cek() {
    const cek = document.getElementById('text');
    const image = document.getElementById('image');
    const audio = document.createElement('audio');

    audio.style.display = "none";
    audio.src = './assets/sounds/woa.mp3';
    audio.autoplay = true;

    image.src = './assets/images/image2.png';
    cek.innerText = '3 1 Ç E K İ L D İ';
    document.body.appendChild(audio);
}

function yararlari() {
    window.location.href = './yararlari.html';
}

function zararlari() {
    window.location.href = './zararlari.html';
}

function geri() {
    window.location.href = './';
}
