// 100_000 ===>>> 100,000
export const formatNumberWithCommas = (num: number) => {
  return num.toLocaleString('en-US');
}

// 100_000 ===>>> 100K
// 1_100_000 ===>>> 1,1M
/// 1_000_000_000 ===>>> 1B
export const formatNumberShortEU = (num: number) => {
  const thousand = 1e3;
  const million = 1e6;
  const billion = 1e9

  const format = (value: number, suffix: string) => {
    const rounded = Math.floor(value * 10) / 10; // round down to 1 decimal
    const hasDecimal = rounded % 1 !== 0;
    const str = hasDecimal
      ? rounded.toFixed(1).replace('.', ',')
      : Math.floor(rounded).toString();
    return str + suffix;
  };

  if (num >= billion) {
    return format(num / billion, 'B');
  } else if (num >= million) {
    return format(num / million, 'M');
  } else if (num >= thousand) {
    return format(num / thousand, 'K');
  } else {
    return num.toString();
  }
}