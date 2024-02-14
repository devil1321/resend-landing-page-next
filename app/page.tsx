import { HeroComponents } from "./components/hero";
import { SlidersComponents } from "./components/sliders-intro";
import { AfternoonComponents } from "./components/afternoon";
import { FirstClassExperienceComponents } from "./components/first-class-experience";


const Home = () => {
  return (
    <main>
      <HeroComponents.Hero />
      <SlidersComponents.Sliders />
      <AfternoonComponents.Afternoon />
      <FirstClassExperienceComponents.FirstClassExperience />
    </main>
  );
}

export default Home