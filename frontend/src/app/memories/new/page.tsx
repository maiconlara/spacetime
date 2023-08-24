import { Camera, ChevronLeft } from "lucide-react";
import Link from "next/link";

const NewMemory = () => {
  return (
    <div className="flex flex-1 flex-col gap-4 p-12">
      <Link
        href="/"
        className="flex items-center gap-1 text-sm text-gray-200 hover:text-gray-100"
      >
        <ChevronLeft className="h-4 w-4" />
        Voltar à timeline
      </Link>

      <form className="flex flex-1 flex-col gap-2 ">
        <div className="flex items-center gap-4">
          <label
            htmlFor="media"
            className="flex cursor-pointer items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100"
          >
            <Camera className="w-4 h-4" />
            Anexar mídia
          </label>

          <label htmlFor="
          isPublic" className=""></label>
        </div>


        <input type="file" id="media" className="invisible" /> 
      </form>
    </div>
  );
};
export default NewMemory;