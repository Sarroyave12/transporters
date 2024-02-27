import Link from "next/link";

export default function Links(){
  return (
    <div className="flex m-2 justify-between items-center">
        <h1 className="text-xl font-bold">Home</h1>
        <div className="flex flex-row justify-between gap-2">
          <Link href="/services" className="border p-2 border-rounded">Services</Link>
          <Link href="/transporters/info" className="border p-2 border-rounded">Transporters</Link>
          <Link href="/aboutus" className="border p-2 border-rounded">About Us</Link>
          <Link href="/contact" className="border p-2 border-rounded">Contact</Link>
        </div>
      </div>
  )
}