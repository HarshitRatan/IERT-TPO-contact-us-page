import React from 'react'
import '../index.css';

const Footer = () => {
    return (
        <>
            <footer className="text-center text-lg-start bg-dark nav-link" style={{ color: "whitesmoke" }}>
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 ">
                            <h6 className="text-uppercase">
                                Institute of Engineering and Rural Technology(IERT)
                            </h6><br />
                            <p>
                                <i className="fa fa-university" aria-hidden="true">26, Chatham line , Prayagraj (Allahabad) , UP - 211002 , INDIA</i>
                            </p>
                        </div>

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <p><i className="fa fa-phone my-color2" aria-hidden="true"></i> +91 99566 40825<br /> <span style={{ color: 'white' }}><b>(Assistant Registrar)</b></span></p>
                            <p><i className="fa fa-phone my-color2" aria-hidden="true"></i> +91 90445 14315<br /> <span style={{ color: 'white' }}><b>(TPO)</b></span></p>
                        </div>

                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 ">
                            <p><i className="fa fa-envelope my-color2" aria-hidden="true"></i>   TPO@iert.ac.in</p>
                            <p><i className="fa fa-envelope my-color2" aria-hidden="true"></i>   mailedd@iert.ac.in</p>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <p>
                                <i className="fa fa-university my-color2" aria-hidden="true"></i>
                                26, Chatham line , Prayagraj (Allahabad) , UP - 211002 , INDIA
                            </p>

                        </div>
                    </div>
                </div>
                <div className="text-center">
                    © 2022 Copyright:<br></br>
                    <p className="text-reset fw-bold">Training and Placement cell(IERT)</p>
                </div>


            </footer>
        </>
    );
}

export default Footer; 