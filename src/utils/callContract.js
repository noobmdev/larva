import { parseEther } from "@ethersproject/units";
import {
  getSpinningContract,
  getTokenSpinningContract,
  callContract,
  isAddress,
} from "./getContract";
import {
  SPINNING_ADDRESS,
  SPINNING_METHODS,
  SPINNING_FEE,
  MAX_UINT256,
} from "../configs";

export const spin = async (library, account) => {
  try {
    if (!library || !account) return;
    const tokenSpinContract = getTokenSpinningContract(library, account);
    const allowance = await callContract(tokenSpinContract, "allowance", [
      account,
      SPINNING_ADDRESS,
    ]);
    if (SPINNING_FEE.gt(allowance)) {
      await callContract(tokenSpinContract, "approve", [
        SPINNING_ADDRESS,
        MAX_UINT256,
      ]);
    }

    const spinningContract = getSpinningContract(library, account);
    return callContract(spinningContract, SPINNING_METHODS.spin, []);
  } catch (error) {
    throw error;
  }
};

export const getSpinCount = async (library, account) => {
  try {
    if (!library || !account) return;
    const spinningContract = getSpinningContract(library);
    return callContract(spinningContract, SPINNING_METHODS.spinned, [account]);
  } catch (error) {
    throw error;
  }
};
