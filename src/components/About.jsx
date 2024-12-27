import React, { useEffect } from 'react';
import { Stethoscope } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-gray-50 pt-20 py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center py-20">
          <div className="animated-container">
            <h1 className="text-5xl font-bold text-blue-800 mb-6 animate-fade-in">Your Health, Our Priority</h1>
            <p className="text-xl text-gray-600 mb-8 animate-fade-in delay-1">Comprehensive Healthcare Services with Compassion</p>
          </div>
          <a href='#appointment'
            className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700/20 transition text-lg"
          >
            Book Appointment
          </a>
        </div>

        {/* Services Section */}
        <section className="grid md:grid-cols-3 gap-6 my-16">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Stethoscope className="mx-auto text-blue-600 mb-4" size={48} />
            <h3 className="text-xl font-semibold mb-3">General Checkup</h3>
            <p className="text-gray-600">Comprehensive health evaluations</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Stethoscope className="mx-auto text-blue-600 mb-4" size={48} />
            <h3 className="text-xl font-semibold mb-3">Specialist Care</h3>
            <p className="text-gray-600">Expert doctors across specialties</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Stethoscope className="mx-auto text-blue-600 mb-4" size={48} />
            <h3 className="text-xl font-semibold mb-3">Emergency Support</h3>
            <p className="text-gray-600">24/7 emergency medical services</p>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-white p-10 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Patient Testimonials</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Testimonial Card 1 */}
            <div className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
              <p className="italic text-gray-600 mb-4 text-lg">"Exceptional care and compassionate doctors. I felt truly heard and supported."</p>
              <p className="font-semibold text-gray-800">- Anand</p>
            </div>

            {/* Testimonial Card 2 */}
            <div className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
              <p className="italic text-gray-600 mb-4 text-lg">"Professional, efficient, and very friendly staff. Highly recommended!"</p>
              <p className="font-semibold text-gray-800">- Kishore</p>
            </div>
          </div>
        </section>

      </div>
    </section>
  );
};
export default About