import React from 'react';

const BookingSection = () => {
  return (
    <section className="bg-[#e5e0da] py-24 px-6 text-center">
       <h2 className="text-3xl md:text-6xl font-medium mb-6">Book an appointment.</h2>
       <p className="max-w-xl mx-auto mb-16 text-sm md:text-base text-start">
         Add some text here if you like, and add your scheduling widget below (you
         can get one by signing up for a scheduling account through
         Squarespace, the top-tier plan is HIPAA compliant OR you can use your
         client portal).
       </p>
       <div className=" p-8 max-w-xl mx-auto text-left">
        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-base font-[#223614] font-medium text-mb-3"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border border-[#223614] px-4 py-3 focus:outline-none focus:border-gray-500 transition-colors bg-transparent"
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#223614] mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-[#223614] px-4 py-3 focus:outline-none focus:border-gray-500 transition-colors bg-transparent"
              placeholder="email@example.com"
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-[#223614] mb-1"
            >
              How can we help?
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full border border-[#223614] px-4 py-3 focus:outline-none focus:border-gray-500 transition-colors bg-transparent resize-none"
              placeholder="Tell us a bit about what you're looking for..."
              required
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-[#223614] text-white px-8 py-4 text-xs uppercase tracking-widest font-bold hover:bg-[#314720] transition-colors"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BookingSection;
