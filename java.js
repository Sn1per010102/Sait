let button = document.getElementById('smena');
let header = document.getElementById('header');
let images = ['image2.jpg', 'Image.jpg'];
let currentImageIndex = 0;
function changeBackground() {
      currentImageIndex = (currentImageIndex + 1) % images.length;
      header.style.backgroundImage = `url('${images[currentImageIndex]}')`;
  }
button.addEventListener('click', changeBackground);
