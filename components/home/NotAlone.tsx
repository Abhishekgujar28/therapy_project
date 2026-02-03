export default function NotAlone() {
  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-2">
      {/* Left: Image (Order 2 on mobile, Order 1 on desktop) */}
      <div className="relative h-64 md:h-auto min-h-[500px] lg:min-h-[700px] bg-gray-200 order-1 md:order-1">
         <div className="absolute inset-0 bg-cover bg-center opacity-90" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop')" }}></div>
      </div>
 
      
      <div className="bg-[#c2bfcb] px-6 md:px-10 lg:px-14 py-16 md:py-40 flex flex-col justify-center items-start space-y-6 order-2 md:order-2">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#223614] leading-tight">
          You don&apos;t have to do this all alone.
        </h2>
        <p className="text-xl font-bold tracking-wide text-[#223614]">
          If you are feeling any of these, there is hope:
        </p>
        
        <ul className="space-y-4 text-[#223614] text-sm md:text-xl pl-8 text-[#223614]">
          {/* Custom bullets or simple list */}
          {[
            "Persistent feelings of sadness or hopelessness",
            "Trouble focusing or making decisions",
            "Difficulty maintaining relationships",
            "Feeling constantly exhausted or unmotivated",
            "A pervasive sense of being overwhelmed"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-primary mt-1.5 text-[10px]">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        
        <p className="text-2xl text-[223614] font-medium font-sans pt-4">
          With empathy and guidance, we&apos;ll work together to navigate the challenges life throws your way.
        </p>
        
          <div className="w-full border-t border-[#2e3525]/30 py-6 text-center hover:bg-[#223614] hover:text-white relative bottom-[-160px] ">
           <button className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase hover:opacity-70 flex items-center justify-center gap-2 transition-opacity mx-auto ">
           work with me  <span>&rarr;</span>
           </button>
        </div>
      </div>
    </section>
  );
}
