// Enhanced punchline cycling
const punchlines = [
    "From Application to Admiration, Let Your Portfolio Do the Talking",
    "Professional. Personal. Perfectly You.",
    "Your Career Deserves More Than Just a PDF",
    "Transform Your Resume into a Dynamic Portfolio Website"
];

let currentPunchlineIndex = 0;

function changePunchline() {
    const punchlineElement = document.getElementById('punchline');
    if (punchlineElement) {
        punchlineElement.classList.remove('active');

        setTimeout(() => {
            currentPunchlineIndex = (currentPunchlineIndex + 1) % punchlines.length;
            punchlineElement.textContent = punchlines[currentPunchlineIndex];
            punchlineElement.classList.add('active');
        }, 500);
    }
}

// Start punchline cycling
setInterval(changePunchline, 5000);

// Enhanced navbar scroll effect
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Template data with enhanced descriptions
const portfolioTemplates = [
    {
        id: 'PF001',
        name: 'Modern Portfolio Pro',
        type: 'Portfolio',
        price: 349,
        mrp: 599,
        discount: 42,
        image: 'PT/PF001.png',
        description: 'A sleek, modern portfolio template perfect for designers and developers. Features responsive design, smooth animations, and showcase sections for your best work.',
        previewLink: 'https://templateelite.github.io/Jordan-Black/'
    },
    {
        id: 'PF002',
        name: 'Creative Showcase',
        type: 'Portfolio',
        price: 299,
        mrp: 499,
        discount: 42,
        image: 'PT/PF002.png',
        description: 'Showcase your creative work with this visually stunning template. Perfect for artists, photographers, and creative professionals who want to make an impact.',
        previewLink: 'https://templateelite.github.io/Aditi-Jain'
    },
    {
        id: 'PF003',
        name: 'Minimalist Portfolio',
        type: 'Portfolio',
        price: 349,
        mrp: 599,
        discount: 42,
        image: 'PT/PF003.png',
        description: 'Clean and minimal design that lets your work speak for itself. Ideal for photographers, writers, and professionals who prefer elegant simplicity.',
        previewLink: 'https://templateelite.github.io/Alex-Apple-Premium-Design/'
    },
    {
        id: 'PF004',
        name: 'Developer Portfolio',
        type: 'Portfolio',
        price: 299,
        mrp: 499,
        discount: 40,
        image: 'PT/PF004.png',
        description: 'Technical portfolio template designed specifically for developers. Includes code showcase sections, tech stack highlights, and project case studies.',
        previewLink: 'https://youj7.github.io/Krishnaraj_Portfolio_website/'
    },
    {
        id: 'PF005',
        name: 'Designer Showcase',
        type: 'Portfolio',
        price: 299,
        mrp: 499,
        discount: 40,
        image: 'PT/PF005.png',
        description: 'Visual-rich template perfect for UI/UX designers. Features interactive elements, project case studies, and design process documentation.',
        previewLink: 'https://templateelite.github.io/Zoya-Shah-Dummy-Template/'
    },
    {
        id: 'PF006',
        name: 'Business Portfolio',
        type: 'Portfolio',
        price: 299,
        mrp: 499,
        discount: 40,
        image: 'PT/PF006.png',
        description: 'Professional business portfolio template. Perfect for consultants, entrepreneurs, and business professionals looking to establish credibility.',
        previewLink: 'https://templateelite.github.io/Heisenberg//'
    }
];

const resumeTemplates = [
    {
        id: 'RS001',
        name: 'ATS Executive Resume',
        type: 'Resume',
        price: 99,
        mrp: 149,
        discount: 33,
        image: 'RT/RS001.png',
        description: 'ATS-optimized executive resume template. Designed to pass applicant tracking systems while maintaining professional appeal and executive presence.'
    },
    {
        id: 'RS002',
        name: 'Creative Resume Pro',
        type: 'Resume',
        price: 99,
        mrp: 149,
        discount: 33,
        image: 'RT/RS002.png',
        description: 'Stand out with this creative resume template. Perfect for marketing, design, and creative industries while remaining ATS-compatible.'
    },
    {
        id: 'RS003',
        name: 'Tech Resume Elite',
        type: 'Resume',
        price: 99,
        mrp: 149,
        discount: 33,
        image: 'RT/RS003.png',
        description: 'Optimized for tech professionals. Includes sections for technical skills, programming languages, projects, and certifications.'
    },
    {
        id: 'RS004',
        name: 'Modern Resume Plus',
        type: 'Resume',
        price: 99,
        mrp: 149,
        discount: 33,
        image: 'RT/RS004.png',
        description: 'Modern, clean resume design that works for any industry. Professional layout with contemporary styling and ATS optimization.'
    },
    {
        id: 'RS005',
        name: 'Corporate Resume',
        type: 'Resume',
        price: 99,
        mrp: 149,
        discount: 33,
        image: 'RT/RS005.png',
        description: 'Traditional corporate resume template. Perfect for finance, consulting, and corporate roles requiring conservative presentation.'
    },
    {
        id: 'RS006',
        name: 'Graduate Resume',
        type: 'Resume',
        price: 99,
        mrp: 149,
        discount: 33,
        image: 'RT/RS006.png',
        description: 'Entry-level resume template designed for recent graduates and career starters. Highlights education, internships, and potential.'
    }
];

