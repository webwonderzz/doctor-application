import React, { useState } from 'react';
import Swal from 'sweetalert2'

// Appointment Booking Page
const Appointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    doctor: '',
    date: '',
    reason: ''
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

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: json
    }).then((res) => res.json());

    if (res.success) {
        Swal.fire({
            title: "Success",
            text: "Appointment Booked Successfully",
            icon: "success"
        });
    }
};

  return (
    <section id="appointment" className="min-h-screen bg-gray-50 pt-20 py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl text-gray-800 font-bold text-center mb-8">Book Appointment</h2>
          <form onSubmit={onSubmit}>
            <div className="mb-4">
              <label className="block  mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-3 py-2 border rounded-md"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block  mb-2">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-3 py-2 border rounded-md"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block  mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                required
                className="w-full px-3 py-2 border rounded-md"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block  mb-2">Select Doctor</label>
              <select
                name="doctor"
                required
                className="w-full px-3 py-2 border rounded-md"
                onChange={handleChange}
              >
                <option value="">Select a Doctor</option>
                <option>Dr. Mohan - Cardiology</option>
                <option>Dr. Shekar - Orthopedics</option>
                <option>Dr. Shilpa - Pediatrics</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block  mb-2">Date</label>
              <input
                type="date"
                name="date"
                required
                className="w-full px-3 py-2 border rounded-md"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Reason for Visit</label>
              <textarea
                name="reason"
                required
                className="w-full px-3 py-2 border rounded-md"
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition"
            >
              Confirm Appointment
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Appointment