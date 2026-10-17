"use client";

import { useEffect } from "react";

export default function EditorialPage() {
  useEffect(() => {
    (window as any).toggleMenu = function () {
      const menu = document.getElementById("mobileMenu");
      const overlay = document.getElementById("menuOverlay");
      const hamburger = document.getElementById("hamburger");
      menu?.classList.toggle("open");
      overlay?.classList.toggle("open");
      hamburger?.classList.toggle("active");
      document.body.style.overflow = menu?.classList.contains("open") ? "hidden" : "";
    };

    const navWrapper = document.getElementById("navWrapper");
    const handleScroll = () => {
      if (window.scrollY > 50) navWrapper?.classList.add("scrolled");
      else navWrapper?.classList.remove("scrolled");
    };
    window.addEventListener("scroll", handleScroll);

    const toggleBtn = document.getElementById("themeToggle");
    if (toggleBtn) {
      if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        toggleBtn.textContent = "☀️";
      } else {
        toggleBtn.textContent = "🌙";
      }
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

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
<!-- Navigation -->
<div className="nav-wrapper" id="navWrapper">
        <nav>
            <div className="hamburger" id="hamburger" onClick={() => (window as any).toggleMenu()}>
                <span></span><span></span><span></span>
            </div>
            <div className="nav-left">
                <a href="/">Home</a>
                <a href="/#women" className="collections-link">Collections</a>   <!-- This is the key fix -->
                <a href="/#women" className="collections-link">Men</a>
                <a href="/#women" className="collections-link">Accessories</a>
                <a href="/#women" className="collections-link" className="active">Editorial</a>
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
        <a href="/" onClick={() => (window as any).toggleMenu()}>Home</a>
        <a href="/#women" onClick={() => (window as any).toggleMenu()}>Collections</a>
        <a href="./index.html#men" onClick={() => (window as any).toggleMenu()}>Men</a>
        <a href="./index.html#accessories" onClick={() => (window as any).toggleMenu()}>Accessories</a>
        <a href="/editorial" onClick={() => (window as any).toggleMenu()}>Editorial</a>
        <a href="#" onClick={() => (window as any).toggleMenu()}>About</a>
        <a href="#" onClick={() => (window as any).toggleMenu()}>Contact</a>
    </div>

  <!-- HERO SECTION -->
  <section id="hero" className="hero">
    <div style={{position: "relative", zIndex: "10", maxWidth: "1000px", padding: "0 24px"}}>
        <i><h1 style={{fontFamily: "'Inter', sans-serif", fontSize: "140px", lineHeight: "0.85", letterSpacing: "-8px", color: "white", marginBottom: "20px", fontWeight: "500"}}>
        EDITORIAL
</h1></i>
      <p style={{fontSize: "24px", color: "rgba(255,255,255,0.92)", fontWeight: "300", letterSpacing: "4px", maxWidth: "550px", margin: "0 auto 48px"}}>
        Unlock your exclusive fit
      </p>
         <div className="hero-buttons">
          <a href="#collections" className="btn-primary">Shop Collection</a>
          <a href="#editorial" className="btn-secondary">View Lookbook</a>
         </div>
    </div>
  </section>

  <!-- INTRODUCTION / STORY -->
<section id="story" className="section">
  <div style={{maxWidth: "1280px", margin: "0 auto", padding: "0 32px"}}>
    
    <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: "70px", alignItems: "center"}}>
      
      <div>
        <div style={{textTransform: "uppercase", fontSize: "11px", letterSpacing: "4px", color: "#C9A96E", marginBottom: "20px"}}>
          ESTABLISHED IN PARIS
        </div>

        <h2 style={{fontSize: "64px", lineHeight: "1.05", letterSpacing: "-2px", fontWeight: "500"}}>
          The legacy of <span style={{color: "#C9A96E"}}>master craftsmanship</span>
        </h2>

        <p style={{marginTop: "28px", fontSize: "18px", color: "#3F3F3F", borderLeft: "3px solid #C9A96E", paddingLeft: "24px"}}>
          For nearly a century, DE EXCLUSIVE has embodied the art of detail and timeless elegance. Every piece is crafted as a statement of refinement, blending tradition with modern design.
        </p>

        <!-- Quote -->
        <div style={{marginTop: "35px", fontSize: "18px", fontStyle: "italic", color: "#1f1f1f", lineHeight: "1.6"}}>
          “Style is a way to say who you are without speaking.”
        </div>

        <div style={{marginTop: "10px", fontSize: "12px", letterSpacing: "2px", color: "#C9A96E"}}>
          — DE EXCLUSIVE MANIFESTO
        </div>
      </div>

      <div>
        <img 
          src="./Logo.jpeg" 
          alt="Artisan workshop"
          style={{width: "100%", height: "auto", boxShadow: "0 24px 48px -18px rgba(0,0,0,0.2)", borderRadius: "2px"}} />
      </div>

    </div>

  </div>
</section>

  <!-- FEATURED COLLECTIONS -->
<section id="story" className="section">
  <div style={{maxWidth: "1300px", margin: "0 auto", padding: "0 32px"}}>
    
    <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "20px", marginBottom: "64px"}}>
      
      <div>
        <div style={{fontSize: "11px", letterSpacing: "3px", color: "#C9A96E"}}>
          ICONIC COLLECTIONS
        </div>
        <h3 style={{fontSize: "52px", fontWeight: "450", letterSpacing: "-1px"}}>
          Autumn–Winter Capsules
        </h3>
      </div>

      <!-- <a href="#women" onClick="scrollToSection('women')" 
        style={{display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", letterSpacing: "2px", borderBottom: "1px solid #1A1A1A", paddingBottom: "6px", textDecoration: "none", color: "black"}}>
        VIEW ALL COLLECTIONS →
      </a> -->

    </div>

    <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "36px"}}>
      
      <div className="card-hover" onClick="scrollToSection('women')" 
        style={{cursor: "pointer", position: "relative", overflow: "hidden", borderRadius: "8px"}}>
        
        <img src="https://images.unsplash.com/photo-1739169585907-f1dc3b9dd0b9" 
          style={{width: "100%", height: "460px", objectFit: "cover"}} alt="LUNA" />
        
        <div style={{position: "absolute", bottom: "0", left: "0", right: "0", background: "linear-gradient(0deg, rgba(0,0,0,0.85) 0%, transparent)", padding: "60px 30px 30px"}}>
          
          <div style={{color: "white", fontSize: "44px", fontWeight: "400"}}>LUNA</div>
          <div style={{color: "#E2D9CE", fontSize: "14px"}}>Evening Dresses</div>
        </div>
      </div>

      <div className="card-hover" onClick="scrollToSection('men')" 
        style={{cursor: "pointer", position: "relative", overflow: "hidden", borderRadius: "8px"}}>
        
        <img src="https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=800" 
          style={{width: "100%", height: "460px", objectFit: "cover"}} alt="NOCTURNE" />
        
        <div style={{position: "absolute", bottom: "0", left: "0", right: "0", background: "linear-gradient(0deg, rgba(0,0,0,0.85) 0%, transparent)", padding: "60px 30px 30px"}}>
          
          <div style={{color: "white", fontSize: "44px", fontWeight: "400"}}>NOCTURNE</div>
          <div style={{color: "#E2D9CE", fontSize: "14px"}}>Tailored Suits</div>
        </div>
      </div>

      <div className="card-hover" onClick="scrollToSection('bags')" 
        style={{cursor: "pointer", position: "relative", overflow: "hidden", borderRadius: "8px"}}>
        
        <img src="https://images.pexels.com/photos/1366927/pexels-photo-1366927.jpeg?auto=compress&cs=tinysrgb&w=800" 
          style={{width: "100%", height: "460px", objectFit: "cover"}} alt="ESSENCE" />
        
        <div style={{position: "absolute", bottom: "0", left: "0", right: "0", background: "linear-gradient(0deg, rgba(0,0,0,0.85) 0%, transparent)", padding: "60px 30px 30px"}}>
          
          <div style={{color: "white", fontSize: "44px", fontWeight: "400"}}>ESSENCE</div>
          <div style={{color: "#E2D9CE", fontSize: "14px"}}>Luxury Leather Goods</div>
        </div>
      </div>

    </div>
  </div>
