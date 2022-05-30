import React from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_nf5wibs', 'template_m9ls9qu',
            e.target, 'user_oEzQIc3oB6GrGvJLynyqI')
            .then(res => {
                console.log(res);
            }).catch(err => console.log(err))
    }

    return (
        <div className="bg-pink-500">
            <div className="container row mx-auto py-3">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 py-5">
                    <div id="contact" className="container my-4 py-4  contact-form mx-auto">
                        <h1 className='text-4xl'>Contact Form</h1>
                        <form className="row rounded-md px-5 py-2"
                            // style={{ margin: "25px 70px 50px 50px" }}
                            onSubmit={sendEmail}>
                            <label>Name</label>
                            <input type="text" name="name" className="form-control" />

                            <label>Email</label>
                            <input type="email" name="user-email" className="form-control" />

                            <label>Message</label>
                            <textarea name="message" rows='5' />
                            <input type="submit" value="submit" className="form-control btn btn-warning mt-4 py-2" />
                        </form>
                    </div>
                    <div className="py-4 px-2">
                        <div className="mx-auto">
                            <iframe src="https://www.google.com/maps/d/embed?mid=1q2qjZOSoGTsfxAsLN4iir4gk0Gc&hl=en&ehbc=2E312F" width="100%"
                                height="450"
                                className='rounded-md'></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;