import Signin from "@/components/LeftDiv/Signin";
import Footer from "@/components/LeftDiv/Footer";
import Hero from "@/components/LeftDiv/Hero";

const LeftDiv = () => {
  return (
    <div className="flex flex-col items-start justify-between px-28 py-16 relative overflow-hidden border-r border-white/10 bg-[url(../assets/stars.svg)] bg-cover">
      {/* Blur */}
      <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />

      {/* Stripes */}
      <div className="absolute right-2 top-0 bottom-0 w-2 bg-stripes " />

      <Signin />
      <Hero />
      <Footer />
    </div>
  );
};

export default LeftDiv;
