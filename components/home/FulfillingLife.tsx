
export default function FulfillingLife() {
  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-2   text-[#2e3525]">
      {/* Left: Text */}
      <div className="px-6 md:px-12 lg:px-14 py-20 md:py-32 flex flex-col justify-between h-full bg-[#e5e0da]">
        <div className="flex flex-col justify-center  space-y-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans text-[#2e3525]">
            Live a fulfilling life.
          </h2>
          <div className="space-y-4 text-[#2e3525] leading-relaxed max-w-full font-sans text-base md:text-xl">
            <p>
              Life can be challenging—especially when you’re trying to balance your personal and professional life.
            </p>
            <p>
              It’s easy to feel like you’re alone in facing these challenges, but I want you to know that I’m here to help.
            </p>
          </div>
        </div>
        
        <div className="w-full border-t border-[#2e3525]/30 pt-8 mt-16 text-center">
           <button className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase hover:opacity-70 flex items-center justify-center gap-2 transition-opacity mx-auto text-[#2e3525]">
            Get In Touch <span>&rarr;</span>
           </button>
        </div>
      </div>
      
      {/* Right: Image */}
      <div className="relative h-64 md:h-auto min-h-[500px] bg-gray-200">
         <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/87fa2310-36df-4a24-a9e9-1b74df73f150/tanya-trukyr-ornZV1YJNNo-unsplash.jpg?format=2500w')" }}></div>
      </div>
    </section>
  );
}
