import ContactHero from '@/components/contact/ContactHero';
import ContactIntro from '@/components/contact/ContactIntro';
import ContactNoteBox from '@/components/contact/ContactNoteBox';
import BookingSection from '@/components/contact/BookingSection';
import OfficeSection from '@/components/contact/OfficeSection';
import SocialGallery from '@/components/contact/SocialGallery';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Dr. Maya Reynolds |  Santa Monica Therapist",
  description: "Get in touch to schedule a consultation or ask questions. Dr. Maya Reynolds is here to support you on your journey to wellness.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen font-sans">
      <div className="bg-primarySoft pb-12">
        <ContactHero />
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-0 pb-24">
           <div className="flex flex-col lg:flex-row gap-16 items-start">
              <div className="lg:w-1/2">
                 <ContactIntro />
              </div>
              <div className="">
                 <ContactNoteBox />
              </div>
           </div>
        </div>
      </div>
      
      <BookingSection />
      <SocialGallery />
      {/* <Footer/> */}
    </main>
  );
}
