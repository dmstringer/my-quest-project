
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('treasure_table').del()
    .then(function () {
      // Inserts seed entries
      return knex('treasure_table').insert([
        {
          "treasuretable_type": "Commodities",
          "treasuretable_num": 11,
          "treasuretable_name": "Map",
          "treasuretable_cost": "--",
          "treasuretable_description": "A secret door is shown in the next room the Warriors come to, put a door on the side of the room and resolve two events, then take two treasures in addition to the monster’s loot."
        },
        {
          "treasuretable_type": "Commodities",
          "treasuretable_num": 12,
          "treasuretable_name": "Potion of Alchemy",
          "treasuretable_cost": "D6x40",
          "treasuretable_description": "Worth D6x40 gold to alchemist, if an alchemist is in the party, can be used to make potion of choice."
        },
        {
          "treasuretable_type": "Commodities",
          "treasuretable_num": 13,
          "treasuretable_name": "Hidden Alcove",
          "treasuretable_cost": "Var",
          "treasuretable_description": "Roll as many D6 as desired for the part, if any come up a 1 then nothing is found, but an event is resolved due to the noise.  If any come up 2-5, then add them up and find that number times 10 in gold.  For each 6, a treasure is found!"
        },
        {
          "treasuretable_type": "Commodities",
          "treasuretable_num": 14,
          "treasuretable_name": "Pearl Necklace",
          "treasuretable_cost": "Var",
          "treasuretable_description": "Roll as many D6 as desired, multiply the result by 10, but if any 1s result, the shop refuses to buy, and another settlement must be tried"
        },
        {
          "treasuretable_type": "Commodities",
          "treasuretable_num": 15,
          "treasuretable_name": "Exotic foods of Tilea",
          "treasuretable_cost": "50",
          "treasuretable_description": "A rare delicacy"
        },
        {
          "treasuretable_type": "Commodities",
          "treasuretable_num": 16,
          "treasuretable_name": "Spices from Araby",
          "treasuretable_cost": "var",
          "treasuretable_description": "Expensive spices and goods from afar worth D3x100 gold"
        },
        {
          "treasuretable_type": "Commodities",
          "treasuretable_num": 21,
          "treasuretable_name": "Ancient Vase of Lustria",
          "treasuretable_cost": "175",
          "treasuretable_description": "Odd and unusable, but fascinating"
        },
        {
          "treasuretable_type": "Commodities",
          "treasuretable_num": 22,
          "treasuretable_name": "Fine Clothes",
          "treasuretable_cost": "25 per",
          "treasuretable_description": "D6 pieces of clothing fit for a king"
        },
        {
          "treasuretable_type": "Commodities",
          "treasuretable_num": 23,
          "treasuretable_name": "Quarg Horn",
          "treasuretable_cost": "1000",
          "treasuretable_description": "Usable only during the Quarg Hunt Settlement Event.  During the hunt, roll D6: 1-5 = no effect, 6 = a quarg shows up , worth 1000 gold!"
        },
        {
          "treasuretable_type": "Commodities",
          "treasuretable_num": 24,
          "treasuretable_name": "Holy Artefact",
          "treasuretable_cost": "var",
          "treasuretable_description": "At a temple, the priests will pay D6x100 gold for the artefact, but if a 1 is rolled, they give you nothing here, but another temple in another settlement may buy it."
        },
        {
          "treasuretable_type": "Commodities",
          "treasuretable_num": 25,
          "treasuretable_name": "Wines of Bretonnia",
          "treasuretable_cost": "Var",
          "treasuretable_description": "Noble wine worth D6x100 gold"
        },
        {
          "treasuretable_type": "Commodities",
          "treasuretable_num": 26,
          "treasuretable_name": "Ulathan Wine",
          "treasuretable_cost": "Var",
          "treasuretable_description": "Fine elven wine worth D6x125 gold"
        },
        {
          "treasuretable_type": "Commodities",
          "treasuretable_num": 31,
          "treasuretable_name": "Tankard",
          "treasuretable_cost": "20",
          "treasuretable_description": "A Dwarven Tankard that no dwarf would ever part with"
        },
        {
          "treasuretable_type": "Commodities",
          "treasuretable_num": 32,
          "treasuretable_name": "Dwarf Pick",
          "treasuretable_cost": "125",
          "treasuretable_description": "Can clear away debris and rubble in D6 turns, but after each successful use, roll a D6: 1 = the pick breaks and is destroyed."
        },
        {
          "treasuretable_type": "Commodities",
          "treasuretable_num": 33,
          "treasuretable_name": "Precious Icon",
          "treasuretable_cost": "Var",
          "treasuretable_description": "Worth D6x200 gold to elders in a Village (not a town of city)"
        },
        {
          "treasuretable_type": "Commodities",
          "treasuretable_num": 34,
          "treasuretable_name": "Abandoned Backpack",
          "treasuretable_cost": "Var",
          "treasuretable_description": "D3 treasure items in the pack, but what happened to the warrior wearing it?"
        },
        {
          "treasuretable_type": "Commodities",
          "treasuretable_num": 35,
          "treasuretable_name": "Fine Gold Elf Wine",
          "treasuretable_cost": "var",
          "treasuretable_description": "A bottle heals D3 wounds, but makes the Warrior -1 to hit for D3 turns.  D6 bottles are found worth 100 Gold"
        },
        {
          "treasuretable_type": "Commodities",
          "treasuretable_num": 36,
          "treasuretable_name": "Silks of Cathay",
          "treasuretable_cost": "Var",
          "treasuretable_description": "A bolt of silk, stored in a chest is found, worth D6x25 gold"
        },
        {
          "treasuretable_type": "Commodities",
          "treasuretable_num": 41,
          "treasuretable_name": "Provisions",
          "treasuretable_cost": "0",
          "treasuretable_description": "D6 Provisions are discovered, each heals 2 wounds and are exactly like provisions that can be purchased in settlements"
        },
        {
          "treasuretable_type": "Commodities",
          "treasuretable_num": 42,
          "treasuretable_name": "Bandages",
          "treasuretable_cost": "0",
          "treasuretable_description": "D6 Bandages are discovered, each heals 3 wounds and are exactly like bandages that can be purchased in settlements"
        },
        {
          "treasuretable_type": "Commodities",
          "treasuretable_num": 43,
          "treasuretable_name": "Tapestries of Bretonia",
          "treasuretable_cost": "Var",
          "treasuretable_description": "Fine Tapestries are found here, and can be sold at the next settlement for D6x50 gold"
        },
        {
          "treasuretable_type": "Commodities",
          "treasuretable_num": 44,
          "treasuretable_name": "Jewelry",
          "treasuretable_cost": "Var",
          "treasuretable_description": "The Monsters had fine jewelry hidden away, worth D6x50 gold in the next settlement."
        },
        {
          "treasuretable_type": "Commodities",
          "treasuretable_num": 45,
          "treasuretable_name": "Dinner Wear",
          "treasuretable_cost": "Var",
          "treasuretable_description": "Flatwear, goblets, plates, and such fit for a king is found, worth D6x25 gold the next settlement."
        },
        {
          "treasuretable_type": "Commodities",
          "treasuretable_num": 46,
          "treasuretable_name": "Ceremonial Armor",
          "treasuretable_cost": "150",
          "treasuretable_description": "+1 Toughness, any attack that rolls a natural 6 for damage destroys the armor if worn, but is worth 150 gold in the settlement."
        },
        {
          "treasuretable_type": "Commodities",
          "treasuretable_num": 51,
          "treasuretable_name": "Elven Cooking Herbs",
          "treasuretable_cost": "Var",
          "treasuretable_description": "Rare spices and herbs from Ulathan, dried and preserved in wax packets, worth 2D6x25 gold"
        },
        {
          "treasuretable_type": "Commodities",
          "treasuretable_num": 52,
          "treasuretable_name": "Carpets from far Cathay",
          "treasuretable_cost": "Var",
          "treasuretable_description": "Oriental rugs are stacked here, D6 of them worth D6x10 gold each."
        },
        {
          "treasuretable_type": "Commodities",
          "treasuretable_num": 53,
          "treasuretable_name": "Incense of Araby",
          "treasuretable_cost": "Var",
          "treasuretable_description": "Rare and expensive incense is found, worth D6x50 gold"
        },
        {
          "treasuretable_type": "Commodities",
          "treasuretable_num": 54,
          "treasuretable_name": "Ingots of Iron",
          "treasuretable_cost": "Var",
          "treasuretable_description": "D6 iron ingots are discovered with Dwarven marks on them, worth D6x30 gold each"
        },
        {
          "treasuretable_type": "Commodities",
          "treasuretable_num": 55,
          "treasuretable_name": "Ingots of Silver",
          "treasuretable_cost": "Var",
          "treasuretable_description": "D3 silver ingots are discovered, pure silver worth D3x100 gold each"
        },
        {
          "treasuretable_type": "Commodities",
          "treasuretable_num": 56,
          "treasuretable_name": "Ingots of Gold",
          "treasuretable_cost": "Var",
          "treasuretable_description": "D3 gold ingots are found!  Roll 3D6 for each separately, if any of the 3D6 rolls results in doubles, they are painted lead, but otherwise multiply the result by 25 for the gold value"
        },
        {
          "treasuretable_type": "Commodities",
          "treasuretable_num": 61,
          "treasuretable_name": "Musical Instruments",
          "treasuretable_cost": "Var",
          "treasuretable_description": "Stored here are D6 musical instruments, worth D6x10 gold in a village, double that in a town, and triple that in a city (D6x30 in a city)."
        },
        {
          "treasuretable_type": "Commodities",
          "treasuretable_num": 62,
          "treasuretable_name": "Books",
          "treasuretable_cost": "300",
          "treasuretable_description": "Various books and bound leaves of writing are here, none magical, but valuable none the less"
        },
        {
          "treasuretable_type": "Commodities",
          "treasuretable_num": 63,
          "treasuretable_name": "Uncut Gems",
          "treasuretable_cost": "var",
          "treasuretable_description": "One of the warriors recognizes some pebbles as uncut gems, worth D6x40 gold in the city, and but D6x10 gold in a town, nothing in a village."
        },
        {
          "treasuretable_type": "Commodities",
          "treasuretable_num": 64,
          "treasuretable_name": "Keys",
          "treasuretable_cost": "50",
          "treasuretable_description": "A set of keys on a ring is found, for any door encountered, roll a D6: 1-5 = no key fits, 6 = the key needed is on the ring!"
        },
        {
          "treasuretable_type": "Commodities",
          "treasuretable_num": 65,
          "treasuretable_name": "Bugman’s Beer",
          "treasuretable_cost": "var",
          "treasuretable_description": "A less potent Mix than the 6X that can be found, but still worth D6x20 gold at any settlement’s Ale House."
        },
        {
          "treasuretable_type": "Commodities",
          "treasuretable_num": 66,
          "treasuretable_name": "Treasure Map",
          "treasuretable_cost": "Var",
          "treasuretable_description": "A partially destroyed map that indicates great treasure.  As each room is entered, roll a D6: 1-5 = not the treasure room, 6 = The treasure horde is hidden here.  After all encounters are dealt with, the Warriors discover a treasure horde, roll 3 times on the Treasure Chart, and resolve an event card immediately upon looting it."
        },
        {
          "treasuretable_type": "Potions and Trinkets",
          "treasuretable_num": 11,
          "treasuretable_name": "Madcap Potion",
          "treasuretable_cost": "100",
          "treasuretable_description": "Grants x2 attacks when taken, until a 1 is rolled for POW, at which point the drinker is reduced to 1 Initiative and 1 attack for D6 turns."
        },
        {
          "treasuretable_type": "Potions and Trinkets",
          "treasuretable_num": 12,
          "treasuretable_name": "Skalm",
          "treasuretable_cost": "50",
          "treasuretable_description": "Roll a D6 when drank: 1 = does 1D6 wounds with no modifiers, 2-6 = Heals all wounds"
        },
        {
          "treasuretable_type": "Potions and Trinkets",
          "treasuretable_num": 13,
          "treasuretable_name": "Potion of Knowledge",
          "treasuretable_cost": "200",
          "treasuretable_description": "Spells cost 0 POW, each turn roll a D6: 1-2 = wears off + roll a D6, on a 1 all magic ability is lost until the end of the adventure."
        },
        {
          "treasuretable_type": "Potions and Trinkets",
          "treasuretable_num": 14,
          "treasuretable_name": "Potion of Healing",
          "treasuretable_cost": "75",
          "treasuretable_description": "Heals D6 wounds"
        },
        {
          "treasuretable_type": "Potions and Trinkets",
          "treasuretable_num": 15,
          "treasuretable_name": "Healing Balm",
          "treasuretable_cost": "200",
          "treasuretable_description": "Heals all wounds lost"
        },
        {
          "treasuretable_type": "Potions and Trinkets",
          "treasuretable_num": 16,
          "treasuretable_name": "Potion of Levitation",
          "treasuretable_cost": "250",
          "treasuretable_description": "Lasts one turn.  Ignore pits, chasms etc, all attacks are –1 to hit drinker."
        },
        {
          "treasuretable_type": "Potions and Trinkets",
          "treasuretable_num": 21,
          "treasuretable_name": "Magic Potion",
          "treasuretable_cost": "60",
          "treasuretable_description": "When imbibed, roll D6: 1 = lose 2D6 wounds, 2 = lose 1D6 wounds, 3 = skin is rainbow striped, 4 = heals 1D6 wounds, 5 = heals 2D6 wounds, 6 = heals all wounds"
        },
        {
          "treasuretable_type": "Potions and Trinkets",
          "treasuretable_num": 22,
          "treasuretable_name": "Salve of Strength",
          "treasuretable_cost": "100",
          "treasuretable_description": "Gives +1 Strength for D6 turns"
        },
        {
          "treasuretable_type": "Potions and Trinkets",
          "treasuretable_num": 23,
          "treasuretable_name": "Potion of Strength",
          "treasuretable_cost": "150",
          "treasuretable_description": "Gives D6 Strength for one turn"
        },
        {
          "treasuretable_type": "Potions and Trinkets",
          "treasuretable_num": 24,
          "treasuretable_name": "Holy Water",
          "treasuretable_cost": "250",
          "treasuretable_description": "Roll to hit with BS, does D6 wounds to any undead, chaos, or daemon creature (and D3 to any such creature adjacent to the target) with no modifiers."
        },
        {
          "treasuretable_type": "Potions and Trinkets",
          "treasuretable_num": 25,
          "treasuretable_name": "Potion of Flying",
          "treasuretable_cost": "150",
          "treasuretable_description": "For one turn, can move D6+2 squares, fly over all obstacles, and cannot be pinned."
        },
        {
          "treasuretable_type": "Potions and Trinkets",
          "treasuretable_num": 26,
          "treasuretable_name": "Potion of Lightning Blades",
          "treasuretable_cost": "500",
          "treasuretable_description": "+1 to hit per Battle-Level for one turn"
        },
        {
          "treasuretable_type": "Potions and Trinkets",
          "treasuretable_num": 31,
          "treasuretable_name": "Potion of Endurance",
          "treasuretable_cost": "300",
          "treasuretable_description": "Can ignore one blow that would otherwise kill him"
        },
        {
          "treasuretable_type": "Potions and Trinkets",
          "treasuretable_num": 32,
          "treasuretable_name": "Incense of Healing",
          "treasuretable_cost": "200",
          "treasuretable_description": "When opened, heals every warrior on the same board section 2D6 wounds and is expended."
        },
        {
          "treasuretable_type": "Potions and Trinkets",
          "treasuretable_num": 33,
          "treasuretable_name": "Potion of Pain",
          "treasuretable_cost": "300",
          "treasuretable_description": "Heals 2D6 wounds and allows drinker to ignore one blow that would otherwise kill him"
        },
        {
          "treasuretable_type": "Potions and Trinkets",
          "treasuretable_num": 34,
          "treasuretable_name": "Potion of Battle",
          "treasuretable_cost": "75",
          "treasuretable_description": "+1 attack for one turn"
        },
        {
          "treasuretable_type": "Potions and Trinkets",
          "treasuretable_num": 35,
          "treasuretable_name": "Potion of Weapon Mastery",
          "treasuretable_cost": "150",
          "treasuretable_description": "+2 to hit and damage is +2D6 wounds for one turn"
        },
        {
          "treasuretable_type": "Potions and Trinkets",
          "treasuretable_num": 36,
          "treasuretable_name": "Undead Bane",
          "treasuretable_cost": "50",
          "treasuretable_description": "Enough for 1 weapon for 1 turn, causes an additional 1 wound per Battle-Level damage to undead"
        },
        {
          "treasuretable_type": "Potions and Trinkets",
          "treasuretable_num": 41,
          "treasuretable_name": "Chaos Bane",
          "treasuretable_cost": "200",
          "treasuretable_description": "Enough for 1 weapon for 1 turn, causes an additional 1 wound per Battle-Level damage to Chaos creatures"
        },
        {
          "treasuretable_type": "Potions and Trinkets",
          "treasuretable_num": 42,
          "treasuretable_name": "Potion of Toughness",
          "treasuretable_cost": "75",
          "treasuretable_description": "+1 toughness until end of turn"
        },
        {
          "treasuretable_type": "Potions and Trinkets",
          "treasuretable_num": 43,
          "treasuretable_name": "Potion of Instability",
          "treasuretable_cost": "200",
          "treasuretable_description": "For one turn, cannot be pinned, cast spells, attack, be attacked, or be the target of any traps, magic, etc."
        },
        {
          "treasuretable_type": "Potions and Trinkets",
          "treasuretable_num": 44,
          "treasuretable_name": "Potion of Keensight",
          "treasuretable_cost": "250",
          "treasuretable_description": "For one turn, may make as many bow attacks as the drinker has attacks"
        },
        {
          "treasuretable_type": "Potions and Trinkets",
          "treasuretable_num": 45,
          "treasuretable_name": "Bugmans XXXXXX",
          "treasuretable_cost": "200",
          "treasuretable_description": "4 doses: heals D6 wounds, but is –3 to hit next D3 turns, each use reduces gold value 50 gp"
        },
        {
          "treasuretable_type": "Potions and Trinkets",
          "treasuretable_num": 46,
          "treasuretable_name": "Potion of Invisibility",
          "treasuretable_cost": "200",
          "treasuretable_description": "For one turn, cannot be pinned, cannot be attacked or targeted by magic, cannot cast spells, but can attack"
        },
        {
          "treasuretable_type": "Potions and Trinkets",
          "treasuretable_num": 51,
          "treasuretable_name": "Potion of Disguise",
          "treasuretable_cost": "100",
          "treasuretable_description": "For one turn, monsters will ignore and will not pin the drinker unless he attacks them"
        },
        {
          "treasuretable_type": "Potions and Trinkets",
          "treasuretable_num": 52,
          "treasuretable_name": "Arkal’s Powder",
          "treasuretable_cost": "100",
          "treasuretable_description": "For one turn, can move 3D6 squares and cannot be pinned"
        },
        {
          "treasuretable_type": "Potions and Trinkets",
          "treasuretable_num": 53,
          "treasuretable_name": "Healing Herbs",
          "treasuretable_cost": "300",
          "treasuretable_description": "Elf or alchemist can make D6 healing potions from this between adventures"
        },
        {
          "treasuretable_type": "Potions and Trinkets",
          "treasuretable_num": 54,
          "treasuretable_name": "Poison",
          "treasuretable_cost": "150",
          "treasuretable_description": "Enough for one weapon, lasts one battle.  If the weapon causes damage, it does an additional D3 wounds at the end of turn"
        },
        {
          "treasuretable_type": "Potions and Trinkets",
          "treasuretable_num": 55,
          "treasuretable_name": "Potion of Erupting",
          "treasuretable_cost": "75",
          "treasuretable_description": "Does D6 damage with no modifiers to any square within 2x the thrower’s Strength."
        },
        {
          "treasuretable_type": "Potions and Trinkets",
          "treasuretable_num": 56,
          "treasuretable_name": "Firebomb",
          "treasuretable_cost": "100",
          "treasuretable_description": "D6 found, Does D6 damage to any 2x2 area, no modifiers"
        },
        {
          "treasuretable_type": "Potions and Trinkets",
          "treasuretable_num": 61,
          "treasuretable_name": "Flash Powder",
          "treasuretable_cost": "75",
          "treasuretable_description": "D3 found, gives +1 attack to the Warriors that turn, only one per turn can be used"
        },
        {
          "treasuretable_type": "Potions and Trinkets",
          "treasuretable_num": 62,
          "treasuretable_name": "Acid",
          "treasuretable_cost": "50",
          "treasuretable_description": "Enough to destroy the lock or open a porticullus or locked door, on a roll of 2-6 on D6, but a roll of 1 destroys the lock, cannot be opened"
        },
        {
          "treasuretable_type": "Potions and Trinkets",
          "treasuretable_num": 63,
          "treasuretable_name": "Potion of Power",
          "treasuretable_cost": "50",
          "treasuretable_description": "Gives D6 Power for casting spells, lasts one turn"
        },
        {
          "treasuretable_type": "Potions and Trinkets",
          "treasuretable_num": 64,
          "treasuretable_name": "Blade Wash",
          "treasuretable_cost": "100",
          "treasuretable_description": "Makes the weapon magical permanently so they affect creatures only hit by magic weapons, for D6 turns makes +1 to hit.  Only Enough for one weapon"
        },
        {
          "treasuretable_type": "Potions and Trinkets",
          "treasuretable_num": 65,
          "treasuretable_name": "Potion of Curing",
          "treasuretable_cost": "200",
          "treasuretable_description": "Eliminates any one disabling effect (loss of a Characteristic from poison, loss of movement from petrification, etc)"
        },
        {
          "treasuretable_type": "Potions and Trinkets",
          "treasuretable_num": 66,
          "treasuretable_name": "Potion of Fortitude",
          "treasuretable_cost": "100",
          "treasuretable_description": "Negates fear and terror for the adventure"
        },
        {
          "treasuretable_type": "One Use Magic Items",
          "treasuretable_num": 11,
          "treasuretable_name": "Master Rune of Gromril",
          "treasuretable_cost": "300",
          "treasuretable_description": "Bonds to Armor.  +2 toughness"
        },
        {
          "treasuretable_type": "One Use Magic Items",
          "treasuretable_num": 12,
          "treasuretable_name": "Master Rune of Adamant",
          "treasuretable_cost": "200",
          "treasuretable_description": "Bonds to Armor.  6+ Ignore Pain against non magic weapons."
        },
        {
          "treasuretable_type": "One Use Magic Items",
          "treasuretable_num": 13,
          "treasuretable_name": "Rune of Fortitude",
          "treasuretable_cost": "300",
          "treasuretable_description": "Bonds to Armor.  Gives +1D6 starting wounds at the beginning of each adventure, only while armor is worn"
        },
        {
          "treasuretable_type": "One Use Magic Items",
          "treasuretable_num": 14,
          "treasuretable_name": "Rune of Iron",
          "treasuretable_cost": "200",
          "treasuretable_description": "Bonds to Armor.  +1 toughness"
        },
        {
          "treasuretable_type": "One Use Magic Items",
          "treasuretable_num": 15,
          "treasuretable_name": "Spelleater Rune",
          "treasuretable_cost": "400",
          "treasuretable_description": "Bonds to Armor.  Gives Magic Resistance 5+"
        },
        {
          "treasuretable_type": "One Use Magic Items",
          "treasuretable_num": 16,
          "treasuretable_name": "Rune of Spell Eating",
          "treasuretable_cost": "300",
          "treasuretable_description": "Bonds to Armor.  Absorbs and negates D3 spells targeting the wearer each adventure"
        },
        {
          "treasuretable_type": "One Use Magic Items",
          "treasuretable_num": 21,
          "treasuretable_name": "Master Rune of  Groth One-Eye",
          "treasuretable_cost": "500",
          "treasuretable_description": "Bonds to Weapon.  All Warriors on the tile gain +3 to Fear and Terror tests."
        },
        {
          "treasuretable_type": "One Use Magic Items",
          "treasuretable_num": 22,
          "treasuretable_name": "Master Rune of Courage",
          "treasuretable_cost": "400",
          "treasuretable_description": "Bonds to Armor.  Immune to Psychology"
        },
        {
          "treasuretable_type": "One Use Magic Items",
          "treasuretable_num": 23,
          "treasuretable_name": "Rune of Fear",
          "treasuretable_cost": "500",
          "treasuretable_description": "Bonds to Weapon.  Causes all monsters to make a fear check of 6+ (on Dungeon Level +D6)"
        },
        {
          "treasuretable_type": "One Use Magic Items",
          "treasuretable_num": 24,
          "treasuretable_name": "Rune of Slowness",
          "treasuretable_cost": "450",
          "treasuretable_description": "Bonds to Armor.  All monsters on the tile move at –1 move."
        },
        {
          "treasuretable_type": "One Use Magic Items",
          "treasuretable_num": 25,
          "treasuretable_name": "Rune of Fortune",
          "treasuretable_cost": "450",
          "treasuretable_description": "Bonds to Weapon.  Re roll any one missed attack per turn, must take the second result."
        },
        {
          "treasuretable_type": "One Use Magic Items",
          "treasuretable_num": 26,
          "treasuretable_name": "Icon of Determination",
          "treasuretable_cost": "300",
          "treasuretable_description": "Bonds to a Shield.  Once per adventure, the warrior can take all of one attack on his shield, ignoring the blow."
        },
        {
          "treasuretable_type": "One Use Magic Items",
          "treasuretable_num": 31,
          "treasuretable_name": "Silver Stone",
          "treasuretable_cost": "250",
          "treasuretable_description": "Attaches to a weapon, bonding and making the weapon permanently enchanted.  If that weapon hits with a natural roll to hit of 6, it causes an extra D6"
        },
        {
          "treasuretable_type": "One Use Magic Items",
          "treasuretable_num": 32,
          "treasuretable_name": "Orb of Might",
          "treasuretable_cost": "50/charge",
          "treasuretable_description": "Has D6 POW stored in it for use in casting spells, cannot be recharged"
        },
        {
          "treasuretable_type": "One Use Magic Items",
          "treasuretable_num": 33,
          "treasuretable_name": "Glowstone",
          "treasuretable_cost": "400",
          "treasuretable_description": "Acts as a lantern, but if a 1 is rolled for POW, roll a D6, on a 1-3, the stone is extinguished and useless"
        },
        {
          "treasuretable_type": "One Use Magic Items",
          "treasuretable_num": 34,
          "treasuretable_name": "Destroy Magic Scroll",
          "treasuretable_cost": "350",
          "treasuretable_description": "Dispels any one spell cast at the Warriors.  This spell cannot be cast by that spell caster again (if it is rolled, there is no effect)"
        },
        {
          "treasuretable_type": "One Use Magic Items",
          "treasuretable_num": 35,
          "treasuretable_name": "Quake Scroll",
          "treasuretable_cost": "200",
          "treasuretable_description": "Causes a 2x2 square area to cave in.  Any model in that area suffers 2D6 wounds with no modifiers"
        },
        {
          "treasuretable_type": "One Use Magic Items",
          "treasuretable_num": 36,
          "treasuretable_name": "Swords of Doom scroll",
          "treasuretable_cost": "200",
          "treasuretable_description": "Gives the warrior +2 attacks this turn"
        },
        {
          "treasuretable_type": "One Use Magic Items",
          "treasuretable_num": 41,
          "treasuretable_name": "Bane Scroll of the Undead",
          "treasuretable_cost": "150",
          "treasuretable_description": "Kills any single undead model of up to 400 gold value on a D6 roll of 4-6"
        },
        {
          "treasuretable_type": "One Use Magic Items",
          "treasuretable_num": 42,
          "treasuretable_name": "Bane Scroll of Chaos",
          "treasuretable_cost": "150",
          "treasuretable_description": "Kills any single chaos model of up to 400 gold value on a D6 roll of 4-6"
        },
        {
          "treasuretable_type": "One Use Magic Items",
          "treasuretable_num": 43,
          "treasuretable_name": "Runestone of Death",
          "treasuretable_cost": "250",
          "treasuretable_description": "Bonded to a weapon.  Once per adventure roll +2D6 damage for the weapon."
        },
        {
          "treasuretable_type": "One Use Magic Items",
          "treasuretable_num": 44,
          "treasuretable_name": "Runestone of Slaying",
          "treasuretable_cost": "300",
          "treasuretable_description": "Bonded to a weapon.  One attack per adventure damage is doubled before Strength."
        },
        {
          "treasuretable_type": "One Use Magic Items",
          "treasuretable_num": 45,
          "treasuretable_name": "Runestone of Magic",
          "treasuretable_cost": "25",
          "treasuretable_description": "Bonded to a weapon.  Makes the weapon treated as magical permanently"
        },
        {
          "treasuretable_type": "One Use Magic Items",
          "treasuretable_num": 46,
          "treasuretable_name": "Rune of Destruction",
          "treasuretable_cost": "400",
          "treasuretable_description": "Bonded to Weapon.  Once per adventure the Warrior can double his attacks with this weapon."
        },
        {
          "treasuretable_type": "One Use Magic Items",
          "treasuretable_num": 51,
          "treasuretable_name": "Master Rune of Banishment",
          "treasuretable_cost": "500",
          "treasuretable_description": "Bonded to Weapon.  Once per adventure, If the weapon does 1 wound to undead, it is killed utterly"
        },
        {
          "treasuretable_type": "One Use Magic Items",
          "treasuretable_num": 52,
          "treasuretable_name": "Master Rune of Daemon Slaying",
          "treasuretable_cost": "500",
          "treasuretable_description": "Bonded to Weapon.  Once per adventure, If the weapon does 1 wound to chaos or daemons, it is killed utterly"
        },
        {
          "treasuretable_type": "One Use Magic Items",
          "treasuretable_num": 53,
          "treasuretable_name": "Master Rune of Death",
          "treasuretable_cost": "750",
          "treasuretable_description": "Bonded to Weapon.  Once per adventure, if the weapon does 1 wound to the target, it is killed."
        },
        {
          "treasuretable_type": "One Use Magic Items",
          "treasuretable_num": 54,
          "treasuretable_name": "Master Rune of Dragon Slaying",
          "treasuretable_cost": "500",
          "treasuretable_description": "Bonded to Weapon.  Once per adventure, If the weapon does 1 wound to a dragon, hydra, or wyvern, it is killed utterly"
        },
        {
          "treasuretable_type": "One Use Magic Items",
          "treasuretable_num": 55,
          "treasuretable_name": "Skalf Blackhammer’s Master Rune",
          "treasuretable_cost": "350",
          "treasuretable_description": "Bonded to Weapon.  All non magic armor is ignored by the weapon."
        },
        {
          "treasuretable_type": "One Use Magic Items",
          "treasuretable_num": 56,
          "treasuretable_name": "Snorri Spangelhelm’s Master Rune",
          "treasuretable_cost": "500",
          "treasuretable_description": "Bonded to Weapon.  Gives the weapon +1 to hit, once per adventure will hit automatically, no roll."
        },
        {
          "treasuretable_type": "One Use Magic Items",
          "treasuretable_num": 61,
          "treasuretable_name": "Rune of Smiting",
          "treasuretable_cost": "500",
          "treasuretable_description": "Bonded to Weapon.  On a natural roll of  5 or 6 to hit, does +1D6 wounds."
        },
        {
          "treasuretable_type": "One Use Magic Items",
          "treasuretable_num": 62,
          "treasuretable_name": "Alaraic the Mad’s Master Rune",
          "treasuretable_cost": "500",
          "treasuretable_description": "Bonded to Weapon.  Negates any Dodge/ Parry/Ignore Pain special abilities"
        },
        {
          "treasuretable_type": "One Use Magic Items",
          "treasuretable_num": 63,
          "treasuretable_name": "Master Rune of Might",
          "treasuretable_cost": "500",
          "treasuretable_description": "Bonded to Weapon.  Does double damage (before Strength) to any foe with toughness greater than wielder."
        },
        {
          "treasuretable_type": "One Use Magic Items",
          "treasuretable_num": 64,
          "treasuretable_name": "Rune of Breaking",
          "treasuretable_cost": "450",
          "treasuretable_description": "Bonds to Weapon.  Destroys magic armor it hits on a natural to hit roll of 6."
        },
        {
          "treasuretable_type": "One Use Magic Items",
          "treasuretable_num": 65,
          "treasuretable_name": "Rune of Parrying",
          "treasuretable_cost": "500",
          "treasuretable_description": "Bonds to Weapon.  If the attack misses, removes 1 attack from the opponent (will not reduce their attacks below 1)."
        },
        {
          "treasuretable_type": "One Use Magic Items",
          "treasuretable_num": 66,
          "treasuretable_name": "Master Rune of Resistance",
          "treasuretable_cost": "450",
          "treasuretable_description": "Bonds to Armor.  Each blow, roll a D6: 4-6 = may force the attacker to re-roll damage dice for that attack."
        },
        {
          "treasuretable_type": "Minor Treasures",
          "treasuretable_num": 11,
          "treasuretable_name": "Boots of Swiftness",
          "treasuretable_cost": "500",
          "treasuretable_description": "+1 move"
        },
        {
          "treasuretable_type": "Minor Treasures",
          "treasuretable_num": 12,
          "treasuretable_name": "Boots of Flight ",
          "treasuretable_cost": "750",
          "treasuretable_description": "For one full adventure, makes wearer hover, and ignore chasms, pits, etc."
        },
        {
          "treasuretable_type": "Minor Treasures",
          "treasuretable_num": 13,
          "treasuretable_name": "Cloak of Stealth",
          "treasuretable_cost": "100",
          "treasuretable_description": "Can break from pinning automatically once per adventure"
        },
        {
          "treasuretable_type": "Minor Treasures",
          "treasuretable_num": 14,
          "treasuretable_name": "Wizard’s Staff",
          "treasuretable_cost": "500",
          "treasuretable_description": "Can be used to attack with at –1 to hit, but gives +1 toughness while wielded.  The staff can store Power, and comes with 1 POW in it for spellcasting (can be recharged).  Once per adventure you can re-roll the event but must take the second result."
        },
        {
          "treasuretable_type": "Minor Treasures",
          "treasuretable_num": 15,
          "treasuretable_name": "Horn of Resilience",
          "treasuretable_cost": "350",
          "treasuretable_description": "Can only be used when no monsters are present.  When blown, all warriors enter a trance for one turn and do nothing but heal D6 wounds.  Works once per adventure."
        },
        {
          "treasuretable_type": "Minor Treasures",
          "treasuretable_num": 16,
          "treasuretable_name": "Horn of Shielding",
          "treasuretable_cost": "500",
          "treasuretable_description": "Once per adventure, may be blows to give the Warriors a shield that protects them from any blow unless a natural 6 is rolled to hit.  This lasts one turn."
        },
        {
          "treasuretable_type": "Minor Treasures",
          "treasuretable_num": 21,
          "treasuretable_name": "Talon of Death",
          "treasuretable_cost": "500",
          "treasuretable_description": "Once per adventure.  After movement, the warrior may use this to cause D6 wounds to all Monsters adjacent with no modifiers (roll each monster separately)."
        },
        {
          "treasuretable_type": "Minor Treasures",
          "treasuretable_num": 22,
          "treasuretable_name": "Icon of Agility",
          "treasuretable_cost": "200",
          "treasuretable_description": "Gives +1 to escape from pinning, once per turn."
        },
        {
          "treasuretable_type": "Minor Treasures",
          "treasuretable_num": 23,
          "treasuretable_name": "Stone Icon of Ghamaluk",
          "treasuretable_cost": "200",
          "treasuretable_description": "Once per adventure, heals bearer to full Starting Wounds."
        },
        {
          "treasuretable_type": "Minor Treasures",
          "treasuretable_num": 24,
          "treasuretable_name": "Icon of Combat",
          "treasuretable_cost": "150",
          "treasuretable_description": "Can be used once per adventure to shove a monster back to any one of the 3 squares behind him.  Roll D6+Strength for the warrior and compare to Monster’s Strength, if it is greater, the monster is shoved back, and the warrior takes his place."
        },
        {
          "treasuretable_type": "Minor Treasures",
          "treasuretable_num": 25,
          "treasuretable_name": "Light of Courage",
          "treasuretable_cost": "300",
          "treasuretable_description": "Allows the bearer to see as if he had a lantern, lasts one adventure"
        },
        {
          "treasuretable_type": "Minor Treasures",
          "treasuretable_num": 26,
          "treasuretable_name": "Orb of Power",
          "treasuretable_cost": "500",
          "treasuretable_description": "Has D6 POW stored in it for spell casting.  Can be recharged at the Font of Power."
        },
        {
          "treasuretable_type": "Minor Treasures",
          "treasuretable_num": 31,
          "treasuretable_name": "Orb of Sigmar",
          "treasuretable_cost": "400",
          "treasuretable_description": "Once per adventure, negates necromantic magic on the same board section for D6 turns"
        },
        {
          "treasuretable_type": "Minor Treasures",
          "treasuretable_num": 32,
          "treasuretable_name": "Lucky Talisman",
          "treasuretable_cost": "150",
          "treasuretable_description": "Once per adventure, makes an attack automatically hit."
        },
        {
          "treasuretable_type": "Minor Treasures",
          "treasuretable_num": 33,
          "treasuretable_name": "Talisman of Alcadizzar",
          "treasuretable_cost": "500",
          "treasuretable_description": "Gives 5+ Magic Resistance to necromantic magic cast at the bearer."
        },
        {
          "treasuretable_type": "Minor Treasures",
          "treasuretable_num": 34,
          "treasuretable_name": "Lifestealer Talisman",
          "treasuretable_cost": "450",
          "treasuretable_description": "Once per adventure, the Warrior can do D6 wounds to an adjacent monster with no modifiers of any kind, and gains the wounds done, up to his starting wounds."
        },
        {
          "treasuretable_type": "Minor Treasures",
          "treasuretable_num": 35,
          "treasuretable_name": "Life Stone of Le Marquis",
          "treasuretable_cost": "500",
          "treasuretable_description": "When your warrior is hit by a blow that would reduce him to 0 wounds or less, the Life Stone negates the attack, once per adventure."
        },
        {
          "treasuretable_type": "Minor Treasures",
          "treasuretable_num": 36,
          "treasuretable_name": "Dragon Stone of Le Marquis",
          "treasuretable_cost": "500",
          "treasuretable_description": "Once per adventure, add +1D6 toughness for a turn."
        },
        {
          "treasuretable_type": "Minor Treasures",
          "treasuretable_num": 41,
          "treasuretable_name": "Talisman of Jet",
          "treasuretable_cost": "600",
          "treasuretable_description": "The Wizard can try to swap spells for another once per adventure.  Roll 1D6, 1 = crumbles and is useless, 2-6 = choose a new spell of the same casting cost."
        },
        {
          "treasuretable_type": "Minor Treasures",
          "treasuretable_num": 42,
          "treasuretable_name": "Power Stone of Le Marquis",
          "treasuretable_cost": "500",
          "treasuretable_description": "Once and adventure, add +1D6 Strength for a turn."
        },
        {
          "treasuretable_type": "Minor Treasures",
          "treasuretable_num": 43,
          "treasuretable_name": "Battle Stone of Le Marquis",
          "treasuretable_cost": "500",
          "treasuretable_description": "Once per adventure, one attack automatically hits."
        },
        {
          "treasuretable_type": "Minor Treasures",
          "treasuretable_num": 44,
          "treasuretable_name": "Speed Stone of Le Marquis",
          "treasuretable_cost": "500",
          "treasuretable_description": "Once per adventure, add +2 movement and break pin automatically for one turn."
        },
        {
          "treasuretable_type": "Minor Treasures",
          "treasuretable_num": 45,
          "treasuretable_name": "Deathstone",
          "treasuretable_cost": "150",
          "treasuretable_description": "Once per adventure, the wizard can use this to cast a spell with.  Roll a D6: 1-2 = spell fails and all POW for the turn is lost, 3-6 = spell cast at no POW cost this turn."
        },
        {
          "treasuretable_type": "Minor Treasures",
          "treasuretable_num": 46,
          "treasuretable_name": "Luckstone of Anurandel",
          "treasuretable_cost": "150",
          "treasuretable_description": "Re-roll any one die roll once per adventure"
        },
        {
          "treasuretable_type": "Minor Treasures",
          "treasuretable_num": 51,
          "treasuretable_name": "Stone of Bravery",
          "treasuretable_cost": "250",
          "treasuretable_description": "+1 to all fear and terror rolls to bearer"
        },
        {
          "treasuretable_type": "Minor Treasures",
          "treasuretable_num": 52,
          "treasuretable_name": "Blessed Gem",
          "treasuretable_cost": "350",
          "treasuretable_description": "Once per turn, can dispel a necromantic spell on a 4+."
        },
        {
          "treasuretable_type": "Minor Treasures",
          "treasuretable_num": 53,
          "treasuretable_name": "Healing Hands Jewel",
          "treasuretable_cost": "250",
          "treasuretable_description": "Once per adventure, all Warriors heal 1 wound."
        },
        {
          "treasuretable_type": "Minor Treasures",
          "treasuretable_num": 54,
          "treasuretable_name": "Chalice of Vigor",
          "treasuretable_cost": "300",
          "treasuretable_description": "Once per adventure, for the duration of the next combat, all Warriors cause +D3 wounds each hit on a natural roll of 6 to hit."
        },
        {
          "treasuretable_type": "Minor Treasures",
          "treasuretable_num": 55,
          "treasuretable_name": "Chalice of Fate",
          "treasuretable_cost": "200",
          "treasuretable_description": "Once per adventure, the Wizard can re-roll the POW but must take the second result."
        },
        {
          "treasuretable_type": "Minor Treasures",
          "treasuretable_num": 56,
          "treasuretable_name": "Goblet of Vitality",
          "treasuretable_cost": "200",
          "treasuretable_description": "Once per adventure, each warrior heals 3 wounds"
        },
        {
          "treasuretable_type": "Minor Treasures",
          "treasuretable_num": 61,
          "treasuretable_name": "Backpack",
          "treasuretable_cost": "150",
          "treasuretable_description": "When found, has D6 provisions in it.  At the beginning of each adventure, the pack has D6 more provisions."
        },
        {
          "treasuretable_type": "Minor Treasures",
          "treasuretable_num": 62,
          "treasuretable_name": "Coughing Spell Jewel",
          "treasuretable_cost": "50",
          "treasuretable_description": "Once per adventure, pick a monster on the board section and roll a D6: 1-5 = no effect, 6 = the monster is -1 to hit for the rest of the turn."
        },
        {
          "treasuretable_type": "Minor Treasures",
          "treasuretable_num": 63,
          "treasuretable_name": "Bracelet of Transformation",
          "treasuretable_cost": "350",
          "treasuretable_description": "Once per adventure, the wearer can take on the appearance of any monster, and will not be attacked by monsters with any weapon or spell.  Once a monster is attacked, the effects wear off."
        },
        {
          "treasuretable_type": "Minor Treasures",
          "treasuretable_num": 64,
          "treasuretable_name": "Lifestone",
          "treasuretable_cost": "500",
          "treasuretable_description": "Once per adventure.  Choose one Warrior on the same tile as the wearer, and swap wounds, this cannot take either Warrior above starting wounds."
        },
        {
          "treasuretable_type": "Minor Treasures",
          "treasuretable_num": 65,
          "treasuretable_name": "Circlet of Wrath",
          "treasuretable_cost": "400",
          "treasuretable_description": "Once per adventure, the wearer can enter a blood rage for a turn.  Roll a D6: 1 = double attacks, but move to the nearest Warrior and unleash them on that model, 2-6 = double attacks.  When in the rage, the Warrior cannot be pinned"
        },
        {
          "treasuretable_type": "Minor Treasures",
          "treasuretable_num": 66,
          "treasuretable_name": "Gauntlet of Damzhar",
          "treasuretable_cost": "500",
          "treasuretable_description": "Gives the wearer +1 attack at –1 to hit and +1 Strength.  If both Gauntlets are worn, they combine for a total of +3 attacks, at +1 to hit and 4D6 damage."
        },
        {
          "treasuretable_type": "Jewelry",
          "treasuretable_num": 11,
          "treasuretable_name": "Band of Magic",
          "treasuretable_cost": "500",
          "treasuretable_description": "Randomly select two attack spells that are stored in the band.  Each one can be cast automatically then the band is destroyed"
        },
        {
          "treasuretable_type": "Jewelry",
          "treasuretable_num": 12,
          "treasuretable_name": "Stone of Transmutation",
          "treasuretable_cost": "200",
          "treasuretable_description": "Roll a D6 and add Battle-Level, if this is greater than the monster’s current wounds, it is turned to stone and killed.  Works once."
        },
        {
          "treasuretable_type": "Jewelry",
          "treasuretable_num": 13,
          "treasuretable_name": "Amulet of Power",
          "treasuretable_cost": "350",
          "treasuretable_description": "Each Warriors phase the wearer may roll a D6: 1 = amulet explodes doing 1D6 with no mods to wearer, 2-6 = +2 Strength."
        },
        {
          "treasuretable_type": "Jewelry",
          "treasuretable_num": 14,
          "treasuretable_name": "Amulet of Fury",
          "treasuretable_cost": "200",
          "treasuretable_description": "Allows the wearer to cast spells (if the person who gets it is a wizard, it grants one random spell to him and disintegrates).  Randomly determine one spell, once per turn, the user may try to cast the spell by rolling D6+BL over the casting cost.  Disintegrates upon success"
        },
        {
          "treasuretable_type": "Jewelry",
          "treasuretable_num": 15,
          "treasuretable_name": "Bracelet of Saphery",
          "treasuretable_cost": "750",
          "treasuretable_description": "Randomly select one spell when found, once per adventure this spell can be cast for free by the bracelet."
        },
        {
          "treasuretable_type": "Jewelry",
          "treasuretable_num": 16,
          "treasuretable_name": "Ring of Regeneration",
          "treasuretable_cost": "650",
          "treasuretable_description": "Each turn, a roll of 6 on D6 heals 2D6 wounds (unless at 0 wounds, then it only heals 1D6) at the end of turn."
        },
        {
          "treasuretable_type": "Jewelry",
          "treasuretable_num": 21,
          "treasuretable_name": "Crown of Thoughts",
          "treasuretable_cost": "800",
          "treasuretable_description": "On ambush, roll D6: 1-3 = ambush as normal, on 4-5 = ambush has no effect on the wearer, 6 = one free attack on the monsters before they move, and negates ambush on wearer."
        },
        {
          "treasuretable_type": "Jewelry",
          "treasuretable_num": 22,
          "treasuretable_name": "Ring of the Warp",
          "treasuretable_cost": "1000",
          "treasuretable_description": "Instead of moving, may teleport, roll D6 and move that distance if possible, ignoring pinning and obstacles.  If it is not possible, then cannot move and loses his turn."
        },
        {
          "treasuretable_type": "Jewelry",
          "treasuretable_num": 23,
          "treasuretable_name": "Ring of Seeking",
          "treasuretable_cost": "500",
          "treasuretable_description": "Roll a D6 to avoid a trap: 1-3 = no effect, 4-6 trap is magically disarmed and has no effect"
        },
        {
          "treasuretable_type": "Jewelry",
          "treasuretable_num": 24,
          "treasuretable_name": "Time Freeze Ring",
          "treasuretable_cost": "200",
          "treasuretable_description": "Once per adventure, gives the warriors an extra warrior’s phase at the end of the one it is used on."
        },
        {
          "treasuretable_type": "Jewelry",
          "treasuretable_num": 25,
          "treasuretable_name": "Amulet of Vindication",
          "treasuretable_cost": "500",
          "treasuretable_description": "Gives Magic Resistance 6+"
        },
        {
          "treasuretable_type": "Jewelry",
          "treasuretable_num": 26,
          "treasuretable_name": "Protection Ring",
          "treasuretable_cost": "300",
          "treasuretable_description": "+1 Toughness while worn"
        },
        {
          "treasuretable_type": "Jewelry",
          "treasuretable_num": 31,
          "treasuretable_name": "Braces of Warding",
          "treasuretable_cost": "300",
          "treasuretable_description": "+1 Toughness while worn, up to two can be worn at once"
        },
        {
          "treasuretable_type": "Jewelry",
          "treasuretable_num": 32,
          "treasuretable_name": "Amulet of Charadris",
          "treasuretable_cost": "300",
          "treasuretable_description": "Undead monsters regenerate at half the normal rate (round down) while adjacent to the wearer"
        },
        {
          "treasuretable_type": "Jewelry",
          "treasuretable_num": 33,
          "treasuretable_name": "Ring of Sure Seeing",
          "treasuretable_cost": "200",
          "treasuretable_description": "You may re-roll an event if you don’t like the one, but must take the second result."
        },
        {
          "treasuretable_type": "Jewelry",
          "treasuretable_num": 34,
          "treasuretable_name": "Spell Ring",
          "treasuretable_cost": "500",
          "treasuretable_description": "Randomly determine a spell each adventure, the ring can cast this spell for free once per adventure."
        },
        {
          "treasuretable_type": "Jewelry",
          "treasuretable_num": 35,
          "treasuretable_name": "Crown of Madness",
          "treasuretable_cost": "250",
          "treasuretable_description": "+1 to all psychology tests while worn"
        },
        {
          "treasuretable_type": "Jewelry",
          "treasuretable_num": 36,
          "treasuretable_name": "Ring of Power",
          "treasuretable_cost": "500",
          "treasuretable_description": "Choose one characteristic, this is +1 while the ring is worn.  The one chosen cannot be changed."
        },
        {
          "treasuretable_type": "Jewelry",
          "treasuretable_num": 41,
          "treasuretable_name": "Rapid Fire Bracelets",
          "treasuretable_cost": "450",
          "treasuretable_description": "+1 Attack with missile weapons while worn"
        },
        {
          "treasuretable_type": "Jewelry",
          "treasuretable_num": 42,
          "treasuretable_name": "Lightning Fire Ring",
          "treasuretable_cost": "500",
          "treasuretable_description": "Once per adventure, does 5D6 with no modifiers to any one monster in line of sight"
        },
        {
          "treasuretable_type": "Jewelry",
          "treasuretable_num": 43,
          "treasuretable_name": "Invisibility Ring",
          "treasuretable_cost": "175",
          "treasuretable_description": "Onc turn per adventure can turn invisible, still able to fight, cannot be pinned, cannot be attacked or the target of spells."
        },
        {
          "treasuretable_type": "Jewelry",
          "treasuretable_num": 44,
          "treasuretable_name": "Black Amulet",
          "treasuretable_cost": "300",
          "treasuretable_description": "Gives 5+ dodge, if the attack is dodged, reflects the attack back on the aggressor.  Each time it is successful, roll a D6: on a 1 the amulet is destroyed"
        },
        {
          "treasuretable_type": "Jewelry",
          "treasuretable_num": 45,
          "treasuretable_name": "Jade Amulet",
          "treasuretable_cost": "250",
          "treasuretable_description": "2+ Dodge or Magic Resistance once per adventure"
        },
        {
          "treasuretable_type": "Jewelry",
          "treasuretable_num": 46,
          "treasuretable_name": "Amber Amulet",
          "treasuretable_cost": "500",
          "treasuretable_description": "Heals D3 wounds at the beginning of each turn"
        },
        {
          "treasuretable_type": "Jewelry",
          "treasuretable_num": 51,
          "treasuretable_name": "Amulet of Fire",
          "treasuretable_cost": "450",
          "treasuretable_description": "4+ Magic Resistance, once per turn"
        },
        {
          "treasuretable_type": "Jewelry",
          "treasuretable_num": 52,
          "treasuretable_name": "Tress of Isoulde",
          "treasuretable_cost": "500",
          "treasuretable_description": "Choose a target, once per battle.  Against that foe, the wearer is +3 Weapons Skill and +3 Strength."
        },
        {
          "treasuretable_type": "Jewelry",
          "treasuretable_num": 53,
          "treasuretable_name": "Collar of Zorga",
          "treasuretable_cost": "500",
          "treasuretable_description": "While worn, no monster will initiate combat in hand to hand against the wearer, but will defend themselves."
        },
        {
          "treasuretable_type": "Jewelry",
          "treasuretable_num": 54,
          "treasuretable_name": "Bauble of Anurandel",
          "treasuretable_cost": "250",
          "treasuretable_description": "+1 to escape pinning"
        },
        {
          "treasuretable_type": "Jewelry",
          "treasuretable_num": 55,
          "treasuretable_name": "Gems of Life",
          "treasuretable_cost": "700",
          "treasuretable_description": "A pair of gems, one is worn, the other is kept in safety.  If the wearer dies, he is stored in the gem, and when the two are brought back together, the warrior is restored to life, as the gems crumble.  Only mundane equipment is left behind."
        },
        {
          "treasuretable_type": "Jewelry",
          "treasuretable_num": 56,
          "treasuretable_name": "Belt of Gagron",
          "treasuretable_cost": "500",
          "treasuretable_description": "At the end of any turn the wearer’s wounds are reduced to 0, roll a D6: 1-2 = no effect, 3-5 heals 1D6 wounds, 6 = heals 2D6 wounds"
        },
        {
          "treasuretable_type": "Jewelry",
          "treasuretable_num": 61,
          "treasuretable_name": "Ring of Sure Seeing ",
          "treasuretable_cost": "200",
          "treasuretable_description": "Allows the warrior to re-roll one single Settlement Event or Hazard roll, then crumbles, the second result must be taken."
        },
        {
          "treasuretable_type": "Jewelry",
          "treasuretable_num": 62,
          "treasuretable_name": "Bracelet of Ashain",
          "treasuretable_cost": "350",
          "treasuretable_description": "+3 Starting Wounds while worn"
        },
        {
          "treasuretable_type": "Jewelry",
          "treasuretable_num": 63,
          "treasuretable_name": "Energy Jewel",
          "treasuretable_cost": "200",
          "treasuretable_description": "Has 1D6 Power for use in casting spells, once the POW is expended, the gem crumbles"
        },
        {
          "treasuretable_type": "Jewelry",
          "treasuretable_num": 64,
          "treasuretable_name": "Crown of Night",
          "treasuretable_cost": "300",
          "treasuretable_description": "Gives 6+ Magic Resistance"
        },
        {
          "treasuretable_type": "Jewelry",
          "treasuretable_num": 65,
          "treasuretable_name": "Ring of Dadaan",
          "treasuretable_cost": "200",
          "treasuretable_description": "Randomly select one spell, the ring can cast this spell once and then is destroyed"
        },
        {
          "treasuretable_type": "Jewelry",
          "treasuretable_num": 66,
          "treasuretable_name": "Charm of Learning",
          "treasuretable_cost": "100",
          "treasuretable_description": "Counts as 300 gold toward learning the next level only (300 '‘experience”)"
        },
        {
          "treasuretable_type": "Armor and Shields",
          "treasuretable_num": 11,
          "treasuretable_name": "Armor of Brilliance",
          "treasuretable_cost": "400",
          "treasuretable_description": "3 DEF, -1 to be hit"
        },
        {
          "treasuretable_type": "Armor and Shields",
          "treasuretable_num": 12,
          "treasuretable_name": "Armor of Protection",
          "treasuretable_cost": "500",
          "treasuretable_description": "3 DEF, 5+ dodge "
        },
        {
          "treasuretable_type": "Armor and Shields",
          "treasuretable_num": 13,
          "treasuretable_name": "Dragon Shield",
          "treasuretable_cost": "300",
          "treasuretable_description": "Once per adventure, the bearer is immune to any one attack"
        },
        {
          "treasuretable_type": "Armor and Shields",
          "treasuretable_num": 14,
          "treasuretable_name": "Chaos Armor",
          "treasuretable_cost": "500",
          "treasuretable_description": "3 DEF, can cast spells with it on"
        },
        {
          "treasuretable_type": "Armor and Shields",
          "treasuretable_num": 15,
          "treasuretable_name": "Chaos Runeshield",
          "treasuretable_cost": "200",
          "treasuretable_description": "1 armor, negates all magic items used adjacent (except self and chaos armor) including wearer"
        },
        {
          "treasuretable_type": "Armor and Shields",
          "treasuretable_num": 16,
          "treasuretable_name": "Spellshield",
          "treasuretable_cost": "400",
          "treasuretable_description": "2 armor, 4+ magic resistance.  If the spell is resisted, it reflects and affects the caster."
        },
        {
          "treasuretable_type": "Armor and Shields",
          "treasuretable_num": 21,
          "treasuretable_name": "Bane Shield",
          "treasuretable_cost": "300",
          "treasuretable_description": "1 armor, 5+ dodge.  Any attack dodged reflects on the attacker"
        },
        {
          "treasuretable_type": "Armor and Shields",
          "treasuretable_num": 22,
          "treasuretable_name": "Charmed Shield",
          "treasuretable_cost": "300",
          "treasuretable_description": "2 armor, removes 1 attack from the monster attacking wielder"
        },
        {
          "treasuretable_type": "Armor and Shields",
          "treasuretable_num": 23,
          "treasuretable_name": "Magic Warpaint",
          "treasuretable_cost": "200",
          "treasuretable_description": "1 adventure’s worth.  2 armor vs missiles, 3 vs hand to hand, can use magic with it on but cannot be combined with armor"
        },
        {
          "treasuretable_type": "Armor and Shields",
          "treasuretable_num": 24,
          "treasuretable_name": "Fanged Death Helm",
          "treasuretable_cost": "250",
          "treasuretable_description": "Choose one attack per turn, if it hits, an additional bite attack of D6 wounds that always hits, with no modifiers."
        },
        {
          "treasuretable_type": "Armor and Shields",
          "treasuretable_num": 25,
          "treasuretable_name": "Armor of Fortune",
          "treasuretable_cost": "500",
          "treasuretable_description": "Absorbs 30 wounds, which never affect the wearer until the 30 is reached.  The armor then explodes, taking the wearer to 0 wounds."
        },
        {
          "treasuretable_type": "Armor and Shields",
          "treasuretable_num": 26,
          "treasuretable_name": "Shield of Deliverance",
          "treasuretable_cost": "500",
          "treasuretable_description": "Can totally absorb two blows, then is destroyed."
        },
        {
          "treasuretable_type": "Armor and Shields",
          "treasuretable_num": 31,
          "treasuretable_name": "Helm of Alcadizzar",
          "treasuretable_cost": "450",
          "treasuretable_description": "Acts as a lantern, gives +1 toughness, and all undead are –1 to hit the wearer."
        },
        {
          "treasuretable_type": "Armor and Shields",
          "treasuretable_num": 32,
          "treasuretable_name": "Elf Shield",
          "treasuretable_cost": "500",
          "treasuretable_description": "Ignore the first blow each turn (unless the attack was a natural 6 to hit)"
        },
        {
          "treasuretable_type": "Armor and Shields",
          "treasuretable_num": 33,
          "treasuretable_name": "Cloak of Lorien",
          "treasuretable_cost": "75",
          "treasuretable_description": "Ignore the first wound caused by each attack.  Roll a D6 each time it protects, a 1 = cloak is destroyed"
        },
        {
          "treasuretable_type": "Armor and Shields",
          "treasuretable_num": 34,
          "treasuretable_name": "Kingshield of Tilea",
          "treasuretable_cost": "200",
          "treasuretable_description": "+1 toughness, once per adventure negates any one blow."
        },
        {
          "treasuretable_type": "Armor and Shields",
          "treasuretable_num": 35,
          "treasuretable_name": "Fur Cloak",
          "treasuretable_cost": "75",
          "treasuretable_description": "+1 toughness, roll a D6 each time it protects: 1-3 = destroyed."
        },
        {
          "treasuretable_type": "Armor and Shields",
          "treasuretable_num": 36,
          "treasuretable_name": "Boots of Quargskin",
          "treasuretable_cost": "0",
          "treasuretable_description": "1x per adventure can double movement (cannot be sold)"
        },
        {
          "treasuretable_type": "Armor and Shields",
          "treasuretable_num": 41,
          "treasuretable_name": "Cloak of Deception",
          "treasuretable_cost": "350",
          "treasuretable_description": "All attacks on the warrior are –1 to hit, but if a natural 6 is rolled to hit, the magic is exhausted until next adventure."
        },
        {
          "treasuretable_type": "Armor and Shields",
          "treasuretable_num": 42,
          "treasuretable_name": "Boots of Battle",
          "treasuretable_cost": "200",
          "treasuretable_description": "Gives an additional kick attack of –1 to hit, +1 STR"
        },
        {
          "treasuretable_type": "Armor and Shields",
          "treasuretable_num": 43,
          "treasuretable_name": "Bladed Boots",
          "treasuretable_cost": "200",
          "treasuretable_description": "Gives an additional kick attack of –1 to hit, +1 STR"
        },
        {
          "treasuretable_type": "Armor and Shields",
          "treasuretable_num": 44,
          "treasuretable_name": "Vambraces of Lightning",
          "treasuretable_cost": "250",
          "treasuretable_description": "Gives 4+ dodge versus missile weapons"
        },
        {
          "treasuretable_type": "Armor and Shields",
          "treasuretable_num": 45,
          "treasuretable_name": "Boots of Leaping",
          "treasuretable_cost": "400",
          "treasuretable_description": "Leap 1 square in any direction, ignoring any obstacles, but still counting as 1 move, can only be used once per turn."
        },
        {
          "treasuretable_type": "Armor and Shields",
          "treasuretable_num": 46,
          "treasuretable_name": "Cloak of Warding",
          "treasuretable_cost": "200",
          "treasuretable_description": "1 armor, can cast spells with this on"
        },
        {
          "treasuretable_type": "Armor and Shields",
          "treasuretable_num": 51,
          "treasuretable_name": "Helmet of Farseeing",
          "treasuretable_cost": "800",
          "treasuretable_description": "+1 toughness, can see as if he had the lantern"
        },
        {
          "treasuretable_type": "Armor and Shields",
          "treasuretable_num": 52,
          "treasuretable_name": "Boots of Tzchak",
          "treasuretable_cost": "100",
          "treasuretable_description": "+1 move, ignore movement penalties of armor"
        },
        {
          "treasuretable_type": "Armor and Shields",
          "treasuretable_num": 53,
          "treasuretable_name": "Grey Armor of Eshkalon",
          "treasuretable_cost": "400",
          "treasuretable_description": "Each attack, roll a D6: 1 = armor shatters and is useless, 2-6 = armor absorbs as many wounds as rolled"
        },
        {
          "treasuretable_type": "Armor and Shields",
          "treasuretable_num": 54,
          "treasuretable_name": "Cloak of Shadows",
          "treasuretable_cost": "400",
          "treasuretable_description": "Gives Magic Resistance 4+, if the wearer is selected for a missile attack, return and reselect, taking the second choice"
        },
        {
          "treasuretable_type": "Armor and Shields",
          "treasuretable_num": 55,
          "treasuretable_name": "Elf Helm",
          "treasuretable_cost": "750",
          "treasuretable_description": "+1 Toughness.  In addition, can take a blow on the helm, roll D6: 1 = absorbs all damage and is destroyed, 2-4 = no extra effect, 5-6 = blow does no damage"
        },
        {
          "treasuretable_type": "Armor and Shields",
          "treasuretable_num": 56,
          "treasuretable_name": "Belt of Blocking",
          "treasuretable_cost": "500",
          "treasuretable_description": "Each blow that the wearer sustains, roll a D6:  1-2 = no effect, 3-5 = 2 wounds less taken 6 = ignores the blow."
        },
        {
          "treasuretable_type": "Armor and Shields",
          "treasuretable_num": 61,
          "treasuretable_name": "Helm of the Dragonslayer",
          "treasuretable_cost": "500",
          "treasuretable_description": "Immune to all breath weapon attacks of any kind"
        },
        {
          "treasuretable_type": "Armor and Shields",
          "treasuretable_num": 62,
          "treasuretable_name": "Bohemond’s Shield",
          "treasuretable_cost": "500",
          "treasuretable_description": "+1 toughness, Roll a D6 each blow, on a 6, the weapon is broken and destroyed"
        },
        {
          "treasuretable_type": "Armor and Shields",
          "treasuretable_num": 63,
          "treasuretable_name": "Grail Shield",
          "treasuretable_cost": "300",
          "treasuretable_description": "+1 toughness, all undead are at –1 attack on the bearer"
        },
        {
          "treasuretable_type": "Armor and Shields",
          "treasuretable_num": 64,
          "treasuretable_name": "Enchanted Shield",
          "treasuretable_cost": "450",
          "treasuretable_description": "If used, roll a D6: 1 = explodes for D6 wounds to user, no modifiers, 5-6 = absorbs all damage."
        },
        {
          "treasuretable_type": "Armor and Shields",
          "treasuretable_num": 65,
          "treasuretable_name": "Pelt of Charandis",
          "treasuretable_cost": "450",
          "treasuretable_description": "+1 Toughness, +1 more against hand to hand attacks, negates poison effects"
        },
        {
          "treasuretable_type": "Armor and Shields",
          "treasuretable_num": 66,
          "treasuretable_name": "Helm of Yvresse",
          "treasuretable_cost": "300",
          "treasuretable_description": "+1 toughness, may Re-roll a failed fear or terror test"
        },
        {
          "treasuretable_type": "Swords",
          "treasuretable_num": 11,
          "treasuretable_name": "Sword of Defiance",
          "treasuretable_cost": "600",
          "treasuretable_description": "+3 toughness when wielded"
        },
        {
          "treasuretable_type": "Swords",
          "treasuretable_num": 12,
          "treasuretable_name": "Sword of Ensorcelled Iron",
          "treasuretable_cost": "150",
          "treasuretable_description": "+1 to hit"
        },
        {
          "treasuretable_type": "Swords",
          "treasuretable_num": 13,
          "treasuretable_name": "Biting Blade",
          "treasuretable_cost": "150",
          "treasuretable_description": "Ignores 1 point of armor"
        },
        {
          "treasuretable_type": "Swords",
          "treasuretable_num": 14,
          "treasuretable_name": "Blade of Leaping Copper",
          "treasuretable_cost": "300",
          "treasuretable_description": "+1 attack"
        },
        {
          "treasuretable_type": "Swords",
          "treasuretable_num": 15,
          "treasuretable_name": "Death Sword",
          "treasuretable_cost": "500",
          "treasuretable_description": "+3 STR"
        },
        {
          "treasuretable_type": "Swords",
          "treasuretable_num": 16,
          "treasuretable_name": "Sword of Stone",
          "treasuretable_cost": "500",
          "treasuretable_description": "+2 Toughness"
        },
        {
          "treasuretable_type": "Swords",
          "treasuretable_num": 21,
          "treasuretable_name": "Blade of Couronne",
          "treasuretable_cost": "300",
          "treasuretable_description": "Each undead monster adjacent to the wielder takes 1 wound, no mods, cannot be regenerated at end of turn."
        },
        {
          "treasuretable_type": "Swords",
          "treasuretable_num": 22,
          "treasuretable_name": "Blade of Slicing",
          "treasuretable_cost": "300",
          "treasuretable_description": "+2 wounds on successful hit"
        },
        {
          "treasuretable_type": "Swords",
          "treasuretable_num": 23,
          "treasuretable_name": "Giant Blade",
          "treasuretable_cost": "400",
          "treasuretable_description": "+2 STR"
        },
        {
          "treasuretable_type": "Swords",
          "treasuretable_num": 24,
          "treasuretable_name": "Blessed Sword",
          "treasuretable_cost": "500",
          "treasuretable_description": "Raises Weapon Skill to 10"
        },
        {
          "treasuretable_type": "Swords",
          "treasuretable_num": 25,
          "treasuretable_name": "Venom Sword",
          "treasuretable_cost": "400",
          "treasuretable_description": "Wounds that make it through defenses are doubled"
        },
        {
          "treasuretable_type": "Swords",
          "treasuretable_num": 26,
          "treasuretable_name": "Wall of Steel",
          "treasuretable_cost": "200",
          "treasuretable_description": "In a corridor or doorway, no monsters may pass the warrior wielding this sword, even if they are flying."
        },
        {
          "treasuretable_type": "Swords",
          "treasuretable_num": 31,
          "treasuretable_name": "Enchanted Greatsword",
          "treasuretable_cost": "400",
          "treasuretable_description": "2-Handed weapon, +4 STR, -1 initiative."
        },
        {
          "treasuretable_type": "Swords",
          "treasuretable_num": 32,
          "treasuretable_name": "Wyvern Blade",
          "treasuretable_cost": "500",
          "treasuretable_description": "Each hit does 2 Hits, roll damage for each separately."
        },
        {
          "treasuretable_type": "Swords",
          "treasuretable_num": 33,
          "treasuretable_name": "The Sword Skabskrath",
          "treasuretable_cost": "450",
          "treasuretable_description": "Gives Terror rating of equal to BL (monsters who fail are –2 to hit, and will not cast spells at that target), makes immune to all psychology."
        },
        {
          "treasuretable_type": "Swords",
          "treasuretable_num": 34,
          "treasuretable_name": "Sword of Fortitude",
          "treasuretable_cost": "300",
          "treasuretable_description": "Immune to psychology"
        },
        {
          "treasuretable_type": "Swords",
          "treasuretable_num": 35,
          "treasuretable_name": "Sword of Justice",
          "treasuretable_cost": "750",
          "treasuretable_description": "Ignores non magic armor, re roll any miss, must take the second roll"
        },
        {
          "treasuretable_type": "Swords",
          "treasuretable_num": 36,
          "treasuretable_name": "Weeping Blade",
          "treasuretable_cost": "700",
          "treasuretable_description": "Ignores 1 point of armor; if the blade does any wounds, at the end of turn, the model takes D6 wounds in addition with no modifiers"
        },
        {
          "treasuretable_type": "Swords",
          "treasuretable_num": 41,
          "treasuretable_name": "Chaos Runeblade",
          "treasuretable_cost": "400",
          "treasuretable_description": "+1D6 damage, ignores non magic armor"
        },
        {
          "treasuretable_type": "Swords",
          "treasuretable_num": 42,
          "treasuretable_name": "Warrior Bane",
          "treasuretable_cost": "350",
          "treasuretable_description": "Each successful damaging attack causes –1 attack on the model"
        },
        {
          "treasuretable_type": "Swords",
          "treasuretable_num": 43,
          "treasuretable_name": "Banisher Sword",
          "treasuretable_cost": "300",
          "treasuretable_description": "Vs undead: does +1D6 and ignores armor"
        },
        {
          "treasuretable_type": "Swords",
          "treasuretable_num": 44,
          "treasuretable_name": "Blood Drinker",
          "treasuretable_cost": "750",
          "treasuretable_description": "Drains 1 STR from the target if it does any successful wounds (the target is 1 STR lower, and the Warrior has +1 STR until the end of the fight); if the model is reduced to 0 STR it dies, if the warrior was below normal strength this drain effect ‘heals’ it."
        },
        {
          "treasuretable_type": "Swords",
          "treasuretable_num": 45,
          "treasuretable_name": "Deathsword",
          "treasuretable_cost": "250",
          "treasuretable_description": "Once per adventure: Increase STR to 10 for one turn"
        },
        {
          "treasuretable_type": "Swords",
          "treasuretable_num": 46,
          "treasuretable_name": "Soul Blade",
          "treasuretable_cost": "450",
          "treasuretable_description": "Each successful wounding hit reduces the model’s toughness by 1, any model at 0 toughness dies."
        },
        {
          "treasuretable_type": "Swords",
          "treasuretable_num": 51,
          "treasuretable_name": "Parrying Blade",
          "treasuretable_cost": "400",
          "treasuretable_description": "Once per turn, can roll D6: 1-3 = no effect, 4-6 attack is parried and has no effect"
        },
        {
          "treasuretable_type": "Swords",
          "treasuretable_num": 52,
          "treasuretable_name": "Dark Sword",
          "treasuretable_cost": "400",
          "treasuretable_description": "Each successful wounding hit reduces the model’s WS by 1, any model at 0 WS cannot attack with hand to hand."
        },
        {
          "treasuretable_type": "Swords",
          "treasuretable_num": 53,
          "treasuretable_name": "Sword of Might",
          "treasuretable_cost": "150",
          "treasuretable_description": "+1 Strength"
        },
        {
          "treasuretable_type": "Swords",
          "treasuretable_num": 54,
          "treasuretable_name": "Relic Blade",
          "treasuretable_cost": "400",
          "treasuretable_description": "+1 to hit"
        },
        {
          "treasuretable_type": "Swords",
          "treasuretable_num": 55,
          "treasuretable_name": "Blessed Sword",
          "treasuretable_cost": "300",
          "treasuretable_description": "Only misses on a roll of 1 or 2"
        },
        {
          "treasuretable_type": "Swords",
          "treasuretable_num": 56,
          "treasuretable_name": "Bone Blade",
          "treasuretable_cost": "400",
          "treasuretable_description": "Once turn per adventure, the Warrior may trade in all attacks for a single attack that causes normal damage +(1D6xBL) in wounds"
        },
        {
          "treasuretable_type": "Swords",
          "treasuretable_num": 61,
          "treasuretable_name": "Obsidian Blade",
          "treasuretable_cost": "450",
          "treasuretable_description": "Each hit roll a D6: 1-4 = no special effect, 5-6 = ignores and destroys armor"
        },
        {
          "treasuretable_type": "Swords",
          "treasuretable_num": 62,
          "treasuretable_name": "Blade of Sea Gold",
          "treasuretable_cost": "150",
          "treasuretable_description": "Ignores 1 point of armor"
        },
        {
          "treasuretable_type": "Swords",
          "treasuretable_num": 63,
          "treasuretable_name": "Magic Sword",
          "treasuretable_cost": "25",
          "treasuretable_description": "May hit monsters only affected by magic weapons"
        },
        {
          "treasuretable_type": "Swords",
          "treasuretable_num": 64,
          "treasuretable_name": "Heart Seeker Sword",
          "treasuretable_cost": "500",
          "treasuretable_description": "Re-roll one miss per turn, must take second roll"
        },
        {
          "treasuretable_type": "Swords",
          "treasuretable_num": 65,
          "treasuretable_name": "Berserker Sword",
          "treasuretable_cost": "250",
          "treasuretable_description": "+1 to die roll to go berserk"
        },
        {
          "treasuretable_type": "Swords",
          "treasuretable_num": 66,
          "treasuretable_name": "Bronze Sigil Sword",
          "treasuretable_cost": "100",
          "treasuretable_description": "+2 initiative"
        },
        {
          "treasuretable_type": "Other Weapons",
          "treasuretable_num": 11,
          "treasuretable_name": "Axe of Slaughter",
          "treasuretable_cost": "200",
          "treasuretable_description": "+1D6 damage"
        },
        {
          "treasuretable_type": "Other Weapons",
          "treasuretable_num": 12,
          "treasuretable_name": "Ogre Slayer",
          "treasuretable_cost": "400",
          "treasuretable_description": "+2 STR (+3 STR for Dwarf)"
        },
        {
          "treasuretable_type": "Other Weapons",
          "treasuretable_num": 13,
          "treasuretable_name": "Axe of Khemri",
          "treasuretable_cost": "750",
          "treasuretable_description": "Roll 2D6 and choose the best for wounds, vs undead is +1 to hit, cannot be added to with runes"
        },
        {
          "treasuretable_type": "Other Weapons",
          "treasuretable_num": 14,
          "treasuretable_name": "Destroyer Staff",
          "treasuretable_cost": "300",
          "treasuretable_description": "Steals D6 POW from any spell caster it hits, if it hits, that spell caster cannot use any magic until the end of turn"
        },
        {
          "treasuretable_type": "Other Weapons",
          "treasuretable_num": 15,
          "treasuretable_name": "Black Hammer of Hashut",
          "treasuretable_cost": "500",
          "treasuretable_description": "+2 STR, ignores armor, does double damage to mummies"
        },
        {
          "treasuretable_type": "Other Weapons",
          "treasuretable_num": 16,
          "treasuretable_name": "Hell Mace",
          "treasuretable_cost": "250",
          "treasuretable_description": "+2 attacks"
        },
        {
          "treasuretable_type": "Other Weapons",
          "treasuretable_num": 21,
          "treasuretable_name": "Dark Mace of Death",
          "treasuretable_cost": "300",
          "treasuretable_description": "Once per battle: all models adjacent take the damage of the mace, with no armor"
        },
        {
          "treasuretable_type": "Other Weapons",
          "treasuretable_num": 22,
          "treasuretable_name": "Darting Steel Dagger",
          "treasuretable_cost": "350",
          "treasuretable_description": "+1 attack, hits automatically, does D6 wounds, no STR"
        },
        {
          "treasuretable_type": "Other Weapons",
          "treasuretable_num": 23,
          "treasuretable_name": "Hail of Doom Arrow",
          "treasuretable_cost": "150",
          "treasuretable_description": "One use.  +1 STR bow attack, does 2D6 hits of the bow’s damage"
        },
        {
          "treasuretable_type": "Other Weapons",
          "treasuretable_num": 24,
          "treasuretable_name": "Heart Seeker Arrow",
          "treasuretable_cost": "75 per",
          "treasuretable_description": "2D6 arrows.  Re-Roll any miss once, take the second result"
        },
        {
          "treasuretable_type": "Other Weapons",
          "treasuretable_num": 25,
          "treasuretable_name": "Arrows of Loren",
          "treasuretable_cost": "100 per",
          "treasuretable_description": "3D6 arrows.  +2 Ballistic Skill, ignores 1 point of armor, +1 damage."
        },
        {
          "treasuretable_type": "Other Weapons",
          "treasuretable_num": 26,
          "treasuretable_name": "Surefire Bow",
          "treasuretable_cost": "900",
          "treasuretable_description": "STR 4 bow, +2 to hit"
        },
        {
          "treasuretable_type": "Other Weapons",
          "treasuretable_num": 31,
          "treasuretable_name": "Magical Spear",
          "treasuretable_cost": "100",
          "treasuretable_description": "Once per adventure, can attack at BS 3+, and does 3D6 with a hit"
        },
        {
          "treasuretable_type": "Other Weapons",
          "treasuretable_num": 32,
          "treasuretable_name": "Pistol and Shot",
          "treasuretable_cost": "1000",
          "treasuretable_description": "D6+6 weapon, range 6 squares, takes 1 turn to reload.  Enough shot for one adventure"
        },
        {
          "treasuretable_type": "Other Weapons",
          "treasuretable_num": 33,
          "treasuretable_name": "Bow of Tiranoc",
          "treasuretable_cost": "300",
          "treasuretable_description": "+3 wounds each hit"
        },
        {
          "treasuretable_type": "Other Weapons",
          "treasuretable_num": 34,
          "treasuretable_name": "Eltharion’s bow",
          "treasuretable_cost": "200",
          "treasuretable_description": "+1 to hit"
        },
        {
          "treasuretable_type": "Other Weapons",
          "treasuretable_num": 35,
          "treasuretable_name": "Arrows of Piercing",
          "treasuretable_cost": "300",
          "treasuretable_description": "Enough for one adventure.  On a successful hit: D6, 1-4 = normal effect, 5-6 = ignores armor"
        },
        {
          "treasuretable_type": "Other Weapons",
          "treasuretable_num": 36,
          "treasuretable_name": "Arrows of Death",
          "treasuretable_cost": "100 per",
          "treasuretable_description": "1D6 arrows.  +3 wounds"
        },
        {
          "treasuretable_type": "Other Weapons",
          "treasuretable_num": 41,
          "treasuretable_name": "Arrows of Sure Flight",
          "treasuretable_cost": "100 per",
          "treasuretable_description": "2D6 arrows.  +1 to hit, only usable by elf (others don’t get the magic)"
        },
        {
          "treasuretable_type": "Other Weapons",
          "treasuretable_num": 42,
          "treasuretable_name": "Bow of Tor Alessi",
          "treasuretable_cost": "250",
          "treasuretable_description": "Fire before or after moving"
        },
        {
          "treasuretable_type": "Other Weapons",
          "treasuretable_num": 43,
          "treasuretable_name": "Arrows of Slaying",
          "treasuretable_cost": "500",
          "treasuretable_description": "1 arrow: roll a D6 on a hit, 1-4 = normal effect, 5-6 = monster is slain instantly"
        },
        {
          "treasuretable_type": "Other Weapons",
          "treasuretable_num": 44,
          "treasuretable_name": "Magical Quiver",
          "treasuretable_cost": "25",
          "treasuretable_description": "Any arrows stored in this quiver are treated as magical (and hit creatures only struck by magic)"
        },
        {
          "treasuretable_type": "Other Weapons",
          "treasuretable_num": 45,
          "treasuretable_name": "Magical Javelin",
          "treasuretable_cost": "100",
          "treasuretable_description": "Once per battle, can use for an attack at BS, if it hits and the target is adjacent to a wall, roll a D6: 5-6 = target is pinned there until next turn."
        },
        {
          "treasuretable_type": "Other Weapons",
          "treasuretable_num": 46,
          "treasuretable_name": "Arrow of Fire",
          "treasuretable_cost": "300",
          "treasuretable_description": "1 arrow, does damage of the bow in a fireball (2x2 squares area)"
        },
        {
          "treasuretable_type": "Other Weapons",
          "treasuretable_num": 51,
          "treasuretable_name": "Crossbow of Swiftness",
          "treasuretable_cost": "750",
          "treasuretable_description": "Get as many attacks as you have attack skill."
        },
        {
          "treasuretable_type": "Other Weapons",
          "treasuretable_num": 52,
          "treasuretable_name": "Lightning Bolts",
          "treasuretable_cost": "100 per",
          "treasuretable_description": "D6 found.  Does damage of the crossbow to every model in a line directly from the Warrior, no armor"
        },
        {
          "treasuretable_type": "Other Weapons",
          "treasuretable_num": 53,
          "treasuretable_name": "Skavenblade (dagger)",
          "treasuretable_cost": "300",
          "treasuretable_description": "Ignores 1 point of armor, does only 1D6 damage with no strength, but any damage suffered is done at the end of the turn again with no modifiers (poison)"
        },
        {
          "treasuretable_type": "Other Weapons",
          "treasuretable_num": 54,
          "treasuretable_name": "Throwing Hammer",
          "treasuretable_cost": "300",
          "treasuretable_description": "Ignores all but magic armor, if 6 is rolled for damage, stuns for a turn (no monster phase this turn for the model hit).  Once per combat can be thrown, range 6 squares."
        },
        {
          "treasuretable_type": "Other Weapons",
          "treasuretable_num": 55,
          "treasuretable_name": "Repeater Crossbow",
          "treasuretable_cost": "500",
          "treasuretable_description": "If you hit, you can immediately attack again, until a miss.  Takes D3 turns of inactivity to reload."
        },
        {
          "treasuretable_type": "Other Weapons",
          "treasuretable_num": 56,
          "treasuretable_name": "Halberd of Pain",
          "treasuretable_cost": "200",
          "treasuretable_description": "Can attack in ranks, is –1 WS if in a hallway, always hits last in Warrior’s Phase.  Ignores Toughness on a natural roll of 6 to hit.  Two handed weapon."
        },
        {
          "treasuretable_type": "Other Weapons",
          "treasuretable_num": 61,
          "treasuretable_name": "Mace of Sure Striking",
          "treasuretable_cost": "300",
          "treasuretable_description": "Re roll one D6 of damage if desired, taking the higher of the two damage."
        },
        {
          "treasuretable_type": "Other Weapons",
          "treasuretable_num": 62,
          "treasuretable_name": "Arrows of Piercing",
          "treasuretable_cost": "300",
          "treasuretable_description": "Enough arrows to last the adventure.  Each hit, roll a D6: 1-4 = no special effect, 5-6 = ignores all armor"
        },
        {
          "treasuretable_type": "Other Weapons",
          "treasuretable_num": 63,
          "treasuretable_name": "Flail of Smiting",
          "treasuretable_cost": "400",
          "treasuretable_description": "+2 STR, ignores 1 point of magic armor, ignores shields of any kind"
        },
        {
          "treasuretable_type": "Other Weapons",
          "treasuretable_num": 64,
          "treasuretable_name": "Fire Arrows",
          "treasuretable_cost": "100 per",
          "treasuretable_description": "1D6 found.  If it hits, roll D6: 1-3 = has no special effect, 4-6 = does 1D6 wounds with no modifiers each turn until damage does natural 1 or 2 (which snuffs the flames after damage)."
        },
        {
          "treasuretable_type": "Other Weapons",
          "treasuretable_num": 65,
          "treasuretable_name": "Razor Arrows",
          "treasuretable_cost": "100 per",
          "treasuretable_description": "D6 found.  +3 wounds to targets with no armor"
        },
        {
          "treasuretable_type": "Other Weapons",
          "treasuretable_num": 66,
          "treasuretable_name": "Elven Bow",
          "treasuretable_cost": "750",
          "treasuretable_description": "Make as many attacks as you have attack skill."
        },
        {
          "treasuretable_type": "Obj Room Magic Items",
          "treasuretable_num": 11,
          "treasuretable_name": "Lifestone of Ashraz",
          "treasuretable_cost": "1500",
          "treasuretable_description": "As long as the bearer is above 0 wounds, the lifestone heals D3 wounds at the beginning of each turn."
        },
        {
          "treasuretable_type": "Obj Room Magic Items",
          "treasuretable_num": 12,
          "treasuretable_name": "Warningstone of Asuryan",
          "treasuretable_cost": "1100",
          "treasuretable_description": "Negates ambush on a roll of 6, once per event."
        },
        {
          "treasuretable_type": "Obj Room Magic Items",
          "treasuretable_num": 13,
          "treasuretable_name": "Warpjump Spell Jewel",
          "treasuretable_cost": "750",
          "treasuretable_description": "The jewel’s bearer and all adjacent Warriors are transported to any place in the dungeon that they have been to before, once per adventure."
        },
        {
          "treasuretable_type": "Obj Room Magic Items",
          "treasuretable_num": 14,
          "treasuretable_name": "Wand of Jade",
          "treasuretable_cost": "600",
          "treasuretable_description": "Has 2D6 charges when found.  Each charge increases the effect (not success chance) of a spell by +2."
        },
        {
          "treasuretable_type": "Obj Room Magic Items",
          "treasuretable_num": 15,
          "treasuretable_name": "Wand of Diabolum",
          "treasuretable_cost": "500",
          "treasuretable_description": "All spells cast with this wand are at –1 Casting number."
        },
        {
          "treasuretable_type": "Obj Room Magic Items",
          "treasuretable_num": 16,
          "treasuretable_name": "Sceptre of Zandri",
          "treasuretable_cost": "1000",
          "treasuretable_description": "Acts as a normal sword (D6+strength damage), but against undead does an additional D6 damage, and all undead are –2 to hit the wielder."
        },
        {
          "treasuretable_type": "Obj Room Magic Items",
          "treasuretable_num": 21,
          "treasuretable_name": "Horn of Vengeance",
          "treasuretable_cost": "1000",
          "treasuretable_description": "Once per adventure, roll a D6 for every monster on the tile.  If the roll is a natural 6 or is greater than the monster’s toughness, it is hurled to the floor and suffers D6 wounds with no armor.  Prone monsters take a turn to stand up and can do nothing else."
        },
        {
          "treasuretable_type": "Obj Room Magic Items",
          "treasuretable_num": 22,
          "treasuretable_name": "Chalice of Battle",
          "treasuretable_cost": "1000",
          "treasuretable_description": "Once per adventure, the warrior gains one turn of +1 Attack, +1 to hit, and +1 Strength."
        },
        {
          "treasuretable_type": "Obj Room Magic Items",
          "treasuretable_num": 23,
          "treasuretable_name": "Firestorm Icon",
          "treasuretable_cost": "2000",
          "treasuretable_description": "Once per adventure, does 6D6 with no modifiers of any kind to all models in a 2x2 square area in line of sight.  "
        },
        {
          "treasuretable_type": "Obj Room Magic Items",
          "treasuretable_num": 24,
          "treasuretable_name": "Horn of Defiance",
          "treasuretable_cost": "750",
          "treasuretable_description": "Once per adventure, when blown the effects last until the combat ends or POW rolls 1, whichever comes first.  When a warrior is attacked, on a 6+ no damage is done."
        },
        {
          "treasuretable_type": "Obj Room Magic Items",
          "treasuretable_num": 25,
          "treasuretable_name": "A set of Gauntlets of Damzhar",
          "treasuretable_cost": "1000",
          "treasuretable_description": "This cannot be found if one or more of the Gauntlets is already possessed. When worn, the Gauntlets grant +3 attacks, at +1 to hit and 4D6 damage."
        },
        {
          "treasuretable_type": "Obj Room Magic Items",
          "treasuretable_num": 26,
          "treasuretable_name": "Chalice of Sorcery",
          "treasuretable_cost": "700",
          "treasuretable_description": "Gives POW for casting spells.  For each point of POW drawn from the chalice, roll a D6.  All power must be drawn at once, and thus all D6 rolled at the same time.  When the dice are rolled, any 1s that result causes 1D6 wounds, with no modifiers of any kind."
        },
        {
          "treasuretable_type": "Obj Room Magic Items",
          "treasuretable_num": 31,
          "treasuretable_name": "Enchanted Jade Amulet",
          "treasuretable_cost": "600",
          "treasuretable_description": "Each turn, the amulet will regenerate up to BL in wounds if used, but will not raise wounds over starting level.  Each turn used, roll a D6: 1 = The amulet crumbles to dust, causing D6 wounds with no modifiers for armor or toughness.  2 = no effect this turn, 3-6 = regenerates.  Does not work at 0 wounds."
        },
        {
          "treasuretable_type": "Obj Room Magic Items",
          "treasuretable_num": 32,
          "treasuretable_name": "Book of Arcane Knowledge",
          "treasuretable_cost": "1000",
          "treasuretable_description": "Roll 4D6 when found, and select spells that are written in the book as if learning new spells.  Each spell can be cast once at no POW cost, then the page crumbles."
        },
        {
          "treasuretable_type": "Obj Room Magic Items",
          "treasuretable_num": 33,
          "treasuretable_name": "Brooch of Power",
          "treasuretable_cost": "1000",
          "treasuretable_description": "Stores unused POW for the turn, up to (6+BL) total.  If any Power is stored in the Brooch, it gives +1 toughness to the bearer."
        },
        {
          "treasuretable_type": "Obj Room Magic Items",
          "treasuretable_num": 34,
          "treasuretable_name": "Dawnstone",
          "treasuretable_cost": "500",
          "treasuretable_description": "Revives a warrior to full wounds even if reduced to 0 wounds or dead, at the end of the turn, then crumbles to dust."
        },
        {
          "treasuretable_type": "Obj Room Magic Items",
          "treasuretable_num": 35,
          "treasuretable_name": "Crown of Sorcery",
          "treasuretable_cost": "1000",
          "treasuretable_description": "Usable only by non-spell casters.  When found, randomly select two spells at the bearers BL in casting number.  Each turn the wearer gains the POW of the dungeon, +1, and can cast up to his BL in spells in a turn.  Each time a spell is cast, roll a D6: 1 = spell fails and wearer is immobilized for the turn (only a 1 misses)."
        },
        {
          "treasuretable_type": "Obj Room Magic Items",
          "treasuretable_num": 36,
          "treasuretable_name": "Talisman of Obsidian",
          "treasuretable_cost": "500",
          "treasuretable_description": "Gives Magic Drain of 4+ to any adjacent spell caster.  The magic power is redirected to heal 1D6 wounds to the wearer."
        },
        {
          "treasuretable_type": "Obj Room Magic Items",
          "treasuretable_num": 41,
          "treasuretable_name": "Tablet of Adain",
          "treasuretable_cost": "1000",
          "treasuretable_description": "Lets the Wizard re-roll any number of the dice rolled when new spells are learned, but the second result must be taken."
        },
        {
          "treasuretable_type": "Obj Room Magic Items",
          "treasuretable_num": 42,
          "treasuretable_name": "Staff of Command",
          "treasuretable_cost": "900",
          "treasuretable_description": "Once per event, a spell caster can attempt to control one monster on the board for a turn.  Roll a D6: 1-4 = no effect, 5-6 = Monster is controlled.  Controlled monsters fight in warrior phase and will do anything ordered except harm its self"
        },
        {
          "treasuretable_type": "Obj Room Magic Items",
          "treasuretable_num": 43,
          "treasuretable_name": "Ring of Cheshnakk",
          "treasuretable_cost": "1000",
          "treasuretable_description": "Transports the wearer out of the adventure and to the next settlement the other Warriors visit."
        },
        {
          "treasuretable_type": "Obj Room Magic Items",
          "treasuretable_num": 44,
          "treasuretable_name": "Golden Scepter of Norgrim",
          "treasuretable_cost": "800",
          "treasuretable_description": "Once per turn, can add one of the following to all adjacent Warriors: +1 move, +1 STR, +1 Toughness."
        },
        {
          "treasuretable_type": "Obj Room Magic Items",
          "treasuretable_num": 45,
          "treasuretable_name": "Gauntlet of Bazhrakk the Cruel",
          "treasuretable_cost": "750",
          "treasuretable_description": "+2 Strength.  On a natural 1 to hit, the attack hits an adjacent warrior instead of the monster intended.  Any weapon held is treated as magical, bearer cannot be disarmed."
        },
        {
          "treasuretable_type": "Obj Room Magic Items",
          "treasuretable_num": 46,
          "treasuretable_name": "Staff of Flaming Death",
          "treasuretable_cost": "800",
          "treasuretable_description": "Fires flaming skulls in a straight line, first target is hit for 2D6 wounds and causes fear 5+ (D6 plus dungeon level).  Each time it is used, roll a D6: 1 = all charges used up, destroyed, 2-6 = still at least one charge left."
        },
        {
          "treasuretable_type": "Obj Room Magic Items",
          "treasuretable_num": 51,
          "treasuretable_name": "Staff of Lightning",
          "treasuretable_cost": "800",
          "treasuretable_description": "Does D6+6 damage to the first target in a line, with no modifiers for armor.  Each time it is used, roll a D6: 1 = all charges used up, destroyed, 2-6 = still at least one charge left."
        },
        {
          "treasuretable_type": "Obj Room Magic Items",
          "treasuretable_num": 52,
          "treasuretable_name": "Staff of Osiris",
          "treasuretable_cost": "800",
          "treasuretable_description": "Does D6+3 to every model in a straight line, ignoring armor.  Each time it is used, roll a D6: 1 = all charges used up, destroyed, 2-6 = still at least one charge left."
        },
        {
          "treasuretable_type": "Obj Room Magic Items",
          "treasuretable_num": 53,
          "treasuretable_name": "Skull Wand of Kaloth",
          "treasuretable_cost": "300/charge",
          "treasuretable_description": "Used like a sword (Dice plus Strength damage) but each target must make an Initiative check (D6 roll plus initiative, roll 7+) or it dies on the spot.  Has D6 charges, cannot be recharged."
        },
        {
          "treasuretable_type": "Obj Room Magic Items",
          "treasuretable_num": 54,
          "treasuretable_name": "Skull Staff",
          "treasuretable_cost": "2000",
          "treasuretable_description": "All spells cost 1 less POW to use.  All monsters have –1 to Magic Resistance checks against your spells.  Once per adventure a spell can be cast that ignores all magic resistance, dispels, etc."
        },
        {
          "treasuretable_type": "Obj Room Magic Items",
          "treasuretable_num": 55,
          "treasuretable_name": "Rod of Power",
          "treasuretable_cost": "1500",
          "treasuretable_description": "Can store Unused POW.  Each turn, roll a D6+Initiative, if the result is less than the POW stored in the Rod, it has leaked the stored Power and is empty.  When any POW is in the staff it gives +1 WS."
        },
        {
          "treasuretable_type": "Obj Room Magic Items",
          "treasuretable_num": 56,
          "treasuretable_name": "Forbidden Rod",
          "treasuretable_cost": "1500",
          "treasuretable_description": "Can cast spells for no POW cost, but each time roll a D6: 1-3 = Rod uses Wounds in place of the Power cost, 4-6 = no Power required.  No spell cast with the Rod can be dispelled, countered, or resisted.  Each time it is used, roll a D6: 1-2 = all charges used up, destroyed, 3-6 = still at least one charge left."
        },
        {
          "treasuretable_type": "Obj Room Magic Items",
          "treasuretable_num": 61,
          "treasuretable_name": "Horn of Panic",
          "treasuretable_cost": "2000",
          "treasuretable_description": "Once per combat the Horn can be blown, taking that Warrior’s entire turn.  Roll an initiative check (D6+Initiative, roll 7+ to succeed) for each non-undead creature on the tile.  Each creature that fails fears the party (-1 to hit, -1 to roll on spell chart and –1 spell cast, minimum 1 per turn)."
        },
        {
          "treasuretable_type": "Obj Room Magic Items",
          "treasuretable_num": 62,
          "treasuretable_name": "Staff of Cyeos",
          "treasuretable_cost": "1000",
          "treasuretable_description": "May roll 2D6 for Power each turn and take the best of the two rolls.  If either a 1 or 2 comes up on both of the POW dice, however, there is an unexpected event."
        },
        {
          "treasuretable_type": "Obj Room Magic Items",
          "treasuretable_num": 63,
          "treasuretable_name": "Shadow Crown",
          "treasuretable_cost": "1000",
          "treasuretable_description": "All attacks are –1 to hit the wearer, who cannot be pinned, and has +2 to movement."
        },
        {
          "treasuretable_type": "Obj Room Magic Items",
          "treasuretable_num": 64,
          "treasuretable_name": "Rune Staff",
          "treasuretable_cost": "800",
          "treasuretable_description": "The Rune Staff allows a Warrior to remove a rune from one item and move it to another.  Each try roll a D6: 1  = the rune is destroyed, 2-6 = the rune is successfully moved."
        },
        {
          "treasuretable_type": "Obj Room Magic Items",
          "treasuretable_num": 65,
          "treasuretable_name": "Cape of Cornwall",
          "treasuretable_cost": "750",
          "treasuretable_description": "Can walk over any pit or trap without setting them off: the character cannot be chosen randomly for a trap (remove him from the characters to pick from a cup)."
        },
        {
          "treasuretable_type": "Obj Room Magic Items",
          "treasuretable_num": 66,
          "treasuretable_name": "Codex of the Magus",
          "treasuretable_cost": "200/spell",
          "treasuretable_description": "Roll 2D6 and pick spells as if learning them for a mage.  These spells are written in the Codex, and any Spell Caster can learn them between adventures."
        },
        {
          "treasuretable_type": "Obj Room Weapons and Armor",
          "treasuretable_num": 11,
          "treasuretable_name": "Sword of Hoeth",
          "treasuretable_cost": "750",
          "treasuretable_description": "When used, roll D6: 1 = trip, lose all attacks this turn, 2-4 = as normal, 5-6 = double attacks"
        },
        {
          "treasuretable_type": "Obj Room Weapons and Armor",
          "treasuretable_num": 12,
          "treasuretable_name": "Hellfire Sword",
          "treasuretable_cost": "1500",
          "treasuretable_description": "On a natural roll of 6, does (D6+1 per BL) damage to all adjacent models with no modifiers for toughness or armor"
        },
        {
          "treasuretable_type": "Obj Room Weapons and Armor",
          "treasuretable_num": 13,
          "treasuretable_name": "Bane Sword",
          "treasuretable_cost": "500",
          "treasuretable_description": "Randomly determine a monster type (dragon, goblin, dark elf, etc) for the dungeon level.  The sword does x2 damage against such monsters"
        },
        {
          "treasuretable_type": "Obj Room Weapons and Armor",
          "treasuretable_num": 14,
          "treasuretable_name": "Sword of Vengeance",
          "treasuretable_cost": "1000",
          "treasuretable_description": "Ignores Toughness and all except magic armor, can re-roll one miss per turn (must take the second result)"
        },
        {
          "treasuretable_type": "Obj Room Weapons and Armor",
          "treasuretable_num": 15,
          "treasuretable_name": "Sword of Heroes",
          "treasuretable_cost": "900",
          "treasuretable_description": "Does +3D6 wounds against creatures with 6 or more toughness"
        },
        {
          "treasuretable_type": "Obj Room Weapons and Armor",
          "treasuretable_num": 16,
          "treasuretable_name": "Blade of Leaping Gold",
          "treasuretable_cost": "1000",
          "treasuretable_description": "+3 attacks"
        },
        {
          "treasuretable_type": "Obj Room Weapons and Armor",
          "treasuretable_num": 21,
          "treasuretable_name": "Blood Sword",
          "treasuretable_cost": "600",
          "treasuretable_description": "In addition to normal attacks, roll a D6 for each adjacent model, for each 6, the sword hits that model as normal"
        },
        {
          "treasuretable_type": "Obj Room Weapons and Armor",
          "treasuretable_num": 22,
          "treasuretable_name": "Dragon Sword",
          "treasuretable_cost": "1200",
          "treasuretable_description": "Can only be drawn by 4th level or higher, on a successful roll of 5 or 6 to hit, does double damage"
        },
        {
          "treasuretable_type": "Obj Room Weapons and Armor",
          "treasuretable_num": 23,
          "treasuretable_name": "Hammer of Spite",
          "treasuretable_cost": "600",
          "treasuretable_description": "Choose a monster as it is placed on the board, if there is room adjacent, place the warrior with this hammer by that monster.  Take an immediate ambush attack, and every turn against that monster he gets +1 attack, and should he kill it, double gold."
        },
        {
          "treasuretable_type": "Obj Room Weapons and Armor",
          "treasuretable_num": 24,
          "treasuretable_name": "Axe of Slaying",
          "treasuretable_cost": "500",
          "treasuretable_description": "One turn per adventure: automatically hits target, roll a D6, damage is equal to the number rolled in D6 (+ STR)."
        },
        {
          "treasuretable_type": "Obj Room Weapons and Armor",
          "treasuretable_num": 25,
          "treasuretable_name": "Axe of Blood",
          "treasuretable_cost": "1000",
          "treasuretable_description": "When monsters are first faced, roll a D6: 1 = attack nearest warrior, ignoring pinning, +1 STR and Attacks this turn, roll again next turn.  2-5 = Attack nearest monster at –1 to hit, but +1 STR and Attack (roll again next turn at +1 to dice).  6 = +1 STR and attacks until end of fight.  This die roll is done until the Warrior no longer attacks any allies."
        },
        {
          "treasuretable_type": "Obj Room Weapons and Armor",
          "treasuretable_num": 26,
          "treasuretable_name": "Hammer of Sigmar",
          "treasuretable_cost": "2000",
          "treasuretable_description": "Ignores all but magical armor, if a roll to hit is a natural 6, damage is 4x"
        },
        {
          "treasuretable_type": "Obj Room Weapons and Armor",
          "treasuretable_num": 31,
          "treasuretable_name": "Rending Sword",
          "treasuretable_cost": "1200",
          "treasuretable_description": "+2D6 damage, on a 5 or 6 to hit, ignores 2 points of any armor "
        },
        {
          "treasuretable_type": "Obj Room Weapons and Armor",
          "treasuretable_num": 32,
          "treasuretable_name": "Sword of Destruction",
          "treasuretable_cost": "750",
          "treasuretable_description": "Nullifies all magic in adjacent squares and for wielder, including items.  Causes +1 wounds and gives 6+ Magic Dispel"
        },
        {
          "treasuretable_type": "Obj Room Weapons and Armor",
          "treasuretable_num": 33,
          "treasuretable_name": "Gomril Blade",
          "treasuretable_cost": "1200",
          "treasuretable_description": "2-Handed Axe.  Ignores all but magic armor, does double damage on a successful hit.  Cannot be used by anyone below 3rd level."
        },
        {
          "treasuretable_type": "Obj Room Weapons and Armor",
          "treasuretable_num": 34,
          "treasuretable_name": "Blade of Leaping Bronze",
          "treasuretable_cost": "450",
          "treasuretable_description": "+2 attacks"
        },
        {
          "treasuretable_type": "Obj Room Weapons and Armor",
          "treasuretable_num": 35,
          "treasuretable_name": "Frostblade",
          "treasuretable_cost": "750",
          "treasuretable_description": "May only make 1 attack per turn.  Once per adventure, if it causes one wound, Frostblade slays the foe utterly, causes deathblows"
        },
        {
          "treasuretable_type": "Obj Room Weapons and Armor",
          "treasuretable_num": 36,
          "treasuretable_name": "Fell Blade",
          "treasuretable_cost": "1500",
          "treasuretable_description": "+1D6, each wound caused is doubled, but roll a D6 each hit, if a 1 results, the wounds that the monster takes are done to the wielder instead."
        },
        {
          "treasuretable_type": "Obj Room Weapons and Armor",
          "treasuretable_num": 41,
          "treasuretable_name": "Blade of Cocacila",
          "treasuretable_cost": "2000",
          "treasuretable_description": "+2 STR, No magic works for the wielder nor any model adjacent.  Ignores armor and toughness of chaos daemons"
        },
        {
          "treasuretable_type": "Obj Room Weapons and Armor",
          "treasuretable_num": 42,
          "treasuretable_name": "Sword of Teclis",
          "treasuretable_cost": "1500",
          "treasuretable_description": "+1D6 electrical damage, ignores all armor; once per adventure, it may unleash a storm of electricity that does D6 hits at D6+STR to the foe faced."
        },
        {
          "treasuretable_type": "Obj Room Weapons and Armor",
          "treasuretable_num": 43,
          "treasuretable_name": "Black Axe of Krell",
          "treasuretable_cost": "1500",
          "treasuretable_description": "Ignores armor, if it hits, does D6 wounds at the end of the turn with no modifiers whatsoever"
        },
        {
          "treasuretable_type": "Obj Room Weapons and Armor",
          "treasuretable_num": 44,
          "treasuretable_name": "Gotrek’s Axe",
          "treasuretable_cost": "1500",
          "treasuretable_description": "Ignores normal armor, ignores 2 points of magic armor, +1 to hit, +1D6 damage"
        },
        {
          "treasuretable_type": "Obj Room Weapons and Armor",
          "treasuretable_num": 45,
          "treasuretable_name": "Morgor the Mangler (axe)",
          "treasuretable_cost": "2000",
          "treasuretable_description": "+1 Weapon Skill, +1 Toughness, +1 Strength, ignores normal armor"
        },
        {
          "treasuretable_type": "Obj Room Weapons and Armor",
          "treasuretable_num": 46,
          "treasuretable_name": "Bow of Loren",
          "treasuretable_cost": "2000",
          "treasuretable_description": "Does BL in D6 wounds, if this kills, continue attack without roll to hit on target behind, continue until no longer kills"
        },
        {
          "treasuretable_type": "Obj Room Weapons and Armor",
          "treasuretable_num": 51,
          "treasuretable_name": "Chaos Sword of Grugn Ironheart",
          "treasuretable_cost": "1000",
          "treasuretable_description": "+1 Weapon Skill, +1 Strength, +1 Attack for the wielder"
        },
        {
          "treasuretable_type": "Obj Room Weapons and Armor",
          "treasuretable_num": 52,
          "treasuretable_name": "Chaos Demon Sword",
          "treasuretable_cost": "1250",
          "treasuretable_description": "Ignores normal armor, each wound does D3 wound, any 1 rolled for damage like this damages the wielder instead, no modifiers."
        },
        {
          "treasuretable_type": "Obj Room Weapons and Armor",
          "treasuretable_num": 53,
          "treasuretable_name": "Executioner’s Axe",
          "treasuretable_cost": "2000",
          "treasuretable_description": "2 handed Axe, strikes last on Warrior’s Phase, +2 STR, on a roll of 5+ on all dice of damage, the target dies (not vs chaos or undead)."
        },
        {
          "treasuretable_type": "Obj Room Weapons and Armor",
          "treasuretable_num": 54,
          "treasuretable_name": "Elf Biter, Axe of Grom",
          "treasuretable_cost": "2000",
          "treasuretable_description": "Ignores armor, any wounds that are done after all defenses are doubled"
        },
        {
          "treasuretable_type": "Obj Room Weapons and Armor",
          "treasuretable_num": 55,
          "treasuretable_name": "Morning Star of Fracasse",
          "treasuretable_cost": "1000",
          "treasuretable_description": "+2 STR first turn of a battle, if it wounds a target, their weapon is taken and destroyed."
        },
        {
          "treasuretable_type": "Obj Room Weapons and Armor",
          "treasuretable_num": 56,
          "treasuretable_name": "Armor of Taakan",
          "treasuretable_cost": "1500",
          "treasuretable_description": "+5 Toughness, -1 move.  Any attack that wounds the wearer allows the wearer to retaliate with one additional attack that does not cause death blows."
        },
        {
          "treasuretable_type": "Obj Room Weapons and Armor",
          "treasuretable_num": 61,
          "treasuretable_name": "Shadow Armor",
          "treasuretable_cost": "2000",
          "treasuretable_description": "+2 toughness all attacks are at –1 wound on each D6 rolled, wearer is never pinned, and can move through 1 square of obstruction freely (cannot cross chasms)"
        },
        {
          "treasuretable_type": "Obj Room Weapons and Armor",
          "treasuretable_num": 62,
          "treasuretable_name": "Armor of Skaldor (Dwarf only)",
          "treasuretable_cost": "1500",
          "treasuretable_description": "+4 toughness, immune to breath weapons, 5+ dodge"
        },
        {
          "treasuretable_type": "Obj Room Weapons and Armor",
          "treasuretable_num": 63,
          "treasuretable_name": "Armor of Meteoric Iron",
          "treasuretable_cost": "1000",
          "treasuretable_description": "+3 toughness, Cannot be removed or carried unworn"
        },
        {
          "treasuretable_type": "Obj Room Weapons and Armor",
          "treasuretable_num": 64,
          "treasuretable_name": "Helm of Possession",
          "treasuretable_cost": "1000",
          "treasuretable_description": "+1 toughness, each turn the wearer can choose a monster and roll D6: on a 6: removes D6 attacks from the victim"
        },
        {
          "treasuretable_type": "Obj Room Weapons and Armor",
          "treasuretable_num": 65,
          "treasuretable_name": "Armor of Dargan",
          "treasuretable_cost": "2000",
          "treasuretable_description": "+4 toughness, -1 to be hit by non magic weapons"
        },
        {
          "treasuretable_type": "Obj Room Weapons and Armor",
          "treasuretable_num": 66,
          "treasuretable_name": "Gauntlets of Soul Rending",
          "treasuretable_cost": "800",
          "treasuretable_description": "Allows extra attack before all other attacks at –1 to hit.  The first time a warrior kills a monster with these gauntlets in an adventure, roll D6: 4-6 = +1 wound permanently"
        },
        {
          "treasuretable_type": "Gold Roll",
          "treasuretable_num": 1,
          "treasuretable_name": "Gold Roll",
          "treasuretable_cost": "N/A",
          "treasuretable_description": "Roll as many D6 as desired, and multiply total by (10 x dungeon level). However, if any 1’s are rolled, nothing is found."
        },
        {
          "treasuretable_type": "Scroll",
          "treasuretable_num": 1,
          "treasuretable_name": "Scroll",
          "treasuretable_cost": "N/A",
          "treasuretable_description": "One Use, No Cost - Roll a D12 to randomly determine a spell level from the Wizard’s spell list, then randomize from the number of spells within that level."
        }
      ]);
    });
}; 
