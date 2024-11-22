import React from 'react'

const About = () => {
    return (
        <div>
            <section id="about" className="about">
                <div className="container">
                    <div className="section-title">
                        <h2>About</h2>
                        <p>
                        With over <strong>9+ years</strong> of experience as a Front-end Developer, I have worked extensively with a wide range of technologies including <strong>Angular(v2-17), ReactJS, JavaScript, jQuery, TypeScript, HTML5, CSS, SASS/Less, Bootstrap, Angular Materials, and NodeJS(Basic).</strong> My expertise lies in building robust, user-friendly interfaces and optimizing web applications for performance and scalability.
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4" data-aos="fade-right">
                            <img src="assets/img/profile-img.jpg" className="img-fluid" alt="" />
                        </div>
                        <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                            <h3>Frontend web developer</h3>
                            {/* <p className="fst-italic">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua.
                            </p> */}
                            <div className="row">
                                <div className="col-lg-6">
                                    <ul>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>5 August 1992</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+91 8408827872, 7990514570</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Pune, Maharashtra</span></li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <ul>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>32 years</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master (MCA)</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>hasumaniya@gmail.com</span></li>
                                    </ul>
                                </div>
                            </div>
                            <ul>
                                <li className='mb-1 font-14px'> &#8226; Developed scalable and high-performance web applications using Angular 16/17.</li>
                                <li className='mb-1 font-14px'> &#8226; Create reusable, responsive, and maintainable components and modules.</li>
                                <li className='mb-1 font-14px'> &#8226; Collaborate with designers, backend developers, and stakeholders for seamless
development</li>
                                <li className='mb-1 font-14px'> &#8226; Analyzing and understanding the client requirements, handling client calls related to new requirements, issues, and support</li>
                                <li className='mb-1 font-14px'> &#8226; Integrate RESTful APIs and third-party services into Angular applications</li>
                                {/* <li className='mb-1'> &#8226; </li> */}
                            </ul>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}
export default About;
