import Image from "next/image";
import { IoClose } from "react-icons/io5";

type ModalSettings = {
  id?: string;
  data?: CampingsSettings;

}

type CampingsSettings = {
  urlImage?: string;
  title?: string;
}

const ShowCampign = ({ data }: { data: CampingsSettings }) =>{
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
      <h3 className="w-full text-red-500 font-bold text-lg">
        {data.title}
      </h3>
      <p className="w-full italic text-gray-600 text-center">
        Campañas 1, Campaña 2, Campaña 3, Campañas 4, Campaña 5, Campaña 6
      </p>
    </div>
  )
}

export const HelpModal = ({ title = "Help", full = false, settings = {}, visible = false }: { title?: string, full?: boolean, settings?: ModalSettings, visible?: boolean }) => {
  
  return (
    <section className={`${!visible ? "hidden" : ""} ${full ? "h-screen" : ""} z-10 fixed bottom-0 left-0 bg-white rounded-t-3xl border-t-2 border-gray-200 shadow-lg animate-show-modal`}>
      <header className="flex justify-between p-4">
        <span>
          <IoClose className="text-white" size={32} />
        </span>
        <h2 className="font-bold">{title}</h2>
        <button
        >
          <IoClose size={32} />
        </button>
      </header>
      <section className="p-4 mb-8">
        { settings.id === "show-campaign" ? <ShowCampign data={settings.data || {}} /> : null }
      </section>
    </section>
  )
}