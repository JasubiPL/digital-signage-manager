"use client"

import { redirect } from 'next/navigation'
import {useContext, useEffect} from 'react'

import { CampaignsPageContext } from './context/campaignsPageProvider';

export default function Home() {
  const {saveCurrentPage} = useContext(CampaignsPageContext);

  /**
   * Set the current page to the first page on component mount.
   * @returns {void}
   */
  useEffect(() => {
    saveCurrentPage(0);
  }, [saveCurrentPage]);
  
  redirect("/campanias-etn");
}

