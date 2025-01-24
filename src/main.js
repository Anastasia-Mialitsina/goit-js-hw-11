import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchImages } from './js/pixabay-api.js';
import {
  renderGallery,
  showErrorMessage,
  showLoadingIndicator,
  hideLoadingIndicator,
} from './js/render-functions.js';

const form = document.getElementById('search-form');
const input = document.getElementById('search-input');
const gallery = document.querySelector('.gallery');

let lightbox = null;

form.addEventListener('submit', async event => {
  event.preventDefault();
  const query = input.value.trim();

  if (query === '') {
    showErrorMessage('Please enter a search query');
    return;
  }

  gallery.innerHTML = '';
  console.log('Показать индикатор загрузки');
  showLoadingIndicator();

  try {
    const images = await fetchImages(query);
    console.log('Полученные изображения:', images);

    if (images.length === 0) {
      showErrorMessage(
        'Sorry, there are no images matching your search query. Please try again!'
      );
      return;
    }

    renderGallery(images);

    if (!lightbox) {
      lightbox = new SimpleLightbox('.gallery a');
    } else {
      lightbox.refresh();
    }
  } catch (error) {
    console.error('Ошибка запроса:', error);
    showErrorMessage('An error occurred. Please try again later.');
  } finally {
    hideLoadingIndicator();
  }
});
