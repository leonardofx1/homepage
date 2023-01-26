const menu = document.querySelector('.cabecalho')
const modal = document.querySelector('[data-js="modalClose"]')
const btnClose = document.querySelector('[data-js="closeMenu"]')
const menuVisible = document.querySelector('.cabecalho__links')


menu.addEventListener('click', e => {
   const classElement =  e.target.classList
   const closeMenu = ['close__menu', 'modal__close'].includes(classElement[0])
   if(closeMenu) {
       menuVisible.classList.remove('visible')
    menuVisible.classList.add('cabecalho__links')
    btnClose.classList.remove('close__menu')
    btnClose.classList.add('invisible')
    modal.classList.remove('modal__close')
    modal.classList.add('invisible')
  
   }
   
   if(classElement == 'menu__svg') {
    menuVisible.classList.remove('cabecalho__links')
   menuVisible.classList.add('visible')
   btnClose.classList.remove('invisible')
   btnClose.classList.add('close__menu')
   modal.classList.remove('invisible')
   modal.classList.add('modal__close')
   }
   
})