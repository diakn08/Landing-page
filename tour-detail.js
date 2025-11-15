// BURGER MENU
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

if (burger) {
  burger.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

// GALLERY SLIDER
let currentIndex = 0;
const images = document.querySelectorAll('.gallery-container img');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
  images.forEach((img, i) => {
    img.style.display = i === index ? 'block' : 'none';
  });
  
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

function moveSlide(direction) {
  currentIndex += direction;
  if (currentIndex < 0) currentIndex = images.length - 1;
  if (currentIndex >= images.length) currentIndex = 0;
  showSlide(currentIndex);
}

function currentSlide(index) {
  currentIndex = index;
  showSlide(currentIndex);
}

// Auto-play slider
setInterval(() => {
  moveSlide(1);
}, 5000);

// DAY ACCORDION
function toggleDay(element) {
  const dayItem = element.parentElement;
  const wasActive = dayItem.classList.contains('active');
  
  // Close all
  document.querySelectorAll('.day-item').forEach(item => {
    item.classList.remove('active');
  });
  
  // Toggle current
  if (!wasActive) {
    dayItem.classList.add('active');
  }
}

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// BOOKING MODAL
function openBookingModal() {
  const modal = document.getElementById('bookingModal');
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeBookingModal() {
  const modal = document.getElementById('bookingModal');
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
  
  // Reset counts
  document.getElementById('twin-count').value = 0;
  document.getElementById('single-count').value = 0;
  updateTotal();
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
  const modal = document.getElementById('bookingModal');
  if (e.target === modal) {
    closeBookingModal();
  }
});

// Package counter
function changeCount(packageType, change) {
  const input = document.getElementById(`${packageType}-count`);
  let currentValue = parseInt(input.value) || 0;
  let newValue = Math.max(0, currentValue + change);
  input.value = newValue;
  
  // Auto-select the radio button
  if (newValue > 0) {
    document.getElementById(packageType).checked = true;
  }
  
  updateTotal();
}

// Update total price
function updateTotal() {
  const twinCount = parseInt(document.getElementById('twin-count').value) || 0;
  const singleCount = parseInt(document.getElementById('single-count').value) || 0;
  
  const twinPrice = 1550;
  const singlePrice = 1750;
  
  let total = 0;
  
  if (document.getElementById('twin').checked) {
    total = twinCount * twinPrice;
  } else if (document.getElementById('single').checked) {
    total = singleCount * singlePrice;
  }
  
  // Update displays
  document.getElementById('total-amount').textContent = `${total.toFixed(2)}`;
  document.getElementById('full-amount').textContent = `${total.toFixed(2)}`;
}