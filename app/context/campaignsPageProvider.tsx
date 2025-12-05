"use client";

import { createContext } from "react";
import { useState } from "react";

type CampaignsPageContextType = {
  contextPage: number;
  saveCurrentPage: (page: number) => void;
};

export const CampaignsPageContext = createContext<CampaignsPageContextType>({contextPage: 0, saveCurrentPage: () => {}});
  const getStoredPage = () => {
    const storedPage = localStorage.getItem("campaignsPage");
    return storedPage ? parseInt(storedPage) : 0;
  }

export default function CampaignsPageProvider({children}:{children: React.ReactNode}){
  const [contextPage, setContextPage] = useState(getStoredPage());

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