import { Stethoscope } from 'lucide-react'
import React from 'react'

const About = () => {
    return (

        <section id="about" className='min-h-screen bg-gray-50 pt-20 py-32 px-4 sm:px-6 lg:px-8 relative'>
            <div className='container mx-auto px-4'>
                {/* hero Section */}
                <div className='text-center py-20 flex flex-col items-center justify-center'>
                    <div className='animated-container'>
                        <h1 className='text-5xl font-bold text-blue-800 mb-6 animate-fade-in'>
                            Your Health, our Priority
                        </h1>
                        <p className='text-xl text-gray-600 mb-8 animate-fade-in delay-1'>
                            Comprehensive Healthcare Services with Compassion
                        </p>
                    </div>
                    {/* 24/7 Section */}
                    <div className='inline-block mb-8'>
                        <div className='flex items-center justify-center space-x-2 rounded-full px-4 md:px-6 py-2 md:py-3 shadow-lg backdrop-blur-xl'>
                            <span className='relative flex h-2 md:h-3 w-2 md:w-3'>
                                <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75'></span>
                                <span className='relative inline-flex rounded-full h-2 md:h-3 w-2 md:w-3 bg-blue-500'></span>
                            </span>
                            <span className='bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-grotesk text-sm md:text-base font-semibold'>
                                24/7 Support Available
                            </span>
                        </div>
                    </div>
                    <a href='#appointment'
                        className='bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700/20 transition text-lg mt-4'>
                        Book Appointemnt
                    </a>
                </div>

                {/* Services section */}
                <section className='grid md:grid-cols-3 gap-6'>
                    <div className='bg-white p-6 rounded-lg shadow-md text-center'>
                        <Stethoscope className='mx-auto text-blue-600 mb-4' size={48} />
                        <h3 className='text-xl font-semibold text-gray-800 mb-3'>General Checkup</h3>
                        <p className='text-gray-600'>Comprehensive health evaluations</p>
                    </div>
                    <div className='bg-white p-6 rounded-lg shadow-md text-center'>
                        <Stethoscope className='mx-auto text-blue-600 mb-4' size={48} />
                        <h3 className='text-xl font-semibold text-gray-800 mb-3'>Specialist care</h3>
                        <p className='text-gray-600'>Expert doctors across specialities</p>
                    </div>
                    <div className='bg-white p-6 rounded-lg shadow-md text-center'>
                        <Stethoscope className='mx-auto text-blue-600 mb-4' size={48} />
                        <h3 className='text-xl font-semibold text-gray-800 mb-3'>Emergency Support</h3>
                        <p className='text-gray-600'>24/7 emergency medical service</p>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section className='bg-white p-10 rounded-lg shadow-lg'>
                    <h2 className='text-3xl font-bold text-center mb-10 text-gray-800'>Patient Testimonials</h2>
                    <div className='grid md:grid-cols-2 gap-8'>
                        {/* Testimonial Card 1 */}
                        <div className='bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105'>
                            <p className='italic text-gray-600 mb-4 text-lg'>"Exceptional care and compassionate doctots. I felt truly heard and supported."</p>
                            <p className='font-semibold text-gray-800'>- Anand</p>
                        </div>
                        {/* Testimonial Card 2 */}
                        <div className='bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105'>
                            <p className='italic text-gray-600 mb-4 text-lg'>"Professional, efficient, and very friendly staff. Highly recommended!"</p>
                            <p className='font-semibold text-gray-800'>- Kishore</p>
                        </div>

                    </div>
                </section>

            </div>
        </section>
    )
}

export default About