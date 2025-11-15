// BURGER MENU
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
  });
});

// MODAL FUNCTIONALITY
const modal = document.getElementById('contactModal');
const inquireBtn = document.querySelector('.inquire-btn');
const ctaButton = document.querySelector('.cta-button');
const closeModal = document.querySelector('.close-modal');
const inquiryForm = document.getElementById('inquiryForm');

// Open modal
function openModal() {
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Close modal
function closeModalFunc() {
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

inquireBtn.addEventListener('click', openModal);
ctaButton.addEventListener('click', openModal);
closeModal.addEventListener('click', closeModalFunc);

// Close modal when clicking outside
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModalFunc();
  }
});

// Close modal with ESC key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('active')) {
    closeModalFunc();
  }
});

// FORM SUBMISSION
inquiryForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Get form data
  const formData = new FormData(inquiryForm);
  const data = Object.fromEntries(formData);
  
  console.log('Form submitted:', data);
  
  // Show success message
  const successMsg = document.createElement('div');
  successMsg.className = 'success-message show';
  successMsg.textContent = 'Thank you! Your inquiry has been sent successfully. We will get back to you soon!';
  
  inquiryForm.insertBefore(successMsg, inquiryForm.firstChild);
  
  // Reset form
  inquiryForm.reset();
  
  // Hide success message and close modal after 3 seconds
  setTimeout(() => {
    successMsg.remove();
    closeModalFunc();
  }, 3000);
});

// SMOOTH SCROLLING
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// THEME TOGGLE
const themeBtn = document.getElementById('theme-toggle');
let isDark = true;

themeBtn.addEventListener('click', () => {
  isDark = !isDark;
  if (isDark) {
    document.body.style.background = '#000';
    themeBtn.textContent = 'Dark';
  } else {
    document.body.style.background = '#fff';
    themeBtn.textContent = 'Light';
  }
});

// LANGUAGE TOGGLE
const langBtn = document.getElementById('lang-toggle');

