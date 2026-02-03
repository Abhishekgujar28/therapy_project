export default function CTA() {
  return (
    <section className="w-full bg-[#7e7b46] px-6 md:px-10 lg:px-14 py-20 md:py-32 flex flex-col items-center text-center space-y-8">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-cream">
        Get started today.
      </h2>
      <p className="text-[#fbf6f1] max-w-xl text-sm md:text-[21px] leading-relaxed font-medium">
        Ready to take the first step towards a happier, healthier you? Contact me to book your first session. I look forward to starting this therapeutic journey with you.
      </p>
      <button className="mt-8 px-10 py-3 border border-cream text-cream text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase hover:bg-cream hover:text-primary transition-all duration-300">
        Contact Me &rarr;
      </button>
    </section>
  );
}
