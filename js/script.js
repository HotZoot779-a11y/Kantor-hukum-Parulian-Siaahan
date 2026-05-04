/* ============================================
   PARULIAN SIAHAAN & PARTNERS - SCRIPT.JS
   Interactive Functions
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    
    /* ============================================
       HEADER SCROLL EFFECT
       ============================================ */
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('header-scrolled');
        } else {
            // Only remove class on home page (index.html)
            if (document.querySelector('.hero')) {
                header.classList.remove('header-scrolled');
            }
        }
    });

    /* ============================================
       MOBILE MENU TOGGLE
       ============================================ */
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    /* ============================================
       SMOOTH SCROLL FOR ANCHOR LINKS
       ============================================ */
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    /* ============================================
       CONTACT FORM HANDLING
       ============================================ */
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const phone = formData.get('phone');
            const service = formData.get('service');
            const message = formData.get('message');
            
            // Validate form
            if (!name || !email || !phone || !service || !message) {
                showAlert('Mohon isi semua formulir dengan lengkap.', 'error');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showAlert('Mohon masukkan email yang valid.', 'error');
                return;
            }
            
            // Phone validation
            const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
            if (!phoneRegex.test(phone)) {
                showAlert('Mohon masukkan nomor telepon yang valid.', 'error');
                return;
            }
            
            // Success - in production, this would send to a server
            showAlert('Terima kasih! Pesan Anda telah terkirim. Tim kami akan menghubungi Anda dalam 24 jam.', 'success');
            this.reset();
        });
    }

    /* ============================================
       FAQ ACCORDION
       ============================================ */
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(function(item) {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        if (question && answer) {
            question.addEventListener('click', function() {
                const isActive = item.classList.contains('active');
                
                // Close all other items
                faqItems.forEach(function(otherItem) {
                    otherItem.classList.remove('active');
                    const otherAnswer = otherItem.querySelector('.faq-answer');
                    if (otherAnswer) {
                        otherAnswer.style.maxHeight = null;
                    }
                });
                
                // Toggle current item
                if (!isActive) {
                    item.classList.add('active');
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                }
            });
        }
    });

    /* ============================================
       SCROLL ANIMATIONS (Fade In)
       ============================================ */
    const fadeElements = document.querySelectorAll('.fade-in');
    
    if (fadeElements.length > 0) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        fadeElements.forEach(function(element) {
            observer.observe(element);
        });
    }

    /* ============================================
       SERVICE CARD HOVER EFFECTS
       ============================================ */
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(function(card) {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    /* ============================================
       LAZY LOAD IMAGES
       ============================================ */
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    if (lazyImages.length > 0) {
        const imageObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px 0px',
            threshold: 0.01
        });
        
        lazyImages.forEach(function(img) {
            imageObserver.observe(img);
        });
    }



    /* ============================================
       WHATSAPP FLOAT BUTTON
       ============================================ */
    let whatsappButton = document.querySelector('.whatsapp-float');
    
    if (!whatsappButton) {
        whatsappButton = document.createElement('a');
        whatsappButton.href = 'https://wa.me/628118168500?text=Hi%2C%20saya%20ingin%20konsultasi%20hukum';
        whatsappButton.className = 'whatsapp-float';
        whatsappButton.target = '_blank';
        whatsappButton.rel = 'noopener noreferrer';
        whatsappButton.innerHTML = '<i class="fab fa-whatsapp"></i>';
        whatsappButton.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 60px;
            height: 60px;
            background-color: #25D366;
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 28px;
            cursor: pointer;
            z-index: 9999;
            box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
            transition: all 0.3s ease;
            opacity: 1;
            visibility: visible;
        `;
        document.body.appendChild(whatsappButton);
    }
    
    whatsappButton.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.6)';
    });
    
    whatsappButton.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = '0 4px 12px rgba(37, 211, 102, 0.4)';
    });

    /* ============================================
       ACTIVE NAV LINK HIGHLIGHTING
       ============================================ */
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(function(link) {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });

    /* ============================================
       PHONE NUMBER FORMATTING
       ============================================ */
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    
    phoneInputs.forEach(function(input) {
        input.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 0) {
                if (value.startsWith('0')) {
                    value = '+62' + value.substring(1);
                } else if (value.startsWith('62')) {
                    value = '+' + value;
                } else if (!value.startsWith('+')) {
                    value = '+' + value;
                }
            }
            e.target.value = value;
        });
    });

    /* ============================================
       SEARCH FUNCTION (if search bar exists)
       ============================================ */
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    
    if (searchInput && searchResults) {
        let debounceTimer;
        
        searchInput.addEventListener('input', function(e) {
            clearTimeout(debounceTimer);
            const query = e.target.value.toLowerCase().trim();
            
            if (query.length < 3) {
                searchResults.style.display = 'none';
                return;
            }
            
            debounceTimer = setTimeout(function() {
                // In production, this would search actual content
                showSearchResults(query);
            }, 300);
        });
        
        // Close results when clicking outside
        document.addEventListener('click', function(e) {
            if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
                searchResults.style.display = 'none';
            }
        });
    }

    /* ============================================
       PREVENT FORM RESUBMISSION ON REFRESH
       ============================================ */
    if (window.history.replaceState) {
        window.history.replaceState(null, null, window.location.href);
    }

    /* ============================================
       COUNTDOWN TIMER (for special offers - optional)
       ============================================ */
    const countdownElements = document.querySelectorAll('[data-countdown]');
    
    countdownElements.forEach(function(element) {
        const targetDate = new Date(element.dataset.countdown).getTime();
        
        const timer = setInterval(function() {
            const now = new Date().getTime();
            const distance = targetDate - now;
            
            if (distance < 0) {
                clearInterval(timer);
                element.innerHTML = 'Expired';
                return;
            }
            
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            element.innerHTML = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's';
        }, 1000);
    });
});

/* ============================================
   HELPER FUNCTIONS
   ============================================ */

/**
 * Show alert message
 */
function showAlert(message, type) {
    // Remove existing alerts
    const existingAlerts = document.querySelectorAll('.alert-message');
    existingAlerts.forEach(function(alert) {
        alert.remove();
    });
    
    // Create alert element
    const alert = document.createElement('div');
    alert.className = 'alert-message';
    alert.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 16px 24px;
        background-color: ${type === 'success' ? '#10b981' : '#ef4444'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    alert.innerHTML = '<i class="fas fa-' + (type === 'success' ? 'check-circle' : 'exclamation-circle') + '"></i> ' + message;
    
    document.body.appendChild(alert);
    
    // Auto remove after 5 seconds
    setTimeout(function() {
        alert.style.opacity = '0';
        alert.style.transform = 'translateX(100%)';
        setTimeout(function() {
            alert.remove();
        }, 300);
    }, 5000);
}

/**
 * Show search results (placeholder)
 */
function showSearchResults(query) {
    const searchResults = document.getElementById('searchResults');
    if (!searchResults) return;
    
    // This would be connected to actual content in production
    const results = [
        { title: 'Hukum Perdata', url: 'services.html#perdata', snippet: 'Layanan hukum perdata...' },
        { title: 'Hukum Pidana', url: 'services.html#pidana', snippet: 'Layanan hukum pidana...' },
        { title: 'Hubungi Kami', url: 'contact.html', snippet: 'Kontak kami...' }
    ];
    
    const filtered = results.filter(function(r) {
        return r.title.toLowerCase().includes(query) || r.snippet.toLowerCase().includes(query);
    });
    
    if (filtered.length > 0) {
        let html = '';
        filtered.forEach(function(result) {
            html += '<a href="' + result.url + '" class="search-result-item">' +
                '<strong>' + result.title + '</strong>' +
                '<p>' + result.snippet + '</p>' +
            '</a>';
        });
        searchResults.innerHTML = html;
    } else {
        searchResults.innerHTML = '<p class="no-results">Tidak ada hasil untuk "' + query + '"</p>';
    }
    
    searchResults.style.display = 'block';
}

/**
 * Google Maps placeholder init
 */
function initMap() {
    // Google Maps would be initialized here in production
    console.log('Google Maps initialized');
}

// Add CSS for search results
const searchResultsStyle = document.createElement('style');
searchResultsStyle.textContent = `
    .search-result-item {
        display: block;
        padding: 12px 16px;
        border-bottom: 1px solid #eee;
        transition: background-color 0.2s;
    }
    .search-result-item:hover {
        background-color: #f7fafc;
    }
    .search-result-item strong {
        display: block;
        color: #1a365d;
        margin-bottom: 4px;
    }
    .search-result-item p {
        font-size: 13px;
        color: #718096;
        margin: 0;
    }
    .no-results {
        padding: 16px;
        text-align: center;
        color: #718096;
    }
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateX(100%);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;
document.head.appendChild(searchResultsStyle);