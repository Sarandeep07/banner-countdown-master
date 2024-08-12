import React, { useState, useEffect } from 'react';
import CountdownTimer from './CountdownTimer';
import './Banner.css';

function Banner({ text, timer, link, onTimerEnd }) {
    const [timeLeft, setTimeLeft] = useState(timer);

    useEffect(() => {
        if (timeLeft > 0) {
            const countdown = setInterval(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);
            return () => clearInterval(countdown);
        } else {
            onTimerEnd();
        }
    }, [timeLeft, onTimerEnd]);

    return (
        <div className="banner">
            <p>{text}</p>
            {link && <a href={link} target="_blank" rel="noopener noreferrer">Learn More</a>}
            <CountdownTimer timeLeft={timeLeft} />
        </div>
    );
}

export default Banner;