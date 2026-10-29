(function () {
    "use strict";

    var SUPABASE_URL = "https://cbkspksnwehxcqadmsfr.supabase.co";
    var SUPABASE_PUBLISHABLE_KEY = "sb_publishable_FA2GoL7yOw-FkFdCvea8fw_Bq2QgQNa";

    if (!window.supabase ||
        typeof window.supabase.createClient !== "function") {
        console.error("NIMX-G: Supabase library did not load.");
        return;
    }

    if (!SUPABASE_URL.startsWith("https://") ||
    !SUPABASE_URL.includes(".supabase.co") ||
    SUPABASE_PUBLISHABLE_KEY.length < 20) {

    console.error("NIMX-G: Configuration is invalid or incomplete.");
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
