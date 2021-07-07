import React from 'react';
import {NavLink} from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {
    return (
        <>
       
        <ul className="mainNav">
        {/* <NavLink to="/" style={{paddingRight:'10px',float:'right'}}>About</NavLink> */}
        {/* <NavLink to="/contact" style={{paddingLeft:'10px'}}>Contact</NavLink> */}
        <div style={{position:'relative',float:'left',paddingLeft:'100x'}}><span style={{color:'black',fontWeight:'bold'}}>Tech</span><span style={{color:'#362BB2',fontWeight:'bold'}}>House</span></div>
        <NavLink to="/signin" style={{color:'#8083A3' ,opacity:'100%',textDecoration:'none'}}> Signin</NavLink>
        <NavLink to="/signup" style={{color:'#8083A3' ,opacity:'100%',backgroundColor:'#362BB2',padding:'5px', borderRadius:'5px',textDecoration:'none'}} >Signup</NavLink>
        </ul>

      
        </>
    )
}

export default Navbar
