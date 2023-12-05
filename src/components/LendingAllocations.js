import React from "react";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Strategy 1", "Strategy 2", "Strategy 3", "Strategy 4"],
  datasets: [
    {
      label: "# of Votes",
      data: [50, 12.5, 12.5, 25],
      backgroundColor: ["#855CF8", "#E289F2", "#7879F1", "#B085FF"],
    },
  ],
};

export default function LendingAllocations() {
  return (
    <div className="bg-white border rounded p-3 shadow-lg">
      <div className="flex justify-between text-lg mb-4">
        <span>Lending Allocations</span>
        <span>$5000 USDC</span>
      </div>
      <Pie
        data={data}
        options={{ plugins: { legend: { position: "bottom" } } }}
      />
    </div>
  );
}
