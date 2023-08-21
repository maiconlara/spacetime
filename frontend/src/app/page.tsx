export default function Home() {
  return (
    <main className="grid grid-cols-2 h-screen ">
      {/* Left Div */}
      <div className="flex flex-col items-start justify-between px-28 py-16 relative overflow-hidden border-r border-white/10 bg-[url(../assets/stars.svg)] bg-cover">
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />

        <div className="absolute right-2 top-0 bottom-0 w-2 bg-stripes " />
        <a href="" className="flex  items-center gap-3 text-left">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400"></div>
        </a>
      </div>

      {/* Right Div */}
      <div className="flex flex-col p-16 bg-[url(../assets/stars.svg)] bg-cover">
        <div className="flex flex-1 items-center justify-center">
          <p className="text-center leading-relaxed w-[360px]">
            Você ainda não registrou nenhuma lembrança, começe a{" "}
            <a href="" className="underline hover:text-gray-50">
              criar agora
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
