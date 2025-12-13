"use client"

import Image from "next/image";
import { use, useState } from "react";
import { Geist } from "next/font/google";
import { FcDeleteDatabase } from "react-icons/fc";

import { useFetch } from "@/app/hooks/useFetch";
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

  /**
   * Sets the modal settings and makes it visible
   * @param {string} url - The URL of the campaign image
   * @param {string} title - The title of the campaign
   * @param {string} locations - The locations of the campaign
   * @param {string} end_date - The end date of the campaign
   * @return {void}
   */
  const setSettingsForModal = (url: string, title: string, locations: string, end_date: string) => {
    setModalSettings({
      id: "show-campaign",
      data: {
        urlImage: url,
        title: title,
        locations: locations,
        endDate: end_date
      }
    });
    setVisible(true);
  }
  
  return (
      loading ? (
        <ul className="grid rounded-xl overflow-hidden gap-0.5 max-w-4xl mx-auto animate-pulse">
          {[0,2,3,4,5,6,7].map((campaign: number) => (
            <li 
              className="flex gap-4 p-4 bg-white rounded-xs "
              key={campaign}
            >
              <div className="w-14 aspect-square rounded-sm bg-gray-300">
              </div>
              <section className="flex flex-col justify-center">
                <p className={`text-gray-300 bg-gray-300`}>xxxxxxxxxxxxxxx</p>
                <p className=" text-gray-300 text-xs bg-gray-300 mt-2">
                xxxxxxxxxxxxxxx
                </p>
              </section>

            </li>
          ))}
        </ul>
      ) : (
        <>
          <main className="px-2 bg-gray-200 min-h-dvh max-w-4xl mx-auto">
            <section className={`${visible ? "scroll-my-0" : ""} py-4`}>
              <ul className="grid rounded-xl overflow-hidden gap-0.5">
                {data.length ? data.map((campaign: { url: string; campaign: string; end_date: string; locations: string }) => (
                  <li 
                    className="flex gap-4 p-4 bg-white rounded-xs "
                    key={campaign.campaign}
                    onClick={() => setSettingsForModal(campaign.url, campaign.campaign, campaign.locations, campaign.end_date)}
                  >
                    <div className="w-14 aspect-square relative rounded-sm overflow-hidden">
                      <Image className="object-cover" 
                        src={campaign.url} 
                        alt={campaign.campaign}
                        sizes="width: 100%"
                        fill
                      />
                    </div>
                    <section className="flex flex-col justify-center">
                      <p className={`text-black font-semibold ${geist.className}`}>{campaign.campaign}</p>
                      <p className=" text-black/80 text-sm">
                        Duración - {campaign.end_date}
                        </p>
                    </section>

                  </li>
                )): <NotFound />}
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

/** Component to display when no campaign data is found
 * @returns {JSX.Element} The rendered not found data
 */
const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[80dvh] bg-red-700">
      <FcDeleteDatabase size={80} />
      <h2 className="text-5xl text-white font-bold mb-4">Sin Datos</h2>
      <p className="text-white">La campaña que buscas no existe.</p>
    </div>
  )
}