"use client"
import { useFetch } from "@/app/hooks/useFetch";
import Image from "next/image";
import { use } from "react";

export default function EtnCampaignsPage({ params}: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const { data = [], loading } = useFetch(`/api/campaigns?brand=${slug}`);
  
  return (
      loading ? (
        <div>Cargando campañas...</div>
      ) : (
        <>
            <header className="flex justify-end p-4">
              <Image
                src={`/brands/logo-${slug}.webp`} 
                alt={`${slug} logo`} 
                width={254}
                height={39}
                loading="eager"
              />
            </header>
          <section className="p-4">
            <ul className="grid gap-4">
              {data && data.map((campaign: { url: string; name: string, endDate: string }) => (
                <li 
                  className="flex gap-4 p-2 bg-gray-100 rounded-xl"
                  key={campaign.name}
                >
                  <div className="w-24 aspect-video relative rounded-lg overflow-hidden">
                    <Image className="object-cover" 
                      src={campaign.url} 
                      alt={campaign.name}
                      sizes="width: 100%"
                      fill
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
        </>
      )
  );
}