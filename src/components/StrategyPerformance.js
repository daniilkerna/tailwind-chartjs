import React from "react";

const USDFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export default function StrategyPerformance() {
  return (
    <div className="bg-white flex-1 border rounded p-3 shadow-lg">
      <h3 className="text-lg mb-4">Strategy Performance</h3>
      <table className="table-auto w-full text-left border rounded">
        <thead>
          <tr className="border-b text-[#0000007F] font-semibold text-xs">
            <th className="pt-4 pb-2 px-2">Strategy</th>
            <th className="pt-4 pb-2 px-2">TVL</th>
            <th className="pt-4 pb-2 px-2">Volatility</th>
            <th className="pt-4 pb-2 px-2">Collateral</th>
            <th className="pt-4 pb-2 px-2">PNL</th>
          </tr>
        </thead>
        <tbody className="text-xs">
          <tr className="border-b">
            <td>Startegy 1</td>
            <td>{USDFormatter.format(100000)}</td>
            <td>
              <span class="bg-[#7879F1] text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
                Low
              </span>
            </td>
            <td>{USDFormatter.format(1000)}</td>
            <td>
              <span className="text-[#3CC13B]">
                +{USDFormatter.format(100)}
              </span>
            </td>
          </tr>

          <tr>
            <td>Startegy 1</td>
            <td>{USDFormatter.format(12500)}</td>
            <td>
              <span class="bg-[#9B51E0] text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
                Medium
              </span>
            </td>
            <td>{USDFormatter.format(1000)}</td>
            <td>
              <span className="text-[#F03738]">
                -{USDFormatter.format(100)}
              </span>
            </td>
          </tr>
          <tr>
            <td>Startegy 1</td>
            <td>{USDFormatter.format(12500)}</td>
            <td>
              <span class="bg-[#9B51E0] text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
                Medium
              </span>
            </td>
            <td>{USDFormatter.format(1000)}</td>
            <td>
              <span className="text-[#3CC13B]">
                +{USDFormatter.format(100)}
              </span>
            </td>
          </tr>
          <tr>
            <td>Startegy 1</td>
            <td>{USDFormatter.format(25000)}</td>
            <td>
              <span class="bg-[#6148C2] text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
                High
              </span>
            </td>
            <td>{USDFormatter.format(1000)}</td>
            <td>
              <span className="text-[#3CC13B]">
                +{USDFormatter.format(100)}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
