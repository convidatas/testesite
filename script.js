// ConvitesVIP - JavaScript Functions

// Data storage
const categories = [
    {
        id: 1,
        name: "Aniversários Infantis",
        slug: "infantil",
        icon: "🎂",
        basePrice: "25.00",
        customPrice: "120.00",
        gradient: "from-yellow-400 to-orange-500"
    },
    {
        id: 2,
        name: "15 Anos",
        slug: "15anos",
        icon: "👑",
        basePrice: "35.00",
        customPrice: "150.00",
        gradient: "from-pink-400 to-rose-500"
    },
    {
        id: 3,
        name: "Casamentos",
        slug: "casamento",
        icon: "💍",
        basePrice: "45.00",
        customPrice: "200.00",
        gradient: "from-purple-400 to-indigo-500"
    },
    {
        id: 4,
        name: "Save the Date",
        slug: "savedate",
        icon: "📅",
        basePrice: "30.00",
        customPrice: "200.00",
        gradient: "from-teal-400 to-cyan-500"
    },
    {
        id: 5,
        name: "Chá de Panela",
        slug: "chapanela",
        icon: "🍼",
        basePrice: "25.00",
        customPrice: "150.00",
        gradient: "from-green-400 to-emerald-500"
    }
];

const products = [
    {
        id: 1,
        name: "Festa Colorida",
        description: "Convite animado com personagens e cores vibrantes",
        category: "infantil",
        price: "25.00",
        imageUrl: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        isCustom: 0
    },
    {
        id: 2,
        name: "Super Heróis",
        description: "Convite animado com heróis favoritos",
        category: "infantil",
        price: "25.00",
        imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        isCustom: 0
    },
    {
        id: 3,
        name: "Rosa & Dourado",
        description: "Convite elegante com tema princesa",
        category: "15anos",
        price: "35.00",
        imageUrl: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        isCustom: 0
    },
    {
        id: 4,
        name: "Roxo & Prata",
        description: "Convite sofisticado e elegante",
        category: "15anos",
        price: "35.00",
        imageUrl: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        isCustom: 0
    },
    {
        id: 5,
        name: "Floral Clássico",
        description: "Convite romântico com detalhes florais",
        category: "casamento",
        price: "45.00",
        imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        isCustom: 0
    },
    {
        id: 6,
        name: "Moderno",
        description: "Design minimalista e contemporâneo",
        category: "casamento",
        price: "45.00",
        imageUrl: "https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        isCustom: 0
    },
    {
        id: 7,
        name: "Romântico",
        description: "Save the date delicado e elegante",
        category: "savedate",
        price: "30.00",
        imageUrl: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        isCustom: 0
    },
    {
        id: 8,
        name: "Delicado",
        description: "Convite suave com tema baby",
        category: "chapanela",
        price: "25.00",
        imageUrl: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        isCustom: 0
    }
];

// Global variables
let currentFilter = 'todos';
const phoneNumber = '5563992465372'; // Change this to your WhatsApp number

// Utility functions
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

