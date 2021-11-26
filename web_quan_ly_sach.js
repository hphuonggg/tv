function changesearch(element){
  document.getElementsById('search').style.display = 'block' 
}
function changeproductlist(type,element){
  let tabs = document.getElementsByClassName('tab-item')
  for(let i=0;i<tabs.length;i++){
    tabs[i].style.background = 'white';
    tabs[i].style.color = 'black';
  }
  element.style.background = '#2D87E7'
  element.style.color = 'white'

  document.getElementById(type).style.display = 'block';
  switch (type) {
    case 'trend-1':
      document.getElementById('trend-2').style.display = 'none';
      document.getElementById('trend-3').style.display = 'none';
      document.getElementById('trend-4').style.display = 'none';
      document.getElementById('trend-5').style.display = 'none';
      
      break;
    case 'trend-2':
      document.getElementById('trend-1').style.display = 'none';
      document.getElementById('trend-3').style.display = 'none';
      document.getElementById('trend-4').style.display = 'none';
      document.getElementById('trend-5').style.display = 'none';
      
      break;
    case 'trend-3':
      document.getElementById('trend-1').style.display = 'none';
      document.getElementById('trend-2').style.display = 'none';
      document.getElementById('trend-4').style.display = 'none';
      document.getElementById('trend-5').style.display = 'none';
    
      break;
    case 'trend-4':
      document.getElementById('trend-1').style.display = 'none';
      document.getElementById('trend-2').style.display = 'none';
      document.getElementById('trend-3').style.display = 'none';
      document.getElementById('trend-5').style.display = 'none';
    
      break;
    case 'trend-5':
      document.getElementById('trend-1').style.display = 'none';
      document.getElementById('trend-3').style.display = 'none';
      document.getElementById('trend-4').style.display = 'none';
      document.getElementById('trend-2').style.display = 'none';
      
      break;  
        
    default:
      // statements_def
      break;
  }
}
var swiper = new Swiper(".featured-slider", {
  spaceBetween: 20,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
  },
});