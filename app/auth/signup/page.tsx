"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      <div className="w-full max-w-sm rounded-lg border p-8 shadow bg-white">
        <h1 className="mb-2 text-center text-2xl font-bold">Create Your AgencyFlow Account</h1>
        <p className="mb-6 text-center text-muted-foreground">
          Start managing your agency today
        </p>
        <form
          className="flex flex-col gap-4"
          onSubmit={e => {
            e.preventDefault();
            setLoading(true);
            setTimeout(() => setLoading(false), 900);
          }}
        >
          <Input
            type="email"
            autoComplete="email"
            placeholder="Email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            disabled={loading}
          />
          <Input
            type="password"
            autoComplete="new-password"
            placeholder="Password"
            required
            value={pass}
            onChange={e => setPass(e.target.value)}
            disabled={loading}
          />
          <Button type="submit" className="mt-2" disabled={loading}>
            {loading ? "Signing Up..." : "Sign Up"}
          </Button>
        </form>
        <div className="flex flex-col items-center gap-1 mt-5 text-xs">
          <span className="text-muted-foreground">
            Already have an account?{" "}
            <a href="/auth/signin" className="underline text-primary">
              Sign in
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}