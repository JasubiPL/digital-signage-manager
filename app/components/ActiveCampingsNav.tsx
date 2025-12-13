"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Geist } from "next/font/google";
const geist = Geist({ subsets: ['latin'], weight: '400' });

/**
 * List of brand identifiers used for navigation.
 * @constant {string[]}
 */
const LIST_OF_BRANDS: string[] = ["etn", "costaline", "gho",];


export const ActiveCampaignsNav = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [activeIndex, setActiveIndex] = useState(() => {
    const slug = pathname.split("/campanias/")[1];
    const index = LIST_OF_BRANDS.indexOf(slug)
    return index;
  });

  const navigate = (index: number) => {
    setActiveIndex(index);
    router.push(`/campanias/${LIST_OF_BRANDS[index]}`);
  }

  return (
    <div className="max-w-4xl mx-auto">
      <header className="px-4 pt-4 pb-2 bg-gray-200">
        <p className="text-xl font-bold">Campañas activas</p>
      </header>
      <nav className="sticky top-0 bg-gray-200 z-10 p-2 shadow-black/60 border-white">
        <div className="flex gap-2">
          {
            LIST_OF_BRANDS.map((brand, index) => (
              <button 
                className={`min-w-16 p-2 rounded-lg text-sm ${geist.className} ${index === activeIndex ? 'bg-red-500 text-white' : 'bg-white text-black'}`}
                key={brand}
                onClick={() => navigate(index)}
              >
                {brand.toUpperCase()}
              </button>
            ))
          }
        </div>
      </nav>
    </div>
  )
};

