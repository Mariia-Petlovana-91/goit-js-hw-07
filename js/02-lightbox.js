import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
function itemMarkap(item) {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      alt="${item.description}"
    />
  </a>
</div>`
}

const galleryItemsEl = galleryItems.map(itemMarkap).join('');

const galleryRef = document.querySelector('.gallery');
galleryRef.insertAdjacentHTML('beforeend', galleryItemsEl);

// let gallery = new SimpleLightbox('.gallery a');
// gallery.on('show.simplelightbox', function () {
// 	// do something…
// });
// console.log(gallery);

var lightbox = new SimpleLightbox('.gallery a', {
   
    captionType	:'attr'
});