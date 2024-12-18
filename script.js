const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

// Example products for real-time search
const products = [
  "Laptop",
  "Headphones",
  "Smartphone",
  "Camera",
  "Smartwatch",
  "Tablet",
  "Gaming Console",
  "Keyboard",
  "Mouse",
  "Monitor"
];

searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  searchResults.style.display = query ? 'block' : 'none';

  const filteredProducts = products.filter(product =>
    product.toLowerCase().includes(query)
  );

  const resultHTML = filteredProducts
    .map(product => `<li>${product}</li>`)
    .join('');

  searchResults.innerHTML = `<ul>${resultHTML}</ul>`;
});
// Custom slider behavior (optional)
// Example: Restart the slider after the last slide
const slider = document.querySelector('#hero-slider');

slider.addEventListener('slid.bs.carousel', function () {
  console.log('Slide changed!');
});
document.querySelector('a[href="#newsletter"]').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('newsletter').scrollIntoView({ behavior: 'smooth' });
});

    // Function to toggle the active class
    function toggleToggler(element) {
      element.classList.toggle('active');
    }


