"use client"
import { useFetch } from "@/app/hooks/useFetch";
import { use, useState } from "react";
import { Geist } from "next/font/google";
import Image from "next/image";
import { HelpModal } from "@/app/components/HelpModal";

const geist = Geist({ subsets: ['latin'], weight: '500' });

/**
 * page component for dynamic campaign pages based on brand slug
 * @param {Object} params - the route parameters
 * @param {Promise<{ slug: string }>} params.params - the slug parameter from the route
 * @returns { JSX.Element } The rendered campaign page
 */
export default function CampaignsPage({ params}: { params: Promise<{ slug: string }> }) {
  const [visible, setVisible] = useState(false);
  const [modalSettings, setModalSettings] = useState({});
  const { slug } = use(params)

  /**
   * Fetch campaign data for the specified brand slug
   */
  const { data = [], loading } = useFetch(`/api/campaigns?brand=${slug}`);

  /**
   * Handles closing the campaign details modal
   * @return {void}
   */
  const closeModal = (): void => {
    setVisible(false);
  }

  const setSettingsForModal = (url: string, title: string, locations: string, endDate: string) => {
    setModalSettings({
      id: "show-campaign",
      data: {
        urlImage: url,
        title: title,
        locations: locations,
        endDate: endDate
      }
    });
    setVisible(true);
  }
  
  return (
      loading ? (
        <div>Cargando campañas...</div>
      ) : (
        <>
          <main className="px-2 bg-gray-200">
            <section className="">
              <ul className="grid rounded-xl overflow-hidden gap-0.5">
                {data && data.map((campaign: { url: string; name: string; endDate: string; locations: string }) => (
                  <li 
                    className="flex gap-4 p-4 bg-white rounded-xs "
                    key={campaign.name}
                    onClick={() => setSettingsForModal(campaign.url, campaign.name, campaign.locations, campaign.endDate)}
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
          <HelpModal 
            visible={visible} 
            title="Detalles de la campaña" 
            onClose={closeModal}
            settings={modalSettings}/>
        </>
      )
  );
}