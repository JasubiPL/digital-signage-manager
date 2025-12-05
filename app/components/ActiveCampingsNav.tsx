"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { 
  MdOutlineKeyboardArrowRight, 
  MdOutlineKeyboardArrowLeft 
} from "react-icons/md";

/**
 * List of brand identifiers used for navigation.
 * @constant {string[]}
 */
const LIST_OF_BRANDS: string[] = ["etn", "gho", "costaline"];

export const ActiveCampaignsNav = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const router = useRouter();

  /**
   * Navigate to the previous page in the list of brands.
   * @returns {void}
   */
  const previousPage = (): void => {
    let newPage = currentPage - 1;
    if (newPage < 0) {
      newPage = LIST_OF_BRANDS.length - 1;
    }
    setCurrentPage(newPage);
    router.push(`/campanias-${LIST_OF_BRANDS[newPage]}`);
  };

  /**
   * Navigate to the next page in the list of brands.
   * @returns {void}
   */
  const nextPage = (): void => {
    let newPage = currentPage + 1;
    if (newPage >= LIST_OF_BRANDS.length) {
      newPage = 0;
    }
    setCurrentPage(newPage);
    router.push(`/campanias-${LIST_OF_BRANDS[newPage]}`);
  };

  return (
    <nav className="w-full sticky top-0 bg-red-700 z-1 ">
      <div className="p-4 flex justify-between items-center">
        <button onClick={previousPage} className="bg-transparent border-none">
          <MdOutlineKeyboardArrowLeft className="text-3xl fill-red-700 bg-white rounded-full"/>
        </button>
        <p className="text-lg text-white">Campañas activas {LIST_OF_BRANDS[currentPage].toUpperCase()}</p>
        <button onClick={nextPage} className="bg-transparent border-none">
          <MdOutlineKeyboardArrowRight className="text-3xl fill-red-700 bg-white rounded-full"/>
        </button>
      </div>
    </nav>
  );
};

