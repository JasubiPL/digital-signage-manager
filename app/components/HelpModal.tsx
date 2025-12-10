
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";

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
  console.log(data);
  return (
    <div className="w-full flex flex-col items-center gap-4">
      <div className="w-[90%] aspect-video bg-red-600 overflow-hidden relative">
        <Image 
          className="object-cover"
          src={data.urlImage || ""}
          alt={data.title || "Campaign Image"}
          fill
        />
      </div>
      <div className="w-full flex justify-around">
        <h3 className="w-full text-black text-lg">
          {data.title}
        </h3>
        <p className="w-full italic text-red-500 text-center text-sm">
          Fin de campaña: {data.endDate}
        </p>
      </div>
      
      <p className="w-full flex flex-col italic text-gray-600 text-center">
        <span className="text-red-500">Ubicaciones:</span>
         {data.locations}
      </p>

    </div>
  )
}

export const HelpModal = ({ title = "Help", full = false, settings = {}, visible = false, onClose }: HelpModalProps) => {
  const [show, setShow] = useState(visible);
  const [modalAnimation, setModalAnimation] = useState("");

  useEffect(() => {
    if (visible) {
      setTimeout(() => {
        setShow(true)
        setModalAnimation("animate-show-modal");
      }, 0);
    } else if (show) {
      const timeout = setTimeout(() => {
        setModalAnimation("animate-hide-modal");
        setShow(false);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [visible, show]);

  /** 
   * Handle modal close action 
   * @returns {void}
   */
  const closeModal = (): void => {
    setModalAnimation("animate-hide-modal");
    if (onClose) {
      onClose();
    }
  };

  return (
    <section className={`${!show ? "hidden" : ""} ${full ? "h-screen" : ""} z-10 fixed bottom-0 left-0 bg-white rounded-t-3xl border-t-2 border-gray-200 shadow-lg ${modalAnimation} w-full md:w-1/2 lg:w-1/3`}>
      <header className="flex justify-between p-4">
        <span>
          <IoClose className="text-white" size={32} />
        </span>
        <h2 className="font-semibold">{title}</h2>
        <button
          onClick={closeModal}
        >
          <IoClose size={32} />
        </button>
      </header>
      <section className="p-4 mb-8">
        { settings.id === "show-campaign" ? <ShowCampign data={settings.data || {}} /> : null }
      </section>
    </section>
  );
}