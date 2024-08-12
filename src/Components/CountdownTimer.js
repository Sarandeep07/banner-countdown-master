import React from 'react';
import './CountdownTimer.css';

function CountdownTimer({ timeLeft }) {
    return (
        <div className="countdown-timer">
            <p>{timeLeft} seconds remaining</p>
        </div>
    );
}

export default CountdownTimer;