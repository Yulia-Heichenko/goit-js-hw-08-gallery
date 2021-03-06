const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

{/* <li class="gallery__item">
  <a
    class="gallery__link"
    href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
  >
    <img
      class="gallery__image"
      src="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg"
      data-source="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
      alt="Tulips"
    />
  </a>
</li> */}

const makeImageGalleryMarkup = item => {
  console.log(item)
  const {original, preview, description} = item
  return `
  <li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
  `
}
console.log(galleryItems)
console.log(makeImageGalleryMarkup(galleryItems[0]))

const makeImageGalleryRows = galleryItems.map(makeImageGalleryMarkup).join('')
console.log(makeImageGalleryRows)

const listRef = document.querySelector('.js-gallery')
const itemRef = document.querySelector('.gallery__item')
const linkRef = document.querySelector('.gallery__link')
const modalBoxRef = document.querySelector('.lightbox')
const modalLightBoxContent = document.querySelector('.lightbox__content')
const lightboxContentImgRef = document.querySelector('.lightbox__image')
const closeModalBtn = document.querySelector('.lightbox__button')
const overlauRef = document.querySelector('.lightbox__overlay')

listRef.insertAdjacentHTML('beforeend', makeImageGalleryRows) 

listRef.addEventListener('click', onOpenModal)

closeModalBtn.addEventListener('click', onCloseModal)

overlauRef.addEventListener('click', onCloseModal)

function onOpenModal(event) {

  window.addEventListener('keydown', onKeyPress)
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return
  }

  modalBoxRef.classList.add('is-open')
  const targEl = event.target
  console.log(targEl)
  console.log(event.target.nodeName)
  
  const chahgSrc = targEl.dataset.source
  // const chahgAlt = targEl.alt
 
  lightboxContentImgRef.src = [chahgSrc]
  console.log(lightboxContentImgRef.src)
}


function onCloseModal(event) {

  window.removeEventListener('keydown', onKeyPress)

  modalBoxRef.classList.remove('is-open')
  
  lightboxContentImgRef.removeAttribute('src')

  if (event.currentTarget === event.target) {
    modalBoxRef.classList.remove('is-open')
  }
}


function onKeyPress(event) {
  
  if (event.code === 'Escape') {
    onCloseModal()
  }
}