</section>

  <!-- NEW ARRIVALS SECTION (product grid) -->
<section id="story" className="section">
  <div style={{maxWidth: "1300px", margin: "0 auto", padding: "0 32px"}}>
    
    <div style={{textAlign: "center", marginBottom: "20px"}}>
      
      <div style={{fontSize: "11px", letterSpacing: "3px", color: "#C9A96E"}}>
        NEW SEASON
      </div>
      
      <h2 style={{fontSize: "54px", fontWeight: "450", letterSpacing: "-1px"}}>
        New Arrivals
      </h2>
      
      <p style={{fontSize: "17px", maxWidth: "420px", margin: "12px auto 0", color: "#5E564C"}}>
        The essence of contemporary refinement.
      </p>

    </div>

    <div className="product-grid">

      <div className="card-hover">
        <div style={{overflow: "hidden", background: "white", borderRadius: "4px"}}>
          <img src="https://images.unsplash.com/photo-1516762689617-e1cffcef479d"
            style={{width: "100%", aspectRatio: "4/5", objectFit: "cover", transition: "transform 0.6s"}}
            alt="silk blouse" />
        </div>
        <div style={{padding: "20px 0 8px", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
          <div>
            <div style={{fontWeight: "500"}}>Wild Silk Blouse</div>
            <div style={{color: "#7A6E5D"}}>€890</div>
          </div>
          <i className="fa-regular fa-arrow-right" style={{color: "#C9A96E", opacity: "0", transition: "0.3s"}}></i>
        </div>
      </div>

      <div className="card-hover">
        <div style={{overflow: "hidden"}}>
          <img src="https://images.unsplash.com/photo-1598099947145-e85739e7ca28"
            style={{width: "100%", aspectRatio: "4/5", objectFit: "cover"}} />
        </div>
        <div style={{padding: "20px 0 8px"}}>
          <div style={{fontWeight: "500"}}>Black Cashmere Coat</div>
          <div style={{color: "#7A6E5D"}}>€2,450</div>
        </div>
      </div>

      <div className="card-hover">
        <div style={{overflow: "hidden"}}>
          <img src="https://images.unsplash.com/photo-1574201635302-388dd92a4c3f"
            style={{width: "100%", aspectRatio: "4/5", objectFit: "cover"}} />
        </div>
        <div style={{padding: "20px 0 8px"}}>
          <div style={{fontWeight: "500"}}>Vienne Croc Leather Bag</div>
          <div style={{color: "#7A6E5D"}}>€3,200</div>
        </div>
      </div>

      <div className="card-hover">
        <div style={{overflow: "hidden"}}>
          <img src="https://images.unsplash.com/photo-1589363358751-ab05797e5629"
            style={{width: "100%", aspectRatio: "4/5", objectFit: "cover"}} />
        </div>
        <div style={{padding: "20px 0 8px"}}>
          <div style={{fontWeight: "500"}}>Suede Chelsea Boots</div>
          <div style={{color: "#7A6E5D"}}>€1,180</div>
        </div>
      </div>
            <div className="card-hover">
        <div style={{overflow: "hidden"}}>
          <img src="https://images.unsplash.com/photo-1511556820780-d912e42b4980"
            style={{width: "100%", aspectRatio: "4/5", objectFit: "cover"}} />
        </div>
        <div style={{padding: "20px 0 8px"}}>
          <div style={{fontWeight: "500"}}>Suede Chelsea Boots</div>
          <div style={{color: "#7A6E5D"}}>€1,180</div>
        </div>
      </div>
            <div className="card-hover">
        <div style={{overflow: "hidden"}}>
          <img src="https://images.unsplash.com/photo-1551232864-3f0890e580d9"
            style={{width: "100%", aspectRatio: "4/5", objectFit: "cover"}} />
        </div>
        <div style={{padding: "20px 0 8px"}}>
          <div style={{fontWeight: "500"}}>Suede Chelsea Boots</div>
          <div style={{color: "#7A6E5D"}}>€1,180</div>
        </div>
      </div>
      

    </div>
  </div>
</section>

  <!-- LOOKBOOK HORIZONTAL -->
<section id="story" className="section">
  <div style={{maxWidth: "1300px", margin: "0 auto", padding: "0 32px 40px"}}>
    <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap"}}>
      <div>
        <div style={{color: "#C9A96E", fontSize: "11px", letterSpacing: "3px"}}>AUTUMN 24 COLLECTION</div>
        <h2 style={{fontSize: "66px", fontWeight: "450", letterSpacing: "-2px"}}>The Lookbook</h2>
      </div>
      <div style={{maxWidth: "280px", fontSize: "14px", opacity: "0.8"}}>A visual journey through the silhouettes of the season.</div>
    </div>
  </div>

  <div className="horizontal-scroll">
    <div className="lookbook-card">
      <img src="https://images.pexels.com/photos/5468197/pexels-photo-5468197.jpeg?auto=compress&cs=tinysrgb&w=800" style={{width: "100%", height: "620px", objectFit: "cover"}} alt="look1" />
      <div style={{position: "absolute", bottom: "40px", left: "40px"}}>
        <div style={{fontSize: "11px", letterSpacing: "2px"}}>SAINT-GERMAIN BOULEVARD</div>
        <div style={{fontSize: "32px", fontWeight: "400"}}>VELVET CAPE</div>
      </div>
    </div>

    <div className="lookbook-card">
      <img src="https://images.unsplash.com/photo-1467043237213-65f2da53396f" style={{width: "100%", height: "620px", objectFit: "cover"}} alt="look2" />
      <div style={{position: "absolute", bottom: "40px", left: "40px"}}>
        <div style={{fontSize: "11px", letterSpacing: "2px"}}>ROYAL PALACE</div>
        <div style={{fontSize: "32px", fontWeight: "400"}}>EBONY TUXEDO</div>
      </div>
    </div>

    <div className="lookbook-card">
      <img src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800" style={{width: "100%", height: "620px", objectFit: "cover"}} alt="look3" />
      <div style={{position: "absolute", bottom: "40px", left: "40px"}}>
        <div style={{fontSize: "11px", letterSpacing: "2px"}}>CAMBON STREET</div>
        <div style={{fontSize: "32px", fontWeight: "400"}}>PLEATED DRESS</div>
      </div>
    </div>
  </div>
</section>

<!-- WOMEN + MEN + BAGS -->
<section id="story" className="section">
  <div style={{maxWidth: "1280px", margin: "0 auto", padding: "0 32px", textAlign: "center"}}>
    <span className="gold" style={{letterSpacing: "2px"}}>Women</span>
    <h2 style={{fontSize: "48px", fontWeight: "400", margin: "16px 0"}}>Women's Ready-to-Wear</h2>

    <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: "30px", marginTop: "40px"}}>
      <img src="https://images.pexels.com/photos/934069/pexels-photo-934069.jpeg?auto=compress&cs=tinysrgb&w=800" style={{width: "100%", height: "450px", objectFit: "cover"}} />
      <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
        <p style={{fontSize: "20px"}}>Timeless elegance between boldness and heritage. Discover the new autumn-winter women's collection.</p>
        <button className="btn-gold" style={{marginTop: "32px", width: "fit-content"}}>EXPLORE →</button>
      </div>
    </div>
  </div>
