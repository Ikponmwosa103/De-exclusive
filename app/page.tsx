"use client";

import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    // ===== PRELOADER =====
    const preloader = document.getElementById("preloader");
    if (preloader) {
      setTimeout(() => {
        preloader.classList.add("fade-out");
        setTimeout(() => {
          preloader.style.display = "none";
        }, 600);
      }, 1500);
    }

    // ===== NAV SCROLL =====
    const navWrapper = document.getElementById("navWrapper");
    const handleScroll = () => {
      if (window.scrollY > 50) {
        navWrapper?.classList.add("scrolled");
      } else {
        navWrapper?.classList.remove("scrolled");
      }
      const backToTop = document.getElementById("backToTop");
      if (backToTop) {
        if (window.scrollY > 400) backToTop.classList.add("visible");
        else backToTop.classList.remove("visible");
      }
    };
    window.addEventListener("scroll", handleScroll);

    // ===== HERO SLIDER =====
    let currentSlide = 0;
    const slides = document.querySelectorAll(".hero-slide");
    const indicators = document.querySelectorAll(".hero-indicator");
    const totalSlides = slides.length;

    function goToSlide(n: number) {
      slides[currentSlide]?.classList.remove("active");
      indicators[currentSlide]?.classList.remove("active");
      currentSlide = (n + totalSlides) % totalSlides;
      slides[currentSlide]?.classList.add("active");
      indicators[currentSlide]?.classList.add("active");
    }

    (window as any).goToSlide = goToSlide;

    let slideInterval = setInterval(() => goToSlide(currentSlide + 1), 5000);

    const hero = document.querySelector(".hero");
    hero?.addEventListener("mouseenter", () => clearInterval(slideInterval));
    hero?.addEventListener("mouseleave", () => {
      slideInterval = setInterval(() => goToSlide(currentSlide + 1), 5000);
    });

    indicators.forEach((ind, i) => {
      ind.addEventListener("click", () => goToSlide(i));
    });

    // ===== MOBILE MENU =====
    (window as any).toggleMenu = function () {
      const menu = document.getElementById("mobileMenu");
      const overlay = document.getElementById("menuOverlay");
      const hamburger = document.getElementById("hamburger");
      menu?.classList.toggle("open");
      overlay?.classList.toggle("open");
      hamburger?.classList.toggle("active");
      document.body.style.overflow = menu?.classList.contains("open") ? "hidden" : "";
    };

    // ===== REVEAL ON SCROLL =====
    const revealElements = document.querySelectorAll(".reveal");
    if (revealElements.length) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                entry.target.classList.add("visible");
              }, index * 100);
            }
          });
        },
        { threshold: 0.1 }
      );
      revealElements.forEach((el) => observer.observe(el));
    }

    // ===== THEME TOGGLE =====
    const toggleBtn = document.getElementById("themeToggle");
    function applySavedTheme() {
      if (!toggleBtn) return;
      if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        toggleBtn.textContent = "☀️";
      } else {
        toggleBtn.textContent = "🌙";
      }
    }
    if (toggleBtn) {
      toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
          localStorage.setItem("theme", "dark");
          toggleBtn.textContent = "☀️";
        } else {
          localStorage.setItem("theme", "light");
          toggleBtn.textContent = "🌙";
        }
      });
    }
    applySavedTheme();

    // ===== SMOOTH SCROLL =====
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        const href = (this as HTMLAnchorElement).getAttribute("href");
        if (!href || href === "#") return;
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });

    // ===== WISHLIST =====
    document.querySelectorAll(".product-action-btn").forEach((btn) => {
      const icon = btn.querySelector("i");
      if (icon && icon.classList.contains("fa-heart")) {
        btn.addEventListener("click", () => {
          if (icon.classList.contains("far")) {
            icon.classList.remove("far");
            icon.classList.add("fas");
            (icon as HTMLElement).style.color = "#e63946";
          } else {
            icon.classList.remove("fas");
            icon.classList.add("far");
            (icon as HTMLElement).style.color = "";
          }
        });
      }
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(slideInterval);
    };
  }, []);

  return (
    <>
<!-- Preloader -->
    <div className="preloader" id="preloader">
        <div className="preloader-text">DE EXCLUSIVE</div>
    </div>



    <!-- Navigation -->
       <div className="nav-wrapper" id="navWrapper">
        <nav>
            <div className="hamburger" id="hamburger" onClick={() => (window as any).toggleMenu()}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="nav-left">
                <a href="/">Home</a>
                <a href="#women" className="collections-link">Collections</a>   <!-- Fixed: now scrolls to products -->
                <a href="#women" className="collections-link">Men</a>
                <a href="#women" className="collections-link">Accessories</a>
                <a href="/editorial">Editorial</a>
            </div>
            <div className="logo">
                <a href="/" className="logo-main">DE EXCLUSIVE</a>
                <div className="logo-sub">Collection</div>
            </div>
            <div className="nav-right">

            </div>
        </nav>
    </div>

    <!-- Mobile Menu -->
    <div className="mobile-menu-overlay" id="menuOverlay" onClick={() => (window as any).toggleMenu()}></div>
    <div className="mobile-menu" id="mobileMenu">
        <a href="#women" className="collections-link" onClick={() => (window as any).toggleMenu()}>Collections</a>
        <a href="#women" className="collections-link" onClick={() => (window as any).toggleMenu()}>Women</a>
        <a href="#women" className="collections-link" onClick={() => (window as any).toggleMenu()}>Men</a>
        <a href="#women" className="collections-link" onClick={() => (window as any).toggleMenu()}>Accessories</a>
        <a href="/editorial" onClick={() => (window as any).toggleMenu()}>Editorial</a>
        <a href="#" onClick={() => (window as any).toggleMenu()}>About</a>
        <a href="#" onClick={() => (window as any).toggleMenu()}>Contact</a>
            <div className="mobile-icons">
        <a href="#"><i className="far fa-user"></i> Account</a>
        <a href="#" className="cart-icon">
            <i className="fas fa-shopping-bag"></i> Cart
            <span className="cart-count">3</span>
        </a>
    </div>
    </div>

    <!-- Hero Section -->
<section className="hero">

<div className="hero-slider">

    <!-- SLIDE 1 -->
    <div className="hero-slide active">
        <div className="hero-slide-bg" style={{backgroundImage: "url('https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1600&q=80')"}}></div>
        <div className="hero-overlay"></div>

        <div className="hero-content">
            <p className="hero-tag">Autumn / Winter 2025</p>
            <h1 className="hero-title">The Art of<br /><em>Exclusive</em> Style</h1>
            <p className="hero-desc">Discover our latest collection of meticulously crafted luxury pieces.</p>
            <div className="hero-buttons">
                <a href="#collections" className="btn-primary">Shop Collection</a>
                <a href="#editorial" className="btn-secondary">View Lookbook</a>
            </div>
        </div>
    </div>

    <!-- SLIDE 2 -->
    <div className="hero-slide">
        <div className="hero-slide-bg" style={{backgroundImage: "url('https://images.unsplash.com/photo-1445205170230-053b83016050?w=1600&q=80')"}}></div>
        <div className="hero-overlay"></div>

        <div className="hero-content">
            <p className="hero-tag">Street Luxury</p>
            <h1 className="hero-title">Modern<br /><em>Urban</em> Fashion</h1>
            <p className="hero-desc">Bold styles designed for confident everyday expression.</p>
                        <div className="hero-buttons">
                <a href="#collections" className="btn-primary">Shop Collection</a>
                <a href="#editorial" className="btn-secondary">View Lookbook</a>
            </div>
        </div>
    </div>

    <!-- SLIDE 3 -->
    <div className="hero-slide">
        <div className="hero-slide-bg" style={{backgroundImage: "url('https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1600&auto=format&fit=crop')"}}></div>
        <div className="hero-overlay"></div>

        <div className="hero-content">
            <p className="hero-tag">Premium Collection</p>
            <h1 className="hero-title">Timeless<br /><em>Elegance</em></h1>
            <p className="hero-desc">Crafted with precision for those who value quality.</p>
                        <div className="hero-buttons">
                <a href="#collections" className="btn-primary">Shop Collection</a>
                <a href="#editorial" className="btn-secondary">View Lookbook</a>
            </div>
        </div>
    </div>

    <!-- SLIDE 4 -->
    <div className="hero-slide">
        <div className="hero-slide-bg" style={{backgroundImage: "url('https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1600&auto=format&fit=crop')"}}></div>
        <div className="hero-overlay"></div>

        <div className="hero-content">
            <p className="hero-tag">Luxury Wear</p>
            <h1 className="hero-title">Refined<br /><em>Minimalism</em></h1>
            <p className="hero-desc">Clean designs that speak without noise.</p>
                        <div className="hero-buttons">
                <a href="#collections" className="btn-primary">Shop Collection</a>
                <a href="#editorial" className="btn-secondary">View Lookbook</a>
            </div>
        </div>
    </div>

    <!-- SLIDE 5 -->
    <div className="hero-slide">
        <div className="hero-slide-bg" style={{backgroundImage: "url('https://images.unsplash.com/photo-1538329972958-465d6d2144ed?q=80&w=1600&auto=format&fit=crop')"}}></div>
        <div className="hero-overlay"></div>

        <div className="hero-content">
            <p className="hero-tag">Fashion Week</p>
            <h1 className="hero-title">Runway<br /><em>Ready</em> Looks</h1>
            <p className="hero-desc">Inspired by global fashion trends and runway designs.</p>
                        <div className="hero-buttons">
                <a href="#collections" className="btn-primary">Shop Collection</a>
                <a href="#editorial" className="btn-secondary">View Lookbook</a>
            </div>
        </div>
    </div>

    <!-- SLIDE 6 -->
    <div className="hero-slide">
        <div className="hero-slide-bg" style={{backgroundImage: "url('https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1600&auto=format&fit=crop')"}}></div>
        <div className="hero-overlay"></div>

        <div className="hero-content">
            <p className="hero-tag">New Season</p>
            <h1 className="hero-title">Fresh<br /><em>Arrivals</em></h1>
            <p className="hero-desc">Explore the latest additions to our exclusive collection.</p>
                        <div className="hero-buttons">
                <a href="#collections" className="btn-primary">Shop Collection</a>
                <a href="#editorial" className="btn-secondary">View Lookbook</a>
            </div>
        </div>
    </div>

    <!-- SLIDE 7 -->
    <div className="hero-slide">
        <div className="hero-slide-bg" style={{backgroundImage: "url('https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?q=80&w=1600&auto=format&fit=crop')"}}></div>
        <div className="hero-overlay"></div>

        <div className="hero-content">
            <p className="hero-tag">Luxury Accessories</p>
            <h1 className="hero-title">Details<br /><em>Matter</em></h1>
            <p className="hero-desc">Elevate your style with refined accessories.</p>
                        <div className="hero-buttons">
                <a href="#collections" className="btn-primary">Shop Collection</a>
                <a href="#editorial" className="btn-secondary">View Lookbook</a>
            </div>
        </div>
    </div>

</div>

<!-- Indicators -->
<div className="hero-indicators">
    <div className="hero-indicator active" onClick={() => (window as any).goToSlide(0)}></div>
    <div className="hero-indicator" onClick={() => (window as any).goToSlide(1)}></div>
    <div className="hero-indicator" onClick={() => (window as any).goToSlide(2)}></div>
    <div className="hero-indicator" onClick={() => (window as any).goToSlide(3)}></div>
    <div className="hero-indicator" onClick={() => (window as any).goToSlide(4)}></div>
    <div className="hero-indicator" onClick={() => (window as any).goToSlide(5)}></div>
    <div className="hero-indicator" onClick={() => (window as any).goToSlide(6)}></div>
</div>
<div className="hero-indicators">
            <div className="hero-indicator active" onClick={() => (window as any).goToSlide(0)}></div>
            <div className="hero-indicator" onClick={() => (window as any).goToSlide(1)}></div>
            <div className="hero-indicator" onClick={() => (window as any).goToSlide(2)}></div>
            <div className="hero-indicator" onClick={() => (window as any).goToSlide(3)}></div>
            <div className="hero-indicator" onClick={() => (window as any).goToSlide(4)}></div>
            <div className="hero-indicator" onClick={() => (window as any).goToSlide(5)}></div>
            <div className="hero-indicator" onClick={() => (window as any).goToSlide(6)}></div>
        </div>

        <a href="#women" className="hero-scroll">
            <span>Scroll</span>
            <div className="hero-scroll-line"></div>
        </a>

<!-- Scroll -->
<a href="#collections" className="hero-scroll">
    <span>Scroll</span>
    <div className="hero-scroll-line"></div>
</a>

</section>

    <!-- Featured Products -->
<div className="products-section" id="women">
    <div className="section">

        <div className="section-header reveal">
            <p className="section-tag">New Arrivals</p>
            <h2 className="section-title">Featured Collection</h2>
            <div className="section-line"></div>
        </div>

        <div className="products-grid">

            <!-- PRODUCT CARD -->
            <div className="product-card reveal">
                <div className="product-image-wrapper">
            <img className="product-img" src="/Img/A1.jpeg" alt="Product" />
                    <span className="product-badge">New</span>

                </div>

                <div className="product-info">
                    <p className="product-brand">DE Exclusive</p>
                    <h3 className="product-name">Sleeveless Silk</h3>
                    <p className="product-price">₦2,450</p>
                </div>
            </div>


                <div className="product-card reveal">
                    <div className="product-image-wrapper">
                        <img className="product-img" src="/Img/A2.jpeg" alt="Product" />
                    </div>
                    <div className="product-info">
                        <p className="product-brand">DE Exclusive</p>
                        <h3 className="product-name">Adire+kimono</h3>
                        <p className="product-price">₦5,000</p>
                    </div>
                </div>

                <div className="product-card reveal">
                    <div className="product-image-wrapper">
                        <img className="product-img" src="/Img/A3.jpeg" alt="Product" />                        <span className="product-badge">Exclusive</span>

                    </div>
                    <div className="product-info">
                        <p className="product-brand">DE Exclusive</p>
                        <h3 className="product-name">Loungewear, Joggers & Sweatshirts </h3>
                        <p className="product-price">₦3,200 <span className="original">₦3,800</span></p>
                    </div>
                </div>

                <div className="product-card reveal">
                    <div className="product-image-wrapper">
                        <img className="product-img" src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=80" alt="Product" />

                    </div>
                    <div className="product-info">
                        <p className="product-brand">DE Exclusive</p>
                        <h3 className="product-name">Minimalist Leather Sneakers</h3>
                        <p className="product-price">₦890</p>
                    </div>
                </div>

                <div className="product-card reveal">
                    <div className="product-image-wrapper">
                        <img className="product-img" src="https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?w=600&q=80" alt="Product" />
                        <span className="product-badge">Limited</span>
                        <div className="product-actions">
                            <button className="product-action-btn"><i className="far fa-heart"></i></button>
                            <button className="product-action-btn"><i className="fas fa-shopping-bag"></i></button>
                            <button className="product-action-btn"><i className="far fa-eye"></i></button>
                        </div>
                    </div>

                </div>

                <div className="product-card reveal">
                    <div className="product-image-wrapper">
                        <img className="product-img" src="https://images.unsplash.com/photo-1591561954557-26941169b49e?w=600&q=80" alt="Product" />
                    </div>
                    <div className="product-info">
                        <p className="product-brand">DE Exclusive</p>
                        <h3 className="product-name">Double-Breasted Blazer</h3>
                        <p className="product-price">₦1,750</p>
                    </div>
                </div>

                <div className="product-card reveal">
                    <div className="product-image-wrapper">
                        <img className="product-img" src="https://images.unsplash.com/photo-1659708701940-e60893ef03d0?w=500&auto=format&fit=crop&q=60" alt="Product" />

                    </div>
                    <div className="product-info">
                        <p className="product-brand">DE Exclusive</p>
                        <h3 className="product-name">Gold Chain Bracelet</h3>
                        <p className="product-price">₦1,200</p>
                    </div>
                </div>

                <div className="product-card reveal">
                    <div className="product-image-wrapper">
                        <img className="product-img" src="https://images.unsplash.com/photo-1581778571772-11f8c6af4103?w=500&auto=format&fit=crop&q=60" alt="Product" />
                        <span className="product-badge">New</span>

                    </div>
                    <div className="product-info">
                        <p className="product-brand">DE Exclusive</p>
                        <h3 className="product-name">Classic Aviator Sunglasses</h3>
                        <p className="product-price">₦480</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Editorial / Lookbook -->
<section className="lookbook">
    <div className="lookbook-track">

        <div className="page active">
            <img src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1200&q=80" />
            <div className="overlay">
                <h3>Summer Elegance</h3>
                <p>Luxury crafted for modern minimalism</p>
            </div>
        </div>

        <div className="page">
            <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&q=80" />
            <div className="overlay">
                <h3>Urban Class</h3>
                <p>Bold silhouettes, refined detail</p>
            </div>
        </div>

        <div className="page">
            <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=80" />
            <div className="overlay">
                <h3>Evening Luxe</h3>
                <p>Designed for unforgettable moments</p>
            </div>
        </div>

    </div>
</section>

    <!-- Testimonials -->
    <section className="testimonials-section">
        <div className="section-header reveal">
            <p className="section-tag">Client Stories</p>
            <h2 className="section-title">Words of Elegance</h2>
            <div className="section-line"></div>
        </div>
        <div className="testimonials-container reveal">
            <div className="quote-mark">"</div>
            <div id="testimonialSlider">
                <p className="testimonial-quote" id="testQuote">DE Exclusive has completely transformed my wardrobe. Every piece feels like it was made just for me — the quality is simply unmatched. It's not fashion, it's art you wear.</p>
                <p className="testimonial-author" id="testAuthor">Amara Okafor</p>
                <p className="testimonial-role" id="testRole">Fashion Director, Vogue Africa</p>
            </div>
        </div>
    </section>

    <!-- Instagram Section -->
    <section className="instagram-section" id="accessories">
        <div className="section-header reveal">
            <p className="section-tag">@deexclusivecollection</p>
            <h2 className="section-title">Follow Our Journey</h2>
            <div className="section-line"></div>
        </div>
        <div className="instagram-grid">
            <div className="insta-item">
                <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&q=80" alt="Instagram" />
                <div className="insta-overlay"><i className="fab fa-instagram"></i></div>
            </div>
            <div className="insta-item">
                <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80" alt="Instagram" />
                <div className="insta-overlay"><i className="fab fa-instagram"></i></div>
            </div>
            <div className="insta-item">
                <img src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80" alt="Instagram" />
                <div className="insta-overlay"><i className="fab fa-instagram"></i></div>
            </div>
            <div className="insta-item">
                <img src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=400&q=80" alt="Instagram" />
                <div className="insta-overlay"><i className="fab fa-instagram"></i></div>
            </div>
            <div className="insta-item">
                <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80" alt="Instagram" />
                <div className="insta-overlay"><i className="fab fa-instagram"></i></div>
            </div>
            <div className="insta-item">
                <img src="https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=400&q=80" alt="Instagram" />
                <div className="insta-overlay"><i className="fab fa-instagram"></i></div>
            </div>
        </div>
    </section>

    <!-- Newsletter -->
    <section className="newsletter">
        <div className="reveal">
            <p className="section-tag" style={{color: "var(--gold)", marginBottom: "18px"}}>Stay Exclusive</p>
            <h2 className="section-title" style={{marginBottom: "15px"}}>Join Our Inner Circle</h2>
            <p className="newsletter-desc">Be the first to access new collections, exclusive events, and private sales.</p>
            <form className="newsletter-form" onsubmit="handleSubscribe(event)">
                <input type="email" placeholder="Enter your email address" required />
                <button type="submit">Subscribe</button>
            </form>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div className="footer-grid">
            <div className="footer-brand">
                <a href="#" className="logo-main">DE EXCLUSIVE</a>
                <div className="logo-sub">Collection</div>
                <p>Crafting luxury experiences since 2020. Every piece in our collection is a testament to unparalleled craftsmanship and timeless design.</p>
                <div className="footer-social">
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-pinterest-p"></i></a>
                    <a href="#"><i className="fab fa-tiktok"></i></a>
                </div>
            </div>
            <div className="footer-col">
                <h4>Shop</h4>
                <a href="#">New Arrivals</a>
                <a href="#">Women's</a>
                <a href="#">Men's</a>
                <a href="#">Accessories</a>
                <a href="#">Bags</a>
                <a href="#">Shoes</a>
                <a href="#">Sale</a>
            </div>
            <div className="footer-col">
                <h4>About</h4>
                <a href="#">Our Story</a>
                <a href="#">Craftsmanship</a>
                <a href="#">Sustainability</a>
                <a href="#">Careers</a>
                <a href="#">Press</a>
            </div>
            <div className="footer-col">
                <h4>Support</h4>
                <a href="#">Contact Us</a>
                <a href="#">Shipping</a>
                <a href="#">Returns</a>
                <a href="#">Size Guide</a>
                <a href="#">FAQ</a>
            </div>
            <div className="footer-col">
                <h4>Contact</h4>
                <a href="#">Olusesi NO 5, Aluminum village Dopemu, Agege</a>
                <a href="#">+1 (800) 555-LUXE</a>
                <a href="#">123 Fashion Avenue</a>
                <a href="#">Edo state, Nigeria</a>
            </div>
        </div>
        <!-- <div className="footer-bottom">
            <p>&copy; 2025 DE Exclusive Collection. All rights reserved.</p>
            <div className="footer-payments">
                <i className="fab fa-cc-visa"></i>
                <i className="fab fa-cc-mastercard"></i>
                <i className="fab fa-cc-amex"></i>
                <i className="fab fa-cc-apple-pay"></i>
                <i className="fab fa-cc-paypal"></i>
            </div>
        </div> -->
    </footer>

    <!-- Back to Top -->
    <a href="#" className="back-to-top" id="backToTop"><i className="fas fa-arrow-up"></i></a>
    </>
  );
}
