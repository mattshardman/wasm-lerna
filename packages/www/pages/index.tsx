import React from "react";

interface WasmFns {
  greet: () => string;
}

const Home = () => {
  const [wasm, setWasm] = React.useState<WasmFns>();
  const [text, setText] = React.useState<string>();

  const importWasm = async () => {
    const wasmFns = await import("@mattmattnpm/test-wasm-browser");
    setWasm(wasmFns);
  };

  const handleClick = async (input: string) => {
    if (input === "browser") {
      const word = wasm.greet();
      setText(word);
    }

    if (input === "api") {
      const res = await fetch("/api/test");
      const json = await res.json();
      setText(json.text);
    }
  };

  React.useEffect(() => {
    importWasm();
  }, []);

  return (
    <div>
      {text}
      <button onClick={() => handleClick("browser")}>Browser wasm</button>
      <button onClick={() => handleClick("api")}>Wasm</button>

    </div>
  );
};

export default Home;
