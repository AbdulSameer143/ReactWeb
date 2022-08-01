/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import '../Home.css';
import Logo from '../../image/logo.jpg';
import { AiOutlineSearch } from "react-icons/ai";
import HomePage from '../Home/Home';
import InputBox from './InputBox';
class NavBar extends React.Component {
    constructor() {
        super();
        this.state = {
            search: ""
        }
    }
    _renderLogo = () => {
        return (
            <img src={Logo} alt="logo" height={60} />
        )
    };
     
    inputBox=()=>{
        console.log("dfsdfds")
    return (
        <div >
            jbsdhsdbf
            
        </div>
        
    )
    
    }
    inputFun(){
        console.log("hello");
       return <input/>
            
    }
    HandleSearch = () => {
        this.setState(()=>({search:<InputBox/> }))
    }

    render() {
       const inputbox = this.state.search
        return (
            <div>
                <nav className="navbar navbar-expand-lg  fixed-top" style={{ backgroundColor: "#1e1e1e" }}>
                    <div className="container-fluid">
                        <div className='container d-flex'>
                            {this._renderLogo()}
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mx-auto mb-2 mb-lg-0 " >
                                    <li className="nav-item j-center" >
                                        <a className="nav-link active text-white" aria-current="page" href="/">Webside</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-white" href="#">Link</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Dropdown
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item " href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>

                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link disabled text-white">Disabled</a>
                                    </li>
                                </ul>
                                <form className="d-flex justify-content-center align-items-center" >
                                    <div style={{ 
                                           color: "white" ,
                                           display:"flex",
                                           justifyContent:"center",
                                           alignItems:"center",
                                           margin:"3px",
                                           padding:"2px"

                                           }}>
                                            <div>
                                        {inputbox}
                                        </div>
                                        <AiOutlineSearch onMouseEnter={this.HandleSearch}
                                            style={{
                                                color: "white",
                                                fontSize: "30px",
                                                height: "100%",
                                                margin: "5px"
                                            }} />
                                    </div>

                                    <button ctype="button" className="btn btn-primary px-4 mx-3">LogIn</button>
                                    <button type="button" className="btn btn-primary px-4">SignIn</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </nav>
                <div >
                    <HomePage />
                </div>
            </div>
        );
    }
}

export default NavBar;