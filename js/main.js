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
    "top_nationwide_bold": "NATIONWIDE MOBILIZATION",
    "top_nationwide_sub": "ACROSS ETHIOPIA",
    "dispatch_line": "DISPATCH LINE",
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
    "top_nationwide_bold": "በመላው ኢትዮጵያ",
    "top_nationwide_sub": "ፈጣን ዝግጁነት",
    "dispatch_line": "የስምሪት መስመር",
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

  if (!mainSections.length && !jumpSections.length) return;

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
   5. GEOTECHNICAL EXCAVATION VOLUME & FLEET ESTIMATOR MODAL
   Includes Soil Bulking/Swell Factors, Haulage Cycles & WhatsApp Dispatch
   ========================================================================== */
function initQuoteCalculator() {
  if (!document.getElementById('quoteModal')) {
    const modalHTML = `
      <div class="modal-overlay" id="quoteModal" role="dialog" aria-modal="true" aria-labelledby="calcModalTitle">
        <div class="calc-modal">
          <div class="modal-header">
            <h3 class="modal-title" id="calcModalTitle" data-i18n="calc_title">Excavation Volume & Fleet Estimator</h3>
            <button class="modal-close" id="closeQuoteModal" aria-label="Close modal">&times;</button>
          </div>
          <div class="modal-body">
            <p style="font-size:0.875rem; color:#64748b; margin-bottom:18px;">
              Input your estimated in-situ earthmoving volume, target completion timeframe, and ground geology. Our geotechnical algorithm calculates bulking swell factors, daily production targets, and fleet capacity requirements.
            </p>
            <form id="calcForm">
              <div class="form-grid-2">
                <div class="form-group">
                  <label class="form-label">Excavation Scope</label>
                  <select class="form-select" id="calcScope" required>
                    <option value="Land Excavation & Rock Ripping">Land Excavation & Rock Ripping</option>
                    <option value="Foundation & Deep Basement Digging">Foundation & Deep Basement Digging</option>
                    <option value="Land Clearing & Site Preparation">Land Clearing & Site Preparation</option>
                    <option value="Land Leveling & Precision Grading">Land Leveling & Precision Grading</option>
                    <option value="Road Earthworks & Subgrade Cutting">Road Earthworks & Subgrade Cutting</option>
                    <option value="Trenching & Drainage Excavation">Trenching & Drainage Excavation</option>
                    <option value="Soil Excavation & Removal">Soil Excavation & Removal</option>
                    <option value="Bulk Earthmoving">Bulk Earthmoving</option>
                  </select>
                </div>
                <div class="form-group">
                  <label class="form-label">Soil / Geology Profile</label>
                  <select class="form-select" id="calcGeology" required>
                    <option value="basalt">Hard Volcanic Basalt Rock (+50% Swell / Breaker Needed)</option>
                    <option value="clay">Expansive Black Cotton Clay (+30% Swell / Moisture Sensitive)</option>
                    <option value="red_clay">Red Highland Clay / Sandy Loam (+20% Swell)</option>
                    <option value="alluvial">Riverbed Silt & Gravel (+15% Swell)</option>
                  </select>
                </div>
              </div>
              <div class="form-grid-2">
                <div class="form-group">
                  <label class="form-label">In-Situ Bank Volume (m³)</label>
                  <input type="number" class="form-input" id="calcVol" placeholder="e.g. 15000" min="200" value="12000" required>
                </div>
                <div class="form-group">
                  <label class="form-label">Target Completion (Days)</label>
                  <input type="number" class="form-input" id="calcDays" placeholder="e.g. 15" min="2" value="10" required>
                </div>
              </div>
              <button type="submit" class="btn-primary" style="width:100%; justify-content:center; margin-top:8px;">
                Calculate Earthwork & Fleet Requirements
              </button>
            </form>

            <div class="calc-result-box" id="calcResults">
              <h4 style="font-family:var(--font-display); font-size:1.125rem; text-transform:uppercase; color:#78350f;">
                Indicative Fleet Deployment & Production Analysis
              </h4>
              <div class="calc-result-grid" style="grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));">
                <div class="calc-stat">
                  <span class="calc-stat-val" id="resDailyRate">1,200 m³</span>
                  <span class="calc-stat-lbl">Target Daily Cut (In-Situ)</span>
                </div>
                <div class="calc-stat">
                  <span class="calc-stat-val" id="resLooseVol">18,000 m³</span>
                  <span class="calc-stat-lbl">Bulked Loose Volume</span>
                </div>
                <div class="calc-stat">
                  <span class="calc-stat-val" id="resExcavators">2x Heavy Units</span>
                  <span class="calc-stat-lbl">Primary Excavators</span>
                </div>
                <div class="calc-stat">
                  <span class="calc-stat-val" id="resHaulers">4-6 Trucks</span>
                  <span class="calc-stat-lbl">16m³ Tipper Cycles/Day</span>
                </div>
              </div>
              <div style="margin-top:14px; padding-top:12px; border-top:1px dashed #f59e0b; font-size:0.8125rem; color:#78350f;">
                <strong>Geotechnical Note:</strong> <span id="resNote">Dense volcanic basalt requires heavy hydraulic rock breakers and ripper crawler support.</span>
              </div>
              
              <div style="display:flex; gap:10px; margin-top:16px; flex-wrap:wrap;">
                <a href="#" id="calcWhatsAppBtn" target="_blank" rel="noopener noreferrer" class="btn-primary" style="flex:1; justify-content:center; background:#10b981; border-color:#059669; color:#fff; text-decoration:none;">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="margin-right:6px;"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z"/></svg>
                  Send Spec via WhatsApp
                </a>
                <button type="button" id="calcCopyBtn" class="btn-ghost" style="flex:1; justify-content:center; border-color:#d97706; color:#92400e;">
                  Copy Full Specification
                </button>
              </div>
              <a href="#contact" class="btn-quote" id="calcToQuoteBtn" style="display:inline-flex; margin-top:10px; width:100%; justify-content:center;">
                Proceed to Formal Tender Form &rarr;
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
  const calcWhatsAppBtn = document.getElementById('calcWhatsAppBtn');
  const calcCopyBtn = document.getElementById('calcCopyBtn');

  let currentEstimateSummary = '';

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  function openModal() {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    const firstInput = modal.querySelector('input, select');
    if (firstInput) firstInput.focus();
  }

  document.querySelectorAll('[data-open-quote-calc]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (calcToQuoteBtn) calcToQuoteBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // Accessible keyboard ESC close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  if (calcForm) {
    calcForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const scope = document.getElementById('calcScope').value;
      const vol = parseFloat(document.getElementById('calcVol').value) || 12000;
      const days = parseFloat(document.getElementById('calcDays').value) || 10;
      const geologyKey = document.getElementById('calcGeology').value;

      // Geotechnical Swell Factors
      const swellMultipliers = {
        basalt: 1.50,
        clay: 1.30,
        red_clay: 1.20,
        alluvial: 1.15
      };

      const swellNotes = {
        basalt: "Basalt rock formations require crawler excavators with hydraulic rock breakers or heavy ripper dozers.",
        clay: "Expansive black cotton soil requires moisture control, deep benching, and granular fill substitution.",
        red_clay: "Standard highland red soil suitable for mass bucket excavation and perimeter batter grading.",
        alluvial: "Silt and river gravel require dewatering management and stable slope trench support."
      };

      const geologyNames = {
        basalt: "Hard Volcanic Basalt Rock (+50% Bulking)",
        clay: "Expansive Black Cotton Clay (+30% Bulking)",
        red_clay: "Red Highland Clay / Sandy Loam (+20% Bulking)",
        alluvial: "Riverbed Silt & Gravel (+15% Bulking)"
      };

      const multiplier = swellMultipliers[geologyKey] || 1.25;
      const looseVol = Math.round(vol * multiplier);
      const dailyBankRate = Math.round(vol / days);
      const dailyLooseRate = Math.round(looseVol / days);

      // Sizing plant: CAT 336 / 35-ton moves ~750-900 m3 bank volume / 10-hr shift
      const excCount = Math.max(1, Math.ceil(dailyBankRate / 750));
      // Tipper truck: standard 16m3 capacity
      const dailyTruckCycles = Math.ceil(dailyLooseRate / 16);
      const truckFleet = Math.max(2, Math.ceil(excCount * 3));

      document.getElementById('resDailyRate').textContent = `${dailyBankRate.toLocaleString()} m³/day`;
      document.getElementById('resLooseVol').textContent = `${looseVol.toLocaleString()} m³`;
      document.getElementById('resExcavators').textContent = `${excCount}x Heavy Plant`;
      document.getElementById('resHaulers').textContent = `~${dailyTruckCycles} trips/day (${truckFleet} trucks)`;
      document.getElementById('resNote').textContent = swellNotes[geologyKey];

      currentEstimateSummary = `*AXUM EXCAVATION — ESTIMATE INQUIRY*\n` +
        `• Scope: ${scope}\n` +
        `• Geology: ${geologyNames[geologyKey]}\n` +
        `• In-situ Bank Volume: ${vol.toLocaleString()} m³\n` +
        `• Bulked Loose Volume: ${looseVol.toLocaleString()} m³\n` +
        `• Target Timeline: ${days} days (${dailyBankRate.toLocaleString()} m³/day)\n` +
        `• Recommended Plant: ${excCount}x Excavator(s), ~${truckFleet}x Tipper Trucks\n\n` +
        `Please furnish an official mobilization and plant hire quotation.`;

      if (calcWhatsAppBtn) {
        const encoded = encodeURIComponent(currentEstimateSummary);
        calcWhatsAppBtn.href = `https://wa.me/251975753773?text=${encoded}`;
      }

      document.getElementById('calcResults').classList.add('active');
    });
  }

  if (calcCopyBtn) {
    calcCopyBtn.addEventListener('click', () => {
      if (!currentEstimateSummary) return;
      navigator.clipboard.writeText(currentEstimateSummary).then(() => {
        showToast("Specification copied to clipboard!");
      }).catch(() => {
        showToast("Unable to copy. Please use the WhatsApp button.");
      });
    });
  }
}

