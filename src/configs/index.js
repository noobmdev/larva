import { BigNumber } from "@ethersproject/bignumber";

export const CHAIN_ID = 97;
export const RPC_NODE = "https://data-seed-prebsc-1-s1.binance.org:8545/";

export const SPINNING_ADDRESS = "0xDE727301B7e88313b2a9e126583C340A91749b53";
export const TOKEN_SPINNING_ADDRESS =
  "0x33d6E842f80952eB3F7bd27600A0eAa74989Fb7E";
export const SPINNING_FEE = BigNumber.from("1");

export const SPINNING_METHODS = {
  spin: "spin",
  spinned: "spinned",
};

export const ADDRESS_ZERO = "0x0000000000000000000000000000000000000000";
export const MAX_UINT256 =
  "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff";
