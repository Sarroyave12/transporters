import type { Transporter } from "@prisma/client";

interface TransporterEditformProps {
  transporter: Transporter;
}

export default function TransporterEditform({ transporter }: TransporterEditformProps) {
  return (
    <div>
      Client component has transporter with title {transporter.name}
    </div>
  )
}