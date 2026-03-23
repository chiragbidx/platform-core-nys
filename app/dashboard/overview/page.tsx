export default function OverviewPage() {
  const hasData = false; // Placeholder

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Overview</h1>
      {hasData ? (
        <div>
          See a snapshot of your agency’s clients and campaigns here.
        </div>
      ) : (
        <div className="rounded-lg border bg-muted px-6 py-8 text-center">
          <div className="mb-2 text-sm text-muted-foreground">
            No data yet. Add a client or campaign to see your agency’s progress.
          </div>
        </div>
      )}
    </div>
  );
}