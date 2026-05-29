/**
 * script.js - Cinematic Travel Photo Gallery & Portfolio
 * Upgraded with dynamic Multi-Gallery collections support.
 */

// ======================================================================
// 1. INITIAL PHOTOGRAPHY ARCHIVE DATABASE & EXPEDITION BUNDLES
// ======================================================================
const defaultCaptures = [
    {
        id: 1,
        galleryId: "athugala-2025",
        title: "Majestic Buddha Statue Summit",
        city: "Kurunegala",
        country: "Sri Lanka",
        category: "Culture",
        camera: "Sony α7R V",
        lens: "FE 24-70mm f/2.8 GM II",
        aperture: "f/5.6",
        shutter: "1/250s",
        iso: "100",
        focal: "24mm",
        url: "Athugala Wehera Traveling 2025/FormatFactoryIMG-20250512-WA0336.jpg"
    },
    {
        id: 2,
        galleryId: "athugala-2025",
        title: "Sacred Shrine Arches",
        city: "Kurunegala",
        country: "Sri Lanka",
        category: "Culture",
        camera: "Sony α7R V",
        lens: "FE 24-70mm f/2.8 GM II",
        aperture: "f/4.0",
        shutter: "1/160s",
        iso: "200",
        focal: "35mm",
        url: "Athugala Wehera Traveling 2025/FormatFactoryIMG-20250512-WA0341.jpg"
    },
    {
        id: 3,
        galleryId: "athugala-2025",
        title: "Summit Panorama Over Kurunegala",
        city: "Kurunegala",
        country: "Sri Lanka",
        category: "Wilderness",
        camera: "Sony α7R V",
        lens: "FE 24-70mm f/2.8 GM II",
        aperture: "f/8.0",
        shutter: "1/500s",
        iso: "100",
        focal: "50mm",
        url: "Athugala Wehera Traveling 2025/FormatFactoryIMG-20250512-WA0345.jpg"
    },
    {
        id: 4,
        galleryId: "athugala-2025",
        title: "Breathtaking Elephant Rock Cliffs",
        city: "Kurunegala",
        country: "Sri Lanka",
        category: "Wilderness",
        camera: "Sony α7R V",
        lens: "FE 70-200mm f/2.8 GM OSS II",
        aperture: "f/6.3",
        shutter: "1/400s",
        iso: "100",
        focal: "70mm",
        url: "Athugala Wehera Traveling 2025/FormatFactoryIMG-20250512-WA0346.jpg"
    },
    {
        id: 5,
        galleryId: "athugala-2025",
        title: "Pilgrimage Stone Pathways",
        city: "Kurunegala",
        country: "Sri Lanka",
        category: "Adventure",
        camera: "Sony α7R V",
        lens: "FE 24-70mm f/2.8 GM II",
        aperture: "f/4.5",
        shutter: "1/200s",
        iso: "100",
        focal: "28mm",
        url: "Athugala Wehera Traveling 2025/FormatFactoryIMG-20250512-WA0348.jpg"
    },
    {
        id: 6,
        galleryId: "athugala-2025",
        title: "Monastery Gate Entrance",
        city: "Kurunegala",
        country: "Sri Lanka",
        category: "Culture",
        camera: "Sony α7R V",
        lens: "FE 24-70mm f/2.8 GM II",
        aperture: "f/5.0",
        shutter: "1/125s",
        iso: "400",
        focal: "35mm",
        url: "Athugala Wehera Traveling 2025/FormatFactoryIMG-20250512-WA0349.jpg"
    },
    {
        id: 7,
        galleryId: "athugala-2025",
        title: "Golden Hour Over Rock Valleys",
        city: "Kurunegala",
        country: "Sri Lanka",
        category: "Wilderness",
        camera: "Sony α7R V",
        lens: "FE 24-70mm f/2.8 GM II",
        aperture: "f/8.0",
        shutter: "1/320s",
        iso: "100",
        focal: "24mm",
        url: "Athugala Wehera Traveling 2025/FormatFactoryIMG-20250512-WA0350.jpg"
    },
    {
        id: 8,
        galleryId: "athugala-2025",
        title: "Sacred Temple Flagpoles",
        city: "Kurunegala",
        country: "Sri Lanka",
        category: "Culture",
        camera: "Sony α7R V",
        lens: "FE 24-70mm f/2.8 GM II",
        aperture: "f/5.6",
        shutter: "1/250s",
        iso: "100",
        focal: "50mm",
        url: "Athugala Wehera Traveling 2025/FormatFactoryIMG-20250512-WA0351.jpg"
    },
    {
        id: 9,
        galleryId: "athugala-2025",
        title: "Historic Stone Carvings",
        city: "Kurunegala",
        country: "Sri Lanka",
        category: "Culture",
        camera: "Sony α7R V",
        lens: "FE 90mm f/2.8 Macro G OSS",
        aperture: "f/3.2",
        shutter: "1/160s",
        iso: "200",
        focal: "90mm",
        url: "Athugala Wehera Traveling 2025/FormatFactoryIMG-20250512-WA0356.jpg"
    },
    {
        id: 10,
        galleryId: "athugala-2025",
        title: "Sunset Scenic Overlooks",
        city: "Kurunegala",
        country: "Sri Lanka",
        category: "Wilderness",
        camera: "Sony α7R V",
        lens: "FE 16-35mm f/2.8 GM",
        aperture: "f/11",
        shutter: "1/8s",
        iso: "50",
        focal: "16mm",
        url: "Athugala Wehera Traveling 2025/FormatFactoryIMG-20250512-WA0359.jpg"
    },
    {
        id: 11,
        galleryId: "athugala-2025",
        title: "Pilgrims Climbing the Summit",
        city: "Kurunegala",
        country: "Sri Lanka",
        category: "Adventure",
        camera: "Sony α7R V",
        lens: "FE 24-70mm f/2.8 GM II",
        aperture: "f/4.0",
        shutter: "1/250s",
        iso: "100",
        focal: "35mm",
        url: "Athugala Wehera Traveling 2025/FormatFactoryIMG-20250512-WA0360.jpg"
    },
    {
        id: 12,
        galleryId: "athugala-2025",
        title: "Ancient Rock Formations",
        city: "Kurunegala",
        country: "Sri Lanka",
        category: "Wilderness",
        camera: "Sony α7R V",
        lens: "FE 24-70mm f/2.8 GM II",
        aperture: "f/5.6",
        shutter: "1/200s",
        iso: "100",
        focal: "28mm",
        url: "Athugala Wehera Traveling 2025/FormatFactoryIMG-20250512-WA0361.jpg"
    },
    {
        id: 13,
        galleryId: "japan-highlights",
        title: "Kinkaku-ji Temple Silhouette",
        city: "Kyoto",
        country: "Japan",
        category: "Culture",
        camera: "Sony α7R V",
        lens: "FE 24-70mm f/2.8 GM II",
        aperture: "f/4.0",
        shutter: "1/250s",
        iso: "100",
        focal: "35mm",
        url: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200"
    },
    {
        id: 14,
        galleryId: "swiss-peaks",
        title: "Zermatt Morning Glow",
        city: "Zermatt",
        country: "Switzerland",
        category: "Wilderness",
        camera: "Sony α7R V",
        lens: "FE 70-200mm f/2.8 GM OSS II",
        aperture: "f/8.0",
        shutter: "1/500s",
        iso: "100",
        focal: "135mm",
        url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?q=80&w=1200"
    }
];

