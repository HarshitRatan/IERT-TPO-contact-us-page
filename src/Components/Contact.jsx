import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './css/contact.css';
import logo1 from './img/logo1.jpg';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        var resetBtn = document.getElementById('resetForm');
        var submitSpine = document.getElementById('submitSpin');
        var suc = document.getElementById('successSend');
        var err = document.getElementById('errorOccur');
        err.style.display = 'none';
        suc.style.display = 'none';
        submitSpine.style.display = 'none';
        submitSpine.style.display = 'inline';
        

        emailjs.sendForm('service_r4pofy8', 'template_v37iha9', form.current, 'QPHDD5O7kIv6hgvJc')
            .then((result) => {
                suc.style.display = 'block';
                submitSpine.style.display = 'none';
                resetForm.click();
            },
                (error) => {
                    err.style.display = 'block';
                    submitSpine.style.display = 'none';
                });
    };
    return (
        <>
            <div className='contact-container'>
                <div className='contact-form'>
                    <div className="card bg-light">
                        <div className="card-header d-flex justify-content-center">
                            <img src={logo1} className="card-img-top" alt="..." style={{"borderRadius" : "50%"}} />
                            <span className='contact-form-header'>
                                <h3><b>Training and Placement cell</b></h3>
                                <b><i className="fa fa-envelope my-color2" aria-hidden="true"><b>TPO@iert.ac.in</b></i></b>
                            </span>
                        </div>
                        <div className="card-body bg-light">
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="form-group">
                                    <label><b>Organization Name <span style={{ color: "red" }}>*</span> :</b></label>
                                    <input type="text" required name="org_name" className="form-control" placeholder="Organization Name" />
                                </div>

                                <div className="form-group">
                                    <label><b>Email address <span style={{ color: "red" }}>*</span> :</b></label>
                                    <input type="email" required name="user_email" className="form-control" placeholder="Enter email" />
                                </div>

                                <div className="form-group">
                                    <label><b>Name <span style={{ color: "red" }}>*</span> :</b></label>
                                    <input type="text" required name="user_name" className="form-control" placeholder="Name" />
                                </div>

                                <div className="form-group">
                                    <label><b>Message <span style={{ color: "red" }}>*</span> :</b></label>
                                    <textarea rows="5" cols="50" required name="message" className="form-control" placeholder="Message" />
                                </div>
                                <button type='submit' className="btn btn-warning btn-submit">
                                    <span id='submitSpin' style={{ "display": "none" }}>
                                        <div className="spinner-grow text-success" role="status">
                                        </div>
                                        <div className="spinner-grow text-danger" role="status">
                                        </div>
                                    </span>
                                    Send
                                </button>
                                <button style={{"display" : "none"}} id='resetForm' type='reset'>Reset</button>
                            </form>
                            <br></br>
                            <div id='successSend' style={{ "display": "none" }} className="alert alert-success" role="alert">
                                <div>
                                    Your Message Has Been Successfully Sent.
                                </div>
                                <div>
                                    Thank you for contacting us!
                                </div>
                            </div>
                            <div id='errorOccur' style={{ "display": "none" }} className="alert alert-danger" role="alert">
                                Some Error Occur Please Try Again.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;