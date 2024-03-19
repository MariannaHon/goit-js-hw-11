import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { fetchingFrom } from "./js/pixabay-api";
import { render } from "./js/render-functions";


export const elem = {
  gallery: document.querySelector('.gallery'),
  form: document.querySelector('.form'),
  word: document.querySelector('.input'),
};


elem.form.addEventListener("submit", e => {
  e.preventDefault();

  const input = e.target.elements.imgInput.value;

  fetchingFrom(input).then(data => {
    const markup = render(data);
    elem.gallery.insertAdjacentHTML('beforeend', markup);
  });
});

export function displayToast(message) {
  iziToast.error({
    title: 'Error',
    message: message,
    position: 'topRight',
  });
}