"use client"

import { redirect } from 'next/navigation'
import {useContext, useEffect} from 'react'

import { CampaignsPageContext } from './context/campaignsPageProvider';

export default function Home() {
  const {setContextPage} = useContext(CampaignsPageContext);

  /**
   * Set the current page to the first page on component mount.
   * @returns {void}
   */
  useEffect(() => {
    setContextPage(0);
  }, [setContextPage]);
  
  redirect("/campanias/etn");
}

