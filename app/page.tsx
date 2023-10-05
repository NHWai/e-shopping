import CategoryStore from "./components/CategoryStore";
import Contact from "./components/Contact";
import Discount from "./components/Discount";
import HeroPage from "./components/HeroPage";
import Membership from "./components/Membership";
import NewReleased from "./components/NewReleased";
import TryNew from "./components/TryNew";

export default function Home() {
  return (
    <>
      <HeroPage />
      <Discount />
      <Membership />
      <NewReleased />
      <TryNew />
      <CategoryStore />
      <Contact />
    </>
  );
}
