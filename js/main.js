//background animation
let stars = document.getElementById('stars');
        let moon = document.getElementById('moon');
        let mountains_behind = document.getElementById('mountains_behind');
        let mountains_front = document.getElementById('mountains_front');

        window.addEventListener('scroll', function() {
            let value = window.scrollY;
            stars.style.left = value * 0.25 + 'px';
            moon.style.top = value * 1.05 + 'px';
            mountains_behind.style.top = value * 0.5 + 'px';
            mountains_front.style.top = value * 0 + 'px';
        })

var imageIndex = 0;
showImages();
        
// previous and next buttons
function plusImages(n) {
    showImages(imageIndex += n);
}

function currentImage(n) {
    showImages(imageIndex = n);
}

function showImages() {
    var i;
    var images = document.getElementsByClassName("images");
    for (i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }
    imageIndex++;
    if (imageIndex > images.length) {imageIndex = 1}
    images[imageIndex-1].style.display = "block";
    setTimeout(showImages, 3000);
}