const defaultGalleries = [
    {
        id: "athugala-2025",
        title: "Athugala Wehera 2025",
        description: "Sacred elephant rock temple and giant Samadhi Buddha statue in Kurunegala.",
        cover: "Athugala Wehera Traveling 2025/FormatFactoryIMG-20250512-WA0336.jpg"
    },
    {
        id: "japan-highlights",
        title: "Japan Highlights",
        description: "Traditional tea houses and historic temples of Kyoto.",
        cover: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200"
    },
    {
        id: "swiss-peaks",
        title: "Swiss Peaks",
        description: "Snowy summits and dramatic ridges around Zermatt.",
        cover: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?q=80&w=1200"
    }
];

// Initialize local settings if empty or outdated
const currentCaps = localStorage.getItem('hasitha_captures');
if (!currentCaps || !currentCaps.includes('galleryId') || currentCaps.includes('Kinkaku-ji')) {
    localStorage.setItem('hasitha_captures', JSON.stringify(defaultCaptures));
    localStorage.setItem('hasitha_capture_likes', JSON.stringify({ 1: 52, 2: 134, 3: 98, 4: 165, 5: 74, 6: 120, 7: 85, 8: 92, 9: 61, 10: 104, 11: 49, 12: 38, 13: 42, 14: 67 }));
}
if (!localStorage.getItem('hasitha_galleries')) {
    localStorage.setItem('hasitha_galleries', JSON.stringify(defaultGalleries));
}

