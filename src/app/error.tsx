"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Runtime Error:", error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center space-y-8 px-4 text-center">
      <div className="space-y-4">
        <h2 className="font-heading text-6xl uppercase text-white">Something went wrong</h2>
        <p className="text-white/60">
          An unexpected error occurred. We've been notified and are looking into it.
        </p>
        <p className="text-xs font-mono text-brand-400/50">
          {error.digest ? `Error ID: ${error.digest}` : error.message}
        </p>
      </div>
      
      <Button onClick={() => reset()} variant="primary">
        Try again
      </Button>
    </div>
  );
}
