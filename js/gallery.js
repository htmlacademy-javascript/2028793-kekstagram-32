import {generateThumbnails} from './thumbnail.js';
import {showFullSizePicture} from './full-size-image.js';

const container = document.querySelector('.pictures');

const renderGallery = (pictures) => {
  container.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closest('[data-thumbnail-id]');
    if (!thumbnail) {
      return;
    }

    evt.preventDefault();
    const thubnailId = parseInt(thumbnail.getAttribute('data-thumbnail-id'), 10);
    const picture = pictures[thubnailId - 1];
    showFullSizePicture(picture);
  });

  generateThumbnails(pictures, container);
};

export {
  renderGallery
};
