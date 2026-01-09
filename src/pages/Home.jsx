// frontend/src/pages/Home.jsx
import HeroSection from '../components/HeroSection.jsx'
import FeatureSection from '../components/FeatureSection.jsx'
import TechStackSection from '../components/TechStackSection.jsx'
import ExploreCards from '../components/ExploreCards.jsx'

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeatureSection />
      <ExploreCards />
      <TechStackSection />
    </div>
  )
}

export default Home