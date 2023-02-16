import React from 'react';
import { useState} from 'react';
import { BsPerson } from 'react-icons/bs';
import { TbBuildingStore } from 'react-icons/tb';
import {FcGoogle} from 'react-icons/fc';
import '../styles/unauthlinks.css'

const UnauthorizedLinks = () => {
    const [header, setHeader] = useState('Connect With Your Giving')
    const [headerTwo, setHeaderTwo] = useState('Built by a nonprofit. Forever free.')
    const [message, setMessage] = useState('Explore, donate, and share. Over one million registered charities.')
    const [join, setJoin] = useState('Join with:')
    const [button, setButton] = useState(<button className='google-btn'><FcGoogle/> Google</button>)
    const [buttonTwo, setButtonTwo] = useState('or sign up with email')

    const forDonors = () => {
         
        setHeader(<>Connect with <br></br>your giving</>)
        setHeaderTwo('Built by a nonprofit. Forever free.')
        setMessage(<>Explore, donate, and share. Over one million<br></br> registered charities.</>)
        setJoin('Join with:')
        setButton(<button className='google-btn'><FcGoogle/> Google</button>)
        setButtonTwo('or sign up with email')
        document.querySelector('.person-icon').style.borderBottom = '2px solid'
        document.querySelector('.person-icon').style.color = '#27c4a2'
        document.querySelector('.store-icon').style.color = 'white'
        document.querySelector('.store-icon').style.border = 'none'
    }
    
    const forNonprofits = () => {
        setHeader(<>Accept cash, crypto,<br></br> and stock donations.</>)
        setHeaderTwo(<>Fundraise more with an easy, <br></br>free fundraising  platform built by a nonprofit.</>)
        setJoin(null)
        setMessage(null)
        setButton(<button className='learn-btn'>Learn More</button>)
        setButtonTwo(null)
        document.querySelector('.person-icon').style.border = 'none'
        document.querySelector('.person-icon').style.color = 'white'
        document.querySelector('.store-icon').style.color = '#27c4a2'
        document.querySelector('.store-icon').style.borderBottom = '2px solid'
    }
    
    return (
        <div className='unauthlink-container'>
            <div className='views-select'>
                <button className="person-icon" onClick={forDonors}><BsPerson/><br></br>For Donors</button>
                <button className="store-icon" onClick={forNonprofits}><TbBuildingStore/> <br></br>For nonprofits</button>
            </div>
            <div className='view1'>
           
            <h1>{header}</h1>
            <h2>{headerTwo}</h2>
            <h6>{message}</h6>
            <p>{join}</p>
            {button}
            <button>{buttonTwo}</button>
        </div>
        </div>
    );

}

export default UnauthorizedLinks;