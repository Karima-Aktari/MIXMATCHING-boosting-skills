import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer-background p-4 mx-auto">
            <div className="d-flex justify-content-around px-4 py-2 footer">
                <div className="fw-bolder">
                    <h1 className='text-4xl'>MIXMATCHING</h1>
                    <p className='mx-auto w-96 py-1'>If You are Fashionable person or Lover then MIXMATCHING is always with you! So don't waste your time.</p>
                    <p className='text-md py-1'>You can visit us</p>
                    <div>
                        <div className=" d-flex justify-content-center">
                            <a rel="noopener noreferrer"
                                target="_blank" href="https://www.nordstrom.com/browse/women/clothing"><i className="fab fa-facebook-square text-primary fs-1 p-1"></i></a>
                            <a rel="noopener noreferrer"
                                target="_blank" href="https://www.amazon.com/fashion-sales-and-deals/b?ie=UTF8&node=9538491011"><i className="fab fa-linkedin text-danger fs-1 p-1"></i></a>
                            <a rel="noopener noreferrer"
                                target="_blank" href="https://www.amazon.com/fashion-sales-and-deals/b?ie=UTF8&node=9538491011"><i className="fab fa-instagram-square text-warning fs-1 p-1"></i></a>
                            <a rel="noopener noreferrer"
                                target="_blank" href="https://www.nordstrom.com/browse/women/clothing"><i className="fab fa-skype text-info fs-1 p-1"></i></a>
                        </div>
                    </div>
                </div>
                <div className="fw-bolder quick-link">
                    <h3 className='text-3xl py-1'>QuickLinks</h3>
                    <Link to="/payment">Payment</Link><br />
                    <Link to="/home">Shipment</Link><br />
                    <Link to={`/dashBoard/myOrders`}>Where is my order</Link><br />
                    <Link to={`/dashBoard/reviews`}>Review</Link><br />

                </div>
                <div className="fw-bolder">
                    <h3 className='text-3xl py-1'>Contact With Us</h3>
                    <h4><i className="fas fa-phone-volume"></i>+0194458988005</h4>
                    <p className="fw-bolder">MIXMATCHING,<br /> House No.54<br />Sheikh Kamal Sarani,<br />Road No. 16,<br />Rangs square (5th & 6th floor), <br />Basundhara, Dhaka 1209, Bangladesh</p>
                </div>
            </div>
            <p className="text-center pt-3"> ©Stay connected,Stay Happy©</p>
        </div>
    );
};

export default Footer;