// Global active values
let activeGalleryId = "athugala-2025";
let activeLightboxId = null;

// ======================================================================
// 2. CORE BOOT & INITIALIZATION ROUTINES
// ======================================================================
document.addEventListener('DOMContentLoaded', async () => {
    await loadServerDatabase();
    initHeroSlideshow();
    renderGalleriesHub();
    renderGalleryWall();
    initFiltersAndTabs();
    initLightboxSystem();
    initAdminUploader();
    initAdminGalleryCreator();
    initInquirySystem();
});

async function loadServerDatabase() {
    try {
        const res = await fetch('data.json');
        if (res.ok) {
            const db = await res.json();
            if (db.captures && db.galleries) {
                localStorage.setItem('hasitha_captures', JSON.stringify(db.captures));
                localStorage.setItem('hasitha_galleries', JSON.stringify(db.galleries));
                if (db.likes) {
                    localStorage.setItem('hasitha_capture_likes', JSON.stringify(db.likes));
                }
                return;
            }
        }
    } catch (e) {
        console.warn("Server data.json not populated yet or offline. Defaulting to local cache.", e);
    }
    
    // If data.json does not exist yet, sync initial default arrays to server!
    await syncServerDatabase();
}

async function syncServerDatabase() {
    try {
        const captures = getCaptures();
        const galleries = getGalleries();
        const likes = JSON.parse(localStorage.getItem('hasitha_capture_likes')) || {};
        
        await fetch('sync.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ captures, galleries, likes })
        });
    } catch (e) {
        console.error("Failed to sync database to server.", e);
    }
}

// Retrieve captures and galleries
function getCaptures() {
    return JSON.parse(localStorage.getItem('hasitha_captures'));
}
function getGalleries() {
    return JSON.parse(localStorage.getItem('hasitha_galleries'));
}

// ======================================================================
// 3. CINEMATIC HERO SLIDESHOW SYSTEM
// ======================================================================
function initHeroSlideshow() {
    const container = document.getElementById('hero-slideshow');
    if (!container) return;
    
    container.innerHTML = '';
    const captures = getCaptures();
    
    // Choose top 4 visually striking photographs for slideshow
    const slidesData = captures.slice(0, 4);
    
    slidesData.forEach((cap, idx) => {
        const slide = document.createElement('div');
        slide.className = `slide ${idx === 0 ? 'active' : ''}`;
        slide.style.backgroundImage = `url('${cap.url}')`;
        container.appendChild(slide);
    });
    
    // Slideshow transition interval loop
    let currentSlideIdx = 0;
    const slides = container.querySelectorAll('.slide');
    
    if (slides.length > 1) {
        setInterval(() => {
            slides[currentSlideIdx].classList.remove('active');
            currentSlideIdx = (currentSlideIdx + 1) % slides.length;
            slides[currentSlideIdx].classList.add('active');
        }, 5500); // Transitions every 5.5 seconds
    }
}

