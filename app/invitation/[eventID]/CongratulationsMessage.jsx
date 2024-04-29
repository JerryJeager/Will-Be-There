"use client"
import React, { useState } from "react";

const CongratulationsMessage = ({ onClose }) => {
  const [emailSent, setEmailSent] = useState(false);

  const handleCheckEmail = () => {
    // Logic to handle checking email
    setEmailSent(true);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 text-green-500 mx-auto mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Congratulations!</h2>
        <p className="text-gray-600 mb-4">
          Your RSVP has been submitted successfully.
          <br />Check your mail for more details.
          {emailSent ? " Please check your email for further details." : ""}
        </p>
        <button
          onClick={onClose}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 mr-2"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CongratulationsMessage;