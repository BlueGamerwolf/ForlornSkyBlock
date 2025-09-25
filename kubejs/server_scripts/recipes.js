// Helper function to check if an item/tag exists
function itemExists(id) {
    try {
        return Item.exists(id) || Item.exists(`#${id}`);
    } catch (e) {
        return false;
    }
}

// Helper functions for recipes
function shaped(event, result, pattern, key) {
    for (let k in key) {
        if (!itemExists(key[k])) {
            console.warn("Missing shaped recipe key item:", key[k]);
            return;
        }
    }
    event.shaped(result, pattern, key);
}

function mixing(event, result, ingredients, heating = false) {
    for (let ing of ingredients) {
        if (ing.tag && !Tag.exists(ing.tag)) {
            console.warn("Missing mixing recipe tag:", ing.tag);
            return;
        }
        if (ing.item && !itemExists(ing.item)) {
            console.warn("Missing mixing recipe item:", ing.item);
            return;
        }
    }
    event.recipes.create.mixing({
        ingredients: ingredients,
        results: [{ item: result }],
        heatRequirement: heating ? "heated" : "none"
    });
}

function crushing(event, result, ingredients, processingTime = 150) {
    for (let ing of ingredients) {
        if (ing.item && !itemExists(ing.item)) {
            console.warn("Missing crushing recipe item:", ing.item);
            return;
        }
    }
    event.recipes.create.crushing({
        ingredients: ingredients,
        results: [{ item: result }],
        processingTime: processingTime
    });
}

function pressing(event, result, ingredients) {
    for (let ing of ingredients) {
        if (ing.item && !itemExists(ing.item)) {
            console.warn("Missing pressing recipe item:", ing.item);
            return;
        }
    }
    event.recipes.create.pressing({
        ingredients: ingredients,
        results: [{ item: result }]
    });
}

function splashing(event, result, ingredients) {
    for (let ing of ingredients) {
        if (ing.item && !itemExists(ing.item)) {
            console.warn("Missing splashing recipe item:", ing.item);
            return;
        }
    }
    event.recipes.create.splashing({
        ingredients: ingredients,
        results: [{ item: result }]
    });
}

// Main recipes
ServerEvents.recipes(event => {
    // Shaped recipe example
    shaped(event, "minecraft:iron_ingot", [
        "###",
        "###",
        "###"
    ], {
        "#": "minecraft:iron_nugget"
    });

    // Mixing example
    mixing(event, "create:andesite_alloy", [
        { tag: "forge:ingots/iron" },
        { tag: "forge:ingots/zinc" }
    ], true);

    // Crushing example
    crushing(event, "minecraft:iron_nugget", [
        { item: "minecraft:iron_ingot" }
    ], 150);

    // Pressing example
    pressing(event, "minecraft:iron_nugget", [
        { item: "minecraft:iron_ingot" }
    ]);

    // Splashing example
    splashing(event, "minecraft:iron_nugget", [
        { item: "minecraft:iron_ingot" }
    ]);
});
