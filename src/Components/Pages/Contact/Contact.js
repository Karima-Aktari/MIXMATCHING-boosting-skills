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
        <div id="contact" className="container border contact-form">
            <div className="my-4 py-4">
                <h1>Contact Form</h1>
                <form className="row" style={{ margin: "25px 85px 75px 100px" }}
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
        </div>
    );
};

export default Contact;