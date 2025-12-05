"use client"
import { useFetch } from "@/app/hooks/useFetch";
import Image from "next/image";
import { use } from "react";
import { Geist } from "next/font/google";

const geist = Geist({ subsets: ['latin'], weight: '500' });

/**
 * page component for dynamic campaign pages based on brand slug
 * @param {Object} params - the route parameters
 * @param {Promise<{ slug: string }>} params.params - the slug parameter from the route
 * @returns { JSX.Element } The rendered campaign page
 */
export default function CampaignsPage({ params}: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)

  /**
   * Fetch campaign data for the specified brand slug
   */
  const { data = [], loading } = useFetch(`/api/campaigns?brand=${slug}`);
  
  return (
      loading ? (
        <div>Cargando campañas...</div>
      ) : (
        <main className="py-4 px-2">
            <header className="flex mb-6">
              <Image
                src={`/brands/logo-${slug}.webp`} 
                alt={`${slug} logo`} 
                width={200}
                height={30}
                loading="eager"
              />
            </header>
          <section className="">
            <ul className="grid rounded-xl overflow-hidden gap-0.5">
              {data && data.map((campaign: { url: string; name: string, endDate: string }) => (
                <li 
                  className="flex gap-4 p-4 bg-gray-200 rounded-xs "
                  key={campaign.name}
                >
                  <div className="w-14 aspect-square relative rounded-sm overflow-hidden">
                    <Image className="object-cover" 
                      src={campaign.url} 
                      alt={campaign.name}
                      sizes="width: 100%"
                      fill
                    />
                  </div>
                  <section className="flex flex-col justify-center">
                    <p className={`text-black font-semibold ${geist.className}`}>{campaign.name}</p>
                    <p className=" text-black/80 text-sm">
                      Fin de campaña: {campaign.endDate}
                      </p>
                  </section>

                </li>
              ))}
            </ul>
          </section>
        </main>
      )
  );
}