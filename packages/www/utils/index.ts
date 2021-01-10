export const useWasm = async () => {
  try {
    const wasm = await import("test-wasm/dist");
    return wasm;
  } catch (error) {
    console.error(error);
  }
};
