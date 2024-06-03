import React from 'react';

const DataTicket = ({currentFlight}) => {
    return (
        <div>
         <h2>{currentFlight.to} -> {currentFlight.from}</h2>
            <h2>{currentFlight.time} -> {currentFlight.roadTime}</h2>
        </div>
    );
};

export default DataTicket;