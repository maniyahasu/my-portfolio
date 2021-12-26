import React from 'react'

const About = () => {
    return (
        <div>
            <section id="about" className="about">
                <div className="container">
                    <div className="section-title">
                        <h2>About</h2>
                        <p>Having 6+ years of experience of working as a Frontend Web developer. Hands-on experience with web application technologies such as <strong> Angular(v2-12), React, HTML5, JavaScript, Typescript, jQuery, Angular Material, SASS and CSS/CSS3.</strong></p>
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
                                        <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>30 years</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master (MCA)</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>hasumaniya@gmail.com</span></li>
                                    </ul>
                                </div>
                            </div>
                            <ul>
                                <li className='mb-1'> &#8226; Actively participated in daily SCRUM meetings with views for future product development under Agile Methodologies and good understanding of Agile Development</li>
                                <li className='mb-1'> &#8226; Developed reusable code that could minimize the time needed to complete deliveries</li>
                                <li className='mb-1'> &#8226; Having experience in charting libraries like D3 and Apache Echarts</li>
                                <li className='mb-1'> &#8226; Analyzing and understanding the client requirements, handling client calls related to new requirements, issues, and support</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}
export default About;
