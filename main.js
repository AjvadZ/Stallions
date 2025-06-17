// document.addEventListener('wheel', function(event){
//   const container = document.querySelector('.slide-container');
//   if(!container) return;
//   if (event.deltaY > 0) {
//     // Scroll down
//     container.scrollBy({
//       top: window.innerHeight,
//       behavior: 'smooth'
//     });
//   } else {
//     // Scroll up
//     container.scrollBy({
//       top: -window.innerHeight,
//       behavior: 'smooth'
//     });
//   }
//   event.preventDefault(); // Prevent default scrolling
// }, { passive: false } );


function renderProducts(category){
    window.location.href = `productsList.html?category=${encodeURIComponent(category)}`
}

// function changeImage(){
//     const imageEl = document.getElementById('main-img')
//     const windowWidth = window.innerWidth;
//     console.log(windowWidth)

//     if(windowWidth < 767){
//         imageEl.src = './assets/hero-img.jpg'
//     }else{
//         imageEl.src = './assets/main-img-desktop.jpg'

//     }
// }

// window.addEventListener('resize', changeImage)