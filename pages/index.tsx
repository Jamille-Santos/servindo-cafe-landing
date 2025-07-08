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
      <main className="flex flex-col items-center min-h-screen w-full px-2">
        <ImageSection imageUrl={imageUrl} />
        <FactsSection facts={facts} />
        <DiscountSection code={discountCode} />
      </main>
      <Footer />
    </>
  );
}

function getRandomFacts(facts: string[], count: number) {
  const shuffled = [...facts].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// Busca os dados da API no servidor antes de renderizar a página
export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

  const [imgRes, factsRes, discRes] = await Promise.all([
    fetch(`${API_BASE}/api/coffees/random-image`),
    fetch(`${API_BASE}/api/coffees/facts`),
    fetch(`${API_BASE}/api/reservations/discount-code`)
  ]);

  if (!imgRes.ok || !factsRes.ok || !discRes.ok) {
    return { notFound: true };
  }

  const imageData = await imgRes.json();
  const factsData = await factsRes.json();
  const discountData = await discRes.json();

  console.log('imageData:', imageData);
  console.log('factsData:', factsData);
  console.log('discountData:', discountData);

  // Sorteia 1 ou 2 fatos aleatórios
  const factsCount = Math.floor(Math.random() * 2) + 1; // 1 ou 2
  const randomFacts = getRandomFacts(factsData ?? [], factsCount);

  return {
    props: {
      imageUrl: imageData?.url ?? null,
      facts: randomFacts,
      discountCode: discountData?.code ?? null
    }
  };
};