import { db } from "@/db";
import { notFound } from "next/navigation";
import TransporterEditform from "@/app/components/trasnporter-edit-form";

interface TransporterEditPageProps {
  params: {
    id: string
  }
}

export default async function TransporterEditPage(props: TransporterEditPageProps) {
  const id = parseInt(props.params.id);
  const transporter = await db.transporter.findFirst({
    where: { id }
  });

  if (!transporter) {
    notFound();
  }

  return (
    <div>
      <TransporterEditform transporter={transporter} />
    </div>
  )
}