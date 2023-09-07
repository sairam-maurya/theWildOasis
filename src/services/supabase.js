import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vqibkexqdygsfjmpmpfr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZxaWJrZXhxZHlnc2ZqbXBtcGZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQwMjI5ODgsImV4cCI6MjAwOTU5ODk4OH0.xTLQhwmGWmQeBiHVXIhD13tn7cCQF8dsjAENRpeKCPw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase
