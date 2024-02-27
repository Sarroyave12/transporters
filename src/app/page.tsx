import homeImg from "../../public/home.jpg";
import Hero from "../app/components/hero";
import Links from "./components/links";

export default function Home() {
  return (
    <>
      <Links />
      <Hero 
      imgData={homeImg} 
      imgAlt="logistic" 
      title="LogiSmart" 
      text="Connecting destinations, delivering trust"
      />
    </>
  );
}

