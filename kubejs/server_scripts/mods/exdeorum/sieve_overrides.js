ServerEvents.recipes(event => {
    // Gravel with string mesh
    event.sieve('minecraft:gravel', 'gtceu:iron_dust_tiny', 0.15, 'exnihilosequentia:string_mesh')
    event.sieve('minecraft:gravel', 'gtceu:copper_dust_tiny', 0.12, 'exnihilosequentia:string_mesh')
    event.sieve('minecraft:gravel', 'gtceu:tin_dust_tiny', 0.10, 'exnihilosequentia:string_mesh')
    event.sieve('minecraft:gravel', 'gtceu:coal_dust_tiny', 0.08, 'exnihilosequentia:string_mesh')

    // Gravel with flint mesh
    event.sieve('minecraft:gravel', 'gtceu:iron_dust_tiny', 0.20, 'exnihilosequentia:flint_mesh')
    event.sieve('minecraft:gravel', 'gtceu:copper_dust_tiny', 0.18, 'exnihilosequentia:flint_mesh')
    event.sieve('minecraft:gravel', 'gtceu:tin_dust_tiny', 0.15, 'exnihilosequentia:flint_mesh')
    event.sieve('minecraft:gravel', 'gtceu:redstone_dust_tiny', 0.12, 'exnihilosequentia:flint_mesh')

    // Sand with flint mesh
    event.sieve('minecraft:sand', 'gtceu:lapis_dust_tiny', 0.10, 'exnihilosequentia:flint_mesh')
    event.sieve('minecraft:sand', 'gtceu:quartz_dust_tiny', 0.08, 'exnihilosequentia:flint_mesh')

    // Crushed Deepslate with string mesh
    event.sieve('exdeorum:crushed_deepslate', 'exdeorum:deepslate_pebble', 0.10, 'exnihilosequentia:string_mesh')
})
