import { Button } from "@/components/ui/button";

export default function ClientsPage() {
  const hasClients = false; // Placeholder

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Clients</h1>
      {hasClients ? (
        <div>Client list goes here.</div>
      ) : (
        <div className="rounded-lg border bg-muted px-6 py-8 text-center flex flex-col items-center gap-4">
          <div className="mb-2 text-sm text-muted-foreground">
            No clients yet. Add your first client to get started.
          </div>
          <Button>Add Client</Button>
        </div>
      )}
    </div>
  );
}