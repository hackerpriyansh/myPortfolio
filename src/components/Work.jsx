import { useState, useEffect } from "react";


const Work = ({ isMobile }) => {
  const [textOffset, setTextOffset] = useState(0);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setTextOffset((prevOffset) => {
      if (scrollTop > lastScrollTop) {
        // Scrolling down
        return prevOffset + 5; // Adjust as needed for the scroll speed
      } else {
        // Scrolling up
        return prevOffset - 5; // Adjust as needed for the scroll speed
      }
    });
    setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop); // For Mobile or negative scrolling
  };

  // Attach scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  const myWork = [
    {
      title: "100 Days Later Foundation",
      tagline: "Empowering Women and Transforming Futures in 100 Days",
      description: "Led the development of an impactful NGO website, designed to enhance outreach and engagement. Implemented user-friendly features and intuitive navigation to effectively communicate the organization's mission and initiatives. ",
      imageURL: 'https://assets-global.website-files.com/5f4bcd5217865e26e2333f3d/6223da1f27a8a3235478e7eb_Pay.com-CS-Edgar-Deiner%20(1).png',
      technologiesUsed: ['ReactJs', 'ExpressJs', 'Flutter', 'Wordpress'],
      role: "Website Developer",
      websiteUrl: 'https://pay.com/'
    },
    {
      title: "Website 1",
      description: "Demo Description",
      imageURL: 'https://assets-global.website-files.com/5f4bcd5217865e26e2333f3d/6223da1f27a8a3235478e7eb_Pay.com-CS-Edgar-Deiner%20(1).png',
      technologiesUsed: ['ReactJs'],
      role: "Website Developer",
      websiteUrl: 'https://pay.com/'
    },
  ]
  return (
  

    <section className="workSection" >
   <div onScroll={handleScroll} className="scrollDiv">
      <h1 className="h1-header-filled text-center scrollText" style={{ whiteSpace: 'nowrap', transform: `translateX(-${textOffset}px)` }}>My Work</h1>
    </div>
      {myWork.map((work, index) => (
        <><div className="row w-auto h-100" key={index}>
          <div className={`col-md-6 leftSection ${isMobile ? 'p-3' : ''}`}>
            <div className="row">
              <div className={`d-flex flex-column align-items-center  col-${isMobile ? '3' : '2'}`} style={isMobile ? { textAlign: "right" } : {}}>
                <h1 className="h1-work mt-5">0{index + 1}.</h1>
                <div className="verticalline"></div>
              </div>
              <div className={`col-${isMobile ? '9' : '10'}`}>
                <h1 className="h1-work mt-5">{work.title}</h1>
                <p className="workDescription">
                  {isMobile ? (
                    work.tagline
                  ) : (
                    <span>{work.tagline}<br /> <br/>{work.description}</span>
                  )}
                </p>

                <img src={work.imageURL} className={isMobile ? 'mb-5' : 'd-none'} width="95%" alt={work.title} />
                <div className="mt-5">
                  <div className="horizontal-line" />
                  <p className="role"><b>Role:&nbsp;</b> {work.role}</p>
                  <p className="role"><b>Technologies / Tools Used:&nbsp;</b> {Array.isArray(work.technologiesUsed) ? work.technologiesUsed.join(', ') : 'Technologies not specified'}
                  </p>
                  <div className="horizontal-line" />
                </div>
                <a className="btn btn-gold" href={work.websiteUrl} style={isMobile ? { marginTop: '20px', width: '50%', padding: '10px' } : { marginTop: '100px' }}>
                  Go to Website
                </a>
              </div>
            </div>
          </div>
          <div className={!isMobile ? 'col-md-6 d-flex align-items-center justify-content-center' : 'd-none'}>
            <img src={work.imageURL} key={index} className={!isMobile ? '' : 'd-none'} width="90%" alt={work.title} />
          </div>
        </div>
        </>
      )
      )}
    </section>
  )
}

export default Work
