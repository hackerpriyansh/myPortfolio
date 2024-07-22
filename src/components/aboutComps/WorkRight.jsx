import myWork from '../../constants/Work';

const WorkRight = ({ isMobile, index, websiteUrl }) => {
  const work = myWork[index];

  if (!work) {
    return null; 
  }

  return (
    <div className={!isMobile ? 'iframe-container d-flex align-items-center justify-content-center' : 'd-none'}>
      <iframe
        autoPlay='0'
        src={websiteUrl}
        className={!isMobile ? 'work-image' : 'd-none'}
        width="90%"
        loading='lazy'
        alt={work.title}
      />
    </div>
  );
};

export default WorkRight;
