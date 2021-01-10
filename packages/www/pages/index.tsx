import React from "react";

interface WasmFns {
  greet: () => string;
}

const Home = () => {
  const [wasm, setWasm] = React.useState<WasmFns>();
  const [text, setText] = React.useState<string>();

  const importWasm = async () => {
    const wasmFns = await import("test-wasm-browser/dist");
    setWasm(wasmFns);
  };

  const handleClick = () => {
    const word = wasm.greet();
    setText(word);
  };

  React.useEffect(() => {
    importWasm();
  }, []);

  return (
    <div>
      {text}
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default Home;
