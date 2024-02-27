import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full absolute text-white z-10">
      <nav className="container relative flex flex-wrap items-center justify-between mx-auto p-8">
        <Link href="/" className="font-bold text-3xl">Home</Link>
        <div className="space-x-4 text-xl">
          {/* <Link href="/transporters/aboutus">About Us</Link>
          <Link href="/services">Services</Link>
          <Link href="/transporters/info">Transporters</Link>
          <Link href="/transporters/contact">Contact</Link> */}
        </div>
      </nav>
    </div>
  )
}