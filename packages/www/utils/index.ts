export const useWasm = async () => {
  try {
    const wasm = await import("@mh/test-wasm");
    return wasm;
  } catch (error) {
    console.error(error);
  }
};
