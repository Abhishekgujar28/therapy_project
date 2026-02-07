
import MyOffice from '@/components/MyOffice';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Office | Dr. Maya Reynolds',
  description: 'Visit my office in Santa Monica, CA. View location, hours, and photos of the therapy space.',
};

export default function MyOfficePage() {
  return (
    <main>
      <MyOffice />
    </main>
  );
}
