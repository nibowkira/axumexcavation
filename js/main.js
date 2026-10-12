/**
 * AXUM EXCAVATION — CORE APPLICATION JAVASCRIPT
 * Bilingual Engine (EN / አማ), Smooth Navigation, Project Filter System, Excavation Estimator & Form Handler
 */

document.addEventListener('DOMContentLoaded', () => {
  initLanguageEngine();
  initMobileMenu();
  initScrollSpy();
  initProjectFilters();
  initQuoteCalculator();
  initTenderForm();
});

/* ==========================================================================
   1. BILINGUAL TRANSLATION ENGINE (ENGLISH & AMHARIC)
   Strict Focus: AXUM EXCAVATION & EARTHMOVING SERVICES ONLY
   ========================================================================== */
const TRANSLATIONS = {
  en: {
    "brand_name": "AXUM EXCAVATION",
    "brand_sub": "Earthmoving & Groundwork Services",
    "nav_home": "Home",
    "nav_about": "About Us",
    "nav_services": "Excavation Services",
    "nav_equipment": "Equipment",
    "nav_projects": "Projects",
    "nav_service_areas": "Service Areas",
    "nav_contact": "Contact",
    "btn_get_quote": "Get A Quote",
    "btn_request_quote": "Request An Excavation Quote",
    "btn_explore_services": "Explore Excavation Services",
    "top_nationwide": "Nationwide Mobilization Across Ethiopia",
    "hero_title_1": "Powering Ethiopia's",
    "hero_title_2": "Groundwork.",
    "hero_desc": "Professional excavation, earthmoving, foundation digging, land leveling, and site preparation services for projects throughout Ethiopia.",
    "era_standards": "ERA Standards Aligned Earthmoving",
    "avg_mobilization": "Average Mobilization: 48-72h",
    "heading_about": "Specialists In Excavation & Earthmoving",
    "heading_services": "Excavation Solutions For Your Project",
    "heading_equipment": "Heavy Equipment For Excavation",
    "heading_projects": "Excavation & Earthmoving Projects",
    "heading_service_areas": "Excavation Services Across Ethiopia",
    "heading_quote": "Request An Excavation Quote",
    "heading_contact": "Let's Discuss Your Excavation Project",
    "services_hero_title": "Excavation Solutions For Your Project",
    "services_hero_desc": "Specialized soil and rock excavation, precision grading, foundation digging, and bulk earthmoving operations tailored to Ethiopian site conditions.",
    "stat_disciplines": "Excavation Services",
    "stat_accuracy": "Laser Cut Accuracy",
    "stat_monthly": "Monthly Earthmoving",
    "projects_hero_title": "Excavation & Earthmoving Projects",
    "projects_hero_desc": "Demonstrations of deep foundation digging, mass land cuts, precision grading, and site preparation across Ethiopia.",
    "contact_hero_title": "Let's Discuss Your Excavation Project",
    "contact_hero_desc": "Speak with our earthmoving specialists to review project site requirements, equipment suitability, and mobilization scheduling.",
    "filter_all": "All Projects",
    "filter_land": "Land & Bulk Excavation",
    "filter_foundation": "Foundation Excavation",
    "filter_road": "Road Earthworks",
    "filter_leveling": "Leveling & Grading",
    "filter_trenching": "Trenching & Drainage",
    "tender_submit": "Submit Excavation Inquiry",
    "calc_title": "Excavation Volume & Fleet Estimator"
  },
  am: {
    "brand_name": "አክሱም ቁፋሮ",
    "brand_sub": "የቁፋሮ እና የመሬት ስራዎች",
    "nav_home": "ዋና ገጽ",
    "nav_about": "ስለ እኛ",
    "nav_services": "የቁፋሮ አገልግሎቶች",
    "nav_equipment": "ማሽነሪዎች",
    "nav_projects": "ፕሮጀክቶች",
    "nav_service_areas": "የአገልግሎት ክልሎች",
    "nav_contact": "አግኙን",
    "btn_get_quote": "ዋጋ ይጠይቁ",
    "btn_request_quote": "የቁፋሮ ዋጋ ይጠይቁ",
    "btn_explore_services": "የቁፋሮ አገልግሎቶችን ይመልከቱ",
    "top_nationwide": "በመላው ኢትዮጵያ የቁፋሮ ማሽነሪ ዝግጁነት",
    "hero_title_1": "የኢትዮጵያን የግንባታ መሰረት",
    "hero_title_2": "እናጠነክራለን።",
    "hero_desc": "አስተማማኝ የቁፋሮ፣ የመሬት ማንቀሳቀስ፣ የመሰረት ዝግጅት፣ የመሬት ማስተካከል እና የቦታ ጠረጋ አገልግሎት በመላው ኢትዮጵያ።",
    "era_standards": "የመሬት ስራዎች ጥራት እና ደረጃ",
    "avg_mobilization": "የማሽነሪ ማሰማራት ፍጥነት: 48-72 ሰዓት",
    "heading_about": "የቁፋሮ እና የመሬት ስራዎች ባለሙያዎች",
    "heading_services": "ለፕሮጀክትዎ የተሟሉ የቁፋሮ መፍትሄዎች",
    "heading_equipment": "ለቁፋሮ የሚያገለግሉ ከባድ ማሽነሪዎች",
    "heading_projects": "የቁፋሮ እና የመሬት አንቀሳቃሽ ፕሮጀክቶች",
    "heading_service_areas": "የቁፋሮ አገልግሎቶች በመላው ኢትዮጵያ",
    "heading_quote": "የቁፋሮ ዋጋ ዝርዝር ይጠይቁ",
    "heading_contact": "ስለ ቁፋሮ ፕሮጀክትዎ እንነጋገር",
    "services_hero_title": "ለፕሮጀክትዎ የተሟሉ የቁፋሮ መፍትሄዎች",
    "services_hero_desc": "የመሬት እና የድንጋይ ቁፋሮ፣ የመሰረት ቁፋሮ፣ የቦታ ጠረጋ እና የከፍተኛ መጠን አፈር ማንቀሳቀስ ስራዎች።",
    "stat_disciplines": "የቁፋሮ ዘርፎች",
    "stat_accuracy": "የደረጃ ትክክለኛነት",
    "stat_monthly": "ወርሃዊ የስራ አቅም",
    "projects_hero_title": "የቁፋሮ እና የመሬት አንቀሳቃሽ ፕሮጀክቶች",
    "projects_hero_desc": "የመሰረት ቁፋሮ፣ የመሬት ጠረጋ እና የመንገድ መሬት ስራዎች ማሳያ።",
    "contact_hero_title": "ስለ ቁፋሮ ፕሮጀክትዎ እንነጋገር",
    "contact_hero_desc": "ከቁፋሮ ባለሙያዎቻችን ጋር ይነጋገሩ፣ የማሽነሪዎች ተስማሚነትን ያረጋግጡ እና ስምሪትን ያመቻቹ።",
    "filter_all": "ሁሉም ፕሮጀክቶች",
    "filter_land": "የመሬት እና ከፍተኛ ቁፋሮ",
    "filter_foundation": "የመሰረት ቁፋሮ",
    "filter_road": "የመንገድ መሬት ስራ",
    "filter_leveling": "መሬት ማስተካከል እና ጠረጋ",
    "filter_trenching": "የቦይ እና ፍሳሽ ቁፋሮ",
    "tender_submit": "የቁፋሮ ጥያቄ ይላኩ",
    "calc_title": "የቁፋሮ መጠን እና የማሽነሪ ፍላጎት መገመቻ"
  }
};

