"use client";

import { useState } from "react";

export default function Home() {
  const [data, setData] = useState<any[]>([]);

  const runSimulation = async () => {
    const res = await fetch("/api/simulate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        basePrice: 85,
        warLevel: "high",
        supplyShock: "severe",
        opecAction: "cut",
      }),
    });

    const result = await res.json();
    setData(result);
  };

  return (
    <main style={{ padding: 20 }}>
      <h1>Brent Oil Simulator</h1>
      <button onClick={runSimulation}>Run Simulation</button>
      <pre>{JSON.stringify(data.slice(0, 10), null, 2)}</pre>
    </main>
  );
}