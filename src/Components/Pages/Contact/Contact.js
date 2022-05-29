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
        <div className="bg-pink-500 mx-auto">
            <div className="row mx-auto">
                <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4 p-2">
                    <div id="contact" className="container my-4 py-4  contact-form">
                        <h1 className='text-4xl'>Contact Form</h1>
                        <form className="row rounded-md" style={{ margin: "25px 85px 75px 100px" }}
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
                    <div className="py-5 p-2">
                        <div>
                            <iframe src="https://www.google.com/maps/d/embed?mid=1q2qjZOSoGTsfxAsLN4iir4gk0Gc&hl=en&ehbc=2E312F" width="640" height="500" className='rounded-md'></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;