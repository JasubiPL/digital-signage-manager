"use client"
import Image from "next/image";
import { IoClose, IoCalendar } from "react-icons/io5";
import { useEffect, useState, useRef, useLayoutEffect } from "react";

type HelpModalProps = {
  title?: string;
  full?: boolean;
  settings?: ModalSettings;
  visible?: boolean;
  onClose?: () => void;
}

type ModalSettings = {
  id?: string;
  data?: CampingsSettings;

}

type CampingsSettings = {
  urlImage?: string;
  title?: string;
  locations?: string;
  endDate?: string;
}

const ShowCampign = ({ data }: { data: CampingsSettings }) =>{
  //const [maxLocationsHeigth] = useState<string>(`max-h-[${window.innerHeight * 0.5}px]`);

  return (
    <article className="w-full flex flex-col items-center">
      <div className="w-[calc(100%-2rem)] aspect-video bg-black overflow-hidden relative">
        <Image 
          className="object-contain"
          src={data.urlImage || ""}
          alt={data.title || "Campaign Image"}
          fill
        />
      </div>
      <div className="p-4 w-full">
        <h3 className="w-full text-black text-lg font-bold">
          {data.title}
        </h3>
        <p className="w-full text-gray-600">
          <span className="mr-1">
            <IoCalendar className="inline mb-1 mr-2" />
            Duración - 
          </span> 
         
            {data.endDate}
      
        </p>
      </div>

      <section className={`px-4 w-full flex flex-col overflow-y-auto ${/*maxLocationsHeigth*/""}`}>
        <p className="font-semibold text-lg mb-2">Ubicaciones:</p>
        <div className="text-center">
          {
            data.locations?.split(",").map((location: string) => (
              <span 
                key={location} 
                className="inline-block bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm font-semibold m-1"           
              >
                {location}
              </span>
            ))
          }
        </div>
      </section>
    </article>
  )
}

export const HelpModal = ({ 
    title = "Help", 
    full = false, 
    settings = {}, 
    visible = false, 
    onClose = () => {}
  }: HelpModalProps) => {
  const [show, setShow] = useState(visible);
  const [modalAnimation, setModalAnimation] = useState({} as { moveAnimate: string; fadeAnimate: string });
  const [isFull, setIsFull] = useState<boolean>(full);
  const [isMobile, setIsMobile] = useState<boolean>();
  const modalRef = useRef<HTMLDivElement>(null);

  /** 
   * Handle modal close action 
   * @returns {void}
   */
  const closeModal = (): void => {
    setModalAnimation({ moveAnimate: "animate-turn-down", fadeAnimate: "animate-fade-out" });
    onClose();
  };

  /**
   * Effect to determine if modal should be full screen
   * @returns {void}
   */
  useLayoutEffect(() => {
      setTimeout(() => {
        setIsFull(modalRef.current?.offsetHeight === window.innerHeight); 
        setIsMobile(window.innerWidth <= 768);
      },0);
  },[show]);

  /**
   * Effect to handle modal visibility and animations
   * @returns {void}
   */
  useEffect(() => {
    if (visible) {
      document.body.classList.add("overflow-hidden");
      setTimeout(() => {
        setShow(true)
        setModalAnimation({ moveAnimate: "animate-turn-up", fadeAnimate: "animate-fade-in" });
      }, 0);
    } else if (show) {
      document.body.classList.remove("overflow-hidden");
      setTimeout(() => {
        setModalAnimation({ moveAnimate: "animate-turn-down", fadeAnimate: "animate-fade-out" });
        setShow(false);
      }, 300);
    }
  }, [visible, show]);

  return (
    <div 
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-content"
      className={!show ? "hidden" : ""}
    >
      <div className={` ${isFull ? 'hidden': ''} ${modalAnimation.fadeAnimate} h-dvh w-full fixed bg-red-500/90 top-0 left-0 z-10`}
        onClick={closeModal}
      >
      </div>
      <div
        ref={modalRef}
        className={`
          ${!show ? "hidden" : ""} ${!isFull ? "rounded-t-3xl" : "h-screen"} ${!isMobile ? `rounded-b-3xl top-1/6` : "bottom-0"} max-h-dvh w-full z-10 fixed  left-0 
          bg-white border-t-2 border-gray-200 shadow-lg ${modalAnimation.moveAnimate} md:w-6/8 md:left-1/8 lg:w-1/3  lg:left-1/3
        `}>
        <header
          id="modal-header"
          className={`flex justify-between p-4 ${isFull ? "border-b-2 border-gray-200" : ""}`}
        >
          <span aria-hidden="true">
            <IoClose className="text-white" size={32} />
          </span>
          <h2 className="font-semibold">{title}</h2>
          <button
            onClick={closeModal}
          >
            <IoClose size={32} />
          </button>
        </header>
        <section 
          id='modal-content'
          className="pb-8 overflow-y-auto max-h-[calc(100dvh-64px)]"
        >
          { settings.id === "show-campaign" ? <ShowCampign data={settings.data || {}} /> : null }
        </section>
      </div>
    </div>
  );
}
