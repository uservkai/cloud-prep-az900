/* eslint-disable prettier/prettier */
import { loadEnv } from "vite";
import { createClient } from "@supabase/supabase-js";

const env = loadEnv("development", process.cwd(), "VITE_");

const url = env.VITE_SUPABASE_URL;
const key = env.VITE_SUPABASE_PUBLISHABLE_KEY;

if (!url || !key) {
  console.error("Missing Supabase environment variables.");
  process.exitCode = 1;
} else {
  const supabase = createClient(url, key);

  const { data, error } = await supabase
    .from("topics")
    .select("id, title")
    .limit(1);

  if (error) {
    console.error("Supabase connection failed:", error.message);
    process.exitCode = 1;
  } else {
    console.log("Supabase connection successful!");
    console.log("Topics returned:", data?.length ?? 0);
  }
}