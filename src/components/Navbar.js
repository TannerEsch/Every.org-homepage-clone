import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import { IoIosArrowDown } from 'react-icons/io';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';

const Navbar = (props) => {


    return (
     
      <div className='navbar-container'>
         {props.isAuth? <div style={{height:"10rem", backgroundColor:"hsl(180, 6%, 19%)"}}></div> : null}
        <nav className="nav-bar-mine">
                <Link className='nav-logo' to="/"><img className="logo" src='https://i.imgur.com/Py7RPO5.png'/></Link>
                
                
                <div>
                    <form className="nav-search-bar">
                      <input type="search" placeholder='Search Nonprofits'></input>                    </form>
 <ul class="no-auth-links">
                            <li>
                                <NavLink className='nav-login' style={{color: "#2CD7B0"}} to="">Log in</NavLink>
                            </li>
                             <li>
                                <button class="nav-signup"><NavLink className="signup-nav" to="">Sign up</NavLink></button>
                            </li>
                            <li>
                            <Dropdown style ={{border:'none'}}>
      <Dropdown.Toggle variant=" failure"  id="dropdown-basic" style={{backgroundColor:"hsl(180, 6%, 19%)", color:"hsl(180, 6%, 19%)", position:"absolute", marginBottom:"1.8rem", border:" 1px hsl(180, 6%, 19%)", borderRadius:"none"}}>
      <IoIosArrowDown className="dropdown-icon"/>
      </Dropdown.Toggle>

      <Dropdown.Menu style={{marginTop:"2rem"}}>
        <div className='dropdown-container'>
      <MenuItem className='item1'>FAQ & Support</MenuItem>
    <MenuItem >Gift cards</MenuItem>
    <MenuItem >Donate to Every.org</MenuItem>
    <Divider />
    <MenuItem >About Every.org</MenuItem>
    <MenuItem >For nonprofits</MenuItem>
    <MenuItem >For donors</MenuItem>
    <MenuItem >For developers</MenuItem>
    <Divider />
    <div className='bottom-menu'>
    <MenuItem >Blog</MenuItem>
    <MenuItem >Press</MenuItem>
    <MenuItem >Feedback</MenuItem>
    <MenuItem >Volunteer</MenuItem>
    <MenuItem >Careers</MenuItem>
    <MenuItem >Terms</MenuItem>
    <MenuItem >Privacy</MenuItem>
    </div>
    </div>
      </Dropdown.Menu>
    </Dropdown>
                            </li>
                          </ul>
                        
                            
                    
                </div>
        </nav>
        </div>
        
    );
}

export default Navbar;
