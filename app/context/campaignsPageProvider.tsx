"use client";

import { createContext, JSX } from "react";
import { useState } from "react";

/**
 * Type definition for the CampaignsPageContext.
 */
type CampaignsPageContextType = {
  contextPage: number;
  saveCurrentPage: (page: number) => void;
};

/**
 * Context to manage the current page of campaigns.
 */
export const CampaignsPageContext = createContext<CampaignsPageContextType>({contextPage: 0, saveCurrentPage: () => {}});
  
/**
 * Retrieve the stored page number from localStorage.
 * @returns {number} The stored page number or 0 if not found.
 */
const getStoredPage = (): number => {
    const storedPage = localStorage.getItem("campaignsPage");
    return storedPage ? parseInt(storedPage) : 0;
  }

/**
 * Provider component for CampaignsPageContext.
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child components.
 * @returns {JSX.Element} The provider component.
 */
export default function CampaignsPageProvider({children}:{children: React.ReactNode}): JSX.Element {
  const [contextPage, setContextPage] = useState(getStoredPage());

  /**
   * Save the current page number to localStorage and update the context state.
   * @param {number} page - The page number to save.
   */
  const saveCurrentPage = (page: number) => {
    localStorage.setItem("campaignsPage", page.toString());
    setContextPage(page);
  }

  return (
    <CampaignsPageContext.Provider value={{contextPage, saveCurrentPage}}>
      {children}
    </CampaignsPageContext.Provider>
  )
  }