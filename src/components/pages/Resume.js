import React from 'react'

const Resume = () => {
    return (
        <div>
            <section id="resume" className="resume">
                <div className="container">

                    {/* <div className="section-title">
                        <h2>Resume</h2>
                        <p>Innovative and deadline-driven Front end developer with 6+ years of experience of developing user-centered web application from initial concept to final, polished deliverable.</p>
                    </div> */}

                    <div className="row">
                        <div className="col-lg-6" data-aos="fade-up">
                            {/* <h3 className="resume-title">Sumary</h3>
                            <div className="resume-item pb-0">
                                <h4>Alex Smith</h4>
                                <p><em>Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</em></p>
                                <ul>
                                    <li>Portland par 127,Orlando, FL</li>
                                    <li>(123) 456-7891</li>
                                    <li>alice.barkley@example.com</li>
                                </ul>
                            </div> */}

                            <h3 className="resume-title">Education</h3>
                            <div className="resume-item">
                                <h4>Master of Computer Application</h4>
                                <h5>2013 - 2016</h5>
                                <p><em>RMD Sinhgad College of Computer Studies, Pune, Maharashtra, India</em></p>
                            </div>
                            <div className="resume-item">
                                <h4>Bachelor of Computer Application</h4>
                                <h5>2010 - 2013</h5>
                                <p><em>Swaminarayan College of Computer Science, Bhavnagar, Gujarat, India</em></p>
                            </div>
                            <div className="resume-item">
                                <h4>HSC</h4>
                                <h5>2009 - 2010</h5>
                                <p><em>Vishuddhanand Vidhya Mandir, Bhavnagar, Gujarat, India</em></p>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                            <h3 className="resume-title">Professional Experience</h3>
                            <div className="resume-item">
                                <h4>Lead Software Engineer - Frontend</h4>
                                <h5>August 2022 - Present</h5>
                                <p><em> ZS Associates </em></p>
                                <ul>
                                    <li>Perform code reviews to maintain quality and follow best practices.</li>
                                    <li>Create reusable, responsive, and maintainable components and modules.</li>
                                    <li>Debug and resolve technical issues and performance bottlenecks</li>
                                    <li>Collaborate with designers, backend developers, and stakeholders for seamless developent.</li>
                                    <li>Integrate RESTful APIs and third-party services into Angular applications.</li>
                                    <li>Write and execute unit tests using Jasmine/Karma for robust application testing</li>
                                </ul>
                            </div>
                            <div className="resume-item">
                                <h4>Senior Product Engineer</h4>
                                <h5>Feb 2021 - August 2022</h5>
                                <p><em> Larsen &amp; Toubro Infotech Limited, Pune, Maharashtra, India </em></p>
                                <ul>
                                    <li>Created required components and developed user interface as per requirements.</li>
                                    <li>Developed modules &amp; components for real time application</li>
                                    <li>Created responsive &amp; reusable HTML and Angular components with unit testing and more than 80% code coverage.</li>
                                    <li>Actively involved in code review process.</li>
                                </ul>
                            </div>
                            <div className="resume-item">
                                <h4>Senior Software Engineer</h4>
                                <h5>March 2019 - Feb 2021</h5>
                                <p><em>Synerzip Softech Ind Pvt Ltd, Pune, Maharashtra, India</em></p>
                                <ul>
                                    <li>Analysis and understand client requirements.</li>
                                    <li>Testing of developed user story on the server.</li>
                                    <li>Demonstration of the developed user story to the client and team</li>
                                    <li>Created required components and developed user interface as per requirements.</li>
                                </ul>
                            </div>
                            <div className="resume-item">
                                <h4>Software Engineer</h4>
                                <h5>Oct 2015 - March 2019</h5>
                                <p><em>First insight software solution, Pune, Maharashtra, India</em></p>
                                <ul>
                                    <li>Requirement gathering, Design, Development, Implementation, and unit testing</li>
                                    <li>Developed a Responsive UI for different devices such as Mobile, Desktop, Tablet</li>
                                    <li>Developed mobile first responsive website and web application using Bootstrap 3/4, jQuery and Angular 2/4.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}
export default Resume;
