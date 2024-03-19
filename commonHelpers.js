import"./assets/vendor-db7463ae.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function l(){const o={method:"GET"},s=`https://pixabay.com/api/?${new URLSearchParams({key:"42957626-41f27679caf00334274850a6e",q:i.word.value,image_type:"photo",orientation:"horizontal",safesearch:"true"})}`;return fetch(s,o).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}function c(){return i.gallery.innerHTML="",`<li class="gallery-item">
                <a class="gallery-link" href="${largeImageURL}">
                  <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
                </a>
                <div class="stats">
                  <p>Likes<br/>${likes}</p>
                  <p>Views<br/>${views}</p>
                  <p>Commens<br/>${comments}</p>
                  <p>Downloads<br/>${downloads}</p>
                </div>
              </li>`}const i={gallery:document.querySelector(".gallery"),form:document.querySelector(".form"),word:document.querySelector(".input")};i.form.addEventListener("submit",o=>{o.preventDefault(),o.target.elements.imgInput.value,l().then(n=>{const s=c();i.gallery.insertAdjacentHTML("beforeend",s)})});
//# sourceMappingURL=commonHelpers.js.map