// Cart management
let cart = [];

function generateTemplateCards(templates, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = templates.map(template => `
        <div class="template-card" onclick="viewTemplate('${template.id}')">
            <div class="template-image">
                <img src="${template.image}" alt="${template.name}" onerror="this.style.display='none'; this.parentElement.innerHTML='${template.name}';">
            </div>
            <div class="template-info">
                <div class="template-type">${template.type}</div>
                <h3 class="template-title">${template.name}</h3>
               <div class="template-price">
                    <span class="mrp" style="color:#888;">₹${template.mrp}</span>
                    <span class="discount" style="color:#e63946;">${template.discount}% off</span>
                    <span class="final-price" style="color:#1d3557;">₹${template.price}</span>
                </div>
                <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart('${template.id}', event)">
                    Add to Cart
                </button>

                ${template.previewLink ? `<a href="${template.previewLink}" target="_blank" class="view-live-btn">View Live</a>` : ''}
            </div>
        </div>
    `).join('');
}

function addToCart(templateId, e) {
    const allTemplates = [...portfolioTemplates, ...resumeTemplates];
    const template = allTemplates.find(t => t.id === templateId);

    if (template && !cart.find(item => item.id === templateId)) {
        cart.push(template);
        updateCartUI();

        // Enhanced success animation (safe event handling)
        const button = e?.target || null;
        if (button) {
            const originalText = button.textContent;
            const originalBg = button.style.background;
            button.textContent = '✓ Added!';
            button.style.background = 'linear-gradient(135deg, #28a745 0%, #20c997 100%)';
            setTimeout(() => {
                button.textContent = originalText;
                button.style.background = originalBg;
            }, 2000);
        }
    }
}

function removeFromCart(templateId) {
    cart = cart.filter(item => item.id !== templateId);
    updateCartUI();
}

function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');

    cartCount.textContent = cart.length;

    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; color: #666; padding: 2rem;">Your cart is empty</p>';
        cartTotal.textContent = 'Total: $0';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div>
                    <strong>${item.name}</strong><br>
                    <small style="color: #667eea;">${item.type} - ${item.id}</small>
                </div>
                <div style="text-align: right;">
                    <span style="font-weight: 700; font-size: 1.1rem;">₹${item.price}</span><br>
                    <button onclick="removeFromCart('${item.id}')" style="margin-top: 0.5rem; background: #dc3545; color: white; border: none; border-radius: 6px; padding: 6px 10px; cursor: pointer; font-size: 0.9rem;">Remove</button>
                </div>
            </div>
        `).join('');

        const total = cart.reduce((sum, item) => sum + item.price, 0);
        cartTotal.textContent = `Total: ₹${total}`;
    }
}

function toggleCart() {
    const cartModal = document.getElementById('cartModal');
    cartModal.style.display = cartModal.style.display === 'block' ? 'none' : 'block';
}

function viewTemplate(templateId) {
    const allTemplates = [...portfolioTemplates, ...resumeTemplates];
    const template = allTemplates.find(t => t.id === templateId);

    if (template) {
        const previewModal = document.getElementById('previewModal');
        const previewTitle = document.getElementById('previewTitle');
        const previewImage = document.getElementById('previewImage');
        const previewInfo = document.getElementById('previewInfo');

        previewTitle.textContent = template.name;

        // Show live iframe if previewLink exists, else fallback to image
        if (template.previewLink) {
            previewImage.innerHTML = `
              <iframe src="${template.previewLink}" style="width:100%; height:70vh; border:none; border-radius:15px;" loading="lazy"></iframe>
             `;
        } else {
            previewImage.innerHTML = `<img src="${template.image}" alt="${template.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 15px;" onerror="this.style.display='none'; this.parentElement.innerHTML='${template.name}';">`;
        }

        previewInfo.innerHTML = `
            <div style="padding: 1.5rem 0;">
                <div style="color: #667eea; font-size: 1rem; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 1rem; font-weight: 700;">${template.type}</div>
                <h3 style="font-size: 1.8rem; margin-bottom: 1.5rem; font-weight: 700;">${template.name}</h3>
                <p style="color: #666; margin-bottom: 2rem; line-height: 1.6; font-size: 1.1rem;">${template.description}</p>
                <div style="font-size: 2.2rem; font-weight: 800; color: #333; margin-bottom: 2rem; text-align: center;">₹${template.price}</div>
                <button onclick="addToCart('${template.id}', event); closePreview();" style="width: 100%; padding: 1.2rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; border-radius: 15px; font-weight: 700; cursor: pointer; font-size: 1.2rem; text-transform: uppercase; letter-spacing: 1px;">Add to Cart</button>
            </div>
        `;

        previewModal.style.display = 'block';
    }
}

function closePreview() {
    const previewModal = document.getElementById('previewModal');
    previewModal.style.display = 'none';
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty! Please add some templates first.');
        return;
    }

    const templateIds = cart.map(item => item.id).join(', ');
    const templateNames = cart.map(item => item.name).join(', ');
    const total = cart.reduce((sum, item) => sum + item.price, 0);

    // Real Form URL with entry IDs
    const formUrl = `https://docs.google.com/forms/d/e/1FAIpQLSfOj7GKiGw0KCSGrfJiDABekXQmma2Uui9U-QHOwyvfvihqlg/viewform?usp=pp_url&entry.1863393429=${encodeURIComponent(templateIds)}&entry.1486345781=${total}`;

    alert(`🛒 Proceeding to Checkout\n\nSelected Templates: ${templateNames}\nTotal Amount: ₹${total}\n\n✅ You will be redirected to our secure checkout form where your cart details are pre-filled for convenience.`);

    window.open(formUrl, '_blank');
}

