import Image from "next/image";
import { HeroComponents } from "./components/hero";

export default function Home() {
  return (
    <main>
      <HeroComponents.Hero />
    </main>
  );
}
