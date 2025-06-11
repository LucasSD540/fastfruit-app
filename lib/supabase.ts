import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nnqtzlpflshvlppjmjvo.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ucXR6bHBmbHNodmxwcGptanZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk1OTc3NzUsImV4cCI6MjA2NTE3Mzc3NX0.r6PS5j_psL9Qjdf95XpChguhXSfxpiFENPGQ6sPFXlI";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
