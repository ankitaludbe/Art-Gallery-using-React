import React from 'react'
import { NavLink ,BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

const Navbar = () => {
  return (
    <>
    <BrowserRouter>
        <div id='header' >
            <div className="container-fluid">
                {/* <div className="container"> */}
                <div className="row">
                    <div id="firstsec" className='col-md-4 link'>
                        <NavLink to="/" className="me-3">Menu</NavLink>
                        <NavLink to="/">English</NavLink>
                    </div>

                    <div id="secsec" className='col-md-4 '>
                        <h2><span id="first_letter">L</span> O U V R E</h2>
                    </div>

                    <div id="thirdsec" className='col-md-4'>
                        <NavLink to="/" className="me-3"><i className="fa-solid fa-bag-shopping"></i>&nbsp;&nbsp;Online Boutique</NavLink>
                        <NavLink to="/"><i className="fa-solid fa-ticket"></i> Tickets</NavLink>

                    </div>
                </div>
            {/* first row end */}
                <div className="row">
                    <div id="navsecrow">
                    <NavLink to="/" className="me-5">VISIT</NavLink>
                    <NavLink to="/" className="me-5">EXPLORE</NavLink>
                    <NavLink to="/">WHAT'S ON</NavLink>
                    </div>
                {/* </div> */}
                </div>
            </div>
            
        </div>
        </BrowserRouter>
    </>
  )
}

export default Navbar
