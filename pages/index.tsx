import { GetServerSideProps } from 'next';
import Navbar from '../components/Navbar';
import ImageSection from '../components/ImageSection';
import FactsSection from '../components/FactsSection';
import DiscountSection from '../components/DiscountSection';
import Footer from '../components/Footer';

interface HomeProps {
  imageUrl: string;
  facts: string[];
  discountCode: string;
}

export default function Home({ imageUrl, facts, discountCode }: HomeProps) {
  return (
    <>
      <Navbar />
      <main className="scroll-smooth">
        <ImageSection imageUrl={imageUrl} />
        <FactsSection facts={facts} />
        <DiscountSection code={discountCode} />
      </main>
      <Footer />
    </>
  );
}

// Fetch data from API routes
export const getServerSideProps: GetServerSideProps = async () => {
  const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
  const [imgRes, factsRes, discRes] = await Promise.all([
    fetch(`${API_BASE}/api/coffees/random-image`),
    fetch(`${API_BASE}/api/coffees/facts`),
    fetch(`${API_BASE}/api/reservations/discount-code`)
  ]);
  const imageData = await imgRes.json();
  const factsData = await factsRes.json();
  const discountData = await discRes.json();
  return {
    props: {
      imageUrl: imageData.imageUrl,
      facts: factsData.facts,
      discountCode: discountData.code
    }
  };
};