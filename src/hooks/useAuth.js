"use client";

import { useEffect } from "react";
import { supabase } from "../utils/supabase";
import axios from "axios";

export default function useAuth() {
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
    supabase.auth.signUp({ email, password });
  }

  function signIn({ email, password }) {
    supabase.auth.signInWithPassword({ email, password });
  }

  function signOut() {
    supabase.auth.signOut();
  }


  return { user, session, signUp, signIn, signOut };
}