// ======================================================================
// 3.5 MULTI-GALLERY COLLECTIONS HUB RENDERER
// ======================================================================
function renderGalleriesHub() {
    const grid = document.getElementById('hubs-tile-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    const galleries = getGalleries();
    const captures = getCaptures();
    
    // Set initial dynamic heading title
    const activeGal = galleries.find(g => g.id === activeGalleryId);
    const heading = document.getElementById('active-gallery-heading');
    if (heading && activeGal) {
        heading.textContent = activeGal.title;
    }
    
    galleries.forEach(gal => {
        const count = captures.filter(c => c.galleryId === gal.id).length;
        
        const card = document.createElement('div');
        card.className = `hub-card ${gal.id === activeGalleryId ? 'active' : ''}`;
        card.setAttribute('data-id', gal.id);
        
        card.innerHTML = `
            <img src="${gal.cover}" alt="${gal.title}" class="hub-card-img" onerror="this.src='https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=600'">
            <div class="hub-card-details">
                <span class="hub-card-badge">Collection</span>
                <h3 class="hub-card-title">${gal.title}</h3>
                <p class="hub-card-desc">${gal.description}</p>
                <span class="hub-card-counter">
                    <span class="material-icons-outlined" style="font-size:0.9rem; vertical-align:middle; margin-right:4px;">photo_library</span>
                    ${count} Captures
                </span>
            </div>
        `;
        
        // Trigger active selection & scroll
        card.addEventListener('click', () => {
            activeGalleryId = gal.id;
            
            document.querySelectorAll('.hub-card').forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            
            // Update active gallery text header dynamically
            const heading = document.getElementById('active-gallery-heading');
            if (heading) {
                heading.textContent = gal.title;
            }
            
            renderGalleryWall();
            
            // Smooth scroll down to photo wall
            const wall = document.getElementById('gallery');
            if (wall) {
                wall.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
        
        grid.appendChild(card);
    });
    
    // Administrative + Create Gallery Tile
    const creator = document.createElement('div');
    creator.className = 'hub-card hub-card-creator';
    creator.innerHTML = `
        <span class="material-icons-outlined">add_circle_outline</span>
        <h3>Create Gallery</h3>
        <p>Establish a fresh photographic archive collection</p>
    `;
    creator.addEventListener('click', () => {
        document.getElementById('admin-gallery-modal').classList.add('active');
    });
    
    grid.appendChild(creator);
}

// ======================================================================
// 4. DYNAMIC GALLERY WALL RENDERER (FILTERED BY ACTIVE GALLERY)
// ======================================================================
function renderGalleryWall(searchFilter = '', categoryFilter = 'all') {
    const wall = document.getElementById('gallery-masonry-wall');
    if (!wall) return;
    
    wall.innerHTML = '';
    const captures = getCaptures();
    
    const filtered = captures.filter(cap => {
        const matchesGallery = cap.galleryId === activeGalleryId;
        
        const matchesSearch = cap.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
                              cap.city.toLowerCase().includes(searchFilter.toLowerCase()) ||
                              cap.country.toLowerCase().includes(searchFilter.toLowerCase()) ||
                              cap.camera.toLowerCase().includes(searchFilter.toLowerCase()) ||
                              cap.lens.toLowerCase().includes(searchFilter.toLowerCase());
                              
        const matchesCategory = categoryFilter === 'all' || cap.category === categoryFilter;
        return matchesGallery && matchesSearch && matchesCategory;
    });
    
    if (filtered.length === 0) {
        const activeGal = getGalleries().find(g => g.id === activeGalleryId);
        const activeGalTitle = activeGal ? activeGal.title : "Active";
        
        wall.innerHTML = `
            <div class="empty-gallery-state" style="grid-column: 1/-1; column-span: all; -webkit-column-span: all; text-align:center; padding: 5rem 0; color: var(--text-muted); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 1.2rem; width: 100%;">
                <span class="material-icons-outlined" style="font-size: 4rem; color: var(--gold); opacity: 0.7;">add_photo_alternate</span>
                <h3 style="color: #fff; font-family: var(--font-header); font-size: 1.8rem; font-weight: 500; margin: 0;">Collection is Empty</h3>
                <p style="font-size: 0.95rem; max-width: 400px; margin: 0 auto; color: var(--text-muted); line-height: 1.6;">
                    No photographic captures have been archived in the "${activeGalTitle}" collection yet.
                </p>
                <button class="btn" id="empty-state-upload-btn" style="margin-top: 0.5rem; padding: 0.7rem 1.8rem; font-size: 0.85rem;">Upload First Photo</button>
            </div>
        `;
        
        // Bind empty state button click listener
        const btn = document.getElementById('empty-state-upload-btn');
        if (btn) {
            btn.addEventListener('click', () => {
                openUploaderForActiveGallery();
            });
        }
        return;
    }
    
    filtered.forEach(cap => {
        const card = document.createElement('div');
        card.className = 'photo-card';
        card.addEventListener('click', () => openLightbox(cap.id));
        
        const galleries = getGalleries();
        const gal = galleries.find(g => g.id === cap.galleryId);
        const galleryTitle = gal ? gal.title : cap.category;
        
        card.innerHTML = `
            <img src="${cap.url}" alt="${cap.title}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=600'">
            <div class="card-overlay">
                <span class="card-category">${galleryTitle} • ${cap.category}</span>
                <h3 class="card-title">${cap.title}</h3>
                <div class="card-location">
                    <span class="material-icons-outlined" style="font-size:0.85rem;">location_on</span>
                    <span>${cap.city}, ${cap.country}</span>
                </div>
                <div class="card-exif-specs">
                    <span class="material-icons-outlined">camera_alt</span>
                    <span>${cap.camera} • ${cap.focal} • ${cap.aperture}</span>
                </div>
            </div>
        `;
        wall.appendChild(card);
    });
}

// ======================================================================
// 5. TABS & SEARCH CONTROLLER
// ======================================================================
function initFiltersAndTabs() {
    const tabs = document.querySelectorAll('.tab-btn');
    const search = document.getElementById('gallery-search');
    
    let activeCategory = 'all';
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            activeCategory = tab.getAttribute('data-category');
            renderGalleryWall(search ? search.value : '', activeCategory);
        });
    });
    
    if (search) {
        search.addEventListener('input', () => {
            renderGalleryWall(search.value, activeCategory);
        });
    }
}

