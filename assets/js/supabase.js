(function () {
    "use strict";

    // Replace these with your REAL Supabase project details.
    var SUPABASE_URL = "https://cbkspksnwehxcqadmsfr.supabase.co";
    var SUPABASE_PUBLISHABLE_KEY = "sb_publishable_FA2GoL7yOw-FkFdCvea8fw_Bq2QgQNa";

    if (!window.supabase || !window.supabase.createClient) {
        console.error("Supabase JavaScript library did not load.");
        return;
    }

    if (
        SUPABASE_URL === "https://cbkspksnwehxcqadmsfr.supabase.co" ||
        SUPABASE_PUBLISHABLE_KEY === "sb_publishable_FA2GoL7yOw-FkFdCvea8fw_Bq2QgQNa"
    ) {
        console.error("Supabase URL and publishable key have not been configured.");
        return;
    }

    try {
        window.supabaseClient = window.supabase.createClient(
            SUPABASE_URL,
            SUPABASE_PUBLISHABLE_KEY
        );

        console.log("Supabase client initialized successfully.");
    } catch (error) {
        console.error("Supabase initialization failed:", error);
    }
})();
