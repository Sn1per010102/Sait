let img = document.querySelector('.imgheader')
let button = document.querySelector('.smena')
function smen ()
{
 if (img.style.background == 'url(image.jpg)')
 {
   img.style.background = 'url(image2.jpg)'
 }
 else 
 {
    img.style.background = 'url(image.jpg)'
 }

}
button.addEventListener('click', smen)

 /*function change_theme() {
    let header = document.querySelector('imgheader')
    if (current_background == 'url(image.jpg)') {
        current_background = 'url(image2.jpg)'
    } else {
        current_background = 'url(image.jpg)'
    }
    header.style.background = current_background
    header.style.backgroundSize = 'cover'
 }
  
 let change_theme_button = document.querySelector('.proIsmena')
 let current_background = 'url(image.jpg)'
 change_theme_button.addEventListener('click', change_theme)*/