const translations = {
  en: {
    heroSubtitle: "2025-2027",
    heroTitle: "SIGNATURE &<br>PHOTO TOURS",
    aboutName: "Tynchtyk Mukhambetov",
    aboutJob: "A professional drone pilot & photographer",
    aboutDesc: "Immerse yourself in an adventure with my personal guidance. Choose from adventure tours or photography tours for an unforgettable experience and one-of-a-kind photos.",
    toursTitle: "MY PHOTO TOURS FOR 2026:",
    tours: [
      "Frozen lakes Adventure | 5 DAYS",
      "Mangistau Photo Tour | 7 DAYS",
      "Photo Tour to the South | 9 DAYS",
      "Trek to Eshenkul Lake | 5 DAYS",
      "Classic Photo Tour | 11 DAYS"
    ],
    signatureText: "Join my signature tours and turn every trip into a story worth remembering, guided by my personal expertise",
    tour1Title: "KYRGYZSTAN FROZEN LAKES & PHOTO TOUR |5 DAYS |10-14 January 2026",
    tour1Desc: "Glide across frozen lakes, ride through snowy mountain valleys, and discover the icy wonders of Kyrgyzstan - from the scenic Kegeti Gorge to the breathtaking Kel-Suu.",
    tour2Title: "KYRGYZSTAN WINTER ADVENTURE TOUR| 7 DAYS |10-16 February 2026",
    tour2Desc: "Experience the magic of winter with thrilling adventures in breathtaking landscapes. Enjoy snow-covered peaks, exciting activities, and cozy cultural experiences. A perfect blend of adventure and winter charm!",
    tour3Title: "KAZAKHSTAN PHOTO TOUR MANGYSTAU | 7 DAYS |15-21 April, 2026",
    tour3Desc: "Experience a 7-day Mangystau adventure in Western Kazakhstan. See Aktau, Bozjira, Tuzbar, Sherkala, and the Valley of Balls with Tynchtyk MR and local guides.",
    tour4Title: "SPRING HIGHLIGHTS OF KGZ | 7 DAYS |24-30 April 2026",
    tour4Desc: "Experience spring in Kyrgyzstan on this 7-day adventure: ride through blooming valleys, witness eagle hunting, explore mountains and canyons.",
    tour5Title: "ULTIMATE MOUNTAIN STAYS OF KGZ|8 DAYS |2-9 May 2026",
    tour5Desc: "This 'Unique Stays Tour' is perfect for those who appreciate comfort and style even in the mountains. Discover extraordinary places from cozy glamping domes to traditional yurts.",
    tour6Title: "SOUTHERN KYRGYZSTAN PHOTO TOUR | 9 DAYS | 17-25 June 2026",
    tour6Desc: "Discover the untouched beauty of southern Kyrgyzstan. Capture dramatic mountain landscapes, ancient Silk Road sites, and vibrant local culture.",
    tour7Title: "TREK TO ESHENKUL LAKE & PHOTO TOUR | 5 DAYS | 26-30 June 2026",
    tour7Desc: "Discover Kyrgyzstan's untouched wilderness in just 5 days! Hike to crystal-clear alpine lakes, hidden gorges, and majestic mountain passes.",
    tour8Title: "CLASSIC PHOTO TOUR | 11 DAYS | 15-25 July 2026",
    tour8Desc: "Capture stunning landscapes and authentic cultural moments on this immersive photography journey. Explore breathtaking locations and refine your skills.",
    tour9Title: "KYRGYZSTAN GRAND JEEP TOUR |15 DAYS | 27 July - 10 August 2026",
    tour9Desc: "Discover Kyrgyzstan from the Tian Shan to the Pamir Mountains on a 15-day photography tour. Explore both north and south, capture the country's top highlights.",
    inspireTitle: "NEVER STOP EXPLORING",
    inspireDesc: "Exploring is one of life's greatest joys! The world is waiting for you to uncover its many mysteries and surprises!",
    servicesTitle: "SERVICES",
    service1Title: "Drone videos",
    service1Desc: "With state-of-the-art cameras and capable drone pilots, you will get unique aerial footage of any location and business on a professional level.",
    service2Title: "Photo tours",
    service2Desc: "Join Signature Photo tours of Tynchtyk MR and make more out of your vacation photos and upgrade your skills out in the capturing fields.",
    service3Title: "Tour packages",
    service3Desc: "Whether you're planning a weekend getaway or long-awaited vacation, our tour packages can make trips stress-free and enjoyable.",
    service4Title: "Ads & Collaborations",
    service4Desc: "Ads and collaborations on Instagram with @tynchtykmr help your business increase its visibility, establish brand identity, and communicate your message effectively.",
    ctaTitle: "COULDN'T FIND YOUR TOUR?",
    ctaBtn: "CONTACT US",
    copyright: "© 2025 All rights reserved | Tynchtyk MR",
    backTop: "Back to top ↑"
  },
  ru: {
    heroSubtitle: "2025-2027",
    heroTitle: "ФИРМЕННЫЕ И<br>ФОТО ТУРЫ",
    aboutName: "Тынчтык Мухамбетов",
    aboutJob: "Профессиональный пилот дрона и фотограф",
    aboutDesc: "Погрузитесь в приключение с моим личным сопровождением. Выбирайте из приключенческих туров или фото-туров для незабываемых впечатлений и уникальных фотографий.",
    toursTitle: "МОИ ФОТО-ТУРЫ НА 2026:",
    tours: [
      "Приключение на замерзших озёрах | 5 ДНЕЙ",
      "Фото-тур Мангистау | 7 ДНЕЙ",
      "Фото-тур на юг | 9 ДНЕЙ",
      "Поход к озеру Эшенкуль | 5 ДНЕЙ",
      "Классический фото-тур | 11 ДНЕЙ"
    ],
    signatureText: "Присоединяйтесь к моим фирменным турам и превратите каждое путешествие в историю, которую стоит запомнить",
    tour1Title: "КЫРГЫЗСТАН ЗАМЕРЗШИЕ ОЗЁРА И ФОТО-ТУР |5 ДНЕЙ |10-14 января 2026",
    tour1Desc: "Скользите по замерзшим озёрам, катайтесь по заснеженным горным долинам и откройте для себя ледяные чудеса Кыргызстана.",
    tour2Title: "КЫРГЫЗСТАН ЗИМНЕЕ ПРИКЛЮЧЕНИЕ| 7 ДНЕЙ |10-16 февраля 2026",
    tour2Desc: "Испытайте магию зимы с захватывающими приключениями в потрясающих пейзажах. Наслаждайтесь заснеженными пиками и уютными культурными впечатлениями!",
    tour3Title: "КАЗАХСТАН ФОТО-ТУР МАНГИСТАУ | 7 ДНЕЙ |15-21 апреля 2026",
    tour3Desc: "Испытайте 7-дневное приключение Мангистау в Западном Казахстане. Посетите Актау, Божира, Тузбар, Шеркала и Долину Шаров.",
    tour4Title: "ВЕСЕННИЕ ИЗЮМИНКИ КГЗ | 7 ДНЕЙ |24-30 апреля 2026",
    tour4Desc: "Испытайте весну в Кыргызстане в этом 7-дневном приключении: прокатитесь по цветущим долинам, станьте свидетелем охоты с орлами.",
    tour5Title: "УНИКАЛЬНЫЕ ГОРНЫЕ ОСТАНОВКИ КГЗ|8 ДНЕЙ |2-9 мая 2026",
    tour5Desc: "Этот тур идеален для тех, кто ценит комфорт и стиль даже в горах. Откройте для себя необычные места от уютных глэмпингов до традиционных юрт.",
    tour6Title: "ЮЖНЫЙ КЫРГЫЗСТАН ФОТО-ТУР | 9 ДНЕЙ | 17-25 июня 2026",
    tour6Desc: "Откройте для себя нетронутую красоту южного Кыргызстана. Снимайте драматические горные пейзажи, древние памятники Шёлкового пути.",
    tour7Title: "ПОХОД К ОЗЕРУ ЭШЕНКУЛЬ И ФОТО-ТУР | 5 ДНЕЙ | 26-30 июня 2026",
    tour7Desc: "Откройте для себя нетронутую дикую природу Кыргызстана всего за 5 дней! Отправьтесь в поход к кристально чистым альпийским озёрам.",
    tour8Title: "КЛАССИЧЕСКИЙ ФОТО-ТУР | 11 ДНЕЙ | 15-25 июля 2026",
    tour8Desc: "Снимайте потрясающие пейзажи и аутентичные культурные моменты в этом захватывающем фотопутешествии.",
    tour9Title: "КЫРГЫЗСТАН БОЛЬШОЙ ДЖИП-ТУР |15 ДНЕЙ | 27 июля - 10 августа 2026",
    tour9Desc: "Откройте для себя Кыргызстан от Тянь-Шаня до Памирских гор в 15-дневном фототуре. Исследуйте север и юг страны.",
    inspireTitle: "НИКОГДА НЕ ПЕРЕСТАВАЙТЕ ИССЛЕДОВАТЬ",
    inspireDesc: "Исследование - одна из величайших радостей жизни! Мир ждет, когда вы откроете его многочисленные тайны и сюрпризы!",
    servicesTitle: "УСЛУГИ",
    service1Title: "Видео с дрона",
    service1Desc: "С современными камерами и опытными пилотами дронов вы получите уникальные аэросъёмки любой локации и бизнеса на профессиональном уровне.",
    service2Title: "Фото-туры",
    service2Desc: "Присоединяйтесь к фирменным фото-турам Тынчтыка МР и извлеките больше из своих отпускных фотографий.",
    service3Title: "Туристические пакеты",
    service3Desc: "Планируете ли вы поездку на выходные или долгожданный отпуск, наши туристические пакеты сделают поездки беззаботными и приятными.",
    service4Title: "Реклама и коллаборации",
    service4Desc: "Реклама и сотрудничество в Instagram с @tynchtykmr помогут вашему бизнесу повысить видимость и установить идентичность бренда.",
    ctaTitle: "НЕ НАШЛИ СВОЙ ТУР?",
    ctaBtn: "СВЯЖИТЕСЬ С НАМИ",
    copyright: "© 2025 Все права защищены | Тынчтык МР",
    backTop: "Наверх ↑"
  }
};

