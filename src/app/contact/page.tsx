import Link from "next/link";
import contactImg from "../../../public/contact.jpg";
import Hero from "../components/hero";

export default function ContactPage() {
  return (
    <>
    <div className="flex m-2 justify-between items-center">
      <Link href="/" className="border p-2 border-rounded">Back</Link>
    </div >
      <Hero 
      imgData={contactImg} 
      imgAlt="contact" 
      title="Contact Us" 
      text="some paragraph"
      />
    </>
  );
}

