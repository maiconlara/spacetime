import { getUser } from "@/lib/auth";
import Image from "next/image";
import Link from "next/link";

const Profile = () => {
  const { avatarUrl, name } = getUser();

  return (
    <div className="flex  items-center gap-3 text-left">
      <Image src={avatarUrl} alt="" width={80} height={80} className="w-10 h-10 rounded-full" />
      <p className="text-sm leading-snug max-w-[140px]">
        Bem-vindo {name}!
        <a href="/api/auth/logout" className="block text-red-400 hover:text-red-300 cursor-pointer pt-1">Sair</a>
      </p>
    </div>
  );
};
export default Profile;
