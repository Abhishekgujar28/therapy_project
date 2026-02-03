import Image from 'next/image';

const specialties = [
  {
    title: "Self-Esteem",
    desc: "Building a strong sense of self-worth is key to living a fulfilling life. Let's work together to boost your self-esteem.",
    img: "https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/166607b6-21a7-4e30-8c74-9c911c9f33fb/milles-studio-GU-Q4-SQFTg-unsplash.jpg?format=1000w"
  },
  {
    title: "Relationships",
    desc: "Navigating relationships can be complex. I'm here to guide you through these intricacies to help you find healthier connections.",
    img: "https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/f53aed66-5bd9-43e0-b00b-3a3537fed68d/ori-song-LPbKfdQJS2E-unsplash.jpg?format=750w"
  },
  {
    title: "Burnout",
    desc: "Feeling overwhelmed by your career is more common than you think. Together, we'll identify strategies to manage and prevent burnout.",
    img: "https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/515651b9-4001-47ae-8ca1-2a6ff8f2bef0/ivana-cajina--wn1PECo5-U-unsplash.jpg?format=750w"
  }
];

export default function Specialties() {
  return (
    <section className="w-full px-6 md:px-10 lg:px-14 py-16 md:py-24 bg-[#fbf6f1]">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-6xl font-sans text-[#223614] font-medium ">My Specialties</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {specialties.map((item, index) => (
          <div key={index} className="bg-[#e5e0da] px-6 pt-3 pb-8n flex flex-col h-full relative overflow-hidden group border border-3-black duration-300">
            <h3 className="text-lg  font-bold text-mono mb-4 uppercase tracking-wider">{item.title}</h3>
            <p className="text-xs md:text-sm text-[#223614] leading-relaxed mb-12 relative z-10">
              {item.desc}
            </p>
            
            {/* Circular Image at bottom */}
            <div className="mt-auto self-center relative w-82 h-82 rounded-full overflow-hidden   shadow-sm">
               <div className="w-full h-full bg-gray-300 relative">
                 <Image 
                   src={item.img} 
                   alt={item.title}
                   fill
                   className="object-cover"
                 />
               </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
