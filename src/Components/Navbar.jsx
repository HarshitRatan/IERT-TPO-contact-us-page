import React from 'react';
import '../index.css';
import logo from './img/logo.jpg';

const Navbar = () => {

    return (
        <>
            <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <div className='navbar-brand'>
                        <img src={logo} width="50" height="50" alt="..." />
                        {/* <b className='my-color'>Training and Placement cell</b> */}
                        <b style={{"marginLeft" : "10px"}} className='my-color'>Contact Us</b>
                    </div>
                    <span className="navbar-text" style={{ marginRight: '25px' }}>
                        <b className='my-color'><i className="fa fa-envelope my-color" aria-hidden="true"> </i>TPO@iert.ac.in</b>
                    </span>
                </div>
            </nav>
        </>
    );
}

export default Navbar;