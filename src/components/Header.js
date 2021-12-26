import React from 'react'

const Header = (props) => {
    const addActiveClass = (e) => {
        document.querySelectorAll('#header-navigation-link li a').forEach(el => {
            el.classList.remove('active');
        });
        const textContent = e.currentTarget.textContent.trim();
        document.getElementById(`${textContent}-link`).classList.add('active');
    }
    return (
        <>
            <header id="header" style={props.style}>
                <div className="d-flex flex-column">
                    <div className="profile">
                        <img src="assets/img/profile-img.jpg" alt="" className="img-fluid rounded-circle" />
                        <h1 className="text-light"><a href="#home">Hasmukh Maniya</a></h1>
                        <div className="social-links mt-3 text-center">
                            <a href="##" className="google-plus"><i className="bx bxl-skype"></i></a>
                            <a href="https://www.linkedin.com/in/hasmukh-maniya-383b45105/" target='_blank'  rel="noreferrer" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                        </div>
                    </div>
                    <nav id="navbar" className="nav-menu navbar">
                        <ul id='header-navigation-link'>
                            <li><a href="#home" id='Home-link' className="nav-link scrollto active" onClick={(e) => addActiveClass(e)}><i className="bx bx-home"></i> <span>Home</span></a></li>
                            <li><a href="#about" id='About-link' className="nav-link scrollto" onClick={(e) => addActiveClass(e)}><i className="bx bx-user"></i> <span>About</span></a></li>
                            <li><a href="#resume" id='Resume-link' className="nav-link scrollto" onClick={(e) => addActiveClass(e)}><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
                            <li><a href="#portfolio" id='Projects-link' className="nav-link scrollto" onClick={(e) => addActiveClass(e)}><i className="bx bx-book-content"></i> <span>Projects</span></a></li>
                            {/* <li><a href="#services" className="nav-link scrollto"><i className="bx bx-server"></i> <span>Services</span></a></li> */}
                            <li><a href="#contact" id='Contact-link' className="nav-link scrollto" onClick={(e) => addActiveClass(e)}><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}
export default Header;
