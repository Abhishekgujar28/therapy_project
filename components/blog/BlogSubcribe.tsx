import React from 'react';

const BlogSubscribe = () => {
  return (
    <section className="bg-[#7e7b46] py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto border border-white p-12 md:p-20 text-center">
        <h2 className="text-4xl md:text-5xl font-medium text-white mb-6">Subscribe</h2>
        <p className="text-white text-xl mb-10">
          Sign up with your email address to receive news and updates.
        </p>
        
        <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto mb-8">
          <input 
            type="email" 
            placeholder="Email Address" 
            className="flex-1 bg-white px-6 py-4 outline-none placeholder-gray-400 text-gray-800"
          />
          <button 
            type="button" 
            className="bg-[#7e7b46] border border-white text-white px-8 py-4 uppercase tracking-widest text-sm hover:bg-white hover:text-[#858864] transition-colors"
          >
            Sign Up
          </button>
        </form>
        
        <p className="text-white text-xl">We respect your privacy.</p>
      </div>
    </section>
  );
};

export default BlogSubscribe;