function initLanguageEngine() {
  const currentLang = localStorage.getItem('axum_lang') || 'en';
  setLanguage(currentLang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const lang = e.currentTarget.getAttribute('data-lang');
      setLanguage(lang);
    });
  });
}

function setLanguage(lang) {
  localStorage.setItem('axum_lang', lang);
  document.documentElement.lang = lang;
  
  if (lang === 'am') {
    document.body.classList.add('amharic-mode');
  } else {
    document.body.classList.remove('amharic-mode');
  }

  // Update language toggle buttons UI
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Apply translations to all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
      el.textContent = TRANSLATIONS[lang][key];
    }
  });
}

/* ==========================================================================
   2. MOBILE MENU DRAWER & ACCESSIBLE BACKDROP
   ========================================================================== */
function initMobileMenu() {
  const toggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (!toggle || !navMenu) return;

  // Create backdrop if not already present
  let backdrop = document.querySelector('.nav-backdrop');
  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.className = 'nav-backdrop';
    document.body.appendChild(backdrop);
  }

  function openMenu() {
    navMenu.classList.add('open');
    document.body.classList.add('nav-open');
    if (backdrop) backdrop.classList.add('active');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>';
  }

  function closeMenu() {
    navMenu.classList.remove('open');
    document.body.classList.remove('nav-open');
    if (backdrop) backdrop.classList.remove('active');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>';
  }

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    if (navMenu.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close when clicking backdrop
  backdrop.addEventListener('click', closeMenu);

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!toggle.contains(e.target) && !navMenu.contains(e.target) && navMenu.classList.contains('open')) {
      closeMenu();
    }
  });

  // Close when tapping any navigation link
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('open')) {
        closeMenu();
      }
    });
  });

  // Close on Escape key press
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('open')) {
      closeMenu();
    }
  });

  // Auto close on window resize above 1024px
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1024 && navMenu.classList.contains('open')) {
      closeMenu();
    }
  }, { passive: true });
}

