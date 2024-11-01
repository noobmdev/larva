import { Contract } from "@ethersproject/contracts";
import { getAddress } from "@ethersproject/address";
import {
  SPINNING_ADDRESS,
  ADDRESS_ZERO,
  TOKEN_SPINNING_ADDRESS,
} from "../configs";
import SpinningABI from "../abis/Spinning.json";
import erc20ABI from "../abis/IERC20.json";

// returns the checksummed address if the address is valid, otherwise returns false
export function isAddress(value) {
  try {
    return getAddress(value);
  } catch {
    return false;
  }
}

// account is not optional
export function getSigner(library, account) {
  return library.getSigner(account).connectUnchecked();
}

// account is optional
export function getProviderOrSigner(library, account = undefined) {
  return account ? getSigner(library, account) : library;
}

// account is optional
export function getContract(address, ABI, library, account = undefined) {
  if (!isAddress(address) || address.toString() === ADDRESS_ZERO) {
    throw Error(`Invalid 'address' parameter '${address}'.`);
  }

  if (!library) return new Error("No provider or signer");

  return new Contract(address, ABI, getProviderOrSigner(library, account));
}

export async function callContract(contract, method, args, overrides = {}) {
  try {
    const tx = await contract[method](...args, {
      ...overrides,
    });
    if (typeof tx.wait !== "function") return tx;
    if (!tx) throw new Error("cannot create transaction");
    const res = await tx.wait();
    return res;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export function getSpinningContract(library, account = undefined) {
  return getContract(SPINNING_ADDRESS, SpinningABI, library, account);
}

export function getTokenSpinningContract(library, account = undefined) {
  return getContract(TOKEN_SPINNING_ADDRESS, erc20ABI, library, account);
}
