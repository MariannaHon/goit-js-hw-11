import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { elem } from "../main";

export function render() {
  elem.gallery.innerHTML = '';
  return `<li class="gallery-item">
                <a class="gallery-link" href="${largeImageURL}">
                  <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
                </a>
                <div class="stats">
                  <p>Likes<br/>${likes}</p>
                  <p>Views<br/>${views}</p>
                  <p>Commens<br/>${comments}</p>
                  <p>Downloads<br/>${downloads}</p>
                </div>
              </li>`;
}