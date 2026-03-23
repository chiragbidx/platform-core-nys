"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      <div className="w-full max-w-sm rounded-lg border p-8 shadow bg-white">
        <h1 className="mb-2 text-center text-2xl font-bold">Welcome to AgencyFlow</h1>
        <p className="mb-6 text-center text-muted-foreground">
          Sign in to your agency dashboard
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
            autoComplete="current-password"
            placeholder="Password"
            required
            value={pass}
            onChange={e => setPass(e.target.value)}
            disabled={loading}
          />
          <Button type="submit" className="mt-2" disabled={loading}>
            {loading ? "Signing In..." : "Sign In"}
          </Button>
        </form>
        <div className="flex flex-col items-center gap-1 mt-5 text-xs">
          <a
            className="text-primary hover:underline"
            href="/auth/forgot"
          >
            Forgot your password?
          </a>
          <span className="text-muted-foreground">
            Don’t have an account?{" "}
            <a href="/auth/signup" className="underline text-primary">
              Sign up
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}