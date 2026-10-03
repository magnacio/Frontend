import React, { useState } from 'react';

const App = () => {

    const [countNumber, setCountNumber] = useState(0);

    const handleInc = () => {
        setCountNumber(countNumber + 1);
    };

    const handleDec = () => {
        setCountNumber(countNumber - 1);
    };

    const handleReset = () => {
        setCountNumber(0);
    };

    return (
        <>
        <div>
            <h3>{countNumber}</h3>

            <button onClick={handleInc} className="bg-blue-950 p-3 m-3 text-white rounded-2xl font-bold">
                INCREASE
            </button>

            <button onClick={handleDec} className="bg-blue-950 p-3 m-3 text-white rounded-2xl font-bold">
                DECREASE
            </button>

            <button onClick={handleReset} className="bg-blue-950 p-3 m-3 text-white rounded-2xl font-bold">
                RESET
            </button>
            </div>
        </>
    );
};

export default App;