import { cryptoAssets, cryptoData } from "./data";

export function fakeFetchCrypto(params) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cryptoData);
    }, 1);
  });
}

export function fetchAssets(params) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cryptoAssets);
    }, 1);
  });
}
