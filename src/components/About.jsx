import React from 'react';

function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">About Our Job Portal</h1>
        <p className="text-lg text-gray-600 mb-4">
          Welcome to our Job Portal, your number one source for finding the best job opportunities. 
          We’re dedicated to giving you the very best of job listings, with a focus on dependability, 
          customer service, and uniqueness.
        </p>
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">Our Mission</h2>
        <p className="text-lg text-gray-600 mb-4">
          Our mission is to connect job seekers with employers, making the job search process 
          as seamless and efficient as possible. We believe that everyone deserves the opportunity 
          to find a job that they love.
        </p>
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">What We Offer</h2>
        <ul className="list-disc list-inside text-lg text-gray-600 mb-4">
          <li>Comprehensive job listings from various industries.</li>
          <li>User-friendly interface for easy navigation.</li>
          <li>Personalized job recommendations based on your profile.</li>
          <li>Resources and tips for job seekers to enhance their applications.</li>
          <li>Support for employers to find the right candidates quickly.</li>
        </ul>
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">Get In Touch</h2>
        <p className="text-lg text-gray-600 mb-4">
          If you have any questions or comments, please don’t hesitate to contact us at 
          <a href="mailto:support@jobportal.com" className="text-blue-600 hover:underline"> support@jobportal.com</a>.
        </p>
        <p className="text-lg text-gray-600">
          Thank you for choosing our Job Portal. We look forward to helping you find your dream job!
        </p>
      </div>
    </div>
  );
}

export default About;