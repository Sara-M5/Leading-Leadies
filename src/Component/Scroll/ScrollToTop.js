import React from 'react'
import './ScrollToTop.css'

function ScrollToTop() {
    const scrollToTop = () => window.scrollTo({top:0, behavior:"smooth"});

    return (
        <div className="Scroll-to-top cursor-pointer text-center"
        onClick={scrollToTop}>
            <i className="scroll-icon fas fa-chevron-up"></i>
        </div>
    )
}

export default ScrollToTop
