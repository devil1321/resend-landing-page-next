import Image from "next/image";
import { HeroComponents } from "./components/hero";

const Home = () => {
  return (
    <main>
      <HeroComponents.Hero />
    </main>
  );
}

export default Home