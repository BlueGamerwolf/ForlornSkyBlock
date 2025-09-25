ServerEvents.recipes(event => {
    // Energized Steel Ingot
    mixing(event, "powah:energized_steel_ingot", [
        { item: "minecraft:iron_ingot" },
        { item: "minecraft:redstone" },
        { fluid: "powah:energy" }
    ], "superheated");

    // Steel Ingot
    mixing(event, "powah:steel_ingot", [
        { item: "minecraft:iron_ingot" },
        { item: "minecraft:coal" }
    ], "heated");

    // Energetic Alloy Ingot
    mixing(event, "powah:energetic_alloy_ingot", [
        { item: "minecraft:iron_ingot" },
        { item: "minecraft:redstone" },
        { item: "minecraft:glowstone_dust" }
    ], "superheated");
});
