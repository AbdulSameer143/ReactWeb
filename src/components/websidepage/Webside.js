/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../Home.css';
import { Link } from 'react-router-dom';
import web from '../../image/Logoweb.png';
function Webside() {
    return (
        <div className='back container-fluid'>
            <div className='container'>
                <div className='d-flex justify-content-between align-items-center p-2'>
                    <div className='d-flex text-white'>
                        <img src={web} alt="logo" height={60} />
                    </div>
                    <div className='d-flex  align-items-center justify-content-between'
                        style={{ width: "40%", fontSize: "15px", }}>
                        <Link to='/Navbar' className='linkButton'>NavBar</Link>
                        <Link to='' className='linkButton'>Home</Link>
                        <Link to='' className='linkButton'>About</Link>
                        <Link to='' className='linkButton'>Blog</Link>
                        <Link to='' className='linkButton'>Gallery</Link>
                        <Link to='' className='linkButton'>Demo</Link>
                        <Link to='' className='linkButton'>Extra</Link>
                    </div>
                    <div className='d-flex text-white'>
                        <button className='buttonCon '>Contact Us</button>
                    </div>
                </div>
                <div className='containerContant col-12 '>
                    <div className='contant'>
                        <h1 className='h1'>Web Design Agency in Manchester</h1>
                        <p className='p'>Working with brands all over the world</p>
                        <div>
                            <button type="button" className="btn btn-primary p-2 outline-sblack "
                                style={{
                                    fontWeight: "bold",
                                    fontSize: "18px",
                                    border: "1px solid lightgray"
                                }}>Find out more</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Webside;