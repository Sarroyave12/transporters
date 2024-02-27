import { db } from "@/db";
import { redirect, notFound } from "next/navigation";
import Link from "next/link";

export default function TransporterCreatePage() {
  async function createTransporter(formData: FormData) {
    // this need to be a server action 
    'use server';

    // check the user's inputs and make sure they're valid
    const name = formData.get('name') as string;
    const company = formData.get('company') as string;
    const vehicle = formData.get('vehicle') as string;

    // create a new record in the database 
    const transporter = await db.transporter.create({
      data: {
        name,
        company,
        vehicle
      }
    });

    // redirect the user back to the home page
    redirect('/');
  }


  return (
    <form action={createTransporter}>
      <div className="flex m-2 justify-between items-center">
        <h3 className="font-bold m-3">Create a Transporter</h3>
        <Link href="/transporters/info" className="border p-2 border-rounded">Back</Link>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label className="w-12" htmlFor="name">
            Name
          </label>
          <input
            name="name"
            className="border rounded p-2 w-full"
            id="name"
          />
        </div>
        <div className="flex gap-4">
          <label className="w-13" htmlFor="company">
            Company
          </label>
          <input
            name="company"
            className="border rounded p-2 w-full"
            id="company"
          />
        </div>
        <div className="flex gap-4">
          <label className="w-12" htmlFor="vehicle">
            Vehicle
          </label>
          <input
            name="vehicle"
            className="border rounded p-2 w-full"
            id="vehicle"
          />
        </div>
        <button type="submit" className="rounded p-2 bg-blue-200">
          Create
        </button>
      </div>
    </form>
  )
}