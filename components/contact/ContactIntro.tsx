import React from 'react';

const ContactIntro = () => {
  return (
    <div className="relative">
      <p className="text-xl mb-8 max-w-md leading-relaxed">
        Starting therapy is courageous.
        <br /><br />
        Get in touch for questions, or to book a free 15-minute consultation.
      </p>
      <div className="relative h-80 w-full max-w-xs mt-6">
         {/* Arch Image */}
         <div className="absolute top-0 left-18 w-56 h-80 bg-gray-300 rounded-t-full z-10 overflow-hidden">
            <img 
              src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/9a77a6f2-1c50-4582-a5c1-5ec0dc2e94e8/daiga-ellaby-Ct6LBZHaOSc-unsplash.jpg?format=2500w" 
              alt="Lilac flowers" 
              className="w-full h-full object-cover" 
            />
         </div>
         {/* Circle Image */}
         <div className="absolute bottom-0 -right-12 -bottom-32 w-40 h-40 bg-gray-200 rounded-full z-20 overflow-hidden ">
            <img 
              src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/9f889e1b-ba2b-4a6d-92e9-767dd3db67ae/lilac+template+white+lilac.jpeg?format=2500w" 
              alt="White flowers" 
              className="w-full h-full object-cover" 
            />
         </div>
      </div>
    </div>
  );
};

export default ContactIntro;
