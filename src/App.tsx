import { useContext } from "react";
import Button from "./components/Button";
import { ctx } from "./Provider";

function App() {
  const { value, setValue, handle } = useContext(ctx);

  return (
    <div className="h-screen bg-[#3f3f3f] flex items-center justify-center font-sans">
      <div className="bg-[#1f1f1f] rounded-2xl">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="bg-[#33383e] h-36 rounded-2xl w-full text-right text-4xl text-[#D3E3FD] px-1"
          onKeyDown={(e) => e.key == "Enter" && handle("=")}
        />
        <div className="grid grid-cols-4 grid-rows-5 gap-y-2 gap-x-1 items-center justify-items-center p-2 ">
          <Button value="AC" color="green" />
          <Button value="( )" color="blue" />
          <Button value="%" color="blue" />
          <Button value="÷" color="blue" />
          <Button value="7" />
          <Button value="8" />
          <Button value="9" />
          <Button value="x" color="blue" />
          <Button value="4" />
          <Button value="5" />
          <Button value="6" />
          <Button value="-" color="blue" />
          <Button value="1" />
          <Button value="2" />
          <Button value="3" />
          <Button value="+" color="blue" />
          <Button value="0" />
          <Button value="." />
          <Button value="⌫" />
          <Button value="=" color="light" />
        </div>
      </div>
    </div>
  );
}

export default App;