let currentLang = 'en';

function applyLanguage(lang) {
  // Hero section
  document.querySelector('.hero-subtitle').textContent = translations[lang].heroSubtitle;
  document.querySelector('.hero h1').innerHTML = translations[lang].heroTitle;
  
  // About section
  document.querySelector('.about-text h2').textContent = translations[lang].aboutName;
  document.querySelector('.about-text .subtitle').textContent = translations[lang].aboutJob;
  document.querySelectorAll('.about-text p')[0].textContent = translations[lang].aboutDesc;
  document.querySelector('.tours-title').textContent = translations[lang].toursTitle;
  
  // Update tour list
  const tourList = document.querySelector('.about-text ol');
  tourList.innerHTML = '';
  translations[lang].tours.forEach(tour => {
    const li = document.createElement('li');
    li.textContent = tour;
    tourList.appendChild(li);
  });
  
  document.querySelector('.signature-text').textContent = translations[lang].signatureText;
  
  // Tours section - all 9 tours
  const tourCards = document.querySelectorAll('.tour-card');
  if (tourCards[0]) {
    tourCards[0].querySelector('h3').textContent = translations[lang].tour1Title;
    tourCards[0].querySelector('p').textContent = translations[lang].tour1Desc;
  }
  if (tourCards[1]) {
    tourCards[1].querySelector('h3').textContent = translations[lang].tour2Title;
    tourCards[1].querySelector('p').textContent = translations[lang].tour2Desc;
  }
  if (tourCards[2]) {
    tourCards[2].querySelector('h3').textContent = translations[lang].tour3Title;
    tourCards[2].querySelector('p').textContent = translations[lang].tour3Desc;
  }
  if (tourCards[3]) {
    tourCards[3].querySelector('h3').textContent = translations[lang].tour4Title;
    tourCards[3].querySelector('p').textContent = translations[lang].tour4Desc;
  }
  if (tourCards[4]) {
    tourCards[4].querySelector('h3').textContent = translations[lang].tour5Title;
    tourCards[4].querySelector('p').textContent = translations[lang].tour5Desc;
  }
  if (tourCards[5]) {
    tourCards[5].querySelector('h3').textContent = translations[lang].tour6Title;
    tourCards[5].querySelector('p').textContent = translations[lang].tour6Desc;
  }
  if (tourCards[6]) {
    tourCards[6].querySelector('h3').textContent = translations[lang].tour7Title;
    tourCards[6].querySelector('p').textContent = translations[lang].tour7Desc;
  }
  if (tourCards[7]) {
    tourCards[7].querySelector('h3').textContent = translations[lang].tour8Title;
    tourCards[7].querySelector('p').textContent = translations[lang].tour8Desc;
  }
  if (tourCards[8]) {
    tourCards[8].querySelector('h3').textContent = translations[lang].tour9Title;
    tourCards[8].querySelector('p').textContent = translations[lang].tour9Desc;
  }
  
  // Inspiration section
  document.querySelector('.inspiration h2').textContent = translations[lang].inspireTitle;
  document.querySelector('.inspiration p').textContent = translations[lang].inspireDesc;
  
  // Services section - all 4 services
  document.querySelector('.services h2').textContent = translations[lang].servicesTitle;
  const serviceCards = document.querySelectorAll('.service-card');
  if (serviceCards[0]) {
    serviceCards[0].querySelector('h3').textContent = translations[lang].service1Title;
    serviceCards[0].querySelector('p').textContent = translations[lang].service1Desc;
  }
  if (serviceCards[1]) {
    serviceCards[1].querySelector('h3').textContent = translations[lang].service2Title;
    serviceCards[1].querySelector('p').textContent = translations[lang].service2Desc;
  }
  if (serviceCards[2]) {
    serviceCards[2].querySelector('h3').textContent = translations[lang].service3Title;
    serviceCards[2].querySelector('p').textContent = translations[lang].service3Desc;
  }
  if (serviceCards[3]) {
    serviceCards[3].querySelector('h3').textContent = translations[lang].service4Title;
    serviceCards[3].querySelector('p').textContent = translations[lang].service4Desc;
  }
  
  // CTA section
  document.querySelector('.cta h2').textContent = translations[lang].ctaTitle;
  document.querySelector('.cta-button').textContent = translations[lang].ctaBtn;
  
  // Footer
  document.querySelector('footer p').textContent = translations[lang].copyright;
  document.querySelector('.back-top').textContent = translations[lang].backTop;
}

langBtn.addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'ru' : 'en';
  langBtn.textContent = currentLang.toUpperCase();
  applyLanguage(currentLang);
});