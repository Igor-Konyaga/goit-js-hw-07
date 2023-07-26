import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

const galleryLayout = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
  )
  .join("");

galleryEl.insertAdjacentHTML("afterbegin", galleryLayout);

galleryEl.addEventListener("click", handleClickImg);

function handleClickImg(e) {
  e.preventDefault();

  const linkOriginalImg = e.target.dataset.source;

  const instance = basicLightbox
    .create(`<img src = "${linkOriginalImg}">`);

	 instance.show();

  galleryEl.addEventListener("keydown", handleCloseModal);

  function handleCloseModal(e) {

    if (e.code === "Escape") {
      instance.close();
    }
  };
}
