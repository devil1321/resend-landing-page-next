import Image from "next/image";
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
      <GlobalComponents.Nav />
      <HeroComponents.Hero />
      <SlidersComponents.Sliders />
      <AfternoonComponents.Afternoon />
      <FirstClassExperienceComponents.FirstClassExperience />
      <DevelopComponents.MacIde />
      <ReachHumansComponents.ReachHumans />
      <CeoComponents.Ceo />
      <ControlComponents.Control />
      <ExpectationsComponents.Expectations />
      <GlobalComponents.TitleFeature title="Email available today" text="" isButtons={true} />
      <Image className="mx-auto w-5/6" src="/assets/resend-image.png" alt="resend-img" width={1200} height={300}/>
      <GlobalComponents.Footer />
    </main>
  );
}

export default Home