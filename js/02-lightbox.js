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
      title='${item.description}'
    />
  </a>
</div>`
}

const galleryItemsEl = galleryItems.map(itemMarkap).join('');

const galleryRef = document.querySelector('.gallery');
galleryRef.insertAdjacentHTML('beforeend', galleryItemsEl);



let lightbox = new SimpleLightbox('.gallery a', {
   
    navText:	['←','→']
});