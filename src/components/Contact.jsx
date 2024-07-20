
const Contact = ({isMobile}) => {
    return (
        <section className='contactSection d-flex align-items-center gap-5' >
            <div className='container text-center'>
                <h2 className='contact-H3 my-5'>Reach Out To Me !!!
                </h2>
                <p style={{ fontSize: '20px', fontWeight: '400' }}>Go ahead... Don't be shy</p>
                <div className=" my-5 social-icons">
                    <i className="fa-solid fa-phone"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-linkedin"></i>
                    <i className="fa-solid fa-envelope"></i>
                </div>
                <div className="container form-cantainer">
                    <h2 className='form-title my-5'>Lets  Chat </h2>
                    <p className={`${isMobile? 'p-0' : ''}`} style={{ color: 'white', fontWeight: "300", padding: "0 200px", lineHeight: '25px' }}>"Alone we can do so little
                        together we can do so much." – Helen Keller</p>
                    <div className={`${isMobile? 'w-100' : 'container'}`} style={{width:'70%', marginBottom:'20px'}}>
                        <form action="#" method='post'>
                            <div className="row  row-cols-2 text-left">
                                <div className="col">
                                    <div className="form-group ">
                                        <label htmlFor="Namw">Name *</label>
                                        <input type="text" name="name" id="name" className='form-control text-field' />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="Namw">Number *</label>
                                        <input type="tel" name="number" id="number" className='form-control text-field' />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <label htmlFor="Namw">Email *</label>
                                        <input type="email" name="email" id="email" className='form-control text-field' />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <label htmlFor="Namw">Message *</label>
                                        <textarea  name="message" id="message" rows={5} className='form-control text-field' />
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className='btn btn-gold'> Send A Message</button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Contact