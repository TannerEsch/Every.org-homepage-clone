import React from 'react';
import "../styles/footer.css"
import { AiFillGithub, AiFillFacebook, AiFillLinkedin, AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer>
            <ul>
                <li>About</li>
                <li>Support</li>
                <li>Nonprofits</li>
                <li>API</li>
                <li>Feedback</li>
                <li>Blog</li>
                <li>Press</li>
                <li>Volunteer</li>
                <li>Terms</li>
                <li>Privacy</li>
                <li><AiFillFacebook /></li>
                <li><AiFillGithub /></li>
                <li><AiFillTwitterCircle /></li>
                <li><AiFillInstagram /></li>
                <li><AiFillLinkedin /></li>

            </ul>
        </footer>
    )
}

export default Footer;