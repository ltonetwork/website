import React from 'react';
import Link from "next/link";

const heroMouseMove = (e) => {
    const hero = document.querySelector('.hero');
    const layers = document.querySelectorAll('.hero__image');

    const mouseX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
    const mouseY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;
    const heroH = hero.offsetHeight;
    const heroW = hero.offsetWidth;
    const heroMidX = hero.offsetLeft + (heroW / 2);
    const heroMidY = hero.offsetTop + (heroH / 2);
    const diffX = heroMidX - mouseX;
    const diffY = heroMidY - mouseY;
    
    layers.forEach(function(layer, index){
        const ratioX = parseFloat(layer.dataset.x);
        const ratioY = parseFloat(layer.dataset.y);
        const scale = parseFloat(layer.dataset.scale);
        const minScale = ((scale - 1) / 2);
        
        const minX = heroW * minScale;
        const minY = heroH * minScale;
        
        const maxX = - (heroW * minScale);
        const maxY = - (heroH * minScale);
        
        const moveX = Math.max(maxX,Math.min(minX,ratioX * diffX));
        const moveY = Math.max(maxY,Math.min(minY,ratioY * diffY));
        
        // layer.style.left = moveX+'px';
        // layer.style.top = moveY+'px';
        // layer.style.transform = 'scale('+scale+')';
        layer.style.transform = 'translate3d('+moveX+'px,'+moveY+'px,0px) scale('+scale+')';
    });
}

const loadHero = () =>{ 
    console.log('loading Hero...');
    // apply initial scales
    document.querySelectorAll('.hero__image').forEach(function(layer, index){
      const scale = parseFloat(layer.dataset.scale);
      if (layer.classList.contains('hero__image--sun')) {
        layer.style.transform = ' translate3d(0,100%,0) scale('+scale+')';
      } else {
        layer.style.transform = 'scale('+scale+')';
      }
    });

    setTimeout(function(){
        const sunLayer = document.querySelector('.hero__image--sun');
        document.querySelector('.hero__inner').classList.add('lto-animate');                
        console.log('fade in hero...');
        setTimeout(function(){
            sunLayer.classList.add('lto-animate');
            console.log('sunrise...');
            setTimeout(function(){
                sunLayer.classList.remove('lto-animate');
                sunLayer.style.transform = 'translate3d(0px,0px,0px) scale(1.1)';
            },1500)
        }, 1000);
    }, 1000);
}

class HomeHero extends React.Component {
    componentDidMount() {
        console.log('home hero mounted');

        if (document.readyState == 'complete') { loadHero(); }
        window.addEventListener('load',loadHero);
    }

    render() {
        return (
            <div className="hero" onMouseMove={heroMouseMove} onTouchMove={heroMouseMove}>
              <div className="hero__inner"> 
                <div className="hero__image" data-x="0.05" data-y="0.05" data-scale="1.05"><img src="/img/hero/layer-sky.jpg"/></div>
                <div className="hero__image hero__image--sun" data-x="0.065" data-y="0.065" data-scale="1.1"><img src="/img/hero/layer-sunNoSparkle.png"/></div>
                <div className="hero__image hero__image--sparkle" data-x="0.065" data-y="0.065" data-scale="1.1"><img src="/img/hero/layer-sunSparkle.png"/></div>
                <div className="hero__image" data-x="0.09" data-y="0.09" data-scale="1.15"><img src="/img/hero/layer-smallField.png"/></div>
                <div className="hero__image" data-x="0.13" data-y="0.13" data-scale="1.15"><img src="/img/hero/layer-bigField.png"/></div>
                <div className="hero__image hero__image--text" data-x="0.15" data-y="1.5" data-scale="1"><h1>Start Your Journey</h1></div>
                <div className="hero__image hero__image--leaf7" data-x="0.17" data-y="0.17" data-scale="1.19"><img src="/img/hero/layer-leaf7Trans.png"/></div>
                <div className="hero__image hero__image--leaf6" data-x="0.22" data-y="0.22" data-scale="1.2"><img src="/img/hero/layer-leaf6Trans.png"/></div>
                <div className="hero__image" data-x="0.25" data-y="0.25" data-scale="1.2"><img src="/img/hero/layer-leaf5.png"/></div>
                <div className="hero__image hero__image--leaf4" data-x="0.28" data-y="0.28" data-scale="1.22"><img src="/img/hero/layer-leaf4Trans.png"/></div>
                <div className="hero__image" data-x="0.3" data-y="0.3" data-scale="1.25"><img src="/img/hero/layer-leaf3.png"/></div>
                <div className="hero__image hero__image--leaf2" data-x="0.2" data-y="0.2" data-scale="1.18"><img src="/img/hero/layer-leaf2Trans.png"/></div>
                <div className="hero__image hero__image--leaf1" data-x="0.28" data-y="0.28" data-scale="1.25"><img src="/img/hero/layer-leaf1Trans.png"/></div>
              </div>
              <a href="#about" className="hero__prompt">
                <img src="/img/about/down-arrow.png" alt="Scroll down" />
              </a>  
            </div>
        );
    }
}

export default HomeHero;