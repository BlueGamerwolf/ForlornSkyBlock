ServerEvents.recipes(event => {
    // Draconium Dust from Crushing End Stone
    crushing(event, "draconicevolution:draconium_dust", [
        { item: "minecraft:end_stone" }
    ], 200);

    // Awakened Draconium Plate from Awakened Draconium Ingot
    pressing(event, "draconicevolution:awakened_draconium_plate", [
        { item: "draconicevolution:awakened_draconium_ingot" }
    ]);

    // Draconium Plate from Draconium Ingot
    pressing(event, "draconicevolution:draconium_plate", [
        { item: "draconicevolution:draconium_ingot" }
    ]);

    // Awakened Draconium Dust Mixing
    mixing(event, "draconicevolution:awakened_draconium_dust", [
        { item: "draconicevolution:awakened_draconium_ingot" },
        { fluid: "create:potion", nbt: { Potion: "minecraft:strong_regeneration" }, amount: 1000 },
        { item: "minecraft:dragon_breath" }
    ], "superheated");
});