</section>

<section id="story" className="section">
  <div style={{maxWidth: "1280px", margin: "0 auto", padding: "0 32px", textAlign: "center"}}>
    <span className="gold" style={{letterSpacing: "2px"}}>Men</span>
    <h2 style={{fontSize: "48px", fontWeight: "400", margin: "16px 0"}}>Tailoring & Excellence</h2>

    <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: "30px", marginTop: "40px", direction: "rtl"}}>
      <div style={{direction: "ltr"}}>
        <img src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=800" style={{width: "100%", height: "450px", objectFit: "cover"}} />
      </div>

      <div style={{display: "flex", flexDirection: "column", justifyContent: "center", direction: "ltr"}}>
        <p style={{fontSize: "20px"}}>Architectural cuts, noble fabrics. The men's wardrobe reimagined.</p>
        <button className="btn-gold" style={{marginTop: "32px", width: "fit-content"}}>DISCOVER →</button>
      </div>
    </div>
  </div>
</section>

<section id="story" className="section">
  <div style={{maxWidth: "1280px", margin: "0 auto", padding: "0 32px", textAlign: "center"}}>
    <span className="gold" style={{letterSpacing: "2px"}}>Leather Goods</span>
    <h2 style={{fontSize: "48px", fontWeight: "400", margin: "16px 0"}}>Iconic Vespera Bag</h2>

    <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: "30px", marginTop: "40px"}}>
      <img src="https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=800" style={{width: "100%", height: "450px", objectFit: "cover"}} />
      <div>
        <p style={{fontSize: "20px"}}>Full-grain leather, handcrafted details, each bag carries the mark of the atelier.</p>
        <button className="btn-gold" style={{marginTop: "32px"}}>LIMITED EDITION</button>
      </div>
    </div>
  </div>
