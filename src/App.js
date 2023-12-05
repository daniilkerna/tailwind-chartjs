import React from "react";
import "./styles.css";
import "./styles/tailwind-pre-build.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LendingAllocations from "./components/LendingAllocations";
import StrategyPerformance from "./components/StrategyPerformance";

export default function App() {
  return (
    <div className="w-full flex gap-9 p-9">
      <LendingAllocations />
      <StrategyPerformance />
    </div>
  );
}
