ServerEvents.recipes(event => {
    // Mekanism: Osmium Dust
    crushing(event, "mekanism:dust_osmium", [
        { item: "mekanism:ore_osmium" }
    ], 200);

    // Mekanism: Tin Dust
    crushing(event, "mekanism:dust_tin", [
        { item: "mekanism:ore_tin" }
    ], 200);

    // Mekanism: Copper Dust
    crushing(event, "mekanism:dust_copper", [
        { item: "mekanism:ore_copper" }
    ], 200);

    // Mekanism: Uranium Dust
    crushing(event, "mekanism:dust_uranium", [
        { item: "mekanism:ore_uranium" }
    ], 200);
});
