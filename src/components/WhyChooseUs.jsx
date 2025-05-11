import React from 'react';
import { FaLock, FaClock, FaStar, FaHandshake } from 'react-icons/fa';

const features = [
  { icon: <FaLock />, title: 'Secure Transactions', desc: 'We ensure your data stays safe.' },
  { icon: <FaClock />, title: 'Fast Payments', desc: 'Receive money in 24 hours.' },
  { icon: <FaStar />, title: 'Trusted Service', desc: 'Rated highly by hundreds of users.' },
  { icon: <FaHandshake />, title: 'Easy Process', desc: 'Simple steps to convert licenses to cash.' }
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 px-4 bg-gray-100 dark:bg-gray-800">
      <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us</h2>
      <div className="grid md:grid-cols-4 gap-8">
        {features.map((feature, idx) => (
          <div key={idx} className="text-center p-6 bg-white shadow rounded-md dark:bg-gray-700">
            <div className="text-4xl text-indigo-500 mb-4 mx-auto">{feature.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;