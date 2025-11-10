import React from 'react';
import Card1 from './components/Card1';
import Card2 from './components/Card2';
import Card3 from './components/Card3';

import { FaFacebook } from 'react-icons/fa';

const App = () => {
    return (
        <div>
            <header>
                <h1>A template for React Project</h1>
            </header>
            <main>
                <Card1 />
                <Card2 />
                <Card3 title="Dynamic Title" name="Dynamic Name" />
            </main>
            <footer>
                <p className="left">
                    <span className="icon">
                        <FaFacebook />
                    </span>
                </p>
                <p className="right">Developed with &hearts; by Anisul Islam</p>
            </footer>
        </div>
    );
};

export default App;
