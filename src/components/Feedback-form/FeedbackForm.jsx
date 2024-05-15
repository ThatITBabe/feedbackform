import React, { useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

const FeedbackForm = () => {
    const [feedback, setFeedback] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        socket.emit('submitFeedback', { feedback });
        setFeedback('');
    };
    return (
        <form onSubmit={handleSubmit}>
            <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Enter your feedback"
            ></textarea>
            <button type="submit">Submit</button>
        </form>
    )
}

export default FeedbackForm
