import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';

const ulGallery = document.querySelector('ul.gallery')
let gallery = null
const span = document.querySelector("span")
const loadMoreBtn = document.querySelector('button.load-more')


export function createGallery(images) {
function imageTemplate({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) {
  return `
          <li class="li">
          <a class="gallery-link" href="${largeImageURL}">
            <img
            class="gallery-image"
            src="${webformatURL}" 
            alt="${tags}">
          </a>
          <div class="firstWrapper">
          <div class="wrapper">
          <h3 class="h3">Likes</h3>
          <p>${likes}</p>
          </div>
          <div class="wrapper">
          <h3 class="h3">Views</h3>
          <p>${views}</p>
          </div>
          <div class="wrapper">
          <h3 class="h3">Comments</h3>
          <p>${comments}</p>
          </div>
          <div class="wrapper">
          <h3 class="h3">downloads</h3>
          <p>${downloads}</p>
          </div>
          </div>
        </li>`
}
  function imagesTemplate(images) {
  return images.map(imageTemplate).join('')
}

ulGallery.innerHTML = imagesTemplate(images)

  if (gallery === null) {
    gallery = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
    })
  } else {
  gallery.refresh()}
  
    
}

export function clearGallery() {
  ulGallery.innerHTML = ""
}

export function showLoader() {
  span.classList.remove("is-invisible")
}

export function hideLoader() {
  span.classList.add("is-invisible")
}

export function showLoadMoreButton() {
  loadMoreBtn.classList.remove("is-invisible")
}

export function hideLoadMoreButton() {
  loadMoreBtn.classList.add("is-invisible")
}

