import React, { useState } from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', company: '', type: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-10">Contact Us</h2>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
        <input type="text" name="name" placeholder="Name" required value={form.name} onChange={handleChange} className="w-full p-3 border rounded" />
        <input type="email" name="email" placeholder="Email" required value={form.email} onChange={handleChange} className="w-full p-3 border rounded" />
        <input type="text" name="company" placeholder="Company" value={form.company} onChange={handleChange} className="w-full p-3 border rounded" />
        <select name="type" required value={form.type} onChange={handleChange} className="w-full p-3 border rounded">
          <option value="">Select License Type</option>
          <option value="Software Suite">Software Suite</option>
          <option value="Single License">Single License</option>
        </select>
        <textarea name="message" rows="4" placeholder="Message" value={form.message} onChange={handleChange} className="w-full p-3 border rounded"></textarea>
        <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded hover:bg-indigo-700">Submit</button>
      </form>
    </section>
  );
};

export default ContactForm;