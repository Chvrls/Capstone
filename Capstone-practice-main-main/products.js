const productsGrid = document.querySelector('#grid');

const products = [
  {
    image: 'images/image-placeholder.png',
    name: 'Gaming Computer',
    price: 20000
  },
  {
    image: 'images/image-placeholder.png',
    name: 'Gaming Computer',
    price: 20000
  },
  {
    image: 'images/image-placeholder.png',
    name: 'Gaming Computer',
    price: 20000
  },
  {
    image: 'images/image-placeholder.png',
    name: 'Gaming Computer',
    price: 20000
  },
  {
    image: 'images/image-placeholder.png',
    name: 'Gaming Computer',
    price: 20000
  }, {
    image: 'images/image-placeholder.png',
    name: 'Gaming Computer',
    price: 20000
  },
  {
    image: 'images/image-placeholder.png',
    name: 'Gaming Computer',
    price: 20000
  },
  {
    image: 'images/image-placeholder.png',
    name: 'Gaming Computer',
    price: 20000
  },
  {
    image: 'images/image-placeholder.png',
    name: 'Gaming Computer',
    price: 20000
  }, {
    image: 'images/image-placeholder.png',
    name: 'Gaming Computer',
    price: 20000
  }
];

let productsHTML = '';

products.forEach((product) => { 
  productsHTML += `
    <div class="product-card">
    <div class="product-img-container">
      <img class="product-image" src="${product.image}" alt="">
    </div>
      <p class="mt-3 mx-3 fw-bold">${product.name}</p>
      <p class="mt-5 mx-3 fw-bold">₱${product.price}</p>
    </div>`
})

productsGrid.innerHTML = productsHTML;