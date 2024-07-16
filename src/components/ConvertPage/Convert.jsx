import React from 'react';
import './Convert.css';

const Convert = () => {
    return (
        <div className="selectMenu">
            <div className="nav">
                <h1>Diversify</h1>
            </div>
            <div className="convertSection">
                <div className="convertFrom">
                    <h1>Convert From</h1>
                    <select className="dropdown">
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                </div>
                <h4>to</h4>
                <div className="convertTo">
                    <h1>Convert To</h1>
                    <select className="dropdown">
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default Convert;
