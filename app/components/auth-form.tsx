"use client";

import { Auth } from "@supabase/auth-ui-react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export function AuthForm() {
  const supabase = createClientComponentClient();
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";

  return (
    <Auth
      supabaseClient={supabase}
      view="magic_link"
      showLinks={false}
      providers={[]}
      redirectTo={`${origin}/auth/callback`}
    />
  );
}
