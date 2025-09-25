ServerEvents.recipes(event => {
    // Immersive Engineering: Copper Sheetmetal
    pressing(event, "immersiveengineering:sheetmetal_copper", [
        { item: "immersiveengineering:ingot_copper" }
    ]);

    // Immersive Engineering: Aluminum Sheetmetal
    pressing(event, "immersiveengineering:sheetmetal_aluminum", [
        { item: "immersiveengineering:ingot_aluminum" }
    ]);

    // Immersive Engineering: Steel Sheetmetal
    pressing(event, "immersiveengineering:sheetmetal_steel", [
        { item: "immersiveengineering:ingot_steel" }
    ]);

    // Immersive Engineering: Zinc Sheetmetal
    pressing(event, "immersiveengineering:sheetmetal_zinc", [
        { item: "immersiveengineering:ingot_zinc" }
    ]);
});
