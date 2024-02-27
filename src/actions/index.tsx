'use server';

import { db } from "@/db";
import { redirect } from "next/navigation";

export async function deleteTransporter(id: number){
  await db.transporter.delete({
    where: {id}
  });

  redirect('/transporters/info')
}