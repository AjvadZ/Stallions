import {headCollars, saddlepads, bridles, leatherBags, rugs} from './productsData.js'

const productDetails = document.querySelector('.product-details-content')

const params = new URLSearchParams(window.location.search);
const category = params.get("category")
const productId = params.get("product")

let productsCategory = []
getProductCategory()
function getProductCategory(){
    switch (category) {
        case "headCollars":
            productsCategory = headCollars;
            break;
        case "saddlepads":
            productsCategory = saddlepads;
            break;
        case "bridles":
            productsCategory = bridles
            break;
        case "leatherBags":
            productsCategory = leatherBags
            break;
        case "rugs":
            productsCategory = rugs
    }
}

function findProduct(productsCategory, productId){
    return productsCategory.find(eachProduct=> eachProduct.name === productId)
}

const fullDetails = findProduct(productsCategory, productId)

const productImgContainer = document.querySelector('.wrapper')

// Clear existing images (avoid repeated appends on reload)
productImgContainer.innerHTML = ''

fullDetails.image.forEach((image) => {
    const productImg = document.createElement('img')
    productImg.src = image
    productImg.alt = 'Product Image for ' + fullDetails.title
    productImgContainer.append(productImg)
});
if (productImgContainer.children.length > 1) {
(function (){
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const totalImages = productImgContainer.children.length;
    let currentIndex = 0;

    function updateSlide(){
        const imageWidth = productImgContainer.clientWidth; // dynamically get current container width
        productImgContainer.style.transform = `translateX(${-currentIndex * imageWidth}px)`;
    }

    prevBtn.addEventListener('click',()=>{
        currentIndex = (currentIndex -1 + totalImages) % totalImages;
        updateSlide();
    })

    nextBtn.addEventListener('click',()=>{
        currentIndex = (currentIndex + 1) % totalImages;
        updateSlide()
    })

    window.addEventListener('resize', updateSlide);

    // Initial slide position update
    updateSlide();
})()
}else{
    document.getElementById('prevBtn').style.display = 'none'
    document.getElementById('nextBtn').style.display = 'none'

}

const featureDetails = fullDetails.features

productDetails.innerHTML = `
    <h1>${fullDetails.title}</h1>
    <ul class="product-details-list">
    ${featureDetails.map((f)=>`
      <li>
        <strong>${f.label}:</strong> 
        ${'value' in f
            ? f.value
            : `<ul>
                ${f.subfeatures.map((s) => `<li>${s}</li>`).join('')}
              </ul>`
        }
      </li>
      `).join('')}
    </ul>
  `;

