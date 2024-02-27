import Link from "next/link";
import servicesImg from "../../../public/services.jpg";
import Hero from "../components/hero";

export default function Home() {
  return (
    <>
      <div className="flex m-2 justify-between items-center">
        <Link href="/" className="border p-2 border-rounded">Back</Link>
      </div >
      <Hero 
      imgData={servicesImg} 
      imgAlt="services" 
      title="Our Services" 
      text="some paraghraph" 
      />
    </>
  );
}
