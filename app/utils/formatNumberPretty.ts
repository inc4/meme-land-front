export function formatNumberPretty(
  value: number | string | null | undefined,
  options?: {
    minDecimals?: number;
    maxDecimals?: number;
  }
): string {
  if (value === null || value === undefined || value === '') return '';

  const num = typeof value === 'string' ? Number(value) : value;

  if (isNaN(num)) return '';

  const { minDecimals = 0, maxDecimals = 8 } = options || {};

  // Format very small numbers using toFixed
  if (num && Math.abs(num) < 1e-8 && num !== 0) {
    return num.toFixed(maxDecimals);
  }

  // Limit the fractional part: 2..8 digits
  return num?.toLocaleString('en-US', {
    minimumFractionDigits: minDecimals,
    maximumFractionDigits: maxDecimals,
    useGrouping: false, // no thousands separator
  });
}