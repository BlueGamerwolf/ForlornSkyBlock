ServerEvents.recipes(event => {
    // Shaped recipe
    event.shaped("minecraft:iron_ingot", [
        "###",
        "###",
        "###"
    ], {
        "#": "minecraft:iron_nugget"
    });

    // Mixing recipe
    event.recipes.create.mixing({
        ingredients: [
            { tag: "forge:ingots/iron" },
            { tag: "forge:ingots/zinc" }
        ],
        results: [{ item: "create:andesite_alloy" }],
        heatRequirement: "heated"
    });

    // Crushing recipe
    event.recipes.create.crushing({
        ingredients: [{ item: "minecraft:iron_ingot" }],
        results: [{ item: "minecraft:iron_nugget" }],
        processingTime: 150
    });

    // Pressing recipe
    event.recipes.create.pressing({
        ingredients: [{ item: "minecraft:iron_ingot" }],
        results: [{ item: "minecraft:iron_nugget" }]
    });

    // Splashing recipe
    event.recipes.create.splashing({
        ingredients: [{ item: "minecraft:iron_ingot" }],
        results: [{ item: "minecraft:iron_nugget" }]
    });
});
