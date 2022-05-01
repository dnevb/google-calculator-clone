import { FC, useContext } from "react";
import { ctx } from "../Provider";

const getColor = (color?: string) => {
  switch (color) {
    case "green":
      return "bg-[#C3EDD0] active:bg-[#EFFAF3] text-black";
    case "light":
      return "bg-[#D3E3FD] text-black";
    case "blue":
      return "bg-[#59B1F0] active:bg-[#A2D3F6] text-black";
    default:
      return "bg-[#2a2a2a] active:bg-[#292A2E] text-white";
  }
};

const Button: FC<{
  value: string;
  color?: string;
}> = ({ value, color }) => {
  const { handle } = useContext(ctx);

  return (
    <button
      className={`w-20 h-20 flex items-center 
      justify-center ${getColor(color)} text-3xl font-sans select-none trans`}
      onClick={() => handle(value)}
    >
      {value}
    </button>
  );
};

export default Button;
