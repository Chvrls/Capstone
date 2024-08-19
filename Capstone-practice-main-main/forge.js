import { pcCase } from "./temp-data-for-products/pcCase";

const caseBtn = document.querySelector('.case');
const showAllCase = document.querySelector('.all-case');

let productsHTML = '';

caseBtn.addEventListener('click', () => { 
  // productsHTML = `
  //   <div class="shadow-none mb-2 mx-3 bg-body-tertiary border border-dark-subtle fw-bold" id="components">
  //     <img class="case-img me-5" src="images/image-placeholder.png" alt="">
  //     First PC Case
  //   </div>`;
  //   showAllCase.innerHTML = productsHTML;
  showAllCase.classList.toggle('active');
  if (showAllCase.classList.contains('active')) {
    showAllCase.classList.remove('not-active');
    productsHTML = `
    <div class="shadow-none mb-2 mx-3 bg-body-tertiary border border-dark-subtle fw-bold" id="components">
      <img class="case-img me-5" src="images/image-placeholder.png" alt="">
      First PC Case
    </div>`;
      showAllCase.innerHTML = productsHTML;
  } else if (!showAllCase.classList.contains('active')) { 
    showAllCase.classList.add('not-active');
  }
  
})