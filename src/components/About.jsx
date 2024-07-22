import skill1 from '../assets/images/skill1.svg'
import skill2 from '../assets/images/skill2.svg'
import skill3 from '../assets/images/skill3.svg'
import skill4 from '../assets/images/skill4.svg'

export const About = ({ isMobile }) => {
  const skills = [
    {
      skillName: 'Responsive Web Design',
      skillIcon: skill1,
      skillDescription: 'I create layouts that adjust to any type of screen size, desktop, tablet or mobile'
    },
    {
      skillName: 'Animated Interactions',
      skillIcon: skill2,
      skillDescription: 'I create animated micro-interactions usually to make things more engaging and less boring'
    },
    {
      skillName: 'Dashboard Development',
      skillIcon: skill4,
      skillDescription: 'Expert in creating dynamic admin and sales panels with intuitive user interfaces.'
    },
    {
      skillName: 'Digital Marketing Strategy',
      skillIcon: skill3,
      skillDescription: 'Proficient in SEO and online advertising to maximize visibility and engagement for businesses.'
    }
  ];

  return (
    <section id='about' className='aboutSection'>
      <div className="container-fluid h-100">
        <div className="row h-100">
          <div className="col-md-6 leftSection">
            <h1 className="h1-header-filled mt-3">My Skills</h1>
            <div className="row flex-column">
              {skills.slice(0, 2).map((skill, index) => (
                <div key={index} className="">
                  <div className="aboutLeftSection">
                    <div className="skillIconContainer">
                      <img src={skill.skillIcon} className='skillIcon' alt={skill.skillName} />
                    </div>
                    <h3 className='skill-h3'>{skill.skillName}</h3>
                    <p className='skill-p'>{skill.skillDescription}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-6 rightSection">
            <h1 className={`h1-header-filled mt-3 ${isMobile ? 'd-none' : ''} `} style={{ visibility: 'hidden' }}>My Skills</h1>
            <div className="row flex-column">
              {skills.slice(2, 4).map((skill, index) => (
                <div key={index} className="">
                  <div className="aboutRightSection">
                    <div className="skillIconContainer">
                      <img src={skill.skillIcon} className='skillIcon' alt={skill.skillName} />
                    </div>
                    <h3 className='skillRight-h3'>{skill.skillName}</h3>
                    <p className='skillRight-p'>{skill.skillDescription}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
