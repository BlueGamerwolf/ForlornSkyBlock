// Helpers for Create recipes in KubeJS

function shaped(event, resultItem, pattern, keys) {
    if (!resultItem) {
        console.info("❌ shaped recipe error: Missing result item.");
        return;
    }
    event.shaped(resultItem, pattern, keys);
}

function mixing(event, resultItem, ingredients, heatRequirement) {
    if (heatRequirement === undefined) heatRequirement = null;
    if (!resultItem) {
        console.info("❌ mixing recipe error: Missing result item.");
        return;
    }

    let recipe = {
        type: "create:mixing",
        results: [{ item: resultItem }],
        ingredients: ingredients
    };

    if (heatRequirement) recipe.heatRequirement = heatRequirement;
    event.custom(recipe);
}

function crushing(event, resultItem, ingredients, processingTime) {
    if (processingTime === undefined) processingTime = 100;
    if (!resultItem) {
        console.info("❌ crushing recipe error: Missing result item.");
        return;
    }

    event.custom({
        type: "create:crushing",
        ingredients: ingredients,
        results: [{ item: resultItem }],
        processingTime: processingTime
    });
}

function pressing(event, resultItem, ingredients) {
    if (!resultItem) {
        console.info("❌ pressing recipe error: Missing result item.");
        return;
    }

    event.custom({
        type: "create:pressing",
        ingredients: ingredients,
        results: [{ item: resultItem }]
    });
}

function splashing(event, resultItem, ingredients) {
    if (!resultItem) {
        console.info("❌ splashing recipe error: Missing result item.");
        return;
    }

    event.custom({
        type: "create:splashing",
        ingredients: ingredients,
        results: [{ item: resultItem }]
    });
}
