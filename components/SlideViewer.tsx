import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, ArrowRight, Download } from 'lucide-react';
import { SLIDES } from '../constants.ts';
import { Section } from '../types.ts';

interface SlideViewerProps {
    currentSection: Section;
    onSectionChange: (section: Section) => void;
}

const SlideViewer: React.FC<SlideViewerProps> = ({ currentSection, onSectionChange }) => {
    const sections = Object.values(Section);
    const currentIndex = sections.indexOf(currentSection);
    const slide = SLIDES[currentSection];
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(false);
        const timer = setTimeout(() => setLoaded(true), 100);
        return () => clearTimeout(timer);
    }, [currentSection]);

    const handleNext = () => {
        const nextIndex = (currentIndex + 1) % sections.length;
        onSectionChange(sections[nextIndex]);
    };

    const handlePrev = () => {
        const prevIndex = (currentIndex - 1 + sections.length) % sections.length;
        onSectionChange(sections[prevIndex]);
    };

    return (
        <div className="relative w-full h-screen overflow-hidden bg-glocerova-dark">
            <div className="absolute inset-0 z-0">
                {slide.videoUrl ? (
                    <video
                        src={slide.videoUrl}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] ease-out ${loaded ? 'scale-105' : 'scale-100'}`}
                    />
                ) : (
                    <div 
                        className={`absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] ease-out ${loaded ? 'scale-105' : 'scale-100'}`}
                        style={{ backgroundImage: `url(${slide.imageUrl})` }}
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-glocerova-dark/90 via-glocerova-dark/70 to-transparent" />
            </div>

            <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-20 lg:px-32 max-w-7xl mx-auto">
                <div className={`transition-all duration-700 ease-out transform ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-1 w-12 bg-glocerova-gold"></div>
                        <span className="text-glocerova-gold font-bold tracking-widest text-sm md:text-base uppercase font-sans">{slide.subtitle}</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 leading-tight">{slide.title}</h1>
                    <p className="text-slate-300 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed font-light">{slide.description}</p>
                    <div className="flex flex-wrap gap-4">
                        <button onClick={handleNext} className="group flex items-center gap-4 bg-white text-glocerova-dark px-8 py-4 rounded-full font-bold hover:bg-glocerova-gold transition-colors duration-300">
                            {slide.ctaText}
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        {slide.secondaryCta && (
                            <a href={slide.secondaryCta.link} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                                {slide.secondaryCta.text}
                                <Download size={20} />
                            </a>
                        )}
                    </div>
                </div>
            </div>

            <div className="absolute bottom-12 right-8 md:right-20 flex gap-4 z-20">
                <button onClick={handlePrev} className="p-4 rounded-full border border-white/20 text-white hover:bg-white/10 backdrop-blur-sm transition-all"><ChevronLeft size={24} /></button>
                <button onClick={handleNext} className="p-4 rounded-full bg-white text-glocerova-dark hover:bg-glocerova-gold transition-all shadow-lg"><ChevronRight size={24} /></button>
            </div>

            <div className="absolute bottom-12 left-8 md:left-20 flex gap-3 z-20">
                {sections.map((s) => (
                    <button key={s} onClick={() => onSectionChange(s)} className={`h-1.5 transition-all duration-300 rounded-full ${s === currentSection ? 'w-12 bg-glocerova-gold' : 'w-6 bg-white/30 hover:bg-white/50'}`} />
                ))}
            </div>
            
            <div className="absolute top-12 right-8 md:right-20 text-white/40 font-mono text-xl z-20">
                0{slide.id} <span className="text-white/20 mx-2">/</span> 04
            </div>
        </div>
    );
};

export default SlideViewer;