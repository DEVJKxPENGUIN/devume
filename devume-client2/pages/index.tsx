import Layout from '../components/layout/Layout';
import HeroSection from '../components/home/HeroSection';
import ResumeShowcaseSection from '../components/home/ResumeShowcaseSection';

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <ResumeShowcaseSection />
    </Layout>
  );
}