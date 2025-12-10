"use client"
import { useEffect } from "react";
import Image from "next/image";

import { redirect } from 'next/navigation'
import { CgSpinner } from "react-icons/cg"


export default function Home() {

  /**
   * Redirect to the default campaigns page after a short delay
   */
  useEffect(() => {
    setTimeout(() => {
      redirect("/campanias/etn");
    },1600)
  }, []);

  return (
    <main className="bg-black w-full h-screen flex flex-col justify-center items-center gap-8">
      <section className="w-3/4 max-w-3xl aspect-square relative">
        <Image
          className="animate-fade-in object-contain"
          src="/jasubip-logo.png"
          alt="Jasubip Logo"
          fill
        />
      </section>
      <CgSpinner className="animate-spin text-white" size={64}/>
    </main>
  )
}

