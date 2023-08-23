import LeftDiv from "@/components/LeftDiv";
import RightDiv from "@/components/RightDiv";

import { cookies } from 'next/headers';

export default function Home() {

  const isLogged = cookies().has('token');

  return (
    <main className="grid grid-cols-2 h-screen ">
      <LeftDiv isLogged={isLogged}/>
      <RightDiv />
    </main>
  );
}
