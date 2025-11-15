function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit',timeZoneName: 'short' });
    document.getElementById('current-time').textContent = timeString;
}


updateTime();
setInterval(updateTime, 1000);

const cursor = document.getElementById('cursor');
const themeToggle = document.getElementById('themeToggle');
const home = document.getElementById('home');
const work = document.getElementById('work');
const about = document.getElementById('about');
const data = document.getElementById('data');
const contact = document.getElementById('contact');

 // Move cursor
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });
        
        // Hide cursor when leaving window
        document.addEventListener('mouseleave', () => {
            cursor.style.opacity = '0';
        });
        
        document.addEventListener('mouseenter', () => {
            cursor.style.opacity = '1';
        });
        
        // Reset to solid white by default
        cursor.classList.remove('transparent');
        
        // Only make transparent when hovering over specific elements
        const hoverElements = document.querySelectorAll(
            '.more-work,ul, body, video, h1, .nav, .autoplay-video,.video-container,.name-overlay,.text-container,.work-overall,.common,.content,.find-container,.home-container,.mute-toggle,.time-display,.homeclass,.nav-item,.theme-toggle-container,.theme-toggle,.theme-icon,.ft,.about-info,.find,.find-me,.legal,.title,.info,.info-1,.mv-pic,.mv-pic-1,.my-pic,.creative,.hk,.person,.dis,.dis-1,.dis-2,.sm ,.job,.cv,.email'
        );
        
        hoverElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                cursor.classList.add('transparent');
            });
            
            element.addEventListener('mouseleave', () => {
                cursor.classList.remove('transparent');
            });
        });

        // Check for saved theme or prefer-color-scheme
function getPreferredTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

// Set theme
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // No need to update icon text anymore - CSS handles it automatically!
}

// Initialize theme
const currentTheme = getPreferredTheme();
setTheme(currentTheme);

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
    const newTheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
});

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) { // Only if user hasn't set a preference
        setTheme(e.matches ? 'light' : 'dark');
    }
});

home.addEventListener('click',function(){
    window.location.href = "index.html";
});
work.addEventListener('click',function(){
   window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
about.addEventListener('click',function(){
    window.location.href = "index.html#about";
});
data.addEventListener('click',function(){
    window.location.href = "index.html#data";
});
contact.addEventListener('click',function(){
    window.location.href = "index.html#contact";
});


// --- COMBINED PAGINATION & FILTERING LOGIC ---
// Add this to the end of work-code.js, replacing any
// old filtering or pagination code.

document.addEventListener('DOMContentLoaded', () => {

    const itemsPerPage = 6; // <<< Set how many items per page
    const allWorkItems = Array.from(document.querySelectorAll('#next .box'));
    const paginationContainer = document.querySelector('.pagination-container');
    const filterButtons = document.querySelectorAll('.filter-btn');

    let currentFilter = 'all';
    let currentPage = 1;

    // --- Master Function: This updates everything ---
    function updateView() {
        // 1. DETERMINE VISIBLE ITEMS based on filter
        const visibleItems = [];
        allWorkItems.forEach(item => {
            const itemCategories = item.getAttribute('data-category');
            if (currentFilter === 'all' || itemCategories.includes(currentFilter)) {
                visibleItems.push(item);
                item.classList.remove('hide'); // Un-hide from filter
            } else {
                item.classList.add('hide'); // Hide from filter
            }
        });

        // 2. CALCULATE PAGINATION based on *visible* items
        const totalPages = Math.ceil(visibleItems.length / itemsPerPage);
        
        // --- Safety Check ---
        // If we are on a page that no longer exists (e.g., page 3, but filter only has 1 page)
        // then reset to page 1.
        if (currentPage > totalPages) {
            currentPage = 1;
        }
        
        // 3. RENDER PAGE NUMBER BUTTONS
        paginationContainer.innerHTML = ''; // Clear old buttons
        for (let i = 1; i <= totalPages; i++) {
            const button = document.createElement('button');
            button.classList.add('page-btn');
            button.setAttribute('data-page', i);
            button.textContent = i;
            
            if (i === currentPage) {
                button.classList.add('active'); // Highlight current page
            }
            
            button.addEventListener('click', () => {
                currentPage = i; // Set new page
                updateView(); // Re-run the view
            });
            paginationContainer.appendChild(button);
        }

        // 4. SHOW/HIDE ITEMS based on the *current page*
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        visibleItems.forEach((item, index) => {
            if (index >= startIndex && index < endIndex) {
                item.classList.remove('hide-page'); // Show this item
            } else {
                item.classList.add('hide-page'); // Hide this item
            }
        });
    }

    // --- Add Event Listeners to Filter Buttons ---
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Set the new filter
            currentFilter = button.getAttribute('data-filter');
            // Always reset to page 1 when filter changes
            currentPage = 1; 
            
            // Update active button state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Re-run the entire view
            updateView();
        });
    });

    // --- Initial Load ---
    // Show page 1 of the 'all' filter when the page first loads
    updateView();

});