/* ==========================================================================
   3. UNIFIED SMOOTH SCROLL & SCROLLSPY ENGINE
   ========================================================================== */
function initScrollSpy() {
  const navLinks = document.querySelectorAll('.nav-menu .nav-link[href^="#"]');
  const jumpLinks = document.querySelectorAll('.jump-link[href^="#"]');
  const navMenu = document.querySelector('.nav-menu');
  const mobileToggle = document.querySelector('.mobile-toggle');

  const mainSectionIds = ['home', 'about', 'services', 'equipment', 'projects', 'service-areas', 'contact'];
  const mainSections = mainSectionIds.map(id => document.getElementById(id)).filter(Boolean);

  const jumpSectionIds = ['sec-01', 'sec-02', 'sec-03', 'sec-04', 'sec-05', 'sec-06', 'sec-07', 'sec-08'];
  const jumpSections = jumpSectionIds.map(id => document.getElementById(id)).filter(Boolean);

  function updateScrollSpy() {
    const scrollPos = window.scrollY + 120;

    // Update main nav active state
    if (mainSections.length && navLinks.length) {
      let activeMainId = '';
      mainSections.forEach(sec => {
        if (sec.offsetTop <= scrollPos) {
          activeMainId = sec.getAttribute('id');
        }
      });
      if (!activeMainId && window.scrollY < 200 && mainSections.length > 0) {
        activeMainId = mainSections[0].getAttribute('id');
      }
      if (activeMainId) {
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${activeMainId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    }

    // Update jump-to active state (Disciplines)
    if (jumpSections.length && jumpLinks.length) {
      const jumpScrollPos = window.scrollY + 180;
      let activeJumpId = '';
      jumpSections.forEach(sec => {
        if (sec.offsetTop <= jumpScrollPos) {
          activeJumpId = sec.getAttribute('id');
        }
      });
      if (activeJumpId) {
        jumpLinks.forEach(link => {
          if (link.getAttribute('href') === `#${activeJumpId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    }
  }

  window.addEventListener('scroll', updateScrollSpy, { passive: true });
  updateScrollSpy();

  // Smooth scroll handler for all internal anchor links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href || href === '#') return;
      const targetId = href.replace('#', '');
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        e.preventDefault();

        if (navMenu && navMenu.classList.contains('open')) {
          navMenu.classList.remove('open');
          if (mobileToggle) {
            mobileToggle.setAttribute('aria-expanded', 'false');
            mobileToggle.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>';
          }
        }

        const offset = 85;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = targetEl.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        history.pushState(null, null, `#${targetId}`);
      }
    });
  });
}

/* ==========================================================================
   4. EXCAVATION PROJECT FILTER SYSTEM
   ========================================================================== */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (!filterBtns.length || !projectCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });
}

/* ==========================================================================
   5. EXCAVATION VOLUME & FLEET ESTIMATOR MODAL
   ========================================================================== */
function initQuoteCalculator() {
  if (!document.getElementById('quoteModal')) {
    const modalHTML = `
      <div class="modal-overlay" id="quoteModal">
        <div class="calc-modal">
          <div class="modal-header">
            <h3 class="modal-title" data-i18n="calc_title">Excavation Volume & Fleet Estimator</h3>
            <button class="modal-close" id="closeQuoteModal" aria-label="Close modal">&times;</button>
          </div>
          <div class="modal-body">
            <p style="font-size:0.875rem; color:#64748b; margin-bottom:18px;">
              Input your estimated earthmoving volume and ground geology to receive indicative machine class suggestions and production estimates for your excavation project.
            </p>
            <form id="calcForm">
              <div class="form-grid-2">
                <div class="form-group">
                  <label class="form-label">Excavation Scope</label>
                  <select class="form-select" id="calcScope" required>
                    <option value="land">Land Excavation & Rock Ripping</option>
                    <option value="foundation">Foundation & Deep Basement Digging</option>
                    <option value="site_prep">Land Clearing & Site Preparation</option>
                    <option value="grading">Land Leveling & Precision Grading</option>
                    <option value="road">Road Earthworks & Subgrade Cutting</option>
                    <option value="trenching">Trenching & Drainage Excavation</option>
                    <option value="removal">Soil Excavation & Removal</option>
                    <option value="bulk">Bulk Earthmoving</option>
                  </select>
                </div>
                <div class="form-group">
                  <label class="form-label">Soil / Geology Profile</label>
                  <select class="form-select" id="calcGeology" required>
                    <option value="basalt">Hard Volcanic Basalt (Rock Ripping/Breaker Required)</option>
                    <option value="clay">Expansive Black Cotton Clay (Substitution)</option>
                    <option value="red_clay">Red Highland Clay / Sandy Soil</option>
                    <option value="alluvial">Riverbed Silt & Gravel</option>
                  </select>
                </div>
              </div>
              <div class="form-grid-2">
                <div class="form-group">
                  <label class="form-label">Estimated Volume (m³)</label>
                  <input type="number" class="form-input" id="calcVol" placeholder="e.g. 15000" min="200" value="12000" required>
                </div>
                <div class="form-group">
                  <label class="form-label">Target Completion (Days)</label>
                  <input type="number" class="form-input" id="calcDays" placeholder="e.g. 15" min="2" value="10" required>
                </div>
              </div>
              <button type="submit" class="btn-primary" style="width:100%; justify-content:center; margin-top:8px;">
                Calculate Excavation Estimates
              </button>
            </form>

            <div class="calc-result-box" id="calcResults">
              <h4 style="font-family:var(--font-display); font-size:1.125rem; text-transform:uppercase; color:#78350f;">
                Indicative Fleet Deployment Guide
              </h4>
              <div class="calc-result-grid">
                <div class="calc-stat">
                  <span class="calc-stat-val" id="resDailyRate">1,200 m³</span>
                  <span class="calc-stat-lbl">Target Daily Cut</span>
                </div>
                <div class="calc-stat">
                  <span class="calc-stat-val" id="resExcavators">2x Heavy Units</span>
                  <span class="calc-stat-lbl">Excavator Class</span>
                </div>
                <div class="calc-stat">
                  <span class="calc-stat-val" id="resHaulers">4-6 Trucks</span>
                  <span class="calc-stat-lbl">Dump Truck Support</span>
                </div>
              </div>
              <div style="margin-top:14px; padding-top:12px; border-top:1px dashed #f59e0b; font-size:0.8125rem; color:#78350f;">
                <strong>Excavation Note:</strong> <span id="resNote">Basalt formations require heavy rock breaker attachment or ripper dozer support.</span>
              </div>
              <a href="#contact" class="btn-quote" id="calcToQuoteBtn" style="display:inline-flex; margin-top:14px; width:100%; justify-content:center;">
                Request Formal Excavation Quotation &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
  }

  const modal = document.getElementById('quoteModal');
  const closeBtn = document.getElementById('closeQuoteModal');
  const calcForm = document.getElementById('calcForm');
  const calcToQuoteBtn = document.getElementById('calcToQuoteBtn');

  document.querySelectorAll('[data-open-quote-calc]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.add('active');
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => modal.classList.remove('active'));
  }

  if (calcToQuoteBtn) {
    calcToQuoteBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });

  if (calcForm) {
    calcForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const vol = parseFloat(document.getElementById('calcVol').value) || 12000;
      const days = parseFloat(document.getElementById('calcDays').value) || 10;
      const geology = document.getElementById('calcGeology').value;

      const dailyRate = Math.round(vol / days);
      const excCount = Math.max(1, Math.ceil(dailyRate / 800));
      const haulCount = Math.max(2, Math.ceil(excCount * 3));

      let note = "Standard bulk cut and fill leveling with compactor support.";
      if (geology === 'basalt') {
        note = "Dense volcanic rock requires heavy crawler excavator with hydraulic hammer or ripper dozer.";
      } else if (geology === 'clay') {
        note = "Black cotton soil requires moisture management and selected granular fill replacement.";
      }

      document.getElementById('resDailyRate').textContent = `${dailyRate.toLocaleString()} m³/day`;
      document.getElementById('resExcavators').textContent = `${excCount}x Excavator(s)`;
      document.getElementById('resHaulers').textContent = `${haulCount}x Dump Trucks`;
      document.getElementById('resNote').textContent = note;

      document.getElementById('calcResults').classList.add('active');
    });
  }
}

/* ==========================================================================
   6. EXCAVATION QUOTATION FORM HANDLER
   ========================================================================== */
function initTenderForm() {
  const form = document.getElementById('tenderInquiryForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const fullName = form.querySelector('[name="full_name"]').value;
    const phone = form.querySelector('[name="phone"]').value;
    const service = form.querySelector('[name="service_required"]').value;
    const region = form.querySelector('[name="region"]').value;

    if (!fullName || !phone) {
      showToast('Please enter your name and phone number.');
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = 'Reviewing Excavation Specifications...';
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
      form.reset();
      showToast(`Thank you, ${fullName}. Your excavation project inquiry for ${service || 'earthmoving'} in ${region || 'Ethiopia'} has been received. Our team will contact you directly to discuss the site parameters and furnish a detailed quotation.`);
    }, 1200);
  });
}

function showToast(message) {
  let toast = document.querySelector('.toast-msg');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-msg';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 6000);
}
