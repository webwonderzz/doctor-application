import { User } from 'lucide-react'
import React from 'react'

const Doctors = () => {
    const doctorsList = [
        {
            name: "Dr. Mohan",
            specialization: "Cardiology",
            experience: "15 years",
            availability: "Mon-wed, 9am-5pm"
        },
        {
            name: "Dr. Shekar",
            specialization: "Orthopedics",
            experience: "12 years",
            availability: "Thur-sat, 10am-6pm"
        },
        {
            name: "Dr. Shilpa",
            specialization: "Pediatrics",
            experience: "10 years",
            availability: "Tue-Fri, 8am-4pm"
        }
    ]
    return (
        <section id="doctor" className='min-h-screen bg-gray-50 pt-20 py-32 px-4 sm:px-6 lg:px-8 relative'>
            <div className='container mx-auto px-4'>
                <h1 className='text-4xl text-gray-800 font-bold text-center mb-12'>Our Doctors</h1>
                <div className='grid md:grid-cols-3 gap-8'>
                    {doctorsList.map((doctor, index) => (
                        <div key={index} className='bg-white rounded-lg shadow-md p-6 text-center'>
                            <User className='mx-auto text-blue-600 mb-4' size={64} />
                            <h3 className='text-xl font-semibold'>{doctor.name}</h3>
                            <p className='text-gray-600 mb-2'>{doctor.specialization}</p>
                            <p className='text-sm text-gray-500 mb-4'>Experience: {doctor.experience}</p>
                            <p className='text-sm text-gray-500 mb-4'>Availability: {doctor.availability}</p>
                            <a href='#appointment'
                                className='bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700/20 transition'>
                                Book Appointment
                            </a>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Doctors