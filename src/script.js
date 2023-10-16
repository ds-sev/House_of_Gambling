const languageButtonElement = document.querySelector('#langButton')
const languageButtonMobileElement = document.querySelector('#langButtonMobile')



const languageButtonTextElements = document.querySelectorAll('.header__button-text')

const burgerButtonElement = document.querySelector('.header__burger-button')
const mobileMenuElement = document.querySelector('.header__nav-menu-container')


languageButtonElement.addEventListener('click', () => {
  changeLang()
})

languageButtonMobileElement.addEventListener('click', () => {
  changeLang()
})

const changeLang = () => {
  languageButtonTextElements.forEach((languageButtonTextElement) => {
    languageButtonTextElement.classList.toggle('header__button-text_hidden')
  })
}




burgerButtonElement.addEventListener('click', () => {
  mobileMenuElement.classList.toggle('header__nav-menu-container_visible')
  burgerButtonElement.classList.toggle('header__burger-button_type_close')
  // scrollController.disableScroll()
  if (mobileMenuElement.classList.contains('header__nav-menu-container_visible')) {
    scrollController.disableScroll()
  } else {
    scrollController.enableScroll()
  }


})

const handleMenuButtonClick = () => {

}

const scrollController = {
  disableScroll() {
    document.body.style.cssText = `overflow: hidden; height: 100%`
  },
  enableScroll() {
    document.body.style.cssText = ''
  }
}
