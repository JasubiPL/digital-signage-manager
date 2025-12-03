import Link from "next/link";
import { 
  MdOutlineKeyboardArrowRight, 
  MdOutlineKeyboardArrowLeft 
} from "react-icons/md";

export const MainNavBar = () => {
  return (
    <nav className="w-full">
      <div className="p-4 flex justify-between items-center border-b-2 border-gray-100">
        <MdOutlineKeyboardArrowLeft className="text-5xl fill-red-700 bg-gray-100 rounded-full"/>
        <p className="font-medium">Campañas publicitarias ETN</p>
        <MdOutlineKeyboardArrowRight className="text-5xl fill-red-700 bg-gray-100 rounded-full"/>
      </div>
    </nav>
  );
};

