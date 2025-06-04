import React, { useEffect, useRef, useCallback, useState } from 'react';
import Link from "next/link";
import Image from 'next/image';
import heroPhrases from "../../data/hero-phrases.json";
import debounce from 'lodash/debounce';

const HomeHero = () => {
    const heroRef = useRef(null);
    const innerRef = useRef(null);
    const layersRef = useRef([]);
    const animationFrameRef = useRef(null);
    const [title, setTitle] = useState('L<br/>T<br/>O');
    const [isLoaded, setIsLoaded] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    // Optimized mouse move handler with reduced calculations
    const handleMouseMove = useCallback(debounce((e) => {
        if (!heroRef.current || !isAnimating) return;

        const hero = heroRef.current;
        const mouseX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
        const mouseY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;
        const heroH = hero.offsetHeight;
        const heroW = hero.offsetWidth;
        const heroMidX = hero.offsetLeft + (heroW / 2);
        const heroMidY = hero.offsetTop + (heroH / 2);
        const diffX = (heroMidX - mouseX) * 0.05; // Reduced movement range
        const diffY = (heroMidY - mouseY) * 0.05;

        if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
        }

        animationFrameRef.current = requestAnimationFrame(() => {
            layersRef.current.forEach(layer => {
                if (!layer) return;
                const ratioX = parseFloat(layer.dataset.x);
                const ratioY = parseFloat(layer.dataset.y);
                const scale = parseFloat(layer.dataset.scale);
                
                // Simplified transform calculation
                const moveX = diffX * ratioX;
                const moveY = diffY * ratioY;
                
                layer.style.transform = `translate3d(${moveX}px,${moveY}px,0px) scale(${scale})`;
            });
        });
    }, 16), [isAnimating]);

    // Optimized orientation handler with reduced calculations
    const handleOrientation = useCallback(debounce(() => {
        if (!heroRef.current || !innerRef.current) return;

        const hero = heroRef.current;
        const cont = innerRef.current;
        const heroH = hero.offsetHeight;
        const heroW = hero.offsetWidth;
        const isVertical = heroH > heroW/1.6;

        // Simplified orientation logic
        hero.classList.toggle('hero--vert', isVertical);
        hero.classList.toggle('hero--horz', !isVertical);
        
        if (isVertical) {
            const width = heroH * 1.6;
            cont.style.width = `${width}px`;
            cont.style.height = '100%';
            
            const nudgePerc = (((width - heroW) / width) * 100) * 1.4;
            const nudgeAmount = nudgePerc / 2;
            
            // Batch DOM updates
            requestAnimationFrame(() => {
                document.querySelectorAll('.nudge-left, .nudge-right').forEach(layer => {
                    const isTop = layer.classList.contains('stay-top');
                    const isBot = layer.classList.contains('stay-bot');
                    const isLeft = layer.classList.contains('nudge-left');
                    
                    layer.style.left = isLeft ? `${nudgeAmount * 0.7}%` : `${nudgeAmount * 1.4}%`;
                    layer.style.top = isTop ? `-${nudgeAmount * 0.2}%` : 
                                    isBot ? `${nudgeAmount * 2.25}%` : 
                                    `${nudgeAmount}%`;
                    layer.style.width = `${100 - nudgePerc}%`;
                    layer.style.height = `${100 - nudgePerc}%`;
                });
            });
        } else {
            cont.style.width = '100%';
            cont.style.height = `${heroW / 1.6}px`;
            
            requestAnimationFrame(() => {
                document.querySelectorAll('.nudge-left, .nudge-right').forEach(layer => {
                    layer.style.left = '0px';
                    layer.style.top = '0px';
                    layer.style.width = '100%';
                    layer.style.height = '100%';
                });
            });
        }
    }, 100), []);

    // Optimized hero loading
    const loadHero = useCallback(() => {
        const randomTitle = heroPhrases[Math.floor(Math.random()*heroPhrases.length)].title;
        setTitle(randomTitle);
        
        // Batch DOM updates
        requestAnimationFrame(() => {
            document.querySelectorAll('.hero__image').forEach(layer => {
                const scale = parseFloat(layer.dataset.scale);
                if (layer.classList.contains('hero__image--sun')) {
                    layer.classList.add('initial-sun-position');
                }
                layer.classList.add(`scale-${scale.toString().replace('.', '-')}`);
            });

            // Progressive animation sequence
            setTimeout(() => {
                if (innerRef.current) {
                    innerRef.current.classList.add('lto-animate');
                    setIsLoaded(true);
                    
                    setTimeout(() => {
                        const sunLayer = document.querySelector('.hero__image--sun');
                        if (sunLayer) {
                            sunLayer.classList.add('lto-animate');
                            setIsAnimating(true);
                            
                            setTimeout(() => {
                                sunLayer.classList.remove('lto-animate');
                                sunLayer.classList.add('final-sun-position');
                            }, 1500);
                        }
                    }, 1000);
                }
            }, 1000);
        });
    }, []);

    useEffect(() => {
        // Initialize refs
        layersRef.current = Array.from(document.querySelectorAll('.hero__image'));
        
        // Load hero
        if (document.readyState === 'complete') {
            loadHero();
        }
        window.addEventListener('load', loadHero);
        window.addEventListener('resize', handleOrientation);
        
        // Initial orientation
        handleOrientation();

        // Cleanup
        return () => {
            window.removeEventListener('load', loadHero);
            window.removeEventListener('resize', handleOrientation);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [loadHero, handleOrientation]);

    const scrollToAbout = () => {
        const walletElement = document.getElementById('wallet');
        if (walletElement) {
            window.scrollTo({
                top: walletElement.offsetTop - 50,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div 
            id="home--Hero" 
            className={`hero ${isLoaded ? 'hero--loaded' : ''}`}
            ref={heroRef}
            onMouseMove={handleMouseMove} 
            onTouchMove={handleMouseMove}
        >
            <div className="hero__inner" ref={innerRef}>
                {/* Critical images with blur placeholder */}
                <div className="hero__image" data-x="0.05" data-y="0.05" data-scale="1.05">
                    <Image 
                        src="/img/hero/layer-sky.webp" 
                        alt="Sky background" 
                        layout="fill" 
                        priority 
                        placeholder="blur"
                        blurDataURL="data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoQABAABUB8JZwAA3AA/v3yAAA="
                    />
                </div>
                <div className="hero__image hero__image--sun" data-x="0.065" data-y="0.065" data-scale="1.1">
                    <Image 
                        src="/img/hero/layer-sunNoSparkle.webp" 
                        alt="Sun without sparkle" 
                        layout="fill" 
                        priority 
                        placeholder="blur"
                        blurDataURL="data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoQABAABUB8JZwAA3AA/v3yAAA="
                    />
                </div>
                <div className="hero__image hero__image--sparkle" data-x="0.065" data-y="0.065" data-scale="1.1">
                    <Image 
                        src="/img/hero/layer-sunSparkle.webp" 
                        alt="Sun sparkle" 
                        layout="fill" 
                        priority 
                        placeholder="blur"
                        blurDataURL="data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoQABAABUB8JZwAA3AA/v3yAAA="
                    />
                </div>

                {/* Non-critical images with lazy loading */}
                <div className="hero__image" data-x="0.09" data-y="0.09" data-scale="1.15">
                    <Image 
                        src="/img/hero/layer-smallField.webp" 
                        alt="Small field" 
                        layout="fill" 
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL="data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoQABAABUB8JZwAA3AA/v3yAAA="
                    />
                </div>
                <div className="hero__image" data-x="0.13" data-y="0.13" data-scale="1.15">
                    <Image src="/img/hero/layer-bigField.webp" alt="Big field" layout="fill" loading="lazy" />
                </div>
                <div className="hero__image hero__image--text" data-x="0.15" data-y="1.5" data-scale="1">
                    <h1 className="hero__title" dangerouslySetInnerHTML={{ __html: title }} />
                </div>
                <div className="hero__image hero__image--leaf7 nudge-left" data-x="0.17" data-y="0.17" data-scale="1.19">
                    <Image src="/img/hero/layer-leaf7Trans.webp" alt="Leaf 7" layout="fill" loading="lazy" />
                </div>
                <div className="hero__image hero__image--leaf6 nudge-left" data-x="0.22" data-y="0.22" data-scale="1.2">
                    <Image src="/img/hero/layer-leaf6Trans.webp" alt="Leaf 6" layout="fill" loading="lazy" />
                </div>
                <div className="hero__image hero__image--leaf5 nudge-left stay-top" data-x="0.25" data-y="0.25" data-scale="1.2">
                    <Image src="/img/hero/layer-leaf5.webp" alt="Leaf 5" layout="fill" loading="lazy" />
                </div>
                <div className="hero__image hero__image--leaf4 nudge-right stay-bot" data-x="0.28" data-y="0.28" data-scale="1.22">
                    <Image src="/img/hero/layer-leaf4Trans.webp" alt="Leaf 4" layout="fill" loading="lazy" />
                </div>
                <div className="hero__image hero__image--leaf3 nudge-right stay-bot" data-x="0.3" data-y="0.3" data-scale="1.25">
                    <Image src="/img/hero/layer-leaf3.webp" alt="Leaf 3" layout="fill" loading="lazy" />
                </div>
                <div className="hero__image hero__image--leaf2 nudge-right" data-x="0.2" data-y="0.2" data-scale="1.18">
                    <Image src="/img/hero/layer-leaf2Trans.webp" alt="Leaf 2" layout="fill" loading="lazy" />
                </div>
                <div className="hero__image hero__image--leaf1 nudge-right" data-x="0.28" data-y="0.28" data-scale="1.25">
                    <Image src="/img/hero/layer-leaf1Trans.webp" alt="Leaf 1" layout="fill" loading="lazy" />
                </div>
            </div>
            <div className="hero__prompt">
                <Image 
                    src="/img/hero/down-arrow-glow.webp" 
                    alt="Scroll down" 
                    width={32} 
                    height={32} 
                    priority 
                    placeholder="blur"
                    blurDataURL="data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoQABAABUB8JZwAA3AA/v3yAAA="
                />
            </div>
            <div onClick={scrollToAbout} className="hero__link" />
            
            <style jsx>{`
                .hero {
                    opacity: 0;
                    transition: opacity 0.5s ease-in-out;
                }

                .hero--loaded {
                    opacity: 1;
                }

                .hero__image {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    will-change: transform;
                    backface-visibility: hidden;
                    transform-style: preserve-3d;
                }

                .initial-sun-position {
                    transform: translate3d(0, 100%, 0) scale(1.1);
                }

                .final-sun-position {
                    transform: translate3d(0, 0, 0) scale(1.1);
                }

                .scale-1-05 { transform: scale(1.05); }
                .scale-1-1 { transform: scale(1.1); }
                .scale-1-15 { transform: scale(1.15); }
                .scale-1-18 { transform: scale(1.18); }
                .scale-1-19 { transform: scale(1.19); }
                .scale-1-2 { transform: scale(1.2); }
                .scale-1-22 { transform: scale(1.22); }
                .scale-1-25 { transform: scale(1.25); }

                @media (prefers-reduced-motion: reduce) {
                    .hero__image {
                        transition: none !important;
                        animation: none !important;
                    }
                }

                /* Optimize paint operations */
                .hero__image {
                    transform: translateZ(0);
                    -webkit-font-smoothing: antialiased;
                }

                /* Optimize animation performance */
                .lto-animate {
                    transition: transform 1.5s cubic-bezier(0.4, 0, 0.2, 1);
                }
            `}</style>
        </div>
    );
};

export default HomeHero;
