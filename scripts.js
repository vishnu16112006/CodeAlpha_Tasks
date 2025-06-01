// Initialize AOS animations
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
});

// Sticky Add-to-Cart bar logic
const addToCartBar = document.getElementById('addToCartBar');
const productInfo = document.querySelector('.product-info');

window.addEventListener('scroll', () => {
  const productBottom = productInfo.getBoundingClientRect().bottom;

  if (productBottom < 60) {
    addToCartBar.classList.add('visible');
  } else {
    addToCart
  }