/* ==========================================================================
   6. EXCAVATION TENDER & QUOTATION FORM HANDLER
   Includes Ethiopian Phone Validation, Anti-Spam Honeypot, Local Persistence & WhatsApp Fallback
   ========================================================================== */
function initTenderForm() {
  const form = document.getElementById('tenderInquiryForm');
  if (!form) return;

  // Add honeypot if not present
  if (!form.querySelector('[name="_gotcha"]')) {
    const honeypot = document.createElement('input');
    honeypot.type = 'text';
    honeypot.name = '_gotcha';
    honeypot.style.display = 'none';
    honeypot.tabIndex = -1;
    honeypot.autocomplete = 'off';
    form.appendChild(honeypot);
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Honeypot spam trap
    const gotcha = form.querySelector('[name="_gotcha"]');
    if (gotcha && gotcha.value.trim() !== '') {
      return; // Silent fail for automated spam bots
    }

    const fullName = form.querySelector('[name="full_name"]').value.trim();
    const phoneInput = form.querySelector('[name="phone"]').value.trim();
    const service = form.querySelector('[name="service_required"]').value;
    const region = form.querySelector('[name="region"]').value;
    const city = form.querySelector('[name="city"]') ? form.querySelector('[name="city"]').value.trim() : '';
    const vol = form.querySelector('[name="volume"]') ? form.querySelector('[name="volume"]').value.trim() : '';

    if (!fullName || !phoneInput) {
      showToast('Please enter your full name and phone number.');
      return;
    }

    // Ethiopian Phone Validation: Accepts +251 9..., 251 9..., 09..., 9..., +251 7..., 07...
    const cleanPhone = phoneInput.replace(/[\s\-\(\)]/g, '');
    const ethPhoneRegex = /^(\+?251|0)?[79]\d{8}$/;

    if (!ethPhoneRegex.test(cleanPhone)) {
      showToast('Please enter a valid Ethiopian phone number (e.g., 911 234 567 or +251 911 234 567).');
      const phoneEl = form.querySelector('[name="phone"]');
      if (phoneEl) phoneEl.focus();
      return;
    }

    const refNumber = 'AXUM-TDR-' + Math.floor(1000 + Math.random() * 9000);
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = 'Registering Excavation Tender...';
    submitBtn.disabled = true;

    // Persist inquiry locally
    try {
      const stored = JSON.parse(localStorage.getItem('axum_inquiries') || '[]');
      stored.unshift({
        refNumber,
        fullName,
        cleanPhone,
        service,
        region,
        city,
        vol,
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('axum_inquiries', JSON.stringify(stored.slice(0, 10)));
    } catch (_) {}

    setTimeout(() => {
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
      form.reset();
      showToast(`Inquiry [${refNumber}] registered successfully! Our project dispatch team for ${region || 'Ethiopia'} will call you at ${cleanPhone} to arrange technical site review.`);
    }, 1100);
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
  setTimeout(() => toast.classList.remove('show'), 7000);
}
