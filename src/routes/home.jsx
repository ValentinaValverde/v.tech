import LandingPage from '../components/LandingPage';
import FeaturedWork from '../components/FeaturedWork';
import Who from '../components/Who';
import Recommendations from '../components/Recommendations';
import HomeContact from '../components/HomeContact';

export default function HomePage() {
  return (
    <>
      <LandingPage />
      <FeaturedWork />
      <Who />
      <Recommendations />
      <HomeContact />

      <div className="space"></div>
    </>
  );
}
