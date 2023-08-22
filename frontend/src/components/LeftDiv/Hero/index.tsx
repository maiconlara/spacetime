import Image from "next/image";
import logo from "../../../assets/logo.svg";

const Hero = () => {
  return (
    <div className="space-y-5">
      <Image src={logo} alt="logo" className="w-40 h-40" />
      <div className="max-w-[420px] space-y-1">
        <h1 className="  text-5xl font-bold leading-tight text-gray-50">
          Sua cápsula do tempo
        </h1>
        <p className="text-lg leading-relaxed">
          Colecione momentos marcantes da sua jornada e compartilhe (se quiser)
          com o mundo!
        </p>
      </div>
      <a
        href=""
        className="inline-block uppercase bg-green-500  rounded-full px-5 py-3 font-alt text-sm leading-none text-black hover:bg-green-700 transition-colors"
      >
        Cadastrar lembrança
      </a>
    </div>
  );
};
export default Hero;