// UPDATED FEEDBACK FUNCTION WITH GOOGLE SHEETS INTEGRATION


async function submitFeedback(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const feedback = {
        name: formData.get('name'),
        email: formData.get('email'),
        rating: formData.get('rating'),
        message: formData.get('message'),
        timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
    };

    // Enhanced feedback submission UI
    const submitBtn = event.target.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    const originalBg = submitBtn.style.background;

    // Add loading spinner
    submitBtn.innerHTML = `<span class="spinner" style="margin-right: 10px; border: 2px solid #fff; border-top: 2px solid transparent; border-radius: 50%; width: 16px; height: 16px; display: inline-block; animation: spin 1s linear infinite;"></span>Submitting...`;
    submitBtn.style.background = 'linear-gradient(135deg, #ffa726 0%, #ff9800 100%)';
    submitBtn.disabled = true;

    try {
        const scriptUrl = 'https://script.google.com/macros/s/AKfycbzCoEkgTMsUWy3T_M9xRtp8RNBmK3q8Ta6tFMF8hwZQNzzngyRk_lV1kwnCiOiJ-iFIeQ/exec';

        const response = await fetch(scriptUrl, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(feedback)
        });

        submitBtn.innerHTML = '✅ Submitted Successfully!';
        submitBtn.style.background = 'linear-gradient(135deg, #4caf50 0%, #2e7d32 100%)';

        showFeedbackMessage('🎉 Thank you for your valuable feedback! We truly appreciate your input and will use it to improve our services.', 'success');
        event.target.reset();

    } catch (error) {
        console.error('Error submitting feedback:', error);

        const googleFormUrl = `https://docs.google.com/forms/d/e/YOUR_GOOGLE_FORM_ID/viewform?usp=pp_url&entry.NAME_ENTRY=${encodeURIComponent(feedback.name)}&entry.EMAIL_ENTRY=${encodeURIComponent(feedback.email)}&entry.RATING_ENTRY=${encodeURIComponent(feedback.rating)}&entry.MESSAGE_ENTRY=${encodeURIComponent(feedback.message)}`;

        submitBtn.innerHTML = '🔄 Opening Backup Form...';
        submitBtn.style.background = 'linear-gradient(135deg, #2196f3 0%, #1565c0 100%)';

        setTimeout(() => {
            window.open(googleFormUrl, '_blank');
            showFeedbackMessage('📝 We\'ve opened our feedback form in a new tab. Please complete your submission there.', 'info');
            event.target.reset();
        }, 1000);
    } finally {
        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.style.background = originalBg;
            submitBtn.disabled = false;
        }, 3000);
    }
}


