"use strict";

function BinarioADecimal(num) {
  // tu codigo aca

  let sum = 0;

  for (let i = 0; i < num.length; i++) {
    sum = sum + num[i] * 2 ** (num.length - 1 - i);
  }
  return sum;
}

function DecimalABinario(num) {
  // tu codigo aca

  if (num === 1) return 1;
  return DecimalABinario(Math.floor(num / 2)) + "" + (num % 2);
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
