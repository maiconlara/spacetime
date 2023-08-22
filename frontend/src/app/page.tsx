import LeftDiv from "@/components/LeftDiv";
import RightDiv from "@/components/RightDiv";

export default function Home() {
  return (
    <main className="grid grid-cols-2 h-screen ">
      <LeftDiv />
      <RightDiv />
    </main>
  );
}