// Helper function to show feedback messages
function showFeedbackMessage(message, type = 'success') {
    // Create message element
    const messageDiv = document.createElement('div');
    messageDiv.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: ${type === 'success' ? 'linear-gradient(135deg, #4caf50 0%, #2e7d32 100%)' :
            type === 'error' ? 'linear-gradient(135deg, #f44336 0%, #c62828 100%)' :
                'linear-gradient(135deg, #2196f3 0%, #1565c0 100%)'};
        color: white;
        padding: 2rem 3rem;
        border-radius: 15px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        z-index: 10000;
        max-width: 500px;
        text-align: center;
        font-size: 1.1rem;
        line-height: 1.6;
        animation: fadeInScale 0.3s ease-out;
    `;

    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInScale {
            0% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
            100% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
        @keyframes fadeOutScale {
            0% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
            100% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
        }
    `;
    document.head.appendChild(style);

    messageDiv.innerHTML = message;
    document.body.appendChild(messageDiv);

    // Remove message after 5 seconds
    setTimeout(() => {
        messageDiv.style.animation = 'fadeOutScale 0.3s ease-in';
        setTimeout(() => {
            document.body.removeChild(messageDiv);
            document.head.removeChild(style);
        }, 300);
    }, 5000);

    // Allow clicking to close
    messageDiv.addEventListener('click', () => {
        messageDiv.style.animation = 'fadeOutScale 0.3s ease-in';
        setTimeout(() => {
            document.body.removeChild(messageDiv);
            document.head.removeChild(style);
        }, 300);
    });
}

// Enhanced intersection observer for scroll animations
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Initialize the website
document.addEventListener('DOMContentLoaded', function () {
    generateTemplateCards(portfolioTemplates, 'portfolioGrid');
    generateTemplateCards(resumeTemplates, 'resumeGrid');
    updateCartUI();

    // Observe elements for scroll animations
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });

    // Initialize step animations
    const steps = document.querySelectorAll('.step');
    steps.forEach(step => {
        step.style.opacity = '0';
        step.style.transform = 'translateY(50px)';
    });
});

// Close modals when clicking outside
document.getElementById('cartModal').addEventListener('click', function (e) {
    if (e.target === this) {
        toggleCart();
    }
});

document.getElementById('previewModal').addEventListener('click', function (e) {
    if (e.target === this) {
        closePreview();
    }
});

// Enhanced steps animation observer
const stepsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const steps = entry.target.querySelectorAll('.step');
            steps.forEach((step, index) => {
                setTimeout(() => {
                    step.style.opacity = '1';
                    step.style.transform = 'translateY(0)';
                }, index * 300);
            });
        }
    });
}, { threshold: 0.3 });

// Observe how-to-order section for step animations
document.addEventListener('DOMContentLoaded', function () {
    const howToOrderSection = document.querySelector('.how-to-order');
    if (howToOrderSection) {
        stepsObserver.observe(howToOrderSection);
    }
});

// Enhanced mobile menu toggle (for future mobile navigation)
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('mobile-active');
}

// Add keyboard navigation support
document.addEventListener('keydown', function (e) {
    // Close modals with Escape key
    if (e.key === 'Escape') {
        const cartModal = document.getElementById('cartModal');
        const previewModal = document.getElementById('previewModal');

        if (cartModal.style.display === 'block') {
            toggleCart();
        }
        if (previewModal.style.display === 'block') {
            closePreview();
        }
    }
});

// Enhanced loading animation for template images
function handleImageLoad(img) {
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.3s ease';
    img.onload = function () {
        this.style.opacity = '1';
    };
}

// Add subtle parallax effect to hero section
window.addEventListener('scroll', function () {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const rate = scrolled * -0.5;

    if (hero) {
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Enhanced cart animation
function animateCartIcon() {
    const cartIcon = document.querySelector('.cart-icon');
    cartIcon.style.transform = 'scale(1.2)';
    setTimeout(() => {
        cartIcon.style.transform = 'scale(1)';
    }, 200);
}

// Call animation when cart is updated
const originalAddToCart = addToCart;
addToCart = function (templateId, e) {
    originalAddToCart(templateId, e);
    animateCartIcon();
};

// Performance optimization: Lazy load images
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            observer.unobserve(img);
        }
    });
});

// Add smooth reveal animation for template cards
const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

// Initialize card animations after templates are loaded
setTimeout(() => {
    document.querySelectorAll('.template-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        card.style.transitionDelay = `${index * 0.1}s`;
        cardObserver.observe(card);
    });
}, 100);




