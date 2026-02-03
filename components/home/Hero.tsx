
export default function Hero() {
  return (
    <section className="w-full px-6 md:px-10 lg:px-14 pt-12 md:pt-20 lg:pt-14 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24  ">
      {/* Left Column: Image (Based on PDF Visual) */}
      <div className="relative w-full aspect-[3/4] md:aspect-[2/3] lg:max-w-[88%] mx-auto md:mx-0 ">
        <div className="absolute inset-0 bg-gray-200 rounded-t-[20rem] md:rounded-t-[18rem] overflow-hidden">
           {/* Placeholder for the arched image */}
           <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
             <span className="sr-only">Hero Image: Woman with flowers</span>
             {/* Simulating image content */}
             <div className="w-full h-full bg-cover bg-center opacity-90" style={{ backgroundImage: "url('https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/08197a74-c045-4a19-a7c9-0f85c1032bc4/daiga-ellaby-M2P08N9zi2k-unsplash.jpg?format=1500w')" }}></div>
           </div>
        </div>
      </div>

      {/* Right Column: Text */}
      <div className="flex flex-col items-center md:items-center text-center md:text-left space-y-6 md:space-y-8 lg:pr-40   py-8 md:py-12 lg:py-48">
        <h1 className="text-5xl md:text-6xl lg:text-[5rem] text-[#223614]  text-[--font-playfair]  leading-[1.1]">
          Live your life <br />  in full bloom
        </h1>
        <p className="text-sm md:text-base font-medium text-[#223614] uppercase tracking-widest">
          Therapy for Adults in Minneapolis, MN.
        </p>
        <button className="   px-8 py-3 border   text-[#223614] text-xs md:text-sm font-bold tracking-widest uppercase hover:bg-[#223614] hover:text-white transition-all duration-300   flex items-center gap-2">
     
          Connect with me
          <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
        </button>
      </div>
    </section>
  );
}
