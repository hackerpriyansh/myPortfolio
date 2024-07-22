import Swal from 'sweetalert2'

const Contact = ({ isMobile }) => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "cc40e2a3-5289-4577-9c07-1bb3dcb93ed2");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            Swal.fire({
                title: "Great!",
                text: "Your Enquiry has sent successfully!",
                icon: "success"
              });
        } else {
            console.log("Error", data);
        }
    };

    return (
        <section id="contact" className='contactSection d-flex align-items-center gap-5' >
            <div className='container text-center'>
                <h2 className='contact-H3 my-5'>Reach Out To Me !!!
                </h2>
                <p style={{ fontSize: '20px', fontWeight: '400' }}>Go ahead... Don't be shy</p>
                <div className=" my-5 social-icons">
                    <a href="tel:918384811512"><i className="fa-solid fa-phone"></i></a>
                    <a href="https://www.instagram.com/priyanshhu_kush/"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/in/priyanshu-kushwaha-1b3496138/"><i className="fa-brands fa-linkedin"></i></a>
                    <a href="mailto:priyanshukushwaha444@gmail.com"><i className="fa-solid fa-envelope"></i></a>
                </div>
                <div className="container form-cantainer">
                    <h2 className='form-title my-5'>Lets  Chat </h2>
                    <p className={`${isMobile ? 'p-0' : ''}`} style={{ color: 'white', fontWeight: "300", padding: "0 200px", lineHeight: '25px' }}>"Alone we can do so little
                        together we can do so much." – Helen Keller</p>
                    <div className={`${isMobile ? 'w-100' : 'container'}`} style={{ width: '70%', marginBottom: '20px' }}>
                        <form onSubmit={onSubmit}>
                            <div className="row  row-cols-2 text-left">
                                <div className="col">
                                    <div className="form-group ">
                                        <label htmlFor="Namw">Name *</label>
                                        <input type="text" name="name" id="name" required className='form-control text-field' />
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="Namw">Number *</label>
                                        <input type="text" maxLength={10} name="number" id="number" required className='form-control text-field' />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <label htmlFor="Namw">Email *</label>
                                        <input type="email" name="email" id="email" required className='form-control text-field' />
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="form-group">
                                        <label htmlFor="Namw">Message *</label>
                                        <textarea name="message" id="message" required rows={5} className='form-control text-field' />
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className='btn btn-gold'> Send A Message</button>
                        </form>
                        <div className="toast align-items-center" role="alert" aria-live="assertive" aria-atomic="true">
                            <div className="d-flex">
                                <div className="toast-body">
                                    Hello, world! This is a toast message.
                                </div>
                                <button type="button" className="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact