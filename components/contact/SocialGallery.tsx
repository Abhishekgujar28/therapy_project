import React from 'react';

const SocialGallery = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24">
      <h2 className="text-3xl md:text-6xl font-medium mb-12">Find me on social.</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
         <div className="aspect-square bg-gray-100 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1516205651411-a42796ac27f3?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"/>
         </div>
         <div className="aspect-square bg-gray-100 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"/>
         </div>
         <div className="aspect-square bg-gray-100 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1490750967868-58cb75069ed6?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"/>
         </div>
         <div className="aspect-square bg-gray-100 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1507643179173-4463bd0ed3fa?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"/>
         </div>
      </div>
    </section>
  );
};

export default SocialGallery;
