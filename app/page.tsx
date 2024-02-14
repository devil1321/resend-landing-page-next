import { HeroComponents } from "./components/hero";
import { SlidersComponents } from "./components/sliders-intro";
import { AfternoonComponents } from "./components/afternoon";

const Home = () => {
  return (
    <main>
      <HeroComponents.Hero />
      <SlidersComponents.Sliders />
      <AfternoonComponents.Afternoon />
    </main>
  );
}

export default Home