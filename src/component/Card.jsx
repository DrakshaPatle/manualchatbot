import React, { useState } from 'react';
import './Card.css';

function Card() {
  const [message, setMessage] = useState('');

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  }

  const handleSendButtonClick = () => {
    // Implement your send message logic here
    // console.log(`Sending message: ${message}`);
  }

  return (
    <div className="card">
      <div className="card-header">
        <h1>Ask Question</h1>

      </div>

      <div className="card-body">


        <div className="message">
          {message}
        </div>

        <div className="input">
          <input type="text" placeholder="Type your message here" onChange={handleInputChange} />
          <button onClick={handleSendButtonClick}>Send</button>
        </div>
      </div>



      <div className="card-footer">
        <button>Previous</button>
        <button>Next</button>
      </div>
    </div>
  );
}

export default Card;









