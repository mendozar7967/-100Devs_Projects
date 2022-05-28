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
let slideIndex=1;
showSlides(slideIndex);

//Next/Previous controls
function plusSlides(n){
  showSlides(slideIndex += n);
}
//thumnail image controls
function currentSlide(n){
  showSlides(slideIndex = n);
}

function showSlides(n){
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex =1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++){
    slides[i].style.display = "none"
  }
  slides[slideIndex-1].style.display = "block"
}