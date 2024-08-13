import {isEscapeKey} from './util.js';

const bigPictureContainer = document.querySelector('.big-picture');
const socialCommentCountElement = bigPictureContainer.querySelector('.social__comment-count');
const commentsLoader = bigPictureContainer.querySelector('.comments-loader');
const fullSizeImageClose = bigPictureContainer.querySelector('.big-picture__cancel');
const socialCommentsContainer = bigPictureContainer.querySelector('.social__comments');
const commentsPerPage = 5;

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
  const fragment = document.createDocumentFragment();

  comments.forEach((comment) => {
    const commentList = createComment(comment);
    fragment.append(commentList);
  });

  container.append(fragment);
};

fullSizeImageClose.addEventListener('click', closeBigPicture);

const getShownCommentsCount = () => document.querySelectorAll('.social__comments > li').length;

const updateShownCount = () => {
  socialCommentCountElement.textContent = getShownCommentsCount();
};

const showFullSizePicture = ({url, description, likes, comments}) => {
  socialCommentsContainer.innerHTML = '';
  bigPictureContainer.querySelector('.big-picture__img > img').src = url;
  bigPictureContainer.querySelector('.likes-count').textContent = likes;
  bigPictureContainer.querySelector('.social__comment-total-count').textContent = comments.length;
  bigPictureContainer.querySelector('.social__caption').textContent = description;

  const showNextComments = () => {
    const shownCommentsCount = getShownCommentsCount();
    const nextComments = comments.slice(shownCommentsCount, shownCommentsCount + commentsPerPage);
    generateComments(nextComments, socialCommentsContainer);
    updateShownCount();
    if (getShownCommentsCount() < comments.length) {
      commentsLoader.classList.remove('hidden');
    } else {
      commentsLoader.classList.add('hidden');
    }
  };

  showNextComments();
  commentsLoader.addEventListener('click', showNextComments);

  bigPictureContainer.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
  // socialCommentCount.classList.add('hidden');
  // commentsLoader.classList.add('hidden');

  document.addEventListener('keydown', closeBigPictureWithEsc);
};

export {
  showFullSizePicture
};
