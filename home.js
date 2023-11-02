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

function subscribe() {
    var email = document.getElementById('email').value;
    if (validateEmail(email)) {
        alert('Thank you for subscribing with the email: ' + email);
        document.getElementById('message').textContent = 'Subscribed successfully!';
    } else {
        alert('Please enter a valid email address.');
        document.getElementById('message').textContent = 'Failed to subscribe. Invalid email.';
    }
}

function validateEmail(email) {
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    return email.match(pattern);
}