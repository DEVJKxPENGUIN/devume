import Layout from '../components/layout/Layout';
import HeroSection from '../components/home/HeroSection';
import ResumeShowcaseSection2 from '../components/home/ResumeShowcaseSection2';

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <ResumeShowcaseSection2 />
    </Layout>
  );
}