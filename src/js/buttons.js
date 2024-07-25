// Expand buttons

let aboutCPS = document.querySelector('.about-cps__text')
let expandCPSButton = document.querySelector('.about-cps__read-more')
let expandCPSText = document.querySelector('.read-more__expand-description')

expandCPSButton.addEventListener('click', function () {
  if (aboutCPS.classList.contains('about-cps__text--expanded')) {
    aboutCPS.classList.remove('about-cps__text--expanded')
    expandCPSButton.classList.remove('about-cps__read-more--rotated')
    expandCPSText.textContent = 'Читать далее'
  } else {
    aboutCPS.classList.add('about-cps__text--expanded')
    expandCPSButton.classList.add('about-cps__read-more--rotated')
    expandCPSText.textContent = 'Скрыть'
  }
})

let brandsList = document.querySelector('.brands-repair .section__list')
let expandBrandsButton = document.querySelector(
  '.brands-repair .section__expand-button'
)
let expandBrandsText = document.querySelector(
  '.brands-repair .section__expand-description'
)

expandBrandsButton.addEventListener('click', function () {
  if (brandsList.classList.contains('section__list--expanded')) {
    brandsList.classList.remove('section__list--expanded')
    expandBrandsButton.classList.remove('section__expand-button--rotated')
    expandBrandsText.textContent = 'Показать все'
  } else {
    brandsList.classList.add('section__list--expanded')
    expandBrandsButton.classList.add('section__expand-button--rotated')
    expandBrandsText.textContent = 'Скрыть'
  }
})

let devicesList = document.querySelector('.devices-repair .section__list')
let expandDevicesButton = document.querySelector(
  '.devices-repair .section__expand-button'
)
let expandDevicesText = document.querySelector(
  '.devices-repair .section__expand-description'
)

expandDevicesButton.addEventListener('click', function () {
  if (devicesList.classList.contains('section__list--expanded')) {
    devicesList.classList.remove('section__list--expanded')
    expandDevicesButton.classList.remove('section__expand-button--rotated')
    expandDevicesText.textContent = 'Показать все'
  } else {
    devicesList.classList.add('section__list--expanded')
    expandDevicesButton.classList.add('section__expand-button--rotated')
    expandDevicesText.textContent = 'Скрыть'
  }
})

// Sidebar

let sidebar = document.querySelector('.sidebar')
let rightContainer = document.querySelector('.right-container')
let burger = document.querySelector('.header__main-nav button')
let closeButton = document.querySelector('.sidebar-header__left-group button')

burger.addEventListener('click', function () {
  sidebar.classList.add('sidebar--shown')
  rightContainer.classList.add('right-container--overlaid')
})

closeButton.addEventListener('click', function () {
  sidebar.classList.remove('sidebar--shown')
  rightContainer.classList.remove('right-container--overlaid')
})

sidebar.addEventListener('click', function (evt) {
  if (
    !evt.target.classList.contains('sidebar__content') &&
    !evt.target.closest('.sidebar__content')
  ) {
    sidebar.classList.remove('sidebar--shown')
    rightContainer.classList.remove('right-container--overlaid')
  }
})

// Feedback

let feedback = document.querySelector('.feedback')
let feedbackHeaderButton = document.querySelector(
  '.options__personal-options .header__item:nth-child(2) button'
)
let feedbackSidebarButton = document.querySelector(
  '.sidebar-footer__options .sidebar-footer__item:nth-child(2) button'
)
let feedbackCloseButton = document.querySelector('.feedback > * > button')

feedbackHeaderButton.addEventListener('click', function () {
  feedback.classList.add('modal--shown')
  rightContainer.classList.add('right-container--overlaid')
})

feedbackSidebarButton.addEventListener('click', function () {
  feedback.classList.add('modal--shown')
  rightContainer.classList.add('right-container--overlaid')
})

feedbackCloseButton.addEventListener('click', function () {
  feedback.classList.remove('modal--shown')
  rightContainer.classList.remove('right-container--overlaid')
})

feedback.addEventListener('click', function (evt) {
  if (
    !evt.target.classList.contains('modal__content') &&
    !evt.target.closest('.modal__content')
  ) {
    feedback.classList.remove('modal--shown')
    rightContainer.classList.remove('right-container--overlaid')
  }
})

// Call

let call = document.querySelector('.call')
let callHeaderButton = document.querySelector(
  '.options__personal-options .header__item:first-child button'
)
let callSidebarButton = document.querySelector(
  '.sidebar-footer__options .sidebar-footer__item:first-child button'
)
let callCloseButton = document.querySelector('.call > * > button')

callHeaderButton.addEventListener('click', function () {
  call.classList.add('modal--shown')
  rightContainer.classList.add('right-container--overlaid')
})

callSidebarButton.addEventListener('click', function () {
  call.classList.add('modal--shown')
  rightContainer.classList.add('right-container--overlaid')
})

callCloseButton.addEventListener('click', function () {
  call.classList.remove('modal--shown')
  rightContainer.classList.remove('right-container--overlaid')
})

call.addEventListener('click', function (evt) {
  if (
    !evt.target.classList.contains('modal__content') &&
    !evt.target.closest('.modal__content')
  ) {
    call.classList.remove('modal--shown')
    rightContainer.classList.remove('right-container--overlaid')
  }
})
