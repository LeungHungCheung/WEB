// time get function 
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit',timeZoneName: 'short' }); //give time based local computer
    //en-US, time format
    document.getElementById('current-time').textContent = timeString; // return value to the time item
}


updateTime();
setInterval(updateTime, 1000); // update time every second // use for repeatly execute function

//setting up variable for js 
const cursor = document.getElementById('cursor');
const video = document.getElementById('backgroundVideo');
const muteBtn = document.getElementById('muteToggle');
const themeToggle = document.getElementById('themeToggle');
const home = document.getElementById('home');
const vimeoIframe = document.querySelector('.autoplay-video iframe');
const moreClick = document.getElementById('moree');
let vimeoPlayer;


        // move cursor
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });
        
        // hide cursor when leaving window
        document.addEventListener('mouseleave', () => {
            cursor.style.opacity = '0';
        });
        
        document.addEventListener('mouseenter', () => {
            cursor.style.opacity = '1';
        });
        
        // reset to solid white by default
        cursor.classList.remove('transparent');
        
        // only make transparent when hovering over specific elements(I set into all)
        const hoverElements = document.querySelectorAll(
            '.always, .horizontal-line, .horizontal-line-d, .autoplay-video, .name-overlay, .custom-cursor, .custom-cursor.transparent, .mute-toggle, .homeclass, .nav-item, .time-display, .home-container, .theme-toggle-container, .theme-toggle, .theme-icon, .text-container, .quote, .my-pic, .about-info, .tag, .content, .person, .person-1, .dis, .dis-1, .dis-2, .ft, .work-overall, .common0, .common1, .common-1, .number, .number-1, .title, .title-1, .help, .help-1, .firm, .firm-1, .firm-2, .info, .info-1, .mv-pic, .mv-pic-1, .vs, .detail-content, .detail-header, .detail-label, .detail-top-section, .detail-img, .relations-header, .relation-btn, .find, .stack, .find-container, .sm, .job, .cv, .email, .legal, .overlay-open, #cursor, #backgroundVideo, #muteToggle, #themeToggle, #home, #moree, #current-time, #vis-plot, #more-info-btn, #detail-page, #detail-close-btn, #detail-category, #detail-title, #detail-description, #detail-visit-btn, #detail-image, #detail-relations-wrapper, #relations-list, #pic-dark, #pic-white'
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
    // install video player
    vimeoPlayer = new Vimeo.Player(vimeoIframe);
    

    // set initial button text based on the iframe's `muted=1` parameter
    // mute at first
    muteBtn.textContent = 'Sound On';

    muteBtn.addEventListener('click', function() {
        vimeoPlayer.getVolume().then(function(volume) {
            if (volume === 0) {
                // if currently muted, unmute (set volume to 1)
                vimeoPlayer.setVolume(1).then(function() {
                    muteBtn.textContent = 'Sound Off';
                }).catch(function(error) {
                    console.error('Error unmuting video:', error);
                });
            } else {
                // if currently unmuted, mute (set volume to 0)
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

// check for saved theme or prefer-color-scheme
function getPreferredTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

// set theme
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
}

// install theme
const currentTheme = getPreferredTheme();
setTheme(currentTheme);

// toggle theme buuton
themeToggle.addEventListener('click', () => {
    const newTheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
});

// listen for system theme changes
window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) { // only if user hasn't set a preference
        setTheme(e.matches ? 'light' : 'dark');
    }
});

home.addEventListener('click', function(){
    // smooth scroll to top
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    
    // scroll to the top and refresh the website
    setTimeout(() => {
        window.location.href = "index.html";
    },500); 
});

// detect touch device
function isTouchDevice() {
    return (('ontouchstart' in window) ||
       (navigator.maxTouchPoints > 0) ||
       (navigator.msMaxTouchPoints > 0));
}

// hide cursor for phone
if (isTouchDevice()) {
    const cursor = document.getElementById('cursor');
    if (cursor) cursor.style.display = 'none';
    
    // reset cursor styles to auto
    document.body.style.cursor = 'auto';
    const allElements = document.querySelectorAll('*');
    allElements.forEach(el => {
        el.style.cursor = 'auto';
    });
}
