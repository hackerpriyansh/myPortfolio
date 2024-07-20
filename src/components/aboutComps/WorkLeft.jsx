

const WorkLeft = ({ index, title, tagline, description, technologiesUsed, role, websiteUrl, imageURL, isMobile }) => {
    return (
        <div className='workLeftSection'>
            <div className={`${isMobile ? 'p-3' : 'pt-5'}`}>
                <div className="row">
                    <div className={`d-flex flex-column align-items-center  col-${isMobile ? '3' : '2'}`} style={isMobile ? { textAlign: "right" } : {}}>
                        <h1 className="h1-work mt-5">0{index + 1}.</h1>
                        <div className="verticalline"></div>
                    </div>
                    <div className={`col-${isMobile ? '9' : '10'}`}>
                        <h1 className="h1-work mt-5">{title}</h1>
                        <p className="workDescription">
                            {isMobile ? (
                                tagline
                            ) : (
                                <span>{tagline}<br /> <br />{description}</span>
                            )}
                        </p>
                        <img
                            className={isMobile ? '' : 'd-none'}
                            src={imageURL}
                            width="90%"
                            alt={title}
                        />
                        <div className="mt-5">
                            <div className="horizontal-line" />
                            <p className="role"><b>Role:&nbsp;</b> {Array.isArray(role) ? role.join(', ') : 'Work Not Specified'}</p>
                            <p className="role"><b>Technologies / Tools Used:&nbsp;</b> {Array.isArray(technologiesUsed) ? technologiesUsed.join(', ') : 'Technologies not specified'}
                            </p>
                            <div className="horizontal-line" />
                        </div>
                        <a className="btn btn-gold" href={websiteUrl} style={isMobile ? { marginTop: '20px', padding: '10px' } : { marginTop: '50px' }}>
                            Go to Website
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default WorkLeft