function generateWhatsAppUrl(product, phone = phoneNumber) {
    const message = `Olá! Gostaria de comprar o convite: ${product.name} - R$ ${product.price}`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

function generateCustomWhatsAppUrl(category, phone = phoneNumber) {
    const message = `Olá! Gostaria de solicitar um orçamento para convite personalizado da categoria: ${category}`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

function generateContactWhatsAppUrl(phone = phoneNumber) {
    const message = "Olá! Gostaria de saber mais sobre os convites digitais";
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

// WhatsApp functions
function openWhatsApp() {
    const url = generateContactWhatsAppUrl();
    window.open(url, '_blank');
}

function openCustomWhatsApp() {
    const url = generateCustomWhatsAppUrl("Personalizado");
    window.open(url, '_blank');
}

function openProductWhatsApp(product) {
    const url = generateWhatsAppUrl(product);
    window.open(url, '_blank');
}

// Email function
function sendEmail() {
    window.location.href = "mailto:contato@convitesvip.com";
}

// Category functions
function getCategoryColor(category) {
    const colors = {
        infantil: "badge-infantil",
        "15anos": "badge-15anos",
        casamento: "badge-casamento",
        savedate: "badge-savedate",
        chapanela: "badge-chapanela",
    };
    return colors[category] || "badge-infantil";
}

function getCategoryName(category) {
    const names = {
        infantil: "Infantil",
        "15anos": "15 Anos",
        casamento: "Casamento",
        savedate: "Save the Date",
        chapanela: "Chá de Panela",
    };
    return names[category] || category;
}

function getCategoryGradient(gradient) {
    const gradients = {
        "from-yellow-400 to-orange-500": "background: linear-gradient(135deg, #fbbf24 0%, #f97316 100%);",
        "from-pink-400 to-rose-500": "background: linear-gradient(135deg, #f472b6 0%, #f43f5e 100%);",
        "from-purple-400 to-indigo-500": "background: linear-gradient(135deg, #a78bfa 0%, #6366f1 100%);",
        "from-teal-400 to-cyan-500": "background: linear-gradient(135deg, #2dd4bf 0%, #06b6d4 100%);",
        "from-green-400 to-emerald-500": "background: linear-gradient(135deg, #4ade80 0%, #10b981 100%);"
    };
    return gradients[gradient] || gradients["from-purple-400 to-indigo-500"];
}

// Render functions
function renderCategories() {
    const categoriesGrid = document.getElementById('categories-grid');
    if (!categoriesGrid) return;

    categoriesGrid.innerHTML = '';

    categories.forEach(category => {
        const categoryElement = document.createElement('div');
        categoryElement.className = 'category-card rounded-2xl p-6 text-center hover:scale-105 transition-transform cursor-pointer text-white';
        categoryElement.style.cssText = getCategoryGradient(category.gradient);
        categoryElement.onclick = () => filterByCategory(category.slug);

        categoryElement.innerHTML = `
            <div class="text-4xl mb-3">${category.icon}</div>
            <h4 class="font-semibold text-white">${category.name}</h4>
            <p class="text-white text-opacity-80 text-sm mt-1">A partir de R$ ${category.basePrice}</p>
        `;

        categoriesGrid.appendChild(categoryElement);
    });
}

function renderFilterButtons() {
    const filterButtons = document.getElementById('filter-buttons');
    if (!filterButtons) return;

    filterButtons.innerHTML = '';

    // Add "Todos" button
    const todosButton = document.createElement('button');
    todosButton.className = `btn-filter ${currentFilter === 'todos' ? 'active' : ''}`;
    todosButton.textContent = 'Todos';
    todosButton.onclick = () => setFilter('todos');
    filterButtons.appendChild(todosButton);

    // Add category buttons
    categories.forEach(category => {
        const button = document.createElement('button');
        button.className = `btn-filter ${currentFilter === category.slug ? 'active' : ''}`;
        button.textContent = category.name;
        button.onclick = () => setFilter(category.slug);
        filterButtons.appendChild(button);
    });
}

function renderProducts() {
    const productsGrid = document.getElementById('products-grid');
    if (!productsGrid) return;

    productsGrid.innerHTML = '';

    const filteredProducts = currentFilter === 'todos' 
        ? products 
        : products.filter(product => product.category === currentFilter);

    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = `
            <div class="col-span-full text-center py-12">
                <p class="text-gray-500 text-lg">Nenhum produto encontrado nesta categoria.</p>
            </div>
        `;
        return;
    }

    filteredProducts.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product-card';

        productElement.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}" class="w-full h-48 object-cover">
            <div class="p-5">
                <div class="flex items-center justify-between mb-2">
                    <span class="badge ${getCategoryColor(product.category)}">
                        ${getCategoryName(product.category)}
                    </span>
                    <span class="price">R$ ${product.price}</span>
                </div>
                <h4 class="font-semibold text-gray-900 mb-2">${product.name}</h4>
                <p class="text-gray-600 text-sm mb-4">${product.description}</p>
                <button 
                    onclick="openProductWhatsApp(${JSON.stringify(product).replace(/"/g, '&quot;')})"
                    class="btn-whatsapp w-full"
                >
                    <i class="fab fa-whatsapp"></i>
                    Comprar via WhatsApp
                </button>
            </div>
        `;

        productsGrid.appendChild(productElement);
    });
}

// Filter functions
function setFilter(filter) {
    currentFilter = filter;
    renderFilterButtons();
    renderProducts();
}

function filterByCategory(categorySlug) {
    // Scroll to catalog section
    scrollToSection('catalog');
    
    // Set filter after a short delay to allow scroll to complete
    setTimeout(() => {
        setFilter(categorySlug);
    }, 500);
}

// Mobile menu functions
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('active');
    }
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
        mobileMenu.classList.remove('active');
    }
}

// Loading states
function showLoading(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.innerHTML = `
            <div class="flex justify-center items-center py-12">
                <div class="spinner"></div>
            </div>
        `;
    }
}

function hideLoading(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.innerHTML = '';
    }
}

// Analytics functions (optional)
function trackEvent(eventName, properties = {}) {
    // Add your analytics tracking code here
    console.log('Event tracked:', eventName, properties);
}

function trackProductClick(product) {
    trackEvent('product_click', {
        product_id: product.id,
        product_name: product.name,
        category: product.category,
        price: product.price
    });
}

function trackWhatsAppClick(type, data = {}) {
    trackEvent('whatsapp_click', {
        type: type,
        ...data
    });
}

// Form validation functions
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[\+]?[1-9][\d]{0,15}$/;
    return re.test(phone.replace(/\s/g, ''));
}

// Local storage functions
function saveToStorage(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
        console.error('Error saving to localStorage:', error);
    }
}

function getFromStorage(key) {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    } catch (error) {
        console.error('Error reading from localStorage:', error);
        return null;
    }
}

// Search functionality
function searchProducts(query) {
    if (!query.trim()) {
        return products;
    }
    
    const lowercaseQuery = query.toLowerCase();
    return products.filter(product => 
        product.name.toLowerCase().includes(lowercaseQuery) ||
        product.description.toLowerCase().includes(lowercaseQuery) ||
        getCategoryName(product.category).toLowerCase().includes(lowercaseQuery)
    );
}

// Price formatting
function formatPrice(price) {
    return `R$ ${parseFloat(price).toFixed(2).replace('.', ',')}`;
}

// Image lazy loading
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('loading');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for older browsers
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    }
}

// Smooth scroll polyfill for older browsers
function smoothScrollPolyfill() {
    if (!('scrollBehavior' in document.documentElement.style)) {
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}

// Error handling
function showError(message, elementId = null) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'alert alert-error';
    errorDiv.textContent = message;
    
    if (elementId) {
        const element = document.getElementById(elementId);
        if (element) {
            element.appendChild(errorDiv);
        }
    } else {
        document.body.appendChild(errorDiv);
    }
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        errorDiv.remove();
    }, 5000);
}

function showSuccess(message, elementId = null) {
    const successDiv = document.createElement('div');
    successDiv.className = 'alert alert-success';
    successDiv.textContent = message;
    
    if (elementId) {
        const element = document.getElementById(elementId);
        if (element) {
            element.appendChild(successDiv);
        }
    } else {
        document.body.appendChild(successDiv);
    }
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        successDiv.remove();
    }, 3000);
}

// Initialization
function init() {
    // Render initial content
    renderCategories();
    renderFilterButtons();
    renderProducts();
    
    // Initialize lazy loading
    lazyLoadImages();
    
    // Initialize smooth scroll polyfill
    smoothScrollPolyfill();
    
    // Track page view
    trackEvent('page_view', {
        page: 'home',
        timestamp: new Date().toISOString()
    });
    
    console.log('ConvitesVIP initialized successfully!');
}

// Event listeners
document.addEventListener('DOMContentLoaded', init);

// Handle clicks outside mobile menu
document.addEventListener('click', function(event) {
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuButton = event.target.closest('[onclick="toggleMobileMenu()"]');
    
    if (mobileMenu && mobileMenu.classList.contains('active') && !mobileMenuButton) {
        closeMobileMenu();
    }
});

// Handle escape key for mobile menu
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeMobileMenu();
    }
});

// Performance optimization: Debounce scroll events
let scrollTimeout;
window.addEventListener('scroll', function() {
    if (scrollTimeout) {
        clearTimeout(scrollTimeout);
    }
    
    scrollTimeout = setTimeout(function() {
        // Add any scroll-based functionality here
        // For example, showing/hiding the floating WhatsApp button
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const floatingButton = document.querySelector('.floating-whatsapp');
        
        if (floatingButton) {
            if (scrollTop > 200) {
                floatingButton.style.opacity = '1';
            } else {
                floatingButton.style.opacity = '0.7';
            }
        }
    }, 100);
});

// Expose functions globally for onclick handlers
window.scrollToSection = scrollToSection;
window.openWhatsApp = openWhatsApp;
window.openCustomWhatsApp = openCustomWhatsApp;
window.openProductWhatsApp = openProductWhatsApp;
window.sendEmail = sendEmail;
window.toggleMobileMenu = toggleMobileMenu;
window.filterByCategory = filterByCategory;
window.setFilter = setFilter;