// ======================================================================
// 6. METADATA LIGHTBOX CONTROLLER
// ======================================================================
function initLightboxSystem() {
    const lightbox = document.getElementById('gallery-lightbox');
    const close = document.getElementById('lightbox-close-btn');
    
    if (!lightbox) return;
    
    const closeLightbox = () => {
        lightbox.classList.remove('active');
        activeLightboxId = null;
    };
    
    if (close) close.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });
    
    // Bind Likes increment
    const likeBtn = document.getElementById('lightbox-like-btn');
    if (likeBtn) {
        likeBtn.addEventListener('click', handleLikeIncrement);
    }
}

function openLightbox(capId) {
    const lightbox = document.getElementById('gallery-lightbox');
    if (!lightbox) return;
    
    const captures = getCaptures();
    const cap = captures.find(c => c.id === capId);
    if (!cap) return;
    
    activeLightboxId = capId;
    
    const likes = JSON.parse(localStorage.getItem('hasitha_capture_likes'));
    const countLikes = likes[capId] || 0;
    
    // Inject values into lightbox elements
    const galleries = getGalleries();
    const gal = galleries.find(g => g.id === cap.galleryId);
    const galleryTitle = gal ? gal.title : cap.category;
    
    document.getElementById('lightbox-img').src = cap.url;
    document.getElementById('lightbox-category').textContent = `${galleryTitle} • ${cap.category}`;
    document.getElementById('lightbox-title').textContent = cap.title;
    document.getElementById('lightbox-location').innerHTML = `<span class="material-icons-outlined" style="font-size:0.85rem; vertical-align:middle;">location_on</span> ${cap.city}, ${cap.country}`;
    
    // EXIF Injection
    document.getElementById('exif-body').textContent = cap.camera;
    document.getElementById('exif-lens').textContent = cap.lens;
    document.getElementById('exif-aperture').textContent = cap.aperture;
    document.getElementById('exif-shutter').textContent = cap.shutter;
    document.getElementById('exif-iso').textContent = cap.iso;
    document.getElementById('exif-focal').textContent = cap.focal;
    
    // Likes counter
    document.getElementById('lightbox-like-count').textContent = countLikes;
    
    // Reset Likes styling
    const likeBtn = document.getElementById('lightbox-like-btn');
    if (likeBtn) {
        likeBtn.style.background = 'rgba(212,175,55,0.1)';
        likeBtn.style.color = 'var(--gold)';
    }
    
    lightbox.classList.add('active');
}

function handleLikeIncrement() {
    if (!activeLightboxId) return;
    
    const likes = JSON.parse(localStorage.getItem('hasitha_capture_likes'));
    const countText = document.getElementById('lightbox-like-count');
    const likeBtn = document.getElementById('lightbox-like-btn');
    
    likes[activeLightboxId] = (likes[activeLightboxId] || 0) + 1;
    localStorage.setItem('hasitha_capture_likes', JSON.stringify(likes));
    
    // Sync back to server in the background
    syncServerDatabase();
    
    if (countText) countText.textContent = likes[activeLightboxId];
    
    if (likeBtn) {
        likeBtn.style.transform = 'scale(1.08)';
        setTimeout(() => likeBtn.style.transform = 'scale(1)', 150);
        likeBtn.style.background = 'var(--gold)';
        likeBtn.style.color = '#000';
    }
}

