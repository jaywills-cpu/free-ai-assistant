(function () {
    "use strict";

    window.NIMX_SUPABASE_DIAGNOSTIC = {
        sdkLoaded: false,
        configLoaded: false,
        clientCreated: false,
        error: "No test run yet"
    };

    try {
        window.NIMX_SUPABASE_DIAGNOSTIC.sdkLoaded =
            !!(window.supabase &&
               typeof window.supabase.createClient === "function");

        if (!window.NIMX_SUPABASE_DIAGNOSTIC.sdkLoaded) {
            window.NIMX_SUPABASE_DIAGNOSTIC.error =
                "Supabase SDK is not available when config executes.";
            console.error(window.NIMX_SUPABASE_DIAGNOSTIC.error);
            return;
        }

        var SUPABASE_URL = "https://cbkspksnwehxcqadmsfr.supabase.co";
        var SUPABASE_PUBLISHABLE_KEY = "sb_publishable_FA2GoL7yOw-FkFdCvea8fw_Bq2QgQNa";

        if (SUPABASE_URL.indexOf("PUT_") === 0 ||
            SUPABASE_PUBLISHABLE_KEY.indexOf("PUT_") === 0) {
            window.NIMX_SUPABASE_DIAGNOSTIC.error =
                "Placeholder configuration detected.";
            console.error(window.NIMX_SUPABASE_DIAGNOSTIC.error);
            return;
        }

        window.NIMX_SUPABASE_DIAGNOSTIC.configLoaded = true;

        window.supabaseClient = window.supabase.createClient(
            SUPABASE_URL,
            SUPABASE_PUBLISHABLE_KEY
        );

        window.NIMX_SUPABASE_DIAGNOSTIC.clientCreated =
            !!window.supabaseClient;

        window.NIMX_SUPABASE_DIAGNOSTIC.error =
            window.supabaseClient ? "NONE" : "Client creation returned empty";

        console.log("NIMX DIAGNOSTIC", window.NIMX_SUPABASE_DIAGNOSTIC);

    } catch (error) {
        window.NIMX_SUPABASE_DIAGNOSTIC.error =
            error.name + ": " + error.message;

        console.error("NIMX DIAGNOSTIC ERROR", error);
    }
})();
