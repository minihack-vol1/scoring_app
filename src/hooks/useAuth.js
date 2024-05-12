"use client";

import { useState, useEffect } from "react";
import { createClient } from "../utils/supabase/client";
import axios from "axios";

export default function useAuth() {
  const supabase = createClient();
  const [session, setSession] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    }
  })

  useEffect(() => {
    const setUpUser = async () => {
      if (!session?.user.id) return;

      const res = await axios.get(`/api/user/${session.user.id}`);
      if (res.ok) {
        const data = await res.json();
        setUser(data.user);
      } else {
        console.error("Failed to fetch user data");
      }
    }

    setUpUser();
  }, [session])

  function signUp({ email, password }) {
    const { error } = supabase.auth.signUp({ email, password });
    if (error) {
      console.error("Failed to sign up:", error.message);
    }
  }

  function signIn({ email, password }) {
    const { error } = supabase.auth.signInWithPassword({ email, password });
    if (error) {
      console.error("Failed to sign in:", error.message);
    }
  }

  function signOut() {
    supabase.auth.signOut();
  }


  return { user, session, signUp, signIn, signOut };
}


