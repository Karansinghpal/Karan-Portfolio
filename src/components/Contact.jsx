import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Contact Me</h2>
        <div className="text-center space-y-6">
          <div className="flex justify-center space-x-8 mb-4">
            <a
              href="https://github.com/Karansinghpal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              <FaGithub className="text-4xl" />
            </a>
            <a
              href="mailto:abhinav8853490243@gmail.com"
              className="text-gray-600 hover:text-gray-900"
            >
              <FaEnvelope className="text-4xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/karan-singh-pal-58363b24b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              <FaLinkedin className="text-4xl" />
            </a>
            <a
              href="tel:+917651995122"
              className="text-gray-600 hover:text-gray-900"
            >
              <FaPhone className="text-4xl" />
            </a>
          </div>
          <div className="text-gray-700">
            <p className="mb-2">Email: kp5495423@gmail.com</p>
            <p>Phone: +91 7651995122</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;