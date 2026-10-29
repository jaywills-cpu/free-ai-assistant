(function () {
    "use strict";

    var SUPABASE_URL = "https://cbkspksnwehxcqadmsfr.supabase.co";
    var SUPABASE_PUBLISHABLE_KEY = "sb_publishable_FA2GoL7yOw-FkFdCvea8fw_Bq2QgQNa";

    function initializeSupabase() {
        if (!window.supabase || typeof window.supabase.createClient !== "function") {
            console.error("NIMX-G: Supabase library is unavailable.");
            return;
        }

        if (
            !SUPABASE_URL.startsWith("https://") ||
            SUPABASE_URL.indexOf("supabase.co") === -1 ||
            SUPABASE_PUBLISHABLE_KEY.indexOf("PASTE_") !== -1
        ) {
            console.error("NIMX-G: Check your Supabase URL and publishable key.");
            return;
        }

        try {
            window.supabaseClient = window.supabase.createClient(
                SUPABASE_URL,
                SUPABASE_PUBLISHABLE_KEY
            );

            console.log("NIMX-G: Supabase client initialized.");
            window.dispatchEvent(new Event("nimx-supabase-ready"));
        } catch (error) {
            console.error("NIMX-G: Initialization failed:", error);
        }
    }

    initializeSupabase();
})();
