import iziToast from 'izitoast';

export function renderGallery(images) {
  const gallery = document.querySelector('.gallery');

  gallery.innerHTML = '';

  if (images.length === 0) {
    return;
  }

  const markup = images
    .map(
      image => `
    <div class="gallery-item">
      <a href="${image.largeImageURL}" class="gallery-link">
        <img src="${image.webformatURL}" alt="${image.tags}" class="gallery-image" />
      </a>
      <div class="image-info">
        <p><strong>Likes:</strong> ${image.likes}</p>
        <p><strong>Views:</strong> ${image.views}</p>
        <p><strong>Comments:</strong> ${image.comments}</p>
        <p><strong>Downloads:</strong> ${image.downloads}</p>
      </div>
    </div>
  `
    )
    .join('');

  gallery.innerHTML = markup;
}
export function showErrorMessage(message) {
  iziToast.error({
    title: 'Error',
    message: message,
    position: 'topRight',
  });
}

export function showLoadingIndicator() {
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.classList.remove('hidden');
  } else {
    console.warn('⚠️ Элемент .loader не найден в DOM.');
  }
}

export function hideLoadingIndicator() {
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.classList.add('hidden');
  } else {
    console.warn('⚠️ Элемент .loader не найден в DOM.');
  }
}
