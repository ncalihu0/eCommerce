var img = document.getElementById('img');

var slides = ['banner3.webp', 'banner4.webp', 'banner5.webp', 'banner6.jpeg', 'banner2.jpeg'];

var Start = 0;

function slider() {
    if (Start < slides.length) {
        Start = Start + 1;
    }
    else {
        Start = 1;
    }
    console.log(img);
    img.innerHTML = "<img src=" + slides[Start - 1] + ">";

}
setInterval(slider, 5000);