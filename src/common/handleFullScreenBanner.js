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
    }

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercentage = (scrollPosition / pageHeight) * 100;

        if (scrollPercentage >= 15) {
            banner.style.display = 'none';
        } else {
            banner.style.display = 'block';
        }
    });

};

// const banner = document.getElementById('home--Banner');
// const homeHero = document.getElementById('home--Hero');

// if (banner && homeHero) {
//     const observer = new IntersectionObserver(
//         ([entry]) => {
//             if (entry.isIntersecting) {
//                 banner.style.position = 'fixed';
//                 banner.style.top = '0';
//                 banner.style.width = '100%';
//                 banner.style.zIndex = '10';
//                 banner.style.display = 'block';
//             } else {
//                 banner.style.display = 'none';
//             }
//         },
//         { threshold: 0.1 }
//     );

//     observer.observe(homeHero);
// }
// };

export default handleFullScreenBanner;