import LandingPage from '../components/LandingPage';
import FeaturedWork from '../components/FeaturedWork';
import Who from '../components/Who';
import Recommendations from '../components/Recommendations';

export default function HomePage() {
  return (
    <>
      <LandingPage />
      <FeaturedWork />
      <Who />
      <Recommendations />
      <div className="space"></div>
    </>
  );
}
