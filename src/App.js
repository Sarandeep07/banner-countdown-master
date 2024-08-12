import React, { useState } from 'react';
import Banner from './Banner';
import Dashboard from './Dashboard';
import './App.css';

function App() {
    const [bannerVisible, setBannerVisible] = useState(true);
    const [bannerText, setBannerText] = useState('Welcome to Our Website!');
    const [bannerTimer, setBannerTimer] = useState(10); // Timer in seconds
    const [bannerLink, setBannerLink] = useState('https://example.com');

    return (
        <div className="App">
            {bannerVisible && (
                <Banner
                    text={bannerText}
                    timer={bannerTimer}
                    link={bannerLink}
                    onTimerEnd={() => setBannerVisible(false)}
                />
            )}
            <Dashboard
                setBannerVisible={setBannerVisible}
                setBannerText={setBannerText}
                setBannerTimer={setBannerTimer}
                setBannerLink={setBannerLink}
            />
        </div>
    );
}

export default App;