


import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://lpusjportwaisscqtqus.supabase.co";
const supabaseKey = "sb_publishable_ML-DwNmEvUEZtBTPv0p6_A_fpkdLqCM";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);
