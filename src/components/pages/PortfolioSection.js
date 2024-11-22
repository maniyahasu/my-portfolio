import React from 'react'

const PortFolioSection = () => {
    const projectDetails = [
        {
            name: ' ZIDM (ZAIDYN Identity Management)',
            description: `ZAIDYN Identity Manager is a unified identity and access management platform for Enterprise cloud-based platforms – powered by OKTA. Using Identity Manager, teams can manage their digital identities, store/secure business data, and ensure only relevant data is shared with specific users/groups`,
            teamSize: 10,
            image: 'zidm.jpg',
        },
        {
            name: 'ZAS (ZAIDYN App Studio)',
            description: `ZAIDYN App Studio is a rapid application development platform that offers a visual interface to create an application quickly and easily.`,
            teamSize: 16,
            image: 'zas.jpg',
        },
        {
            name: 'Mosaic AIOps',
            description: 'LTI’s Mosaic AIOps enables Enterprise IT transformation through adoption of AI-led IT Operations. This means enhanced asset monitoring, automated situation detection & remediation, smarter service desk activities by inculcating collaborative support practices in the operations teams.',
            teamSize: 8,
            image: 'aiops.jpg',
        },
        {
            name: 'Turn Rx Inventory Management (TurnRx)',
            description: 'Turn Rx, an automated inventory management solution driven by predictive analytics, is fully integrated with EPS and provides an intuitive web interface that allows you to manage and track inventory at a pharmacy or corporate level',
            teamSize: 5,
            image: 'turn.png',
        },
        {
            name: 'ENTERPRISE PHARMACY SYSTEM (EPS)',
            description: 'EPS is designed by pharmacists and continually enhanced by the nation’s largest pharmacy-focused development team, EPS is the solution used in thousands of pharmacies.',
            teamSize: 10,
            image: 'eps.png',
        },
        {
            name: 'NOVA Theme & Angular component library',
            description: 'A NOVA is a collection of reusable components, guided by clear standards, that can be assembled to build any number of applications',
            teamSize: 5,
            image: 'nova.jpg',
        },
        {
            name: 'EHRWeb: MaximEyes.com',
            description: 'MaximEyes EHR is a Product used by Doctors in the USA for flexibility to tailor the system needs or get started right away with pre-built exam templates.',
            teamSize: 7,
            image: 'maximeyes.jpg',
        }
    ];
    return (
        <div>
            <section id="portfolio" className="portfolio section-bg">
                <div className="container">
                    <div className="section-title">
                        <h2>Projects</h2>
                    </div>
                    <div className='row'>
                        {projectDetails.map(item => (
                            <div key={item.name} className="col-md-4 mb-4">
                                <div className='card'>
                                    <div className="backgroundEffect"></div>
                                    <div className="pic"> <img className="" src={`assets/img/portfolio/${item.image}`} alt="" />
                                    </div>
                                    <div className="content">
                                        <p className="h-1 mt-4 fw-bold">{item.name}</p>
                                        <p className="text-muted mt-3">{item.description}</p>
                                        <div className="d-flex align-items-center justify-content-between mt-3 pb-3">
                                            <div className="d-flex align-items-center justify-content-center foot">
                                                <div className="admin">Team size</div>
                                                <div className="ps-2 icon text-muted"><span className="fas fa-comment-alt pe-1"></span>{item.teamSize}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section >
        </div >
    )
}
export default PortFolioSection;
