import React from 'react';
import { FaUpload, FaDollarSign, FaCheckCircle } from 'react-icons/fa';

const steps = [
  { icon: <FaUpload />, title: 'Upload License', desc: 'Submit your unused software license.' },
  { icon: <FaDollarSign />, title: 'Get Valuation', desc: 'We evaluate your license instantly.' },
  { icon: <FaCheckCircle />, title: 'Get Paid', desc: 'Receive payment directly to your account.' }
];

const HowItWorks = () => {
  return (
    <section className="py-16 px-4 text-center">
      <h2 className="text-3xl font-bold mb-10">How It Works</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, idx) => (
          <div key={idx} className="p-6 bg-white shadow rounded-md dark:bg-gray-800">
            <div className="text-4xl text-blue-500 mb-4 mx-auto">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;