</section>

<!-- LIMITED DROP -->
<section id="story" className="section">
    <div style={{maxWidth: "850px", margin: "0 auto", padding: "0 24px"}}>
    
    <div className="limited-badge" style={{display: "inline-flex", alignItems: "center", gap: "10px", background: "rgba(201,169,110,0.12)", backdropFilter: "blur(4px)", padding: "10px 28px", borderRadius: "60px", fontSize: "11px", letterSpacing: "2.5px", border: "1px solid rgba(201,169,110,0.4)", marginBottom: "32px"}}>
      <i className="fas fa-moon"></i> ULTRA-LIMITED EDITION — 88 pieces
    </div>

    <h2 style={{fontSize: "82px", fontWeight: "400", letterSpacing: "-3px", lineHeight: "1"}}>The Midnight Drop</h2>

    <p style={{fontSize: "19px", maxWidth: "460px", margin: "28px auto 48px", color: "#CFCFCF"}}>
      Exclusive hand-embroidered collection, available for 72 hours. Each piece is numbered.
    </p>

    <button onClick="alert('Your reservation has been recorded. A Vespera advisor will contact you.')" 
      style={{background: "#C9A96E", color: "#0A0A0A", padding: "18px 64px", fontSize: "13px", letterSpacing: "3px", border: "none", fontWeight: "600", cursor: "pointer", transition: "0.3s"}}>
      RESERVE NOW
    </button>

    <p style={{marginTop: "40px", fontSize: "12px", opacity: "0.6"}}>Worldwide shipping included • Certificate of authenticity</p>
  </div>
</section>
 <!-- FOOTER -->
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


  
    </>
  );
}
