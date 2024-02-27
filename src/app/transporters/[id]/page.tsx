import { db } from "@/db";
import { notFound } from "next/navigation";
import Link from "next/link";
import { IoMdInformationCircle } from "react-icons/io";
import * as actions from '@/actions';


interface TransporterShowPageProps {
  params: {
    id: string
  }
}

export default async function TransporterShowPage(props: TransporterShowPageProps) {
  await new Promise((r) => setTimeout(r, 1000));

  const transporter = await db.transporter.findFirst({
    where: { id: parseInt(props.params.id) }
  });

  if (!transporter) {
    return notFound();
  }

  const deleteTransporterAction = actions.deleteTransporter.bind(null, transporter.id);


  return (
    <div>
      <div className="flex m-4 justify-between items-center">
        <h1 className="text-xl font-bold">Transporter Info</h1>
        <IoMdInformationCircle className="size-10" />
        <div className="flex gap-3">
          <Link href={`/transporters/${transporter.id}/edit`} className="p-2 border rounded">Edit</Link>
          <form action={deleteTransporterAction}>
            <button className="p-2 border rounded">Delete</button>
          </form>
          <Link href='/transporters/info' className="p-2 border rounded">Back</Link>
        </div>
      </div>
      <pre className="p-3 border rounded bg-gray-100 border-gray-100">
        <h1 className="text-xl">Name: {transporter.name}</h1>
        <h1 className="text-xl">Company: {transporter.company}</h1>
        <h1 className="text-xl">Vehicle: {transporter.vehicle}</h1>
      </pre>
    </div>
  )
}