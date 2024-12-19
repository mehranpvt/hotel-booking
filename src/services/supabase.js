import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://nzbzsbjilyyvocwaoxdv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im56YnpzYmppbHl5dm9jd2FveGR2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAwMDkyNzIsImV4cCI6MjA0NTU4NTI3Mn0.btc3AJemI1Lq1ZhDD0PdqtMqXypsNG_CZfijp3gkA-M";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
