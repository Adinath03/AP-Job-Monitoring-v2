import React from "react";

function Header() {
  return (
    <header className="app-header">
      <h1>AP Job Scheduler & Monitor</h1>
      <p className="app-subtitle">
        Holiday-aware AP jobs (F110, payment-medium, special holiday jobs, and
        IDoc types).
      </p>
      <p className="app-note" aria-hidden="false">
        Choose a weekday and holiday scenario to see how jobs are scheduled
        (Mon–Fri workweek, holiday -1 / -2 rules).
      </p>
    </header>
  );
}

export default Header;
