import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaTimes } from 'react-icons/fa';

const Contact = ({ closeContactForm }) => {
  const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        (result) => {
          console.log(result.text);
          alert('Message sent successfully'); 
          closeContactForm();
        },
        (error) => {
          console.log(error.text);
          alert('Message failed to send. Please try again.'); 
        }
      );
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="w-[600px] p-4 rounded-lg bg-background-main relative max-h-[80vh] overflow-y-auto">
        <button
          onClick={closeContactForm}
          className="absolute top-2 right-2 text-gray-500 hover:text-white"
        >
          <FaTimes />
        </button>
        <p className="text-center text-lg text-white font-bold">Contact Us</p>
        <form ref={form} onSubmit={sendEmail} className="p-2 space-y-4">
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-900 dark:text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              className="rounded-lg border border-gray-300 p-3 text-sm focus:ring-primary-500 focus:border-primary-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-gray-300">
              Your email
            </label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              className="rounded-lg border border-gray-300 p-2.5 text-sm focus:ring-primary-500 focus:border-primary-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="email@gmail.com"
              required
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-medium text-gray-900 dark:text-gray-400">
              Your message
            </label>
            <textarea
              id="message"
              name='message'
              rows="6"
              className="rounded-lg border border-gray-300 p-2.5 text-sm focus:ring-primary-500 focus:border-primary-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Leave a comment..."
              required
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="rounded-lg py-3 px-5 text-sm font-medium text-center text-white bg-gray-700 hover:text-black hover:bg-white"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;