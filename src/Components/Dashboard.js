import React, { useState } from 'react';
import './Dashboard.css';

function Dashboard({ setBannerVisible, setBannerText, setBannerTimer, setBannerLink }) {
    const [text, setText] = useState('');
    const [timer, setTimer] = useState(10);
    const [link, setLink] = useState('');
    const [visible, setVisible] = useState(true);

    const handleUpdate = () => {
        setBannerText(text);
        setBannerTimer(timer);
        setBannerLink(link);
        setBannerVisible(visible);
    };

    return (
        <div className="dashboard">
            <h2>Banner Controls</h2>
            <label>
                Banner Text:
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            </label>
            <label>
                Timer (seconds):
                <input type="number" value={timer} onChange={(e) => setTimer(Number(e.target.value))} />
            </label>
            <label>
                Banner Link:
                <input type="text" value={link} onChange={(e) => setLink(e.target.value)} />
            </label>
            <label>
                Banner Visible:
                <input type="checkbox" checked={visible} onChange={() => setVisible(!visible)} />
            </label>
            <button onClick={handleUpdate}>Update Banner</button>
        </div>
    );
}

export default Dashboard;