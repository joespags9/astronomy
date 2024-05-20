import images from './images';

const eras = [
    {
        event: "Present Day",
        era: "Stelliferous",
        subtitle: "The age in which we live",
        years: 0,
        list: ["As of the time of making this website, this describes 2023",
                "The universe up to this point is around 13.8 billion years old"]
    },
    {
        event: "Sahara Becomes Tropical",
        era: "Stelliferous",
        subtitle: "A new place for forests",
        years: "15,000",
        list: ["Osciallating tilt of the earth moves the North African Monsoon northwards",
                "This increases the amount of rainfall, and makes the area tropical",
                "The Sahara is theorized to switch from dry to wet every 20,000 years or so"]
    },
    {
        event: "Day on Earth becomes one second longer",
        era: "Stelliferous",
        subtitle: "More time to sleep in",
        years: "50,000",
        list: ["The pull of the moon on earth gradually slows down earth's rotation",
                "Humans of the future will have to either add leap seconds or change the definition of a day"]
    },
    {
        event: "New Hawaiian Island",
        era: "Stelliferous",
        subtitle: "Aloha",
        years: "250,000",
        list: ["Hawaii rests on top of an area known as a hotspot, meaning mountains are continually being made",
                "This island (currently underwater, but growing) is known as Kama'ehuakanaloa"]
    },
    {
        event: "Belegeuse goes Supernova",
        era: "Stelliferous",
        subtitle: "Orion loses his shoulder",
        years: "1 Million",
        list: ["Betelgeuse, a red supergiant part of the constellation of Orion, runs out of fuel",
                "What remains will be either a neutron star or a black hole",
                "Should be visible on earth (even in daytime) for several months"]
    },
    {
        event: "Eastern Africa Splits from the Continent",
        era: "Stelliferous",
        subtitle: "Anarchy spreads",
        years: "10 Million",
        list: ["A rift zone in Africa is separating the current nations of Somalia, Kenya, Tanzania, and Momzambique from the continent",
                "By this point, the rift will have expanded enough for the Red Sea to flood the valley"
            ]
    },
    {
        event: "New Supercontinent",
        era: "Stelliferous",
        subtitle: "The gang gets back together",
        years: "250 Million",
        list: ["Continental drift converts all the continents back to one giant landmass",
                "This likely results in a glacial period"
            ]
    },
    {
        event: "Photosynthesis Ceases",
        era: "Stelliferous",
        subtitle: "A bad time for herbivores",
        years: "500 Million",
        list: ["An increase in the sun's luminosity evaporates the oceans and stops plate tectonics, meaning there is less volcanism to recycle carbon",
                "Higher luminosity also traps carbon dioxide in the ground, meaning there's a significant drop in carbon dioxide levels",
                "Less carbon dioxide means that plants can no longer photosynthesize"
            ]
    },
    {
        event: "All Eukaryotes Die",
        era: "Stelliferous",
        subtitle: "It's a bit too hot",
        years: "1.3 Billion",
        list: ["Carbon Dioxide starvation leads to an end to complex life",
                "Only prokaryotes (bacteria) remain"
            ]
    },
    {
        event: "All Life Dies",
        era: "Stelliferous",
        subtitle: "It's gotten very lonely",
        years: "2.8 Billion",
        list: ["At this point, the sun has gotten so hot, that nothing can survive on earth",
                "Temperature on earth reaches 296 degrees fahrenheit at the poles"
            ]
    },
    {
        event: "Andromeda and the Milky Way Merge",
        era: "Stelliferous",
        subtitle: "Let's meet our friendly neighbor",
        years: "5 Billion",
        list: ["Andromeda and the Milky Way have now united into one galaxy called Milkdromeda",
                "Due to the huge amount of space between stellar objects, our solar system is likely fine"
            ]
    },
    {
        event: "Sun Becomes a Red Giant",
        era: "Stelliferous",
        subtitle: "Our sun starts to not understand the concept of personal space",
        years: "5.4 Billion - 8 Billion",
        list: ["Sun starts to run out of hydrogen, and begins to fuse heavier elements, causing it to expand",
                "Mercury and Venus are eventually engulfed, Earth likely will be destroyed as well",
                "Saturn's moon, Titan, may be able to develop life"
            ]
    },
    {
        event: "Sun Becomes a White Dwarf",
        era: "Stelliferous",
        subtitle: "Ding, dong, the sun is dead",
        years: "8 Billion",
        list: ["Sun can no longer fuse elements, and it becomes a carbon-oxygen white dwarf",
                "Sun is now about the size of the moon, but far denser and hotter"
            ]
    },
    {
        event: "Star Formation Ends",
        era: "Degenerate",
        subtitle: "It was nice while it lasted",
        years: "1 Trillion",
        list: ["All stars have turned into either white dwarfs, neutron stars, or black holes",
                "There is no longer enough gas clouds to create new stars",
                "The degenerate era begins"
            ]
    },
    {
        event: "White Dwarfs become Black Dwarfs",
        era: "Degenerate",
        subtitle: "It starting to get a bit cold",
        years: "1 Trillion Trillion",
        list: ["White dwarfs have cooled down enough that not much light or heat is emitted",
                "What's left over is a black dwarf"
            ]
    },
    {
        event: "Black Dwarves and Neutron Stars May Radiate Away",
        era: "BlackHole",
        subtitle: "There's only room for one of us",
        years: "1 Trillion Trillion Trillion",
        list: ["If protons decay, black dwarfs and neutron stars will eventually disappear",
                "What's left over is radiation",
                "The black hole era begins"
            ]
    },
    {
        event: "Small Black Holes Start to Evaporate",
        era: "BlackHole",
        subtitle: "Time to clear out",
        years: "1 Thousand Trillion Trillion Trillion Trillion",
        list: ["Hawking Radiation finally causes black holes to disappear",
                "Only black holes with the mass of earth (less than a half inch in diameter) would disappear at this stage"
            ]
    },
    {
        event: "Largest Black Holes Evaporate",
        era: "BlackHole",
        subtitle: "Last guests are leaving",
        years: "1 Trillion Trillion Trillion Trillion Trillion Trillion Trillion Trillion Trillion",
        list: ["All black holes begin to evaporate away due to Hawking radiation",
                "These include black holes with trillions of times the mass of the sun"
            ]
    },
    {
        event: "Heat Death",
        era: "Dark",
        subtitle: "That's all folks",
        years: "1 Thousand Trillion Trillion Trillion Trillion Trillion Trillion Trillion Trillion Trillion",
        list: ["The radiation left from the black holes cools towards absolute zero",
                "Entropy (disorder) is at its maximum, nothing new can happen, making time meaningless",
                "The universe is, for all intents and purposes, dead forever"
            ]
    },

    
]

