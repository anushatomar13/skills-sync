import { supabase } from "./supabase";

// Sign Up Function
export async function signUp(email, password, fullName) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { fullName } },
  });
  return { data, error };
}

// Login Function
export async function signIn(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
}

// Logout Function
export async function signOut() {
  await supabase.auth.signOut();
}

// Get Current User
export async function getUser() {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}