// ======================================================================
// 7. OWNER MINIMALIST CAPTURE UPLOADER MODULE
// ======================================================================
function openUploaderForActiveGallery() {
    const overlay = document.getElementById('admin-uploader-modal');
    if (!overlay) return;
    populateGalleryDropdown();
    const select = document.getElementById('up-gallery-id');
    if (select) {
        select.value = activeGalleryId;
    }
    overlay.classList.add('active');
}

function initAdminUploader() {
    const trigger = document.getElementById('add-capture-trigger');
    const overlay = document.getElementById('admin-uploader-modal');
    const close = document.getElementById('admin-modal-close-btn');
    const form = document.getElementById('admin-upload-form');
    
    if (!trigger || !overlay) return;
    
    trigger.addEventListener('click', () => {
        openUploaderForActiveGallery();
    });
    
    const closeUploader = () => {
        overlay.classList.remove('active');
        form.reset();
    };
    
    if (close) close.addEventListener('click', closeUploader);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeUploader();
    });
    
    // Bind uploader form submit
    if (form) {
        form.addEventListener('submit', handleNewCaptureSubmit);
    }
    
    // Drag & drop file reader
    initDragAndDrop();
}

function populateGalleryDropdown() {
    const select = document.getElementById('up-gallery-id');
    if (!select) return;
    
    select.innerHTML = '';
    const galleries = getGalleries();
    
    galleries.forEach(gal => {
        const opt = document.createElement('option');
        opt.value = gal.id;
        opt.textContent = gal.title;
        select.appendChild(opt);
    });
}

function handleNewCaptureSubmit(e) {
    e.preventDefault();
    
    const targetGalleryId = document.getElementById('up-gallery-id').value;
    const title = document.getElementById('up-title').value.trim();
    const city = document.getElementById('up-city').value.trim();
    const country = document.getElementById('up-country').value.trim();
    const category = document.getElementById('up-category').value;
    const urlInput = document.getElementById('up-url').value.trim();
    
    // EXIF
    const camera = document.getElementById('up-body').value.trim();
    const lens = document.getElementById('up-lens').value.trim();
    const aperture = document.getElementById('up-aperture').value.trim();
    const shutter = document.getElementById('up-shutter').value.trim();
    const iso = document.getElementById('up-iso').value.trim();
    const focal = document.getElementById('up-focal').value.trim();
    
    // Default fallback image URL
    const url = urlInput || 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1200';
    
    const captures = getCaptures();
    const newId = captures.length > 0 ? Math.max(...captures.map(c => c.id)) + 1 : 1;
    
    const newCapture = {
        id: newId,
        galleryId: targetGalleryId,
        title,
        city,
        country,
        category,
        camera,
        lens,
        aperture,
        shutter,
        iso,
        focal,
        url
    };
    
    captures.unshift(newCapture); // Prepend to show first!
    localStorage.setItem('hasitha_captures', JSON.stringify(captures));
    
    // Register like item
    const likes = JSON.parse(localStorage.getItem('hasitha_capture_likes'));
    likes[newId] = 0;
    localStorage.setItem('hasitha_capture_likes', JSON.stringify(likes));
    
    // Switch active gallery to the target one to let them see it immediately
    activeGalleryId = targetGalleryId;
    
    // Trigger server-side data sync
    syncServerDatabase();
    
    // Re-render interfaces
    renderGalleriesHub();
    renderGalleryWall();
    initHeroSlideshow();
    
    // Close & reset
    document.getElementById('admin-uploader-modal').classList.remove('active');
    document.getElementById('admin-upload-form').reset();
    
    alert(`📸 Photographic capture "${title}" successfully registered and attached to collection!`);
}

