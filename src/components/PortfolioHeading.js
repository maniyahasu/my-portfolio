import React, { useRef, useEffect } from 'react';
import Typed from 'typed.js';

const Heading = () => {
    const typeRef = useRef();
    useEffect(() => {
        const typed = new Typed(typeRef.current, {
            strings: ["Frontend developer"],
            typeSpeed: 90,
        });

        return () => {
            typed.destroy();
        };
    }, []);
    return (
        <div>
            <section id="home" className="d-flex flex-column justify-content-center align-items-center">
                <div className="hero-container" data-aos="fade-in">
                    <h1>Hasmukh Maniya</h1>
                    <p>I'm <span id="typedText" ref={typeRef}></span></p>
                </div>
            </section>
        </div>
    )
}
export default Heading;
