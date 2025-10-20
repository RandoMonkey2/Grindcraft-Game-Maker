// Game Info
setGameInfo({
    name: "My Biology Game",                         // The name of your game!
    version: "0.1",                                     // The current version of your game!
    icon: "images/system/blank.png",                    // Link or path to an icon image for your game!
    ID: "myBiologyGame",                             // Your game's ID! Should be unique for every game!
});

// Resources

addResources({                                          // Function for adding all the resources (items/tools/buildings) that are used in your game!
    "dirt hut": {
        image: "images/dirtHut.png",
    },
    "light": {
        image: "images/light.png",
    },
    "water": {
        image: "images/water.png",
    },
    "mineral": {
        image: "images/mineral.png",
    },
    "carbondioxide": {
        image: "images/carbondioxide.png",
    },
    "bee": {
        image: "images/BE.png",
    },
    "butterfly": {
        image: "images/butterfly.png",
    },
    "dna": {
        image: "images/DNA.png",
    },
     "dark": {
        image: "images/DARK.png",
    },
});

// Areas

addArea("c",                                            // Function for adding areas to your game
{
    name: "The World",
    image: "images/areas/cityState.png",
    unlocked: true,
    updateWhileUnactive: true,

    grinds: [
        {
            name: "Chorophyll",
            unlocked: true,
            auto: ["dirt hut"],                         // List of items that will auto-grind this grind
            background: "images/grinds/overworld.png",
            resources: [
                {
                    id: "light",
                    time: [["", 10.0]],
                    probability: 50,
                },
                {
                    id: "dark",
                    time: [["", 10.0]],
                    probability: 50,
                },
            ]
        },
        {
            name: "Roots",
            unlocked: true,
            auto: ["dirt hut"],                         // List of items that will auto-grind this grind
            background: "images/grinds/overworld.png",
            resources: [
                {
                    id: "water",
                    time: [["", 10.0]],
                    probability: 50,
                },
                {
                    id: "mineral",
                    time: [["", 20.0]],
                    probability: 50,
                },
            ]
        },
        {
            name: "Air",
            unlocked: true,
            auto: ["dirt hut"],                         // List of items that will auto-grind this grind
            background: "images/grinds/overworld.png",
            resources: [
                {
                    id: "carbondioxide",
                    time: [["", 10.0]],
                    probability: 95,
                },
                {
                    id: "bee",
                    time: [["", 40.0]],
                    probability: 3,
                },
                {
                    id: "butterfly",
                    time: [["", 30.0]],
                    probability: 2,
                },
            ]
        },
        {
            name: "DNA",
            unlocked: true,
            auto: ["dirt hut"],                         // List of items that will auto-grind this grind
            background: "images/grinds/overworld.png",
            resources: [
                {
                    id: "dna",
                    time: [["", 30.0]],
                    probability: 2,
                },
            ]
        },
    ],

    crafts: [
        {
            name: "DNA",
            desc: "Codes for all life",
            type: "display",
            cost: [["dna", 0]],
        },
        {
            name: "Light",
            desc: "Light from the Sun",
            type: "display",
            cost: [["light", 0]],
        },
        {
            name: "Dark",
            desc: "The abscence of light",
            type: "display",
            cost: [["dark", 0]],
        },
        {
            name: "Mineral",
            desc: "tiny rocks in the ground",
            type: "display",
            cost: [["mineral", 0]],
        },
        {
            name: "Carbon Dioxide",
            desc: "One carbon two oxygen",
            type: "display",
            cost: [["carbondioxide", 0]],
        },
        {
            name: "Bee",
            desc: "it's a bee",
            type: "display",
            cost: [["bee", 0]],
        },
        {
            name: "Butterfly",
            desc: "Happy lil guy :)",
            type: "display",
            cost: [["butterfly", 0]],
        },




        {
            name: "dirt hut",
            desc: "Required to beat the game!",
            type: "display",
            cost: [["dirt hut", 0]],
            message: "You have beaten the game!",
        },
    ],

    update(diff) {                                      // diff is the time in milliseconds since last time the update function was runned
        
    },
}
);

// Function that will be runned when the website is loaded
function onLoad(oldVersion) {
    // If the game version in the player's save is not the same as the current game version:
    if (oldVersion !== player.gameInfo.version) {
        // Write it to the console
        console.log(oldVersion);
    }
}