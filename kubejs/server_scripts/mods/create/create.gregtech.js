ServerEvents.recipes(event => {
    // Iron Plate
    pressing(event, "gregtech:iron_plate", [
        { item: "minecraft:iron_ingot" }
    ]);

    // Copper Plate
    pressing(event, "gregtech:copper_plate", [
        { item: "minecraft:copper_ingot" }
    ]);

    // Brass Plate Mixing
    mixing(event, "gregtech:brass_plate", [
        { item: "minecraft:copper_ingot" },
        { item: "minecraft:copper_ingot" },
        { item: "minecraft:copper_ingot" }
    ], "heated");

    // Bronze Plate
    mixing(event, "gregtech:bronze_plate", [
        { item: "minecraft:copper_ingot" },
        { item: "minecraft:tin_ingot" }
    ], "heated");

    // Steel Plate
    mixing(event, "gregtech:steel_plate", [
        { item: "minecraft:iron_ingot" },
        { item: "minecraft:coal" }
    ], "superheated");

    // Nickel Plate
    pressing(event, "gregtech:nickel_plate", [
        { item: "gregtech:nickel_ingot" }
    ]);

    // Invar Dust
    mixing(event, "gregtech:invar_dust", [
        { item: "gregtech:iron_dust" },
        { item: "gregtech:nickel_dust" }
    ], "heated");
});