const dark_energy = [
    {
        title:"Dark Energy",
        caption: "Feel the power of the dark side",
        tiltImage: images.DarkEnergy,
        overview: "Our universe began with the big bang 13.7 billion years ago, and it has been expanding ever since. We refer to the force expanding the universe as dark energy. Understanding dark energy is key tounderstanding the future of the universe.",
        summary: "Dark energy makes up around 68% of the universe. Although we can witness its effects by observing the expansion of space, the exact nature of dark energy is a mystery.",
        mi1_title: "Einstein Thought of it First... Sort Of",
        mi1_image: images.Einstein,
        mi1_p1: "Einstein was a firm believer in a 'steady-state' universe, where it did not expand or contract over time. In order to prevent gravity from causing the universe to collapse in on itself, he proposed that empty space contained a special property that prevented it from contracting. He referred to this property as the 'cosmological constant.'",
        mi1_p2: "When observations from Edwin Hubble and others showed definitively that the universe is expanding, Einstein abandoned this idea, later calling it his 'greatest blunder.' However, when observations made decades later showed the expansion of the universe accelerating faster than gravity allowed for, Einstein's idea made a comeback with the new moniker 'dark energy.'",
        m11_p3: "So although he introduced the concept for erroneous reasons, Einstein's 'greatest blunder' proved to be a very valuable insight.",
        mi2_title: "The Expansion of the Universe is Accelerating",
        mi2_image: images.Expansion,
        mi2_p1: "After the big bang and the expansion of the universe gained widespread acceptance, the discussion then became what exactly would happen to the universe in the distant future. It was assumed that the universe would eventually collapse in on itself, as gravity would surely counteract the initial 'bang' that caused the universe to expand.",
        mi2_p2: "In the 1990s, scientists did more measurements on the expansion of the universe, and much to their surprise, the expansion of the universe was actually accelerating. This suggested that there existed something in space that was counteracting the force of gravity.",
        m12_p3: "Due to its unknown nature, it was given the name 'dark energy.'",
        mi3_title: "We Don't Know What Dark Energy Actually Is",
        mi3_image: images.Quintessence,
        mi3_p1: "Although we can readily observe the effects of dark energy via the expansion of the universe, what it is and where it originates is still a mystery.",
        mi3_p2: "Some believe it is an inherent property of empty space (Einstein's 'cosmological constant'), others believe it is part of a hypothetical field called the quintessence field, still others think it's just an effect of general relativity around black holes.",
        m13_p3: "Whatever the case, we know it exists in some form, and physicists are attempting to find possible explanations.",
    }
]

export default {eras, dark_energy}