function initDragAndDrop() {
    const zone = document.getElementById('drag-drop-zone');
    const input = document.getElementById('file-uploader-input');
    const bar = document.getElementById('upload-progress-wrap');
    const fill = document.getElementById('upload-progress-bar');
    
    if (!zone || !input) return;
    
    zone.addEventListener('click', () => input.click());
    
    zone.addEventListener('dragover', (e) => {
        e.preventDefault();
        zone.classList.add('dragover');
    });
    
    zone.addEventListener('dragleave', () => {
        zone.classList.remove('dragover');
    });
    
    zone.addEventListener('drop', (e) => {
        e.preventDefault();
        zone.classList.remove('dragover');
        handleFilesUpload(e.dataTransfer.files);
    });
    
    input.addEventListener('change', () => {
        handleFilesUpload(input.files);
    });
    
    function handleFilesUpload(files) {
        if (files.length === 0) return;
        
        bar.style.display = 'block';
        fill.style.width = '0%';
        
        const file = files[0];
        const formData = new FormData();
        formData.append('file', file);
        
        // Retrieve selected gallery ID to partition directories name-wise
        const targetGalleryId = document.getElementById('up-gallery-id').value;
        formData.append('gallery_id', targetGalleryId);
        
        let pct = 0;
        const progressInterval = setInterval(() => {
            pct += 10;
            fill.style.width = Math.min(pct, 90) + '%';
        }, 50);
        
        fetch('upload.php', {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(data => {
            clearInterval(progressInterval);
            fill.style.width = '100%';
            
            setTimeout(() => {
                bar.style.display = 'none';
                fill.style.width = '0%';
                
                if (data.status === 'success') {
                    const urlInput = document.getElementById('up-url');
                    if (urlInput) {
                        urlInput.value = data.url;
                        alert(`📸 Image "${file.name}" successfully uploaded and saved to "${data.url}"!`);
                    }
                } else {
                    alert(`⚠️ Upload error: ${data.message}`);
                }
            }, 500);
        })
        .catch(err => {
            clearInterval(progressInterval);
            bar.style.display = 'none';
            alert(`⚠️ Server connection error during upload.`);
            console.error(err);
        });
    }
}

// ======================================================================
// 7.5 ADMINISTRATIVE GALLERY COLLECTION CREATOR
// ======================================================================
function initAdminGalleryCreator() {
    const modal = document.getElementById('admin-gallery-modal');
    const close = document.getElementById('admin-gallery-close-btn');
    const form = document.getElementById('admin-gallery-form');
    
    if (!modal) return;
    
    const closeCreator = () => {
        modal.classList.remove('active');
        form.reset();
    };
    
    if (close) close.addEventListener('click', closeCreator);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeCreator();
    });
    
    // Bind cover image file uploader
    const coverFile = document.getElementById('gal-cover-file');
    if (coverFile) {
        coverFile.addEventListener('change', () => {
            const files = coverFile.files;
            if (files.length === 0) return;
            
            const file = files[0];
            const formData = new FormData();
            formData.append('file', file);
            
            // Calculate gallery ID to partition cover image under its own subfolder
            const titleInput = document.getElementById('gal-title');
            const title = titleInput ? titleInput.value.trim() : '';
            const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
            formData.append('gallery_id', id || 'covers');
            
            fetch('upload.php', {
                method: 'POST',
                body: formData
            })
            .then(res => res.json())
            .then(data => {
                if (data.status === 'success') {
                    const coverInput = document.getElementById('gal-cover');
                    if (coverInput) {
                        coverInput.value = data.url;
                        alert(`📸 Cover image "${file.name}" successfully uploaded to "${data.url}"!`);
                    }
                } else {
                    alert(`⚠️ Upload error: ${data.message}`);
                }
            })
            .catch(err => {
                alert(`⚠️ Server connection error during cover upload.`);
                console.error(err);
            });
        });
    }
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const title = document.getElementById('gal-title').value.trim();
            const description = document.getElementById('gal-desc').value.trim();
            const cover = document.getElementById('gal-cover').value.trim();
            
            // Slugify ID
            const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
            
            const galleries = getGalleries();
            
            // Prevent duplicate slugs
            if (galleries.some(g => g.id === id)) {
                alert(`⚠️ A gallery named "${title}" already exists.`);
                return;
            }
            
            const newGal = {
                id,
                title,
                description,
                cover
            };
            
            galleries.push(newGal);
            localStorage.setItem('hasitha_galleries', JSON.stringify(galleries));
            
            // Trigger server-side data sync
            syncServerDatabase();
            
            // Re-render
            renderGalleriesHub();
            
            // Close & notify
            closeCreator();
            alert(`🎉 Gallery collection "${title}" successfully established and mapped to the dashboard tiles!`);
        });
    }
}

// ======================================================================
// 8. CUSTOMER PRINT INQUIRIES
// ======================================================================
function initInquirySystem() {
    const form = document.getElementById('gallery-inquiry-form');
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const success = document.getElementById('inquiry-success');
        if (success) {
            success.style.display = 'block';
            form.reset();
            setTimeout(() => success.style.display = 'none', 4000);
        }
    });
}
