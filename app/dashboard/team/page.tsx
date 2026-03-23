import { Button } from "@/components/ui/button";

export default function TeamPage() {
  const hasTeam = false; // Placeholder

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Team</h1>
      {hasTeam ? (
        <div>Team members go here.</div>
      ) : (
        <div className="rounded-lg border bg-muted px-6 py-8 text-center flex flex-col items-center gap-4">
          <div className="mb-2 text-sm text-muted-foreground">
            No team members added yet. Invite your team to collaborate.
          </div>
          <Button>Invite Team Member</Button>
        </div>
      )}
    </div>
  );
}