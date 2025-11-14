// Add this time function at the top or bottom of your existing code
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit',timeZoneName: 'short' });
    document.getElementById('current-time').textContent = timeString;
}

// Start the clock
updateTime();
setInterval(updateTime, 1000);

const cursor = document.getElementById('cursor');
const video = document.getElementById('backgroundVideo');
const muteBtn = document.getElementById('muteToggle');
const themeToggle = document.getElementById('themeToggle');
const home = document.getElementById('home');
const vimeoIframe = document.querySelector('.autoplay-video iframe');
let vimeoPlayer;

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
            'ul, body, video, h1, .nav, .autoplay-video,.video-container,.name-overlay,.text-container,.work-overall,.common,.content,.find-container,.home-container,.mute-toggle,.time-display,.homeclass,.nav-item,.theme-toggle-container,.theme-toggle,.theme-icon,.ft,.about-info,.find,.find-me,.legal,.title,.info,.info-1,.mv-pic,.mv-pic-1,.my-pic,.creative,.hk,.person,.dis,.dis-1,.dis-2,.sm ,.job,.cv,.email'
        );
        
        hoverElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                cursor.classList.add('transparent');
            });
            
            element.addEventListener('mouseleave', () => {
                cursor.classList.remove('transparent');
            });
        });

    if (vimeoIframe && muteBtn) {
    // Initialize the Vimeo Player
    vimeoPlayer = new Vimeo.Player(vimeoIframe);

    // Set initial button text based on the iframe's `muted=1` parameter
    // Since `muted=1` is in the URL, it starts muted.
    muteBtn.textContent = 'Sound On';

    muteBtn.addEventListener('click', function() {
        vimeoPlayer.getVolume().then(function(volume) {
            if (volume === 0) {
                // If currently muted, unmute (set volume to 1)
                vimeoPlayer.setVolume(1).then(function() {
                    muteBtn.textContent = 'Sound Off';
                }).catch(function(error) {
                    console.error('Error unmuting video:', error);
                });
            } else {
                // If currently unmuted, mute (set volume to 0)
                vimeoPlayer.setVolume(0).then(function() {
                    muteBtn.textContent = 'Sound On';
                }).catch(function(error) {
                    console.error('Error muting video:', error);
                });
            }
        }).catch(function(error) {
            console.error('Error getting video volume:', error);
        });
    });
} 

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
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


