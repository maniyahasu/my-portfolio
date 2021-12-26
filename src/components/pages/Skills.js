import React from 'react'

const Skills = () => {
    const skills = [
        {
            name: 'Angular',
            accuracy: '85'
        },
        {
            name: 'React',
            accuracy: '60'
        },
        {
            name: 'HTML5',
            accuracy: '100'
        },
        {
            name: 'CSS3',
            accuracy: '90'
        },
        {
            name: 'Javascript',
            accuracy: '75'
        },
        {
            name: 'jQuery',
            accuracy: '60'
        },
        {
            name: 'Bootstrap 4/5',
            accuracy: '90'
        },
        {
            name: 'Angualr Material',
            accuracy: '75'
        },
        {
            name: 'D3 (Charting library)',
            accuracy: '60'
        },
        {
            name: 'Apache Echarts (Charting library)',
            accuracy: '60'
        }
    ];
    return (
        <div>
            <section id="skills" className="skills section-bg">
                <div className="container">
                    <div className="section-title">
                        <h2>Skills</h2>
                        <p>Having hands-on experiance on below mentioned skills</p>
                    </div>
                    <div className="row skills-content">
                        {skills.map(item => (
                            <div key={item.name} className="col-lg-4" data-aos="fade-up">
                                <div className="progress">
                                    <span className="skill">{item.name} <i className="val">{item.accuracy}%</i></span>
                                    <div className="progress-bar-wrap">
                                        <div className={`progress-bar w-${item.accuracy}`} role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Skills;
