// NIMX-G AI HUB — Supabase connection

const SUPABASE_URL = "https://cbkspksnwehxcqadmsfr.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_FA2GoL7yOw-FkFdCvea8fw_Bq2QgQNa";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);
