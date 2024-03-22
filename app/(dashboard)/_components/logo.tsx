import Image from "next/image";

function Logo() {
  return (
    <div className=" flex justify-center items-center flex-row">
      <Image
        height={130}
        width={130}
        alt="logo"
        src="/logo.svg"
        className=" h-6 w-12 mx-2"
      />
      <p className=" font-extrabold text-2xl text-slate-700">UPSCALE</p>
    </div>
  );
}

export default Logo;
