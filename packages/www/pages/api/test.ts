import { NextApiRequest, NextApiResponse } from "next";
import { useWasm } from "../../utils";

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
    const wasm = await useWasm();
    const result = wasm.greet();
    res.send({ text: result });
}

export default handler;
