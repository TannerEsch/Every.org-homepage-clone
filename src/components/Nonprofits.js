import React from 'react';

function Nonprofits(props) {

    return (
        <div>
            <form>
            <h1>{props.nonProfitsName}</h1>
            <p>{props.nonProfitsDesc}</p>
            </form>
        </div>
    )
}

export default Nonprofits;