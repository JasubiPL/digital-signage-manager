"use client"
import { useFetch } from "@/app/hooks/useFetch";
import Image from "next/image";

export default function EtnCampaignsPage() {
  const { data = [], loading } = useFetch('/api/etn-campaigns');
  return (
    <>
      {loading ? (
        <div>Cargando campañas...</div>
      ) : (
        <section className="p-4">
          <ul className="grid gap-4">
            {data && data.map((campaign: { url: string; name: string, endDate: string }) => (
              <li 
                className="flex gap-4 p-2 bg-gray-100 rounded-xl"
                key={campaign.name}
              >
                <div className="w-24 aspect-video relative rounded-lg overflow-hidden">
                  <Image 
                  src={campaign.url} 
                  alt={campaign.name} 
                  fill
                  objectFit="cover"
                />
                </div>
                <section className="flex flex-col justify-center">
                  <p className="text-red-500 text-xl">{campaign.name}</p>
                  <p className=" text-xs">
                    Fin de campaña: {campaign.endDate}
                    </p>
                </section>

              </li>
            ))}
          </ul>
        </section>
      )

      }
    </>
  );
}