import Link from "next/link";
import aboutusImg from "../../../public/aboutus.jpg";
import Hero from "../components/hero";

export default function AboutUsPage() {
  return (
    <>
      <div className="flex m-2 justify-between items-center">
        <Link href="/" className="border p-2 border-rounded">Back</Link>
      </div>
      <Hero 
      imgData={aboutusImg} 
      imgAlt="about us" 
      title="About Us"
      text="some paraghraph" 
      />
    </>
  );
}
