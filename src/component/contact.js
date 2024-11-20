import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();
  const [status, setStatus] = useState(null); // State to track form submission status

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_05isfpe', 'template_d1uua6w', form.current, {
        publicKey: 'pNSs49uQmoeFMLKqC',
      })
      .then(
        () => {
          setStatus('success'); // Set status to 'success' when the email is sent successfully
          form.current.reset(); // Optionally reset the form after successful submission
        },
        (error) => {
          setStatus('error'); // Set status to 'error' if the email fails
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Contact Us</h2>
      
      {/* Display success or error message */}
      {status === 'success' && (
        <div className="mb-4 p-4 bg-green-100 text-green-700 border border-green-400 rounded-md">
          <p>Email sent successfully! We will get back to you soon.</p>
        </div>
      )}
      {status === 'error' && (
        <div className="mb-4 p-4 bg-red-100 text-red-700 border border-red-400 rounded-md">
          <p>Oops! Something went wrong. Please try again later.</p>
        </div>
      )}

      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <div>
          <label htmlFor="user_name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="from_name" // Use `from_name` here, since this corresponds to the `{{from_name}}` placeholder in the email template
            id="user_name"
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="user_email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="from_email" // Use `from_email` here, since this corresponds to the `{{from_email}}` placeholder
            id="user_email"
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            name="message" // Use `message` here, since this corresponds to the `{{message}}` placeholder
            id="message"
            required
            rows="4"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};
