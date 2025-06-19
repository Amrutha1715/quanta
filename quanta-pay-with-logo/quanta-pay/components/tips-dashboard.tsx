export function TipsDashboard() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <div className="rounded-xl border p-4 shadow-sm">
        <h2 className="text-xl font-semibold">Track Daily Spending</h2>
        <p className="text-sm text-muted-foreground">
          Record your daily expenses to identify unnecessary purchases and build awareness.
        </p>
      </div>
      <div className="rounded-xl border p-4 shadow-sm">
        <h2 className="text-xl font-semibold">Use Cash-Back Apps</h2>
        <p className="text-sm text-muted-foreground">
          Get rewarded for everyday purchases using apps that offer cash-back or points.
        </p>
      </div>
      <div className="rounded-xl border p-4 shadow-sm">
        <h2 className="text-xl font-semibold">Create a Weekly Budget</h2>
        <p className="text-sm text-muted-foreground">
          Break your budget into weekly plans to make it easier to follow and adjust.
        </p>
      </div>
    </div>
  );
}