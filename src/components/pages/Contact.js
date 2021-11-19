import React from 'react';

export default function Contact() {
  return (
    <div id="body">
      <h1>Contact Page</h1>
      <form>
        <div className="mb-3">
            <label for="FormControlInput" className="form-label">Please provide email:</label>
            <input type="email" className="form-control" id="FormControlInput" placeholder="name@example.com" required="required" data-error="Valid email is required."/>
        </div>
        <div className="mb-3">
            <label for="FormControlTextarea" className="form-label">Your Message:</label>
            <textarea className="form-control" id="FormControlTextarea" rows="3" required="required" data-error="Please fill out message field"></textarea>
        </div>
        <button type="submit" className="btn btn-danger">Submit</button>
      </form>
    </div>
  );
}
