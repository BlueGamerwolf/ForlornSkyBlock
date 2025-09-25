ServerEvents.recipes(event => {
    // Bronze Ingot
    mixing(event, "thermal:bronze_ingot", [
        { item: "thermal:copper_ingot" },
        { item: "thermal:tin_ingot" }
    ], "heated");

    // Electrum Ingot
    mixing(event, "thermal:electrum_ingot", [
        { item: "minecraft:gold_ingot" },
        { item: "minecraft:gold_nugget" }
    ], "heated");

    // Invar Ingot
    mixing(event, "thermal:invar_ingot", [
        { item: "thermal:iron_ingot" },
        { item: "thermal:nickel_ingot" }
    ], "heated");

    // Constantan Ingot
    mixing(event, "thermal:constantan_ingot", [
        { item: "thermal:copper_ingot" },
        { item: "thermal:nickel_ingot" }
    ], "heated");
});
