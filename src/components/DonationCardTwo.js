import React from 'react';
import '../styles/donationcard.css'
import { BiLinkExternal } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';
import Avatar from '@mui/material/Avatar';


const DonationCardTwo = () => {

    const fakeData = [{
        avi: "/static/images/avatar/1.jpg",
        name: "julian donated" + "$" + Math.round(parseInt(Math.random())),
        comment: "really happy to be supporting such an amazing cause",
        company: "Saint Jude",
        location: "Haiti, SA",
        description: "We deal in helping children in need"

    }]

    
    return (
        <div className='donation-cardTwo-container'>
        <div className='donation-card'>
            <div className='donation-avi-name'>
            <Avatar className="donation-avi" alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <div className='donation-name'>donation name + donation</div>
            </div>
            <div className='donation-comment'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            <img src="https://i.imgur.com/TzUZOful.jpg" className='donation-picture'></img>
            <div className='donation-description'>
            <h4>Fake Donation Company</h4>
            <h5>Fake donation location</h5>
            <div>Our mission is to inspire and empower youth to take control of their academic success through peer tutoring and mentoring.</div>
            </div>
            <div className='donation-btns'>
                <button className='btn-link'><BiLinkExternal className='donation-link-icon'/></button>
                <button><AiOutlineHeart className='donation-heart-icon'/></button>
                <button className="donation-join-btn">Join</button>
            </div>
        </div>

        <div className='donation-card'>
            <div className='donation-avi-name'>
            <Avatar className="donation-avi" alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <div className='donation-name'>donation name + donation</div>
            </div>
            <div className='donation-comment'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            <img src="https://i.imgur.com/TzUZOful.jpg" className='donation-picture'></img>
            <div className='donation-description'>
            <h4>Fake Donation Company</h4>
            <h5>Fake donation location</h5>
            <div>Our mission is to inspire and empower youth to take control of their academic success through peer tutoring and mentoring.</div>
            </div>
            <div className='donation-btns'>
                <button className='btn-link'><BiLinkExternal className='donation-link-icon'/></button>
                <button><AiOutlineHeart className='donation-heart-icon'/></button>
                <button className="donation-join-btn">Join</button>
            </div>
        </div>

        <div className='donation-card'>
            <div className='donation-avi-name'>
            <Avatar className="donation-avi" alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <div className='donation-name'>donation name + donation</div>
            </div>
            <div className='donation-comment'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            <img src="https://i.imgur.com/TzUZOful.jpg" className='donation-picture'></img>
            <div className='donation-description'>
            <h4>Fake Donation Company</h4>
            <h5>Fake donation location</h5>
            <div>Our mission is to inspire and empower youth to take control of their academic success through peer tutoring and mentoring.</div>
            </div>
            <div className='donation-btns'>
                <button className='btn-link'><BiLinkExternal className='donation-link-icon'/></button>
                <button><AiOutlineHeart className='donation-heart-icon'/></button>
                <button className="donation-join-btn">Join</button>
            </div>
        </div>

        <div className='donation-card'>
            <div className='donation-avi-name'>
            <Avatar className="donation-avi" alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <div className='donation-name'>donation name + donation</div>
            </div>
            <div className='donation-comment'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            <img src="https://i.imgur.com/TzUZOful.jpg" className='donation-picture'></img>
            <div className='donation-description'>
            <h4>Fake Donation Company</h4>
            <h5>Fake donation location</h5>
            <div>Our mission is to inspire and empower youth to take control of their academic success through peer tutoring and mentoring.</div>
            </div>
            <div className='donation-btns'>
                <button className='btn-link'><BiLinkExternal className='donation-link-icon'/></button>
                <button><AiOutlineHeart className='donation-heart-icon'/></button>
                <button className="donation-join-btn">Join</button>
            </div>
        </div>

        <div className='donation-card'>
            <div className='donation-avi-name'>
            <Avatar className="donation-avi" alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <div className='donation-name'>donation name + donation</div>
            </div>
            <div className='donation-comment'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            <img src="https://i.imgur.com/TzUZOful.jpg" className='donation-picture'></img>
            <div className='donation-description'>
            <h4>Fake Donation Company</h4>
            <h5>Fake donation location</h5>
            <div>Our mission is to inspire and empower youth to take control of their academic success through peer tutoring and mentoring.</div>
            </div>
            <div className='donation-btns'>
                <button className='btn-link'><BiLinkExternal className='donation-link-icon'/></button>
                <button><AiOutlineHeart className='donation-heart-icon'/></button>
                <button className="donation-join-btn">Join</button>
            </div>
        </div>

        <div className='donation-card'>
            <div className='donation-avi-name'>
            <Avatar className="donation-avi" alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <div className='donation-name'>donation name + donation</div>
            </div>
            <div className='donation-comment'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            <img src="https://i.imgur.com/TzUZOful.jpg" className='donation-picture'></img>
            <div className='donation-description'>
            <h4>Fake Donation Company</h4>
            <h5>Fake donation location</h5>
            <div>Our mission is to inspire and empower youth to take control of their academic success through peer tutoring and mentoring.</div>
            </div>
            <div className='donation-btns'>
                <button className='btn-link'><BiLinkExternal className='donation-link-icon'/></button>
                <button><AiOutlineHeart className='donation-heart-icon'/></button>
                <button className="donation-join-btn">Join</button>
            </div>
        </div>

        <div className='donation-card'>
            <div className='donation-avi-name'>
            <Avatar className="donation-avi" alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <div className='donation-name'>donation name + donation</div>
            </div>
            <div className='donation-comment'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            <img src="https://i.imgur.com/TzUZOful.jpg" className='donation-picture'></img>
            <div className='donation-description'>
            <h4>Fake Donation Company</h4>
            <h5>Fake donation location</h5>
            <div>Our mission is to inspire and empower youth to take control of their academic success through peer tutoring and mentoring.</div>
            </div>
            <div className='donation-btns'>
                <button className='btn-link'><BiLinkExternal className='donation-link-icon'/></button>
                <button><AiOutlineHeart className='donation-heart-icon'/></button>
                <button className="donation-join-btn">Join</button>
            </div>
        </div>

        <div className='donation-card'>
            <div className='donation-avi-name'>
            <Avatar className="donation-avi" alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <div className='donation-name'>donation name + donation</div>
            </div>
            <div className='donation-comment'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            <img src="https://i.imgur.com/TzUZOful.jpg" className='donation-picture'></img>
            <div className='donation-description'>
            <h4>Fake Donation Company</h4>
            <h5>Fake donation location</h5>
            <div>Our mission is to inspire and empower youth to take control of their academic success through peer tutoring and mentoring.</div>
            </div>
            <div className='donation-btns'>
                <button className='btn-link'><BiLinkExternal className='donation-link-icon'/></button>
                <button><AiOutlineHeart className='donation-heart-icon'/></button>
                <button className="donation-join-btn">Join</button>
            </div>
        </div>

        <div className='donation-card'>
            <div className='donation-avi-name'>
            <Avatar className="donation-avi" alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <div className='donation-name'>donation name + donation</div>
            </div>
            <div className='donation-comment'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            <img src="https://i.imgur.com/TzUZOful.jpg" className='donation-picture'></img>
            <div className='donation-description'>
            <h4>Fake Donation Company</h4>
            <h5>Fake donation location</h5>
            <div>Our mission is to inspire and empower youth to take control of their academic success through peer tutoring and mentoring.</div>
            </div>
            <div className='donation-btns'>
                <button className='btn-link'><BiLinkExternal className='donation-link-icon'/></button>
                <button><AiOutlineHeart className='donation-heart-icon'/></button>
                <button className="donation-join-btn">Join</button>
            </div>
        </div>

        <div className='donation-card'>
            <div className='donation-avi-name'>
            <Avatar className="donation-avi" alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <div className='donation-name'>donation name + donation</div>
            </div>
            <div className='donation-comment'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            <img src="https://i.imgur.com/TzUZOful.jpg" className='donation-picture'></img>
            <div className='donation-description'>
            <h4>Fake Donation Company</h4>
            <h5>Fake donation location</h5>
            <div>Our mission is to inspire and empower youth to take control of their academic success through peer tutoring and mentoring.</div>
            </div>
            <div className='donation-btns'>
                <button className='btn-link'><BiLinkExternal className='donation-link-icon'/></button>
                <button><AiOutlineHeart className='donation-heart-icon'/></button>
                <button className="donation-join-btn">Join</button>
            </div>
        </div>

        <div className='donation-card'>
            <div className='donation-avi-name'>
            <Avatar className="donation-avi" alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <div className='donation-name'>donation name + donation</div>
            </div>
            <div className='donation-comment'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            <img src="https://i.imgur.com/TzUZOful.jpg" className='donation-picture'></img>
            <div className='donation-description'>
            <h4>Fake Donation Company</h4>
            <h5>Fake donation location</h5>
            <div>Our mission is to inspire and empower youth to take control of their academic success through peer tutoring and mentoring.</div>
            </div>
            <div className='donation-btns'>
                <button className='btn-link'><BiLinkExternal className='donation-link-icon'/></button>
                <button><AiOutlineHeart className='donation-heart-icon'/></button>
                <button className="donation-join-btn">Join</button>
            </div>
        </div>

        <div className='donation-card'>
            <div className='donation-avi-name'>
            <Avatar className="donation-avi" alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <div className='donation-name'>donation name + donation</div>
            </div>
            <div className='donation-comment'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            <img src="https://i.imgur.com/TzUZOful.jpg" className='donation-picture'></img>
            <div className='donation-description'>
            <h4>Fake Donation Company</h4>
            <h5>Fake donation location</h5>
            <div>Our mission is to inspire and empower youth to take control of their academic success through peer tutoring and mentoring.</div>
            </div>
            <div className='donation-btns'>
                <button className='btn-link'><BiLinkExternal className='donation-link-icon'/></button>
                <button><AiOutlineHeart className='donation-heart-icon'/></button>
                <button className="donation-join-btn">Join</button>
            </div>
        </div>

        <div className='donation-card'>
            <div className='donation-avi-name'>
            <Avatar className="donation-avi" alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <div className='donation-name'>donation name + donation</div>
            </div>
            <div className='donation-comment'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            <img src="https://i.imgur.com/TzUZOful.jpg" className='donation-picture'></img>
            <div className='donation-description'>
            <h4>Fake Donation Company</h4>
            <h5>Fake donation location</h5>
            <div>Our mission is to inspire and empower youth to take control of their academic success through peer tutoring and mentoring.</div>
            </div>
            <div className='donation-btns'>
                <button className='btn-link'><BiLinkExternal className='donation-link-icon'/></button>
                <button><AiOutlineHeart className='donation-heart-icon'/></button>
                <button className="donation-join-btn">Join</button>
            </div>
        </div>

        <div className='donation-card'>
            <div className='donation-avi-name'>
            <Avatar className="donation-avi" alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <div className='donation-name'>donation name + donation</div>
            </div>
            <div className='donation-comment'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            <img src="https://i.imgur.com/TzUZOful.jpg" className='donation-picture'></img>
            <div className='donation-description'>
            <h4>Fake Donation Company</h4>
            <h5>Fake donation location</h5>
            <div>Our mission is to inspire and empower youth to take control of their academic success through peer tutoring and mentoring.</div>
            </div>
            <div className='donation-btns'>
                <button className='btn-link'><BiLinkExternal className='donation-link-icon'/></button>
                <button><AiOutlineHeart className='donation-heart-icon'/></button>
                <button className="donation-join-btn">Join</button>
            </div>
        </div>

        <div className='donation-card'>
            <div className='donation-avi-name'>
            <Avatar className="donation-avi" alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <div className='donation-name'>donation name + donation</div>
            </div>
            <div className='donation-comment'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            <img src="https://i.imgur.com/TzUZOful.jpg" className='donation-picture'></img>
            <div className='donation-description'>
            <h4>Fake Donation Company</h4>
            <h5>Fake donation location</h5>
            <div>Our mission is to inspire and empower youth to take control of their academic success through peer tutoring and mentoring.</div>
            </div>
            <div className='donation-btns'>
                <button className='btn-link'><BiLinkExternal className='donation-link-icon'/></button>
                <button><AiOutlineHeart className='donation-heart-icon'/></button>
                <button className="donation-join-btn">Join</button>
            </div>
        </div>

        <div className='donation-card'>
            <div className='donation-avi-name'>
            <Avatar className="donation-avi" alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <div className='donation-name'>donation name + donation</div>
            </div>
            <div className='donation-comment'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            <img src="https://i.imgur.com/TzUZOful.jpg" className='donation-picture'></img>
            <div className='donation-description'>
            <h4>Fake Donation Company</h4>
            <h5>Fake donation location</h5>
            <div>Our mission is to inspire and empower youth to take control of their academic success through peer tutoring and mentoring.</div>
            </div>
            <div className='donation-btns'>
                <button className='btn-link'><BiLinkExternal className='donation-link-icon'/></button>
                <button><AiOutlineHeart className='donation-heart-icon'/></button>
                <button className="donation-join-btn">Join</button>
            </div>
        </div>

        <div className='donation-card'>
            <div className='donation-avi-name'>
            <Avatar className="donation-avi" alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <div className='donation-name'>donation name + donation</div>
            </div>
            <div className='donation-comment'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            <img src="https://i.imgur.com/TzUZOful.jpg" className='donation-picture'></img>
            <div className='donation-description'>
            <h4>Fake Donation Company</h4>
            <h5>Fake donation location</h5>
            <div>Our mission is to inspire and empower youth to take control of their academic success through peer tutoring and mentoring.</div>
            </div>
            <div className='donation-btns'>
                <button className='btn-link'><BiLinkExternal className='donation-link-icon'/></button>
                <button><AiOutlineHeart className='donation-heart-icon'/></button>
                <button className="donation-join-btn">Join</button>
            </div>
        </div>

        <div className='donation-card'>
            <div className='donation-avi-name'>
            <Avatar className="donation-avi" alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <div className='donation-name'>donation name + donation</div>
            </div>
            <div className='donation-comment'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            <img src="https://i.imgur.com/TzUZOful.jpg" className='donation-picture'></img>
            <div className='donation-description'>
            <h4>Fake Donation Company</h4>
            <h5>Fake donation location</h5>
            <div>Our mission is to inspire and empower youth to take control of their academic success through peer tutoring and mentoring.</div>
            </div>
            <div className='donation-btns'>
                <button className='btn-link'><BiLinkExternal className='donation-link-icon'/></button>
                <button><AiOutlineHeart className='donation-heart-icon'/></button>
                <button className="donation-join-btn">Join</button>
            </div>
        </div>

        
        </div>
    );

}

export default DonationCardTwo;