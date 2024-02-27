import { db } from "@/db";
import Link from "next/link";

export default async function TransporterInfoPage() {
  const transporters = await db.transporter.findMany();

  const renderedTransporters = transporters.map((transporter) => {
    return (
      <Link href={`/transporters/${transporter.id}`} key={transporter.id} className="flex justify-between items-center p-2 border rounded">
        <div>{transporter.name}</div>
        <div>View</div>
      </Link>
    )
  })

  return (
    <div>
      <div className="flex m-2 justify-between items-center">
        <h1 className="text-xl font-bold">Transporters</h1>
        <Link href="/transporters/new" className="border p-2 border-rounded">New</Link>
      </div>
      <div className="flex gap-2 flex-col">
        {renderedTransporters}
      </div>
      <div>
        <div className="flex m-2 justify-between items-center">
          <Link href="/" className="border p-2 border-rounded">Back</Link>
        </div>
      </div>
    </div>
  );
}
