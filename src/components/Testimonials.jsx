import React from 'react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CFO",
    company: "TechGrowth Inc",
    message: "CredEx has transformed how we manage our business credit. Their platform is intuitive and their customer service is exceptional."
  },
  {
    name: "Michael Chen",
    role: "CEO",
    company: "Startup Ventures",
    message: "As a growing business, we needed a credit solution that could scale with us. CredEx delivered beyond our expectations."
  },
  {
    name: "Priya Patel",
    role: "Finance Director",
    company: "Global Solutions",
    message: "The insights we've gained through CredEx's analytics have helped us make smarter financial decisions."
  },
  {
    name: "David Wilson",
    role: "Small Business Owner",
    company: "Wilson Consulting",
    message: "CredEx made accessing credit simple and straightforward. I couldn't be happier with the service."
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 px-4 text-center">
      <h2 className="text-3xl font-bold mb-10">What Our Clients Say</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((t, idx) => (
          <div key={idx} className="bg-white p-6 rounded shadow-md dark:bg-gray-800">
            <p className="italic mb-4">"{t.message}"</p>
            <h4 className="font-bold">{t.name}</h4>
            <p className="text-sm">{t.role}, {t.company}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;