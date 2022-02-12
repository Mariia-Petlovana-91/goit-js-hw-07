import { galleryItems } from './gallery-items.js';
// Change code below this line

const galeriRef = document.querySelector('.gallery');
galeriRef.insertAdjacentHTML('beforebegin', createGalleryItemsMarkap(galleryItems));
galeriRef.addEventListener('click', onClickEvTarget);

function onClickEvTarget(event) {

  if (event.target.nodeName !== IMG) {
    return;
  }
  else {

  }
}



function createGalleryItemsMarkap(items) {
   return items.map(item=> ` <div class="gallery__item">
 <a class="gallery__link" href=${item.original}>
    <img
      class="gallery__image"
      src=${item.preview}
      data-source=${item.original}
      alt=${item.description}
    />
  </a>
</div>`).join('');
}

