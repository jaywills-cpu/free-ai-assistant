(function () {
    "use strict";

    var SUPABASE_URL = "https://cbkspksnwehxcqadmsfr.supabase.co";
    var SUPABASE_PUBLISHABLE_KEY = "sb_publishable_FA2GoL7yOw-FkFdCvea8fw_Bq2QgQNa";

    if (!window.supabase ||
        typeof window.supabase.createClient !== "function") {
        console.error("NIMX-G: Supabase library did not load.");
        return;
    }

    if (SUPABASE_URL.indexOf("https://cbkspksnwehxcqadmsfr.supabase.co") !== -1 ||
        SUPABASE_PUBLISHABLE_KEY.indexOf("sb_publishable_FA2GoL7yOw-FkFdCvea8fw_Bq2QgQNa") !== -1) {
        console.error("NIMX-G: URL or publishable key is missing.");
        return;
    }

    try {
        window.supabaseClient = window.supabase.createClient(
            SUPABASE_URL,
            SUPABASE_PUBLISHABLE_KEY
        );

        console.log("NIMX-G: CLIENT CREATED");
    } catch (error) {
        console.error("NIMX-G: CLIENT ERROR", error.message);
    }
})();
