import { Button } from "@/components/ui/button";

export default function CampaignsPage() {
  const hasCampaigns = false; // Placeholder

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Campaigns</h1>
      {hasCampaigns ? (
        <div>Campaign list goes here.</div>
      ) : (
        <div className="rounded-lg border bg-muted px-6 py-8 text-center flex flex-col items-center gap-4">
          <div className="mb-2 text-sm text-muted-foreground">
            No campaigns yet. Create your first campaign to start tracking results.
          </div>
          <Button>Create Campaign</Button>
        </div>
      )}
    </div>
  );
}