export default function About() {
  return (
    <section className="w-full bg-[#e5e0da] px-6 md:px-10 lg:px-32 py-20 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
      {/* Left: Text */}
      <div className="flex flex-col items-start space-y-8">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-sans text-[#2e3525] ">
          Hi, I&apos;m Lilac.
        </h2>
        <p className="text-[#2e3525] text-sm md:text-[20px] leading-loose  font-medium ">
          I&apos;m committed to providing a safe and supportive environment where we can explore your thoughts, feelings, and behaviors. With empathy and guidance, we&apos;ll work together to navigate the challenges life throws your way.
        </p>
        <div className="pt-10 ml-50">
           <button className="px-8 py-3 border border-[#2e3525] text-[#2e3525] text-sm font-bold   uppercase hover:bg-[#2e3525] hover:text-white hover:border-[#2e3525] transition-all duration-300">
             let's chat &rarr;
           </button>
        </div>
      </div>
      
      {/* Right: Image */}
      <div className="relative w-full max-w-sm mx-auto md:max-w-md">
         {/* Arched Image */}
         <div className="aspect-[3/4] relative z-10">
            <div className="absolute inset-0 rounded-t-[10rem] md:rounded-t-[12rem] overflow-hidden bg-gray-300 shadow-xl">
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center"></div>
            </div>
         </div>
         
         {/* Overlapping Circle Image */}
         <div className="absolute -bottom-12 -right- md:-right-22 w-32 h-32 md:w-70 md:h-70 rounded-full   overflow-hidden  z-20">
            <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/9f889e1b-ba2b-4a6d-92e9-767dd3db67ae/lilac+template+white+lilac.jpeg?format=2500w')" }}></div>
         </div>
      </div>
    </section>
  );
}
