import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AdSpace from '@/components/layout/AdSpace';
import TideGrid from '@/components/tide/TideGrid';
import InfoSection from '@/components/info/InfoSection';
import { currentCity, todayTides } from '@/data/mockData';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header cityName={currentCity.name} cityState={currentCity.state} />
      
      <main className="container mx-auto px-4 py-6 sm:py-8">
        <AdSpace position="top" />
        
        <TideGrid tides={todayTides} />
        
        <AdSpace position="middle" />
        
        <InfoSection />
        
        <AdSpace position="middle2" />
        
        <AdSpace position="bottom" />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
