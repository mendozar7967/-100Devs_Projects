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

// Initialize and add the map
function initMap() {
    // The location of El Pueblo Mexican Grill
    const elPuebloMexicanGrill = { lat: 41.51232367854285, lng: -90.4171953107478 }; //41.51232367854285, -90.4171953107478
    // The map, centered at El Pueblo Mexican Grill
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 17,
      center: elPuebloMexicanGrill,
    });
    // The marker, positioned at El Pueblo Mexican Grill
    const marker = new google.maps.Marker({
      position: elPuebloMexicanGrill,
      map: map,
    });
  }
  
  window.initMap = initMap;
  
//Slider Functionality

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const images = document.querySelector('.carousel').children;
const totalImages = images.length;
let index = 0;

prev.addEventListener('click', () => {
  nextImage('next');
})

next.addEventListener('click', () => {
  nextImage('prev');
})

function nextImage(direction) {
  if(direction == 'next') {
    index++;
    if(index == totalImages) {
      index = 0;
    }
  } else {
    if(index == 0) {
      index = totalImages - 1;
    } else {
      index--;
    }
  }

  for(let i = 0; i < images.length; i++) {
    images[i].classList.remove('main');
  }
  images[index].classList.add('main');
}