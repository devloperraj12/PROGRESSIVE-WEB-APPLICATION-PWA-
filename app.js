const products = {
  1: {
    name: "Stylish Sports Shoes",
    image: "product1.jpg",
    description: "Lightweight and comfortable shoes perfect for sports and daily use.",
    price: "₹2,499",
    warranty: "6 months",
    specs: ["Material: Mesh", "Sizes: 6-11", "Color: Grey"],
    reviews: ["Very comfy!", "Great for running."]
  },
  2: {
    name: "Trendy Backpack",
    image: "product2.jpg",
    description: "Waterproof backpack with USB port, great for students.",
    price: "₹1,199",
    warranty: "1 year",
    specs: ["Material: Nylon", "Laptop Sleeve: Yes", "Color: Black"],
    reviews: ["Spacious and light", "Good quality zippers."]
  },
  3: {
    name: "Digital Smart Watch",
    image: "product3.jpg",
    description: "Fitness watch with heart rate monitor and notification support.",
    price: "₹3,499",
    warranty: "1 year",
    specs: ["Display: 1.4” Touch", "OS: Android/iOS", "Battery: 7 days"],
    reviews: ["Battery lasts a week", "Easy Bluetooth sync."]
  }
};

const productList = document.getElementById('product-list');
const productDetail = document.getElementById('product-detail');

// Load product cards
Object.keys(products).forEach(id => {
  const p = products[id];
  const card = document.createElement('div');
  card.className = 'product-card';
  card.innerHTML = `
    <img src="${p.image}" alt="${p.name}" />
    <h2>${p.name}</h2>
    <p>${p.description}</p>
    <p class="price">${p.price}</p>
  `;
  card.onclick = () => showProductDetail(id);
  productList.appendChild(card);
});

function showProductDetail(id) {
  const p = products[id];
  productList.style.display = 'none';
  productDetail.style.display = 'grid';
  productDetail.innerHTML = `
    <div class="product-detail-card">
      <img src="${p.image}" alt="${p.name}" />
      <h2>${p.name}</h2>
      <p>${p.description}</p>
      <p class="price">${p.price}</p>
      <p><strong>Warranty:</strong> ${p.warranty}</p>
      <h3>Specifications:</h3>
      <ul>${p.specs.map(i => `<li>${i}</li>`).join("")}</ul>
      <h3>Reviews:</h3>
      <ul>${p.reviews.map(i => `<li>⭐ ${i}</li>`).join("")}</ul>
      <button class="back-btn" onclick="goBack()">⬅ Back to Products</button>
    </div>
  `;
}

function goBack() {
  productDetail.style.display = 'none';
  productList.style.display = 'grid';
}

// Register service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then(() => console.log('Service Worker Registered'))
    .catch(err => console.error('SW registration failed', err));
}
