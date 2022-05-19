const menuList = document.querySelector('.menuAbout')
const menuMenu = document.querySelector('.menuMenu')
const menuFind = document.querySelector('.menuFind')
const menuOrder = document.querySelector('.menuOrder')

document.querySelector('.menu-button-container').addEventListener('click', dropDown)

function dropDown(){
    menuList.classList.toggle('hidden')
    menuMenu.classList.toggle('hidden')
    menuFind.classList.toggle('hidden')
    menuOrder.classList.toggle('hidden')
}
