import { createContext, FC, useState } from "react";

export const ctx = createContext<{
  value: string;
  setValue: Function;
  openPar: boolean;
  setPar: Function;
  handle: (value: string) => void;
}>({} as any);

const Provider: FC<any> = ({ children }) => {
  const [value, setValue] = useState("");
  const [par, setPar] = useState(false);

  const handle = (label: string) => {
    switch (label) {
      case "=":
        const lastChar = value.slice(-1);
        if (lastChar != "0" && !Number(lastChar)) break;
        const result = eval(
          value.replaceAll("x", "*").replaceAll("÷", "/")
        ).toString();
        setValue(result);
        break;
      case "( )":
        setValue(value.concat(!par ? "(" : ")"));
        setPar(!par);
        break;
      case "AC":
        setPar(false);
        return setValue("");
      case "⌫":
        return setValue(value?.slice(0, -1));
      default:
        return setValue(value.concat(label));
    }
  };

  return (
    <ctx.Provider
      value={{
        value,
        setValue,
        openPar: par,
        setPar,
        handle,
      }}
    >
      {children}
    </ctx.Provider>
  );
};

export default Provider;
