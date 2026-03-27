export type Scenario = {
  basePrice: number;
  warLevel: "low" | "medium" | "high" | "extreme";
  supplyShock: "none" | "partial" | "severe";
  opecAction: "increase" | "maintain" | "cut";
};

export function simulateBrentPrice(s: Scenario) {
  let prices = [];
  let current = s.basePrice;

  for (let day = 0; day < 180; day++) {
    let shock = 0;

    if (s.warLevel === "medium") shock += 0.5;
    if (s.warLevel === "high") shock += 1.5;
    if (s.warLevel === "extreme") shock += 3;

    if (s.supplyShock === "partial") shock += 1;
    if (s.supplyShock === "severe") shock += 2.5;

    if (s.opecAction === "cut") shock += 1.5;
    if (s.opecAction === "increase") shock -= 1.5;

    const noise = (Math.random() - 0.5) * 2;

    current += shock + noise;

    prices.push({ day, price: Number(current.toFixed(2)) });
  }

  return prices;
}