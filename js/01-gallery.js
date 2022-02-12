import { galleryItems } from './gallery-items.js';
// Change code below this line

function itemMarkap(item) {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`
}

const galleryItemsEl = galleryItems.map(itemMarkap).join('');

const galleryRef = document.querySelector('.gallery');
galleryRef.insertAdjacentHTML('beforeend', galleryItemsEl);
galleryRef.addEventListener('click', onClickImg);


function onClickImg(event) {
    event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
   const instance = basicLightbox.create(`
     <div class="modal">
        <img src="${event.target.dataset.source}">
      </div>
 `);
  instance.show();
}

window.addEventListener('keydown', onCloseModal);


function onCloseModal(event){
  if (event.code === "Escape") {
    instance.close();
  }
}