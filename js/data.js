import {getRandomInteger, getRandomArrayElement, createIdGenerator} from './util.js';
const QUANTITY_PICTURES = 25;
const MIN_COUNT_LIKES = 15;
const MAX_COUNT_LIKES = 200;
const MIN_COUNT_COMMENTS = 0;
const MAX_COUNT_COMMENTS = 30;
const MIN_COUNT_AVATARS = 1;
const MAX_COUNT_AVATARS = 6;
const MIN_COUNT_MESSAGES = 1;
const MAX_COUNT_MESSAGES = 2;
const NAMES = [
  'Наталья',
  'Дмитрий',
  'Александр',
  'Галина',
  'Ольга',
  'Вадим',
  'Надежда',
  'Лидия',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTIONS = [
  'Деревня #moalboal. Поплавали с черепахами и огромнейшими стаями сардин. Бытует мнение, что сардины сбиваются в огромные стаи, чтобы казаться одной большой рыбой.',
  'Проснулись в 5 утра чтобы поплавать в деревне #oslob с китовыми акулами.',
  'Заехали в провинцию Краби #Thailand#Krabi',
  'Мишлены и коктейли, бассейны и модели. Около 50 км пешком. #Singapore#MarinaBay',
  'Jet ski trip) как всегда весело и активно #langkawi#malaysia',
  'Что нам стоит дом построить. 2 дня и хижина дяди Тома готова',
  'Кругосветное путешествие на велосипеде начинается с одного нажатия педали'
];

const generateRandomId = createIdGenerator ();

const createMessage = () => Array.from(
  {length: getRandomInteger(MIN_COUNT_MESSAGES, MAX_COUNT_MESSAGES)},
  () => getRandomArrayElement(MESSAGES),
);

const createComments = () => ({
  id: generateRandomId(),
  avatar: `img/avatar${getRandomInteger(MIN_COUNT_AVATARS, MAX_COUNT_AVATARS)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES)
});

const createPicture = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(MIN_COUNT_LIKES, MAX_COUNT_LIKES),
  comments: Array.from(
    {length: getRandomInteger(MIN_COUNT_COMMENTS, MAX_COUNT_COMMENTS)},
    createComments
  )
});

const getPictures = () => Array.from(
  {length: QUANTITY_PICTURES},
  (_, index) => createPicture(index + 1),
);

export {getPictures};
