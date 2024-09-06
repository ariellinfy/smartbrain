import Image from "next/image";
import Tilt from "react-parallax-tilt";

export const Logo = () => {
  return (
    <div className="m-3">
      <Tilt
        className="bg-gradient-24 from-sky-500 to-orange-500 border-2 shadow-lg"
        style={{ height: 150, width: 150 }}
      >
        <div className="p-3">
          <Image
            src="/brain.png"
            alt="logo"
            width={100}
            height={100}
            className="pt-[10px]"
          />
        </div>
      </Tilt>
    </div>
  );
};
