import { resolve } from 'path';

const DEFAULT_POLICY_FILEPATH = resolve(__dirname, '..', 'policy.html');


export const PORT = process.env.PORT || 3000;
export const POLICY_FILEPATH = process.env.POLICY_FILEPATH || DEFAULT_POLICY_FILEPATH;
