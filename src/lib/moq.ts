/**
 * Standard Wholesale Lump-Sum Minimum Order Quantity (MOQ)
 * Calculates clean, industry-standard round figures for bulk ordering.
 */
export function getLumpSumMOQ(price: number | string | undefined | null): number {
  const p = Number(price);
  if (!p || isNaN(p) || p >= 1000) {
    return 1;
  }
  const raw = 1000.0 / p;
  if (raw > 250) return 500;       // e.g. ₹3 -> 500 units
  if (raw > 150) return 250;       // e.g. ₹4 -> 250 units
  if (raw > 75)  return 100;       // e.g. ₹7, ₹13 -> 100 units
  if (raw > 25)  return 50;        // e.g. ₹16, ₹22, ₹24, ₹32, ₹34 -> 50 units
  if (raw > 15)  return 25;        // e.g. ₹55 -> 25 units
  if (raw > 8)   return 10;        // e.g. ₹96, ₹106, ₹112 -> 10 units
  if (raw > 2)   return 5;         // e.g. ₹192, ₹240, ₹255, ₹298, ₹330, ₹350, ₹362, ₹399, ₹480 -> 5 units
  if (raw > 1)   return 2;         // e.g. ₹618, ₹850, ₹999 -> 2 units
  return 1;
}
