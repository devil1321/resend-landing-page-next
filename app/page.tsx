import { HeroComponents } from "./components/hero";
import { SlidersComponents } from "./components/sliders-intro";
import { AfternoonComponents } from "./components/afternoon";
import { FirstClassExperienceComponents } from "./components/first-class-experience";
import { DevelopComponents } from "./components/develop";
import { ReachHumansComponents } from "./components/reach-humans";
import { CeoComponents } from "./components/ceo";
import { ControlComponents } from "./components/control";
import { useEffect } from "react";
import { ExpectationsComponents } from "./components/expectations";
import { GlobalComponents } from "./components/global";


const Home = () => {
  return (
    <main>
      <HeroComponents.Hero />
      <SlidersComponents.Sliders />
      <AfternoonComponents.Afternoon />
      <FirstClassExperienceComponents.FirstClassExperience />
      <DevelopComponents.MacIde />
      <ReachHumansComponents.ReachHumans />
      <CeoComponents.Ceo />
      <ControlComponents.Control />
      <ExpectationsComponents.Expectations />
      <GlobalComponents.TitleFeature title="Email reimagined available today" text="" isButtons={true} />
      <GlobalComponents.Footer />
    </main>
  );
}

export default Home