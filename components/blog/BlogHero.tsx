import React from "react";

const BlogHero = () => {
  return (
    <section className="bg-[#fbf6f1]">
      <div className="max-w-8xl mx-auto px-6 md:px-12 lg:px-38 py-16 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-0 ">
        <div className="relative w-[470px] h-[420px] md:h-[780px] overflow-hidden rounded-t-[380px]">
          <img
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop"
            alt="Reading with tea"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col mt-38">
          <h1 className="text-5xl md:text-8xl font-medium mb-6">The Lilac Blog</h1>
          <p className="text-base md:text-2xl  leading-relaxed max-w-[330px]">
            My tiny corner of the internet where I talk about all things healing, heart, and wholeness.
            
          </p>
          <p className="text-base md:text-xl font-bold leading-relaxed max-w-[330px] mt-8">
            Glad you’re here.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
