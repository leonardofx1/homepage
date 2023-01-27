const menu = document.querySelector('.cabecalho')
const modal = document.querySelector('[data-js="modalClose"]')
const btnClose = document.querySelector('[data-js="closeMenu"]')
const menuMobile = document.querySelector('.cabecalho__links')

const removeAddClass = (el, del, ad) => {
   el.classList.remove(del)
   el.classList.add(ad)
}

const showMenuMobile = () =>{
   removeAddClass(menuMobile,'cabecalho__links', 'visible')
   removeAddClass(btnClose, 'invisible', 'close__menu')
   removeAddClass(modal, 'invisible', 'modal__close')
}

const closeMenu = () => {
   removeAddClass(menuMobile, 'visible', 'cabecalho__links')
   removeAddClass(btnClose, 'close__mneu', 'invisible')
   removeAddClass(modal, 'modal__close', 'invisible')
}
const handleMenuClick = (e) => {
   const classElement =  e.target.classList[0]
   const classClose = ['close__menu', 'modal__close'].includes(classElement)
   classClose && closeMenu()
   classElement == 'menu__svg' && showMenuMobile() 
}

menu.addEventListener('click',handleMenuClick)