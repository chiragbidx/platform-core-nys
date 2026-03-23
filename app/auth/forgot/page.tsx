"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      <div className="w-full max-w-sm rounded-lg border p-8 shadow bg-white">
        <h1 className="mb-2 text-center text-2xl font-bold">Reset Your AgencyFlow Password</h1>
        <p className="mb-6 text-center text-muted-foreground">
          Enter your email to receive password reset instructions
        </p>
        {submitted ? (
          <div className="text-green-600 text-center py-4">
            If your email is registered, a reset link has been sent.
          </div>
        ) : (
          <form
            className="flex flex-col gap-4"
            onSubmit={e => {
              e.preventDefault();
              setLoading(true);
              setTimeout(() => {
                setLoading(false);
                setSubmitted(true);
              }, 900);
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
            <Button type="submit" className="mt-2" disabled={loading}>
              {loading ? "Sending Link..." : "Send Reset Link"}
            </Button>
          </form>
        )}
        <div className="flex flex-col items-center gap-1 mt-5 text-xs">
          <span className="text-muted-foreground">
            Remembered your password?{" "}
            <a href="/auth/signin" className="underline text-primary">
              Sign in
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}