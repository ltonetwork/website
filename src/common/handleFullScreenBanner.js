const handleFullScreenBanner = () => {
    function noScroll() {
        window.scrollTo(0, 0);
    }

    const banner = document.getElementById('home--Banner');

    if (banner) {
        banner.style.position = 'fixed';
        banner.style.top = '0';
        banner.style.width = '100%';
        banner.style.zIndex = '10';
        banner.style.transition = 'opacity 0.5s ease'
        banner.style.overflow = 'hidden';
    }

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercentage = (scrollPosition / pageHeight) * 100;

        if (scrollPercentage >= 8) {
            banner.style.opacity = '0';
        } else {
            banner.style.opacity = '1';
            banner.style.display = 'block';
        }
    });

    banner.addEventListener('transitionend', () => {
        if (banner.style.opacity === '0') {
            banner.style.display = 'none';
        }
    });

};


export default handleFullScreenBanner;