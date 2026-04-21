// SnapSum - Main JavaScript

// Mobile menu toggle
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  const isHidden = navLinks.style.display === 'none' || !navLinks.style.display;
  
  if (isHidden) {
    navLinks.style.display = 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '60px';
    navLinks.style.left = '0';
    navLinks.style.right = '0';
    navLinks.style.background = 'var(--surface)';
    navLinks.style.padding = '20px';
    navLinks.style.borderBottom = '1px solid var(--border)';
  } else {
    navLinks.style.display = '';
  }
}

// FAQ toggle
function toggleFaq(element) {
  const faqItem = element.parentElement;
  faqItem.classList.toggle('active');
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
  const navLinks = document.querySelector('.nav-links');
  const navMenu = document.querySelector('.nav-menu');
  
  if (navLinks && navMenu && !navLinks.contains(e.target) && !navMenu.contains(e.target)) {
    navLinks.style.display = '';
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});

// Intersection Observer for animations
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Observe elements for fade-in animation
document.querySelectorAll('.step-card, .feature-card, .pricing-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

// Add visible class styles
const style = document.createElement('style');
style.textContent = `
  .visible {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
`;
document.head.appendChild(style);

// Paddle checkout (placeholder - enable after Paddle approval)
/*
document.addEventListener('DOMContentLoaded', function() {
  const paddleBtn = document.getElementById('paddle-checkout');
  if (paddleBtn) {
    paddleBtn.addEventListener('click', function() {
      // Paddle.Checkout.open({
      //   product: YOUR_PRODUCT_ID,
      //   allowQuantity: false,
      //   disableLogout: true,
      //   frameTarget: 'checkout-container',
      //   frameInitialHeight: 416,
      //   frameStyle: 'width:100%; min-width:312px; background-color: transparent; border: none;'
      // });
      alert('Paddle checkout will be available soon! Contact support@snap-sum.com to subscribe.');
    });
  }
});
*/

// Analytics placeholder
function trackEvent(eventName, properties = {}) {
  // Replace with your analytics solution (Google Analytics, Mixpanel, etc.)
  // console.log('Track:', eventName, properties);
}

// Track button clicks
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
  btn.addEventListener('click', function() {
    const href = this.getAttribute('href') || '';
    const text = this.textContent.trim();
    
    if (href.includes('download') || text.toLowerCase().includes('download')) {
      trackEvent('download_click', { location: window.location.pathname });
    } else if (href.includes('pricing') || text.toLowerCase().includes('upgrade')) {
      trackEvent('upgrade_click', { location: window.location.pathname });
    }
  });
});

// Service Worker registration (for PWA support)
/*
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      console.log('ServiceWorker registration successful');
    }, function(err) {
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}
*/
