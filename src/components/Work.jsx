import React from 'react'
import myWork from '../constants/Work';
import WorkLeft from './aboutComps/WorkLeft';
import WorkRight from './aboutComps/WorkRight';
export const Work = ({isMobile}) => {
    return (
        <section id="work"  className='workSection'>
            <div className="container-fluid h-100">
                <div className="row h-100">
                    {myWork.map((work, index) => (
                        <React.Fragment key={index}>
                            <div className={`col-md-6 leftSection justify-content-center ${isMobile ? 'p-3' : ''}`} style={{ paddingBottom: "100px" }}>
                                <WorkLeft
                                    index={index}
                                    title={work.title}
                                    tagline={work.tagline}
                                    description={work.description}
                                    technologiesUsed={work.technologiesUsed}
                                    role={work.role}
                                    imageURL={work.imageURL}
                                    websiteUrl={work.websiteUrl}
                                    isMobile={isMobile}
                                />
                            </div>
                            <div className="col-md-6 justify-content-center rightSection d-flex">
                                <WorkRight
                                    index={index}
                                    websiteUrl={work.websiteUrl}
                                    alt={work.title}
                                    isMobile={isMobile}
                                />
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Work