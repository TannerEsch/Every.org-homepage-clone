import React from 'react';
import '../styles/unauthorized.css'
import Footer from '../components/Footer';
import DonationCard from '../components/DonationCard';
import DonationCardTwo from '../components/DonationCardTwo';
import UnauthorizedLinks from '../components/UnauthorizedLinks';

const Unauthorized = () => {

    
    return (
        <div className="unauthorized">
            <UnauthorizedLinks/>
            <Footer />
            <DonationCard />
            <DonationCardTwo />
        </div>
    );

}

export default Unauthorized;