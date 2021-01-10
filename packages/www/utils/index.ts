export const useWasm = async () => {
  try {
    const wasm = await import("@mattmattnpm/test-wasm");
    return wasm;
  } catch (error) {
    console.error(error);
  }
};
