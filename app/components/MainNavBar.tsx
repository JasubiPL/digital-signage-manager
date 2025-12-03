import Link from "next/link";
import { 
  MdOutlineKeyboardArrowRight, 
  MdOutlineKeyboardArrowLeft 
} from "react-icons/md";

export const MainNavBar = ({ previusPage, nextPage, title }: { previusPage: string, nextPage: string, title: string }) => {
  return (
    <nav className="w-full sticky top-0 bg-white z-1 ">
      <div className="p-4 flex justify-between items-center border-b-2 border-gray-100">
        <Link href={previusPage}>
          <MdOutlineKeyboardArrowLeft className="text-3xl fill-red-700 bg-gray-100 rounded-full"/>
        </Link>
        <p className="text-lg">{title}</p>
          <Link href={nextPage}>
          <MdOutlineKeyboardArrowRight className="text-3xl fill-red-700 bg-gray-100 rounded-full"/>
        </Link>
      </div>
    </nav>
  );
};

