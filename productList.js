import {headCollars, saddlepads, bridles, leatherBags, rugs} from './productsData.js'

const productsGrid = document.querySelector('.products-grid')
const productTitle =  document.querySelector('.products-title')

const params = new URLSearchParams(window.location.search);
let category = params.get("category")

getProductCategory()

function getProductCategory(){
    let productsCategory = []
    
    switch (category) {
        case "headCollars":
            productsCategory = headCollars;
            productTitle.textContent = 'Head Collars'
            break;
        case "saddlepads":
            productsCategory = saddlepads;
            productTitle.textContent = 'Saddelpads'
            break;
        case "bridles":
            productsCategory = bridles
            productTitle.textContent = 'Bridles'
            break;
        case "leatherBags":
            productsCategory = leatherBags
            productTitle.textContent = 'Leather Bags'
            break;
        case "rugs":
            productsCategory = rugs
            productTitle.textContent = 'Rugs'
    }
    renderProducts(productsCategory)
}

function renderProducts(productsCategory){
    let productsList = '' 

    productsCategory.forEach((product)=>{
        productsList += 
        `<div class="product-card" data-id="${product.name}">
                <img src="${product.image[0]}" alt="${product.id}" class="product-image" />
                <h4 class="product-name">${product.name}</h4>
                <div>
                    <button>KNOW MORE</button>
                </div>
        </div>
        `
    })
    productsGrid.innerHTML += productsList
}

    
    document.body.addEventListener('click',(e)=>{
        if(e.target.closest('.product-card')){
            const productCard = e.target.closest('.product-card').dataset.id
            showDeatils(productCard)
        }
    })

function showDeatils(productCard){
    window.location.href = `productDetails.html?category=${encodeURIComponent(category)}&product=${encodeURIComponent(productCard)}`;
    }

  
