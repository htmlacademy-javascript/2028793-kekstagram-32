import {isEscapeKey} from './util.js';

const bigPictureContainer = document.querySelector('.big-picture');
const socialCommentCount = bigPictureContainer.querySelector('.social__comment-count');
const commentsLoader = bigPictureContainer.querySelector('.comments-loader');
const fullSizeImageClose = bigPictureContainer.querySelector('.big-picture__cancel');

const closeBigPicture = () => {
  bigPictureContainer.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
};

const closeBigPictureWithEsc = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};

const commentTemplate = document.querySelector('#comments').content.querySelector('.social__comment');

const createComment = ({avatar, name, message}) => {
  const comment = commentTemplate.cloneNode(true);

  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;

  return comment;
};

const generateComments = (comments, container) => {
  container.innerHTML = '';
  const fragment = document.createDocumentFragment();

  comments.forEach((comment) => {
    const commentList = createComment(comment);
    fragment.append(commentList);
  });

  container.append(fragment);
};

fullSizeImageClose.addEventListener('click', closeBigPicture);
bigPictureContainer.addEventListener('click', closeBigPicture);

const showFullSizePicture = ({url, description, likes, comments}) => {

  const showComments = document.querySelectorAll('.social__comments > li');
  bigPictureContainer.querySelector('.big-picture__img > img').src = url;
  bigPictureContainer.querySelector('.likes-count').textContent = likes;
  bigPictureContainer.querySelector('.social__comment-shown-count').textContent = showComments.length;
  bigPictureContainer.querySelector('.social__comment-total-count').textContent = comments.length;
  bigPictureContainer.querySelector('.social__caption').textContent = description;
  generateComments(comments, bigPictureContainer.querySelector('.social__comments'));

  bigPictureContainer.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');

  document.addEventListener('keydown', closeBigPictureWithEsc);
};

export {
  showFullSizePicture
};
