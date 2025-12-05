"use client";

import { createContext, JSX, useEffect } from "react";
import { useState } from "react";

/**
 * Type definition for the CampaignsPageContext.
 */
type CampaignsPageContextType = {
  contextPage: number;
  setContextPage: (page: number) => void;
};

/**
 * Context to manage the current page of campaigns.
 */
export const CampaignsPageContext = createContext<CampaignsPageContextType>({contextPage: 0, setContextPage: () => {} });
  

/**
 * Provider component for CampaignsPageContext.
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child components.
 * @returns {JSX.Element} The provider component.
 */
export default function CampaignsPageProvider({children}:{children: React.ReactNode}): JSX.Element {
  const [contextPage, setContextPage] = useState(() => {
    const storedPage = typeof window !== "undefined" ? window.localStorage.getItem("campaignsPage") : null;
    return storedPage ? parseInt(storedPage) : 0;
  });

  useEffect(() => {
    window.localStorage.setItem("campaignsPage", contextPage.toString());
  }, [contextPage]);

  return (
    <CampaignsPageContext.Provider value={{contextPage, setContextPage}}>
      {children}
    </CampaignsPageContext.Provider>
  )
  }