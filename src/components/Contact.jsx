import { Mail, MapPin, Phone } from 'lucide-react';
import React, { useState } from 'react'
import Swal from 'sweetalert2';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        setSubmitted(true);
        const formData = new FormData(event.target);

        formData.append("access_key", "32d754d2-d0a1-476d-a1f6-00a805156eae");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            Swal.fire({
                title: "Success",
                text: "Message sent Successfully",
                icon: "success"
            });
        }
    };
    return (
        <section id="contact" className='min-h-screen bg-gray-50 pt-20 py-32 px-4 sm:px-6 lg:px-8 relative'>
            <div className='container mx-auto px-4'>
                <div className='grid md:grid-cols-2 gap-8'>
                    {/* contact form */}
                    <div className='bg-white rounded-lg shadow-md p-8'>
                        <h2 className='text-3xl text-gray-800 font bold mb-8'>contact Us</h2>
                        <form onSubmit={onSubmit}>
                            <div className='mb-4'>
                                <label className='block text-gray-800 mb-2'>Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    onChange={handleChange}
                                    className='w-full px-3 py-2 border rounded-md bg-white text-black' />
                            </div>
                            <div className='mb-4'>
                                <label className='block text-gray-800 mb-2'>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    onChange={handleChange}
                                    className='w-full px-3 py-2 border rounded-md bg-white text-black' />
                            </div>
                            <div className='mb-4'>
                                <label className='block text-gray-800 mb-2'>Phone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    required
                                    onChange={handleChange}
                                    className='w-full px-3 py-2 border rounded-md bg-white text-black' />
                            </div>
                            <div className='mb-4'>
                                <label className='block text-gray-800 mb-2'>Message</label>
                                <textarea
                                    name="message"
                                    required
                                    onChange={handleChange}
                                    className='w-full px-3 py-2 border rounded-md bg-white text-black' />
                            </div>
                            <button type='submit'
                                className='w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition'>
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* contact infor */}
                    <div className='bg-white text-gray-800 rounded-lg shadow-md p-8'>
                        <h2 className='text-3xl font-bold mb-8'>Clinic Information</h2>
                        <div className='space-y-4'>
                            <div className='flex items-center'>
                                <MapPin className='text-blue-600 mr-4' size={32}/>
                                <p className='text-gray-800'>123 Health Street, Medical District, City, State 12345</p>
                            </div>
                            <div className='flex items-center'>
                                <Phone className='text-blue-600 mr-4' size={32}/>
                                <p className='text-gray-800'>(555) 123-4567</p>
                            </div>
                            <div className='flex items-center'>
                                <Mail className='text-blue-600 mr-4' size={32}/>
                                <p className='text-gray-800'>contact2healthcareclinic.com</p>
                            </div>
                        </div>
                        {/* Map Placeholder */}
                        <div className='mt-8 bg-gray-200 h-64 flex items-center justify-center rounded-lg overflow-hidden'>
                            <iframe
                            title="Google Maps Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509294!2d144.9631579153178!3d-37.8162189797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1633454790331!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{border:0}}
                            allowFullScreen=""
                            loading="lazy">
                            </iframe>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Contact