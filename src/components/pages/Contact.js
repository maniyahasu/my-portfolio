import React from 'react'

const Contact = () => {
    const handleContactSubmit = (e) => {
        e.preventDefault();
        alert('Message sent successfully !!');
    }
    return (
        <div>
            <section id="contact" className="contact">
                <div className="container">
                    <div className="section-title">
                        <h2>Contact</h2>
                        <p>Get in touch</p>
                    </div>
                    <div className="row" data-aos="fade-in">
                        <div className="col-lg-5 d-flex align-items-stretch">
                            <div className="info">
                                <div className="address">
                                    <i className="bi bi-geo-alt"></i>
                                    <h4>Location:</h4>
                                    <p>Pune, Maharashtra</p>
                                </div>

                                <div className="email">
                                    <i className="bi bi-envelope"></i>
                                    <h4>Email:</h4>
                                    <p>hasumaniya@gmail.com</p>
                                </div>

                                <div className="phone">
                                    <i className="bi bi-phone"></i>
                                    <h4>Call:</h4>
                                    <p>+91 8408827872, 7990514570</p>
                                </div>
                                <iframe title='google map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30259.781134136785!2d73.94599495!3d18.5527185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3c3288ba495%3A0x38e833613a63004a!2sKharadi%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1732296176837!5m2!1sen!2sin" style={{border: '0', width: '100%', height: '290px'}} allowFullScreen></iframe>
                            </div>
                        </div>

                        <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                            <form className="php-email-form" autoComplete='off' onSubmit={(e) => handleContactSubmit(e)}>
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="name">Your Name</label>
                                        <input type="text" name="name" className="form-control" id="name" required />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="name">Your Email</label>
                                        <input type="email" className="form-control" name="email" id="email" required />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Subject</label>
                                    <input type="text" className="form-control" name="subject" id="subject" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Message</label>
                                    <textarea className="form-control" name="message" rows="10" required></textarea>
                                </div>
                                <div className="my-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                </div>
                                <div className="text-center"><button type="submit">Send Message</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Contact;
