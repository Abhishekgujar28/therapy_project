import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#fbf7f1]">
      {/* Top Section */}
      <div className="max-w-full mx-auto px-6 lg:px-12 pt-12 pb-28">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          
          {/* Left: Brand & Contact */}
          <div className="md:col-span-2 space-y-8">
            <h2 className="text-5xl leading-tight font-serif font-medium text-[#223615]">
              Lilac Template
            </h2>

            <div className="space-y-2 text-xl text-[#223615] font-medium">
              <p>123 Example Road</p>
              <p>Minneapolis, MN</p>
            </div>

            <div className="space-y-2 text-xl text-[#223615] underline underline-offset-4 font-medium">
              <a href="mailto:email@example.com">email@example.com</a>
              <br />
              <a href="tel:5555555555">(555) 555-5555</a>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-8 ml-38">
            <h4 className=" font-serif text-5xl text-[#223615]">
              Hours
            </h4>
            <div className="text-xl text-[#223615] space-y-2">
              <p>Monday – Friday</p>
              <p>10am – 6pm</p>
            </div>
          </div>

          {/* Find */}
          <div className="space-y-8 ml-44">
            <h4 className="text-5xl ml-10 font-serif font-medium text-[#223615]">
              Find
            </h4>
            <div className="flex flex-col items-end space-y-2 text-xl underline underline-offset-4 text-[#223615]">
              <Link href="#">Home</Link>
              <Link href="#">Contact</Link>
              <Link href="#">Blog</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#e7e3db]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 text-center space-y-6">
          
          <div className="flex flex-wrap justify-center gap-6 text-sm underline underline-offset-4 text-[#223615]">
            <Link href="#">Privacy & Cookies Policy</Link>
            <Link href="#">Good Faith Estimate</Link>
            <Link href="#">Website Terms & Conditions</Link>
            <Link href="#">Disclaimer</Link>
          </div>

          <p className="text-sm text-[#223615]">
            Website Template Credits:{" "}
            <span className="underline underline-offset-4">
              Go Bloom Creative
            </span>
          </p>

          <p className="text-sm text-[#223615]">
            All Rights Reserved © {new Date().getFullYear()} Your Business Name Here, LLC.
          </p>
        </div>
      </div>
    </footer>
  );
}
