
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('events_and_hazards').del()
    .then(function () {
      // Inserts seed entries
      return knex('events_and_hazards').insert([
        {
          "event_n_haz_id" : 1,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "NOTHING HAPPENS",
          "event_n_haz_roll" : 1,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "No Dungeon Event happens."
        },
        {
          "event_n_haz_id" : 2,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "CAVE IN",
          "event_n_haz_roll" : 2,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "As the Warrior's enter this area of the dungeon, the ceiling starts to shudder and the roof caves in. Place the cave-in marker in the board section at the end of the Warriors' Phase. All exits apart from the one where the Warriors entered are now blocked. Any Warrior's still on this board section at then end of next turn are crushed by falling rubble and are killed. Warriors attempting to escape are not subject to the rules of pinning whilst in this room. This room is now impassable and may not be re-entered as normal. Instead, the Warriors may try to dig a way through as described in White Dwarf 192. If the Warriors succeed, the cave in has been cleared, and the room may now be re-entered."
        },
        {
          "event_n_haz_id" : 3,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "DWARF PROSPECTOR",
          "event_n_haz_roll" : 3,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "Slumped against the wall the Warriors find a dying Dwarf prospector. At the Warriors approach, he tries to rise, but then slides back down the wall. He hands the Warriors a key, and with a dying breath says, \"This is the key to the portcullis. Without it you will never get through."
        },
        {
          "event_n_haz_id" : 4,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "SCORPION SWARM",
          "event_n_haz_roll" : 4,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "A scuttling mass of stinging, biting scorpions emerges from the darkness and engulfs one of the Warriors. There are 2D6 + 4 scorpions in the swarm. Roll your Warrior's normal damage for the attack (he does not need to roll to hit). The number rolled is the number of scorpions your Warrior manages to kill for 10 gold each. The number remaining each inflict 1 Wound, with no modifiers for Toughness or armour."
        },
        {
          "event_n_haz_id" : 5,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "POISON DART",
          "event_n_haz_roll" : 5,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "With a faint click, a dart shoots from the wall and embeds itself in a random Warrior's leg. He suffers 1D6 Wounds with no modifiers for Toughness or armour. Now roll another D6. On a score of 1, 2 or 3, the dart was poison, and it has got into the Warrior's system. While poisoned, the Warrior's Strength is reduced by -1 for the rest of the adventure, or until he drinks a Healing potion."
        },
        {
          "event_n_haz_id" : 6,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "LOST",
          "event_n_haz_roll" : 6,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "After wandering around the dungeon for what seems like an eternity, the Warriors deduce that they can only be lost. Take another 1D6 Dungeon cards and put them on top of the Dungeon deck."
        },
        {
          "event_n_haz_id" : 7,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "LOST GOLD",
          "event_n_haz_roll" : 7,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "A random Warrior realises that his backpack has a small hole in it and he has lost 1D6 x 200 gold."
        },
        {
          "event_n_haz_id" : 8,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "IMPERIAL KNIGHT",
          "event_n_haz_roll" : 8,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "The Warriors meet an Imperial Knight Panther on a quest. He warns them about hideous Monsters that lurk nearby. For the next battle, the Warriors have the Ambush ability. If the Monsters also have Ambush, then it is cancelled out, otherwise the Warriors get to make an extra attack before their usual attacks."
        },
        {
          "event_n_haz_id" : 9,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "SPIKED PIT",
          "event_n_haz_roll" : 9,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "A random Warrior tumbles head first into a pit. He takes 4D6 Wounds as he lands at the bottom with a thud, impaling himself on the sharpened pits at the bottom. He may only escape from the pit if he, or another Warrior has a rope, or a Levitate spell is cast on him. Otherwise, he must spend the rest of his days at the bottom of the pit."
        },
        {
          "event_n_haz_id" : 10,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "PRISONERS",
          "event_n_haz_roll" : 10,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "Three prisoners emerge from the shadows and run towards the Warriors. They explain that they managed to escape their captors, and now seek protection, and safe passage from the dungeon. If the Warriors let them join the party, they hide in the shadows during combat. At the next Settlement the Warriors visit, roll 1D6:"
        },
        {
          "event_n_haz_id" : 11,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "NOTHING HAPPENS",
          "event_n_haz_roll" : 11,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "No Dungeon Event happens."
        },
        {
          "event_n_haz_id" : 12,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "SNOTLING",
          "event_n_haz_roll" : 12,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "A small figure runs out of the darkness and weaves his way around the Warriors' feet. They recognise it as a Snotling, who screams a warning to any Monsters who might be nearby. While the Snotling is with the Warriors, every time an Unexpected Event reveals Monsters, the Snotling cries out, alerting the Monsters to the Warriors presence. The Monsters now have the Ambush ability, or if they already have it, gain an extra attack each for their first turn. At the end of each turn, roll 1D6. On a score of 1, the Snotling runs off into the darkness. The Warriors may kill the Snotling immediately, but when he dies his death scream echoes around the dungeon. Roll once on the Monster Table one level higher than the Warriors' to determine what Monsters arrive to investigate."
        },
        {
          "event_n_haz_id" : 13,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "DEAD BODY",
          "event_n_haz_roll" : 13,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "The Warriors find a dead body lying in the middle of the floor. Clutched in its hands is a small leather bag. A Warrior may take the bag, in which case roll 1D6:"
        },
        {
          "event_n_haz_id" : 14,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "CHANGE OF PLAN",
          "event_n_haz_roll" : 14,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "A cloaked stooped figure slinks into view, keeping to the shadows and moving with an eerie silence. He approaches the Warriors while looking around him for Monsters, and whispers \"I bring important news. Your quest must be immediately abandoned, as the King is in greater danger than you could ever imagine. If you return now, you will each be given 750 gold for your troubles.\" If the Warriors abandon their quest, they must return as normal to the beginning of the dungeon entrance. When the Warriors reach the next Settlement, roll 1D6:"
        },
        {
          "event_n_haz_id" : 15,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "LANTERN GOES OUT",
          "event_n_haz_roll" : 15,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "A sudden breeze blows out the lantern. Unless the Warriors have another source of light they are in darkness! While in darkness, the Warriors may do nothing each turn while they try to relight the lantern. At the beginning of each turn, roll 1D6. On a score of 5 or 6 the lantern comes back on, and the Warriors may continue their journey. If the Warriors have to fight Monsters in the pitch black, then all their To Hit rolls are at -2."
        },
        {
          "event_n_haz_id" : 16,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "TRIP OVER",
          "event_n_haz_roll" : 16,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "A random Warrior loses his footing on the flagstones, and trips over. Unfortunately, he has sprained his ankle. For the rest of the adventure he is at -1 Move."
        },
        {
          "event_n_haz_id" : 17,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "DEJA VU",
          "event_n_haz_roll" : 17,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "The Warriors seem to think that their surroundings look similar to those encountered before. Roll 1D6:"
        },
        {
          "event_n_haz_id" : 18,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "WRONG DUNGEON",
          "event_n_haz_roll" : 18,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "The Warriors suddenly realise that they might be in the wrong dungeon. They have had no signs yet that they are in the correct one, and the layout seems different than the one described to them. Draw another Objective Room Dungeon Card from the pile and shuffle it into the last six cards of the Dungeon deck. If the Warriors come across this room first, then they have entered the wrong dungeon. Although they may fight a battle in the Objective Room and receive Treasure for it, they may not claim the reward for finishing the dungeon. If the Objective Room is the correct one, then the Warriors may claim the reward as usual."
        },
        {
          "event_n_haz_id" : 19,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "FOOTPRINTS",
          "event_n_haz_roll" : 19,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "The Warriors spot some footprints in the dust that lead to a blank section of the floor. If they investigate roll 1D6:"
        },
        {
          "event_n_haz_id" : 20,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "PIT",
          "event_n_haz_roll" : 20,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "A huge pit suddenly opens up in front of the Warriors. Place a Pit of Despair counter in the middle of the room, or corridor. Roll two dice for each Warrior. If anyone scores a double 1 they have fallen into the bottomless pit to their doom. Otherwise, place each Warrior on the side of the pit. If the pit blocks a room, or a corridor section, the Warriors may attempt to search for Hidden Passages as described in White Dwarf 189. If they find one, place the remaining Dungeon cards behind the new door and continue the adventure from there. If the pit separates the Warriors, each group must find a secret passage, then place the board section to try and connect the two doors."
        },
        {
          "event_n_haz_id" : 21,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "COAST IS CLEAR?",
          "event_n_haz_roll" : 21,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "The Warrior carrying the lantern creeps up to the corner of the archway and looks cautiously around. Seeing that the coast is clear, he turns back at the other Warriors and beckons for them to follow him. As soon as he looks back again, he sees the slavering face of a <Roll on the Monster Table>. Fortunately there is just 1 of these beasts. If it is killed, do not take a Treasure Card."
        },
        {
          "event_n_haz_id" : 22,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "NOTHING HAPPENS",
          "event_n_haz_roll" : 22,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "No Dungeon Event happens."
        },
        {
          "event_n_haz_id" : 23,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "POUCH",
          "event_n_haz_roll" : 23,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "The Warriors find a small pouch off to the side of the room. If they decide to open it roll 1D6:"
        },
        {
          "event_n_haz_id" : 24,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "RUNES",
          "event_n_haz_roll" : 24,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "The Warriors notice that, inscribed on the wall, are strange runes. Roll 1D6 for each Warrior. On a 5, or a 6 that Warrior understands the runes, and explains that they reveal how to open a secret alcove in the wall that contains great riches. If anyone understands the runes, each Warrior may take 1 Treasure Card, but roll twice on the Monster Table to see what arrives to rescue it's Treasure."
        },
        {
          "event_n_haz_id" : 25,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "WAVE OF MAGIC",
          "event_n_haz_roll" : 25,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "The Warriors suddenly experience a strange sensation, as if their surroundings had suddenly changed. Shuffle the remaining dungeon cards from any passages not explored yet and replace them. These passages have now been altered, and could result in the Objective Room being much closer than before, or further away."
        },
        {
          "event_n_haz_id" : 26,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "WIZENED OLD MAN",
          "event_n_haz_roll" : 26,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "A small wizened old man with white hair, and a flowing white beard approaches your Warriors. \"Hello to you sirs. Would you help an old man to find his spectacles? I need them to study this map.\" He waves a map in front of your Warriors' noses. The Warriors may refuse to help the old man in which case he walks off with a huff. Otherwise, if the Warriors decide to help him roll 1D6:"
        },
        {
          "event_n_haz_id" : 27,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "GAS MASS",
          "event_n_haz_roll" : 27,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "A swirling mass of purple gas twirls around in front of the Warriors. Strange sounds can be heard emanating from the centre, as if there were people on the other side. Each Warrior must roll 1D6 if he decides to step through it (The gas stays here for the duration of the adventure, and the Warriors may step through at any time.):"
        },
        {
          "event_n_haz_id" : 28,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "NATURAL LIGHT",
          "event_n_haz_roll" : 28,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "This walls of the dungeon have small stones embedded in them, emitting a strange green light. This board section and 1D6 adjacent board sections are lit, and the Warriors may explore them on their own."
        },
        {
          "event_n_haz_id" : 29,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "STONE PILLARS",
          "event_n_haz_roll" : 29,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "Stone pillars suddenly shoot up from the floor and slam into the ceiling. Roll 1D6 for the number of pillars, and randomly determine their position one at a time. If any hit a Warrior, he must make an Initiative test. If he passes, he leaps out of the way just in time - place him in any adjacent squares if there is room. If he fails, he is carried up to the ceiling and squashed. He loses (1D6 + Battle Level) Wounds, with no modifiers, and falls to the ground adjacent to the pillar. For every pillar that a Warrior has to escape, subtract -1 from his Initiative test roll."
        },
        {
          "event_n_haz_id" : 30,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "PORTCULLIS",
          "event_n_haz_roll" : 30,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "With a grating sound, a portcullis suddenly slams down behind the last Warrior, cutting them off. The way behind is now blocked. The only way to continue is onwards, or to search for a secret door (White Dwarf 192)."
        },
        {
          "event_n_haz_id" : 31,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "CHILL",
          "event_n_haz_roll" : 31,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "The moment the Warriors set foot in this section of the dungeon, an eerie chill falls over them, slowly decreasing in temperature. Roll 2D6, subtracting the Warrior's Battle Level:"
        },
        {
          "event_n_haz_id" : 32,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "LABYRINTH",
          "event_n_haz_roll" : 32,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "The Warriors discover a labyrinthine layout of passageways behind a secret door on the board section they are now on. Shuffle the remaining Dungeon cards not used in play along with one Objective Room, and place them behind the door. If the Warriors decide to explore the labyrinth, each room has a door on each side, indicating three other exits from the room. If the Warriors make it to the Objective Room, roll once on the Monster Table two levels above that of the Warriors. Once all the Monsters are killed, take two Objective Room Treasure Cards."
        },
        {
          "event_n_haz_id" : 33,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "NOTHING HAPPENS",
          "event_n_haz_roll" : 33,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "No Dungeon Event happens."
        },
        {
          "event_n_haz_id" : 34,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "PRISON",
          "event_n_haz_roll" : 34,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "There are 1D3 shadowy dungeon cells in this room - some of them contain prisoners. The Warriors may elect to free prisoners or search cells, but for each one they must roll on the following table:"
        },
        {
          "event_n_haz_id" : 35,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "SPORES",
          "event_n_haz_roll" : 35,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "As soon as the Warriors step into this section, spores erupt from the ground, covering the Warriors with dust. Roll 2D6 for the number of spores, and 1D2 for each spore to determine the damage each Warrior takes (modified only by Toughness against the total damage)."
        },
        {
          "event_n_haz_id" : 36,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "GHOST",
          "event_n_haz_roll" : 36,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "The Warriors are surprised to see a ghost beckoning to them. As they approach, the ghost seems to indicate something to the Warriors. Each Warrior must make an Initiative test. If someone passes, he realises that the ghost is pointing to his scabbard - his empty scabbard. If a Warrior gives him a sword, then the ghost fades away, happy to be complete in the afterlife. Just before he goes, he points to some amulets in the corner of the room, hidden in the darkness. There are enough for each Warrior to have one. The amulets each have 1D3 points of Luck stored in them, and may be used at any time in the future."
        },
        {
          "event_n_haz_id" : 37,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "TREASURE HOARD",
          "event_n_haz_roll" : 37,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "The lucky Warriors have stumbled upon a hoard of Treasure. If they take any, each Warrior must roll 3D6 x 100. Now, starting with a Warrior, draw Treasure Cards until the amount rolled is reached in Gold value. Repeat this for all the Warriors to indicate how much Treasure they take with them. Now, roll 2D6 for each Warrior that took Treasure. If any Warrior rolls a double, roll on the Objective Room Monster Table as the Monsters arrive to protect their loot."
        },
        {
          "event_n_haz_id" : 38,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "ALTAR",
          "event_n_haz_roll" : 38,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "In the corner is a small altar about waist high. There are small imprints on the surface, indicating equipment should be placed there. Each Warrior may lay 1 Treasure Card upon the altar and roll 1D6:"
        },
        {
          "event_n_haz_id" : 39,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "FELLOW ADVENTURERS",
          "event_n_haz_roll" : 39,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "The Warriors meet up with a fellow band of adventurers. Their mission is the same mission as the Warriors. The other band of adventurers then slip into the darkness. Now it seems that there is a race on to complete the mission the fastest. Roll 2D6 and add the number of Warriors in the party. The Warriors must complete the mission within that many turns or the rival band manages to get to the Objective Room first. If the other band does so, all the Monsters are dead and the Warriors get no Objective Room treasure for completing the adventure.  They do happen to find a piece of normal treasure the other band overlooked. Draw one Treasure Card at the end of the adventure."
        },
        {
          "event_n_haz_id" : 72,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "COSTUMES",
          "event_n_haz_roll" : 72,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "In a rusty old chest, the Warriors find many fine clothes. Fortunately they are just their size. The Warriors may change clothes if they wish. They are now disguised, and any previous events which related to their appearance can be cancelled."
        },
        {
          "event_n_haz_id" : 219,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "PLAGUE",
          "event_n_haz_roll" : 19,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "The Settlement’s doctors grimly announce the Settlement has contracted a deadly plague. In order to escape from it, your Warrior and his comrades must leave the town for the next adventure immediately."
        },
        {
          "event_n_haz_id" : 220,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "UNEVENTFUL DAY",
          "event_n_haz_roll" : 20,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "UNEVENTFUL DAY"
        },
        {
          "event_n_haz_id" : 40,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "HALL OF DARKNESS",
          "event_n_haz_roll" : 40,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "Even with the lantern on, or any other source of light (even magical), this board is pitch black. As soon as all the Warriors are on the board, they cannot see a thing. For each point of Movement expended on this board section roll 1D6 (For the purpose of directions, forward depends on which direction the Warrior wants to go. If the Warriors fight Monsters in the darkness, their To Hit rolls are modified by -2. Fortunately for them, the darkness affects the Monsters as well - all their To Hit rolls are modified by -2 also. All special abilities which require light (Fly, Dodge etc...) have no effect. In addition, if a Monster causes Fear or Terror, the Warriors do not need to roll - they cannot see what they are fighting!):"
        },
        {
          "event_n_haz_id" : 41,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "BLACK AND WHITE",
          "event_n_haz_roll" : 41,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "The floor of this section of the dungeon is divided into a pattern which looks like a chess board. If it is a room, swap it out for the checkerboard room tile. Otherwise, for the Warrior carrying the lantern, roll 1D6. On an even number, the square he is standing in is white. On an odd number, he is standing on a black square. Divide the room up into alternating black and white squares from there, so that each Warrior is either standing on a black or a white square. Then roll 1D6 for the black squares, and 1D6 for the white Squares:"
        },
        {
          "event_n_haz_id" : 42,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "GOBBLEDIGOOK",
          "event_n_haz_roll" : 42,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "A random warrior suddenly tries to speak, and finds that no intelligible words come out of his mouth. It must be the legendary curse of this dungeon which has struck him. It is said that all <Warrior's Character> who enter this dungeon will lose the power of speech until they offer a tribute to Khorne. The tribute which the Warrior must give is the bodies of 1D6 Monsters. He will not get their Gold value from having killed them, instead he must offer them to Khorne as a tribute. Once this is done, he will be able to speak again. Of course, since he cannot speak, he cannot cast any spells, use blessings, or perform any other tasks which require a spoken word, this includes communication with other Warriors."
        },
        {
          "event_n_haz_id" : 43,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "SPEED POTION",
          "event_n_haz_roll" : 43,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "The Warriors meet up with a wizened old man who seems rather spritely for his age. \"Hellotherefriends\", he says, rather quickly. \"You'rejustintimetohelpmetestmyspeedpotion.It'sanewconcoctionofmineanditworkswonders.\" He produces <no. of Warriors in game> flasks and hands them to the Warriors. There is enough for 2 doses each. They may be drunk at any time, upon which 1D6 should be rolled on the following table (each effect lasts until the end of the adventure - they are not cumulative):"
        },
        {
          "event_n_haz_id" : 44,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "NOTHING HAPPENS",
          "event_n_haz_roll" : 44,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "No Dungeon Event happens."
        },
        {
          "event_n_haz_id" : 45,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "SURPRISE",
          "event_n_haz_roll" : 45,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "The Warriors each find a small rock, which seems to be hollow inside. If a Warrior decides to try and break one open, roll 1D6:"
        },
        {
          "event_n_haz_id" : 46,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "BOOK OF ...",
          "event_n_haz_roll" : 46,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "Your Warrior has discovered the legendary Book of (roll 1D6):"
        },
        {
          "event_n_haz_id" : 47,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "LOOSE FLAGSTONE",
          "event_n_haz_roll" : 47,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "A random Warrior trips over a loose flagstone, stubbing his nose on the ground. He loses 1D6 Wounds, only modified for Toughness."
        },
        {
          "event_n_haz_id" : 48,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "TREASURE PILE",
          "event_n_haz_roll" : 48,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "The Warriors discover a huge pile of Treasure in the corner of the room. Thinking it a bit suspicious, they scour the room looking for any sign of traps. Finding nothing, they take a good long look at the Treasure. If anyone decides to rummage through the pile, roll 1D6:"
        },
        {
          "event_n_haz_id" : 49,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "WEIGHTLESSNESS",
          "event_n_haz_roll" : 49,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "The Warriors suddenly experience weightlessness, and float to the ceiling. In shock, their arms flail around, causing them to fly around the room wildly. What causes the weightlessness is unknown, but as long as they are on this board section, they will be able to fly. If there are any monsters on the board, they will also be flying. Whilst flying, no one may be pinned."
        },
        {
          "event_n_haz_id" : 50,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "DISAPPEARING EQUIPMENT",
          "event_n_haz_roll" : 50,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "Without warning, a Wizard leaps out of the shadows, shouting a spell incantation. Almost as quickly as he appeared, he disappears back from where he came from, leaving the Warriors bemused. Each Warrior has lost 1D3 random items of equipment, scattered throughout the dungeon. Use a counter to represent each item, and throw it in the air over the game. Wherever it lands, that is where the item has been sent to. Obviously, if it lands nowhere near the game, due to a crazed throw, use the square it was closest to. To reclaim their equipment, the Warriors must travel to the rooms where their items are in and land on the same square."
        },
        {
          "event_n_haz_id" : 51,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "LOOSE PANTS",
          "event_n_haz_roll" : 51,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "A Warrior suddenly trips over with his pants around his ankles. \"Must be losing weight\", the Warrior mutters, picking himself off the floor and pulling his pants up."
        },
        {
          "event_n_haz_id" : 52,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "FLOATING PLATFORM",
          "event_n_haz_roll" : 52,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "The warriors discover a strange platform, mysteriously floating about three feet from the ground. A curious humming sound is emanating from it. The platform is actually an Anti-Grav platform, constructed by the Skaven using Warp magic, to help them carry rocks around the ancient passageways of the dungeon. The platform will follow the Warriors around the dungeon, and into the next Settlement, whereupon it will head off to the nearest Skaven, to be returned to its duties. Each Warrior may place one item on it. This item cannot be lost in any way. If ever a random item is required to be lost, do not count this item."
        },
        {
          "event_n_haz_id" : 53,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "SGLOOMI PO",
          "event_n_haz_roll" : 53,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "Huddled up in the corner of the room, is a strange blue mass of flesh, with many strange protuberances on it. Moving closer, the Warriors notice that it is a small animal. They are startled when it speaks. \"Please help me. My name is Sgloomi Po, and I was attacked by a horde of Nurglings. Although similar in size to me, there were about 20 of them, and they soon overpowered me, leaving me for dead. I have been resting here trying to regain my strength, but I would appreciate it if you could lend me assistance.\" If the Warriors cast a healing spell on Sgloomi Po, or use bandages or provisions to equal 10 Wounds, Sgloomi Po will reward them with a small wand. The wand has a random Wizard's spell stored in it, which may be cast once per adventure at no Power cost."
        },
        {
          "event_n_haz_id" : 54,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "TREASURE MAP",
          "event_n_haz_roll" : 54,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "While searching this room, a Warrior finds an old faded Treasure map underneath an empty crate. Take the Treasure Map card, and follow the rules in White Dwarf 189."
        },
        {
          "event_n_haz_id" : 55,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "NOTHING HAPPENS",
          "event_n_haz_roll" : 55,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "No Dungeon Event happens."
        },
        {
          "event_n_haz_id" : 56,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "DUST CLOUD",
          "event_n_haz_roll" : 56,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "A strange howling of wind echoes around the passageway. From around the corner, sweeps a huge dust cloud, covering the Warriors from head to foot in dust. Coughing and spluttering, the Warriors try get out of the way of the dust cloud. Fortunately, the cloud soon dissipates, leaving the dust covered Warriors attempting to clear their eyes, and clothes. For the next 1D4 turns, each Warrior is at -2 To Hit, as they try to clear their stinging eyes."
        },
        {
          "event_n_haz_id" : 57,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "PENTOGRAM",
          "event_n_haz_roll" : 57,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "The Warriors spot a large pentagram chalked on the floor. On each star point sits a candle, burning brightly. Someone must have recently changed the candles, as there is little wax melted at their bases. Nearby on a pedestal lies an open book, entitled \"101 Incantations to summon a Demon\". If the Warriors attempt to read from the book, roll 1D6:"
        },
        {
          "event_n_haz_id" : 58,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "BLEEDING WALLS",
          "event_n_haz_roll" : 58,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "Oozing from the walls of this room, the Warriors notice a substance which looks like blood. Upon closer inspection they discover that it is indeed blood. If any Warriors pass an Initiative test, they remember from their readings that this is a sign to indicate the time of Khorne's arrival is near. Khorne's blood is inflicted by the powers of Chaos, and as such contain magical properties. Khorne offers his blood to his followers, so that they may clear the world of unbelievers before his arrival. The Warriors may smear the blood over their edged weapons, causing each weapon to become magical. In addition, the weapon now causes an extra <Warrior's Battle Level> Wounds with each hit. The blood will last for the remainder of this adventure, plus one more adventure, unless it is cleared off. Any items coated with Khorne's blood cannot be sold in a Settlement until the blood wears off. If this event is rolled again while the weapons are still coated in blood, treat this as Nothing Happens."
        },
        {
          "event_n_haz_id" : 59,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "CHAOS TRANSFORMATION",
          "event_n_haz_roll" : 59,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "The room suddenly glows red with the powers of Chaos. Upon entering, a random Warrior suddenly doubles over in agony, his body becoming twisted with the effects of Chaos. Roll once on the Chaos Warrior's Chaos Attribute Table to see how the Warrior is changed. This change is permanent!"
        },
        {
          "event_n_haz_id" : 60,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "CHUTE",
          "event_n_haz_roll" : 60,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "The floor suddenly gives way beneath two random Warriors. With loud cries, they tumble feet first down long twisting chutes. When they tumble out at the end of the chutes, they find themselves in the Objective Room! Immediately treat this as if the Warriors had discovered it as normal, placing it on a bare section of the playing surface. Roll for all the Monsters depending on the amount of Warriors in the dungeon. The remaining Warriors will now have to find the Objective Room, while the Warriors already there will have to try and survive! Since the Warriors on this board section do not know where their friends have gone, they cannot give them any assistance in the form of spells, etc."
        },
        {
          "event_n_haz_id" : 61,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "SPEAR TRAP",
          "event_n_haz_roll" : 61,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "<No. of Warriors in game> huge spears fly from the walls, one heading for each Warrior. Unless the Warriors can pass Initiative tests, the spears hit them. For each point below 8 that each Warrior scored for their test, roll 1D6. Total the amount - this is the number of Wounds the Warrior must lose."
        },
        {
          "event_n_haz_id" : 62,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "SKYLIGHT",
          "event_n_haz_roll" : 62,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "A huge stone slab is cut from the roof of this section of the dungeon. Light streams in from above, illuminating the room and all adjacent rooms. On this board section, and all adjacent ones, if any Monsters are fought which have the Ambush ability, then ignore it. Because of the light, the Warriors could see the Monsters coming from a distance. Also, the Warriors may be on either of the board sections around the room and not have to worry about the lantern."
        },
        {
          "event_n_haz_id" : 63,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "TRAP",
          "event_n_haz_roll" : 63,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "By entering this room, the Warriors have set off a trap. Roll 1D6 to determine what happens:"
        },
        {
          "event_n_haz_id" : 64,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "BAT SWARM",
          "event_n_haz_roll" : 64,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "With a flurry of wings, a swarm of Bats suddenly swoops down out of the darkness, startling the Warriors. Each Warrior should roll 2D6 for the number of Bats that attack, then choose a Warrior Counter. That Warrior has been bitten by the Bats, and must lose 1 Wound for each Bat that bites him. If any Warrior picks his own Warrior Counter, then double damage done to him. The bats then fly off down the passageway."
        },
        {
          "event_n_haz_id" : 65,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "TOAD",
          "event_n_haz_roll" : 65,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "A random Warrior carelessly sets off a trap as he enters this room. As his foot touches the trip-wire, he vanishes in a puff of smoke. In his place sits a fat chubby toad. The Warrior has been turned into a toad! Fortunately for him, the spell will wear off after 3 turns. While he is a toad, he may only move 1 square per turn, has a Weapon Skill of 1, Strength of 1, Toughness of 1, cannot use any items. All his items must be dropped on the square he is in. They may either be taken by other Warriors, or at the end of the third turn, the Warrior may take them back himself."
        },
        {
          "event_n_haz_id" : 66,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "NOTHING HAPPENS",
          "event_n_haz_roll" : 66,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "No Dungeon Event happens."
        },
        {
          "event_n_haz_id" : 67,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "MARKSMAN",
          "event_n_haz_roll" : 67,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "Ho there chaps! The Warriors are greeted by a slim figure who holds his hand out in greeting. \"Allow me to introduce myself. My name is Sir Reginald. I would be honoured to accompany your party back to the nearest Settlement for no charge. I am an excellent marksman with my bow, and a fair warrior with a close combat weapon.\" If the Warriors decide to take him up on his offer, he will remain with them until they reach the next Settlement. He is armed with the same characteristics as level 3 Imperial Noble, and is armed with a Longbow and a Sword. The Longbow is a Strength 4 weapon, while the Sword has Strength 3. Because the marksman is an expert shot with a bow, he only recquires a 2+ To Hit no matter who he is firing at. Put a counter to represent the marksman in the counter container. He is treated just as another Warrior, thus adjusting the Monsters appearing. The marksman does not count when determining who gets the Treasure at the end of any battle. If he dies before the end of the adventure, the Warriors may not take any of his equipment."
        },
        {
          "event_n_haz_id" : 68,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "NOTHING HAPPENS",
          "event_n_haz_roll" : 68,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "No Dungeon Event happens."
        },
        {
          "event_n_haz_id" : 69,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "DISEASE",
          "event_n_haz_roll" : 69,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "One of the Warriors seems to have caught some sort of infliction. His skin breaks out in green lumps, and his hair begins to fall out. If the Warriors do not seek some help for their friend in less than 3D6 turns (a week counts as one turn once out of the dungeon), he will gradually decline in health. Help can be obtained by visiting a Temple and donating 2D6 x 50 Gold to their healers. If the designated time has elapsed and Warrior has not yet been healed, then he begins to lose Wounds at the rate of 1 Wound per turn (no modifiers), until he reaches zero. If he is not healed before he reaches zero Wounds, then he is dead. Treat this as a fatal disease."
        },
        {
          "event_n_haz_id" : 70,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "FURNITURE",
          "event_n_haz_roll" : 70,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "This room is less sparse than most of the other rooms the Warriors encounter. There is a (roll 1D6): here.  The measurements of each item is given in squares. Randomly determine where the item of furniture is placed, and then roll 1D6. If a 6 is rolled, roll again on the table, placing more furniture, etc. Treat this item as an obstruction to movement, line of sight, etc. If it blocks the passageway, the Warriors will have to search for a secret door as detailed in White Dwarf 185 or 189."
        },
        {
          "event_n_haz_id" : 71,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "SMUGGLED LOOT",
          "event_n_haz_roll" : 71,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "The Warriors discover some rare jewels in a small bag in this section of the dungeon. Choose a Warrior to carry them. They may be sold in a Settlement for the amount listed below by visiting the Black Market. The Black Market can be found just like any other Special Location, except it requires a 6 to find. However, since these are most likely smuggled gems, the authorities will be on the look out for them. At the beginning of each day the Warrior spends in a Settlement they have tried to sell the jewels in, roll 1D6. If the number is in the range listed below, he has been caught trying to pawn off the jewels, and is arrested. If the Warrior is arrested, he is put in jail, where he spends the next week. During this time he may do nothing else except eat and sleep, but his meals are provided for him by the guards, so he does not have to pay living expenses. The gems are confiscated (naturally), and the Warrior must pay a 2D6 x 100 Gold fine."
        },
        {
          "event_n_haz_id" : 73,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "EYE PATCH",
          "event_n_haz_roll" : 73,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "A Warrior finds a small black patch on the ground. Stitched on the back is a name - Peg Leg Pete. This is an eye patch, which may be worn by the Warrior. If the Warrior already has an eye patch, give it to another Warrior. (Unless he wants to wear two, which is a bit foolish!) While wearing the eye patch, the Warrior looks like a tough hardy adventurer and may add +1 when rolling on the Alehouse Event Table. If he ever encounters anyone called Peg Leg Pete, he must give the eye patch back immediately."
        },
        {
          "event_n_haz_id" : 74,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "STARVATION",
          "event_n_haz_roll" : 74,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "In the excitement of the adventure, a random Warrior has forgotten to eat! He must immediately eat one provision even if his Wounds are at maximum, or lose 2 Wounds with no modifiers."
        },
        {
          "event_n_haz_id" : 75,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "BAD LUCK",
          "event_n_haz_roll" : 75,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "The Warriors must be cursed! Roll 1D6 to see what mishap befalls them:"
        },
        {
          "event_n_haz_id" : 76,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "SPELL LESSONS",
          "event_n_haz_roll" : 76,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "The Warriors seem to be the target of a Wizards spell lessons. Roll 1D3 for the number of spells cast on the unfortunate Warriors, and then randomly determine which ones are cast, and on whom. Although they try, the Warriors cannot locate the Wizard who cast them."
        },
        {
          "event_n_haz_id" : 77,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "NOTHING HAPPENS",
          "event_n_haz_roll" : 77,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "No Dungeon Event happens."
        },
        {
          "event_n_haz_id" : 78,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "EARTHQUAKE",
          "event_n_haz_roll" : 78,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "The ground beneath the Warriors suddenly shakes violently, and rubble falls from the walls. It must be an earthquake! To simulate the earthquake, take 2D6 square counters from the Warhammer Quest box. Throw them above the board. When they land, line them up to the nearest square. These are parts of the dungeon walls and ceilings which have collapsed. If any land on top of a Warrior then he loses (1D6 + Battle Level) Wounds. A Warriors may dig his way through, by standing next to a piece of rubble, rolling 1D6 and adding his Strength. When the result reaches 30 or more, remove the piece of rubble."
        },
        {
          "event_n_haz_id" : 79,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "POWER SURGE",
          "event_n_haz_roll" : 79,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "With a deafening boom, a loud pulsating humming sound echoes around the dungeon. Any spellcasters in the party can sense great power in the room. For the next 1D3 turns, add +1D6 to the Power Dice roll. An unexpected event still happens on a roll of a 1 though."
        },
        {
          "event_n_haz_id" : 80,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "STREAM",
          "event_n_haz_roll" : 80,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "A trickling underground stream runs through this room. If the Warriors wish to drink from it, roll 1D6:"
        },
        {
          "event_n_haz_id" : 81,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "IDOL",
          "event_n_haz_roll" : 81,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "On a small altar sits a gold idol. Each Warrior may pray to the idol once, before it animates itself and strolls off down the corridor. Roll 1D6 for each Warrior praying:"
        },
        {
          "event_n_haz_id" : 82,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "MEDICAL SUPPLIES",
          "event_n_haz_roll" : 82,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "In a cupboard, the Warriors find a small white box with a red cross on the lid. If they open it roll 1D6:"
        },
        {
          "event_n_haz_id" : 83,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "SKELETAL REMAINS",
          "event_n_haz_roll" : 83,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "Lying on the floor of this room is a pile of bones, the remains of long dead warriors. One of the Warriors thinks he sees a glittering object in the midst of the bodies. If anyone wishes to reach for it, roll 1D6:"
        },
        {
          "event_n_haz_id" : 84,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "SPIDER WEBS",
          "event_n_haz_roll" : 84,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "This room is overgrown with spider webs. They are everywhere! In the corner, on the ceiling, across the floor. Everywhere the Warriors step there are spider webs. At the end of each turn the Warriors spend in this room, roll 1D6:"
        },
        {
          "event_n_haz_id" : 85,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "ALARM",
          "event_n_haz_roll" : 85,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "Somehow, the careless Warriors have set off an alarm. Until the end of the Adventure, if an event is an actual Event, then when it has been completed, roll on the Monster Table as well. This represents the Monsters lying in wait for the Warriors."
        },
        {
          "event_n_haz_id" : 86,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "MESSENGER",
          "event_n_haz_roll" : 86,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "The Warriors are greeted by a messenger. Roll 1D6 for his message:"
        },
        {
          "event_n_haz_id" : 87,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "FISH",
          "event_n_haz_roll" : 87,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "For some strange reason, fish seem to be falling through the ceiling! All manner of strange and exotic fish from The Great Ocean rain down on the hapless Warriors, who just stand there looking befuddled. Roll 1D6 for each Warrior. This is the amount of fish they can take with them as provisions."
        },
        {
          "event_n_haz_id" : 88,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "NOTHING HAPPENS",
          "event_n_haz_roll" : 88,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "No Dungeon Event happens."
        },
        {
          "event_n_haz_id" : 89,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "WHISPERS",
          "event_n_haz_roll" : 89,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "The Warriors think they hear whispering coming from the other side of the wall. If they decide to investigate each Warrior may make one roll on the Hidden Passage Table in White Dwarf 185 or 189 to see if they can discover a secret door. If they find the door and go through, roll 1D6 to see what is on the other side:"
        },
        {
          "event_n_haz_id" : 90,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "NOTHING HAPPENS",
          "event_n_haz_roll" : 90,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "No Dungeon Event happens."
        },
        {
          "event_n_haz_id" : 91,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "HYSTERICS",
          "event_n_haz_roll" : 91,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "A random Warrior suddenly breaks out in hysterics, collapsing on the ground and whimpering softly to himself. Bemused, the other Warriors try to console him, gradually bringing things under control again. For the rest of the dungeon, the affected Warrior must pass a Willpower test at the beginning of each turn or he will be unable to do anything that turn except move. Monsters can hit him automatically, and get +2 To Hit."
        },
        {
          "event_n_haz_id" : 92,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "SONG",
          "event_n_haz_roll" : 92,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "A soft song comes drifting through the dungeon, making the Warriors stop in their tracks. When the song finishes, each Warrior has been affected by a spell of Courage. From now until the end of the adventure, the Warriors are unaffected by Fear or Terror."
        },
        {
          "event_n_haz_id" : 93,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "LOST KINGDOM",
          "event_n_haz_roll" : 93,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "This dungeon is so huge that it has taken the Warriors beneath the ocean to the Lost Kingdoms! When they exit the dungeon, the Warriors are now in the Lost Kingdoms. From now on they must roll on the appropriate Lost Kingdom Tables. To return to the Old World, the Warriors must travel to a Seaport and find a Captain who is willing to take them back across the ocean. If the Lost Kingdom Tables are unavailable, treat this as Nothing Happens."
        },
        {
          "event_n_haz_id" : 94,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "MIRROR",
          "event_n_haz_roll" : 94,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "The wall of this dungeon section has a large mirror on it. The warriors approach and look at their ragged selves. Suddenly the mirror glows yellow, and starts to spew out a strange yellow substance. Choose 1D3 Warrior counters at random. If any of them belong to a spellcaster, then he feels suddenly very experienced in the ways of magic. The yellow substance is actually liquid spells! The Warrior gains 1 Spell at random from the appropriate spell deck. The mirror then shatters."
        },
        {
          "event_n_haz_id" : 95,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "SLIME",
          "event_n_haz_roll" : 95,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "From the roof drops a green gelatinous blob directly in front of each Warrior. They are Green Slimes. Their profiles are as follows: Wounds  4, Move 4, Weapon Skill 1, Strength 1, Toughness 1, Attacks 1, Gold(each) 15, Damage 1D6.  They have the Ambush Special ability. The Green Slimes can split apart, duplicating themselves. At the end of every turn, each Green Slime remaining on the board splits into a further 1D3 Green Slime. Place these around the Green Slime if there is enough room, otherwise place them in the nearest adjacent square. Once the board section fills up with Green Slime they can not duplicate themselves any more until there is more space again."
        },
        {
          "event_n_haz_id" : 96,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "NOTHING HAPPENS",
          "event_n_haz_roll" : 96,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "No Dungeon Event happens."
        },
        {
          "event_n_haz_id" : 165,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "WAKE UP",
          "event_n_haz_roll" : 65,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "One of the group members awakes with a start from their deep slumber.  Roll 1D6 to see why:"
        },
        {
          "event_n_haz_id" : 97,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "WISE MAN",
          "event_n_haz_roll" : 97,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "The Warriors meet up with an old man who claims he has the knowledge of a thousand libraries stored in his brain. He recites such proverbs as \"If you are injured, then the enemy has struck you\", and \"He who wields the larger axe must possess the biggest weapon of all\". Quite! When the Warriors get overwhelmed by all the knowledge he spurts, they may tell him to go away."
        },
        {
          "event_n_haz_id" : 98,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "TREASURE HORDE",
          "event_n_haz_roll" : 98,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "The Warriors discover a huge treasure horde! For each Warrior who takes a piece of Treasure roll 1D6 on following table:"
        },
        {
          "event_n_haz_id" : 99,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "NOTHING HAPPENS",
          "event_n_haz_roll" : 99,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "No Dungeon Event happens."
        },
        {
          "event_n_haz_id" : 100,
          "event_n_haz_type" : "dungeon event",
          "event_n_haz_name" : "TIME RIP",
          "event_n_haz_roll" : 100,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "Due to a rip in the space-time continuum, time seems to go faster for the Warriors. From now until the end of the dungeon (when the Time-Rip has mended itself), if a 6 is rolled in the Power Phase the Warriors may take double turns. After the first Warriors Phase, they can take another one immediately. Fortunately for the Warriors, the Monsters still only get one turn."
        },
        {
          "event_n_haz_id" : 101,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "UNEVENTFUL WEEK",
          "event_n_haz_roll" : 1,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "UNEVENTFUL WEEK"
        },
        {
          "event_n_haz_id" : 102,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "CAVE",
          "event_n_haz_roll" : 2,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "The Warriors discover a small cave leading into the earth.  If they investigate, roll 1D6:"
        },
        {
          "event_n_haz_id" : 103,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "AMBUSH",
          "event_n_haz_roll" : 3,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "While journeying through the forests, goblin spider riders ambush the party by their hundreds.  Roll 1D6 for each Warrior:"
        },
        {
          "event_n_haz_id" : 104,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "GIANTS",
          "event_n_haz_roll" : 4,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "An earthquake has left this area forsaken and desecrated, providing a perfect breeding ground for monsters.  The Warriors can either add 1 week of travel to avoid this place, or travel through.  On travelling through, roll 1D6.  A 1 or 2 means the Warriors are set upon by hungry Giants.  The warriors lose a random piece of treasure or equpment and have also been chased 1 week of travel from where they were."
        },
        {
          "event_n_haz_id" : 105,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "TENTACLES",
          "event_n_haz_roll" : 5,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "As the Warriors wade through marsh waters, swamp tentacles make a grab for a Warrior’s leg.  (Draw a character counter).  Roll 1D6.  A 1 means a tentacle managed to hold the Warrior, squeezing his leg horribly. For the next adventure that Warrior is –1 move unless he pays 500 gold at the temple to get his leg healed."
        },
        {
          "event_n_haz_id" : 106,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "CARAVANS",
          "event_n_haz_roll" : 6,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "The Warriors intercept a group of Caravans, who happen to be travelling to the same destination as the Warriors.  Roll 1D6:"
        },
        {
          "event_n_haz_id" : 107,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "GOOD WEATHER",
          "event_n_haz_roll" : 7,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "The weather is surprisingly warm for this time of year.  The Warriors can deduct 1 week from their travel plans, due to making good time."
        },
        {
          "event_n_haz_id" : 108,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "LOCUST SWARM",
          "event_n_haz_roll" : 8,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "A locust swarm engulfs the Warriors as they progress onwards.  Roll 1D6.  If a number is rolled that is greater than the members in the party, then the locusts are so thick that travel is slowed and all sense of direction is lost.  Add a week to travel time."
        },
        {
          "event_n_haz_id" : 109,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "ORC CAMP",
          "event_n_haz_roll" : 9,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "The party has stumbled into a orc battle camp.  Thousands upon thousands of camp fires can be seen in the valley below.  Roll 1D6.  A 1 means a scouting party of orcs notices the Warriors, alerting the whole army.  Roll another 1D6.  Another 1 means the party is forced to give up all their gold, and magic items, or be killed.  Each Warrior can make up his own decision.  What ever happens, the orcs soon forget about the Warriors as a call to battle goes up."
        },
        {
          "event_n_haz_id" : 110,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "DWARF PROSPECTOR",
          "event_n_haz_roll" : 10,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "Lying by the side of the road is a wounded Dwarf prospector.  He gingerly hands the Warriors a large key, which he groans is the key to the Portcullis.  If the Warriors already have the key, then he gets up, says, “Oh, sorry about that.”, and wanders off into the woods, healthy as can be.  One doesn’t wonder if there is a whole tribe of dying dwarf prospectors out there......."
        },
        {
          "event_n_haz_id" : 111,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "UNEVENTFUL WEEK",
          "event_n_haz_roll" : 11,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "UNEVENTFUL WEEK"
        },
        {
          "event_n_haz_id" : 112,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "HERBS",
          "event_n_haz_roll" : 12,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "The Warriors encounter a patch of strange herbs.  The Elf recognizes them as special healing herbs, and manages to collect 1D6 flowers before an irate farmer chases everyone away complaining about trespassing or something.  Each herb heals 3 Wounds.  If no Warrior is an Elf, then the herbs mean nothing to them, and they leave them alone."
        },
        {
          "event_n_haz_id" : 113,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "CHAOS MAGIC",
          "event_n_haz_roll" : 13,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "The Wizard senses chaos magic just as a sheet of black lightning covers the sky.  Roll 1D6:"
        },
        {
          "event_n_haz_id" : 114,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "VILLAGE",
          "event_n_haz_roll" : 14,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "The Warriors arrive at an uncharted village.  They may enter now and finish their journey.  Or continue through the village, adding 1 week to the travel time."
        },
        {
          "event_n_haz_id" : 115,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "LOST",
          "event_n_haz_roll" : 15,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "Somehow, the Warriors have become lost.  They find themselves back at the dungeon entrance they came from.  The Warriors must choose a destination again, and reroll for hazard rolls as usual."
        },
        {
          "event_n_haz_id" : 116,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "TRADERS",
          "event_n_haz_roll" : 16,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "Shifty eyed traders approach the Warriors, saying that they have a weapon of great power for sale, in this box.  A Warrior may buy the box and its contents for 200 gold, and roll on the table below:"
        },
        {
          "event_n_haz_id" : 117,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "COTTAGE",
          "event_n_haz_roll" : 17,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "The Warriors come across an empty thatched cottage.  It is a perfect place for healing Wounds and resting.   For every week added to the journey, the Warriors may heal any one affliction such as a broken leg or poisoning."
        },
        {
          "event_n_haz_id" : 118,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "JEWELLED TOTEM",
          "event_n_haz_roll" : 18,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "A large totem of Gold, obviously a statue to some chaos god, stands before the Warriors.  If any warrior has a rope, or the Wizard has the Levitate spell, then the jewel eyes of the statue can be taken.  Roll 1D6 + STR for the Warrior trying to get the gems.  If the total is over 7, both gemstone eyes are plucked from their sockets.  Each one is worth 500 gold, and can be traded into a shop keeper for 500 gold pieces worth of goods.  (Or 1000 is both are traded)  A character on a rope takes one from his roll to pluck the eyes.  Only one attempt can be made, as a group of worshipers can be seen over the hill, charging frantically toward the Warriors, who leave in a hurry, with gems or no."
        },
        {
          "event_n_haz_id" : 119,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "PATH",
          "event_n_haz_roll" : 19,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "A thin path is discovered hidden by undergrowth in the forest.  If the Warriors take it, roll 1D6:"
        },
        {
          "event_n_haz_id" : 120,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "CITY",
          "event_n_haz_roll" : 20,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "At the top of this hill, the Warriors gasp to see a mighty city below in the valley, glistening with newness.  The Warriors must have an old map, as this majestic city was not on it.  If the Warriors wish, they can stop here, or continue, adding 1 week to the travel time.  The city is a major new development here, and thus all items are in stock, albeit 50 gold more expensive.  (Including bandages and the like)"
        },
        {
          "event_n_haz_id" : 121,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "SWAMP",
          "event_n_haz_roll" : 21,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "The toxic fumes from the swamp the Warriors are currently travelling in are too much for one random Warrior.  He immediately takes 1D6 Wounds, and must pay 100 gold at the next settlement in order to be cured from the nausea."
        },
        {
          "event_n_haz_id" : 122,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "UNEVENTFUL WEEK",
          "event_n_haz_roll" : 22,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "UNEVENTFUL WEEK"
        },
        {
          "event_n_haz_id" : 166,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "MAGICIAN",
          "event_n_haz_roll" : 66,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "A travelling magician hails the Warriors.  He offers goods for sale from his magic bag.  Each Warrior may take one treasure card and pay the price it is worth if they wish.  Then the magician wanders off to find more business.  If they do not pay, they must discard the treasure card."
        },
        {
          "event_n_haz_id" : 123,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "GREATER DAEMON",
          "event_n_haz_roll" : 23,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "A gathering of royal soldiers are in the area.  One addresses the Warriors, saying this area is too dangerous, what with a Greater Daemon on the loose, somewhere in the forests.  The Warriors can ignore the warning and continue in their direction, or about face and take the long way round, adding 2 weeks to travel time.  If they continue, roll 1D6.  A 1 means the soldiers were correct.  A Greater Daemon of Tzeentch, a Lord of Change descends upon the Terrified Warriors.  Fight a battle with it, using a dungeon room board as the battle field.  Since Daemons aren't used to bright sun light.  He only has 3 attacks, and his hit rolls are at -1.  Should be easy pickings........  Well, the Warriors were the ones foolish enough to continue."
        },
        {
          "event_n_haz_id" : 124,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "WARRIOR TRIPS",
          "event_n_haz_roll" : 24,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "A random Warrior trips on a tree truck, spraining his ankle.  The other Warriors must carry him, adding 1 week to travel time, or put him in a cart.  Healing magic has no effect on re-knitting bones.  Only the trained doctors at settlements have the skill.  Pay 50 gold once the Warriors reach the settlement.  If somehow they don’t get there, the Warrior is at -1 to hit, and -1 to his Attacks.  If this means he has no attacks, then so be it."
        },
        {
          "event_n_haz_id" : 125,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "CHAPEL",
          "event_n_haz_roll" : 25,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "The Warriors come across a small chapel in the clearing.  Any Warrior who pays 20 gold can pray to their gods.  Roll 1D6:"
        },
        {
          "event_n_haz_id" : 126,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "TALISMAN",
          "event_n_haz_roll" : 26,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "The Warriors discover a triangular talisman lying on the roadside, covered in mud.  If anyone wishes to take it roll 1D6:"
        },
        {
          "event_n_haz_id" : 127,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "BERSERKER",
          "event_n_haz_roll" : 27,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "A huge maddened berserker charges from over the hill towards the Warriors.  Roll 1D6.  A roll of 1 means the berserker has frightened the Warriors, and he charges into their ranks causing havoc.  Roll 1D6 for each Warrior.  Any other number, and the berserker is easily dispatched, earning each Warrior 20 gold."
        },
        {
          "event_n_haz_id" : 128,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "POTIONS",
          "event_n_haz_roll" : 28,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "Hidden deep amongst the trees, is a small hut.  Inside, a dark, little old lady resides.  The Warriors find she is selling potions.  Each potion costs 1D6*10 gold pieces.  Any Warriors who wishes can purchase a potion and roll on the following table:  Note that the Warriors can buy as many potions as they can afford, and keep them for a later use if they want."
        },
        {
          "event_n_haz_id" : 129,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "OGRES",
          "event_n_haz_roll" : 29,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "The Warriors have come across an ogre feeding ground.  Fortunately, no ogres are here at the moment.  Warriors can search for treasure here.  Roll on the table below: (Only 1 roll is required for all the Warriors)"
        },
        {
          "event_n_haz_id" : 130,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "SERPENT PILLARS",
          "event_n_haz_roll" : 30,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "Standing before the Warriors are two huge pillars, each engraved with a huge serpent.  A mystical aura seems to emanate from them. The Serpent Pillars seem to be the remains of a long lost civilisation.  The Warriors can pass through the Pillars if they like, or avoid them, in which case nothing else happens.  Roll 1D6:"
        },
        {
          "event_n_haz_id" : 131,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "MESSENGER",
          "event_n_haz_roll" : 31,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "An elf runner greets the Warriors.  He is puffed out, and warns the Warriors of an impending attack from Chaos hoards.  The Warriors must take this message to their next destination. If they are involved in a battle (of any kind) before they reach the next city, the message is forgotten. Upon their arrival, roll 1D6. A roll of 1 or 2 means the Chaos creatures have destroyed the settlement, and the Warriors must go straight into their next quest.  (It’s probably safer inside than out in the Wilderness with vicious hoards of demons.) If no battle ensues, the Warriors take the warning to their destination. On arrival, each Warrior is granted 400 gold pieces, for warning the city of the attack.  The elf then salutes and runs into the forest, taking his message to other cities."
        },
        {
          "event_n_haz_id" : 132,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "FIRE",
          "event_n_haz_roll" : 32,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "Further passage onwards is blocked by a raging fire that spews from the trees.  If the Wizard has Freeze as a spell, he can put out enough fires to earn him a reward of 1D6*100 gold, and the Warriors can travel through.  Otherwise, they must make a detour of 2 weeks.  (It’s a large forest!)"
        },
        {
          "event_n_haz_id" : 133,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "UNEVENTFUL WEEK",
          "event_n_haz_roll" : 33,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "UNEVENTFUL WEEK"
        },
        {
          "event_n_haz_id" : 134,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "BANDITS",
          "event_n_haz_roll" : 34,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "As the Warriors reach the outskirts of a small settlement, they are set upon by bandits demanding gold.  While they outnumber the Warriors, they are extremely wary of their superior arms and armour.  Each Warrior can pay 1D6*20 gold to the bandits or fight them.  If fighting is the option, roll 1D6 for each Warrior in the battle (Who didn’t pay the bandits) and add them together.  This is the total number of bandits that the Warriors manage to kill.  Now roll 4D6 and add the scores.  This is the amount of bandits originally standing.  If this score is higher, then any remaining bandits each take 1D6*10 gold from each Warrior in the fight and run away.  If the number is lower, then obviously all bandits have been killed, and each Warrior in the battle earns 1D6*20 gold for themselves."
        },
        {
          "event_n_haz_id" : 135,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "NIGHT",
          "event_n_haz_roll" : 35,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "In the darkness of the night, many yellow eyes watch from dark holes in the forest.  Roll 1D6:"
        },
        {
          "event_n_haz_id" : 136,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "WATER HOLE",
          "event_n_haz_roll" : 36,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "The Warriors arrive at a large water hole, where strange beasts are feeding.  Each Warrior can bathe in the pool and gain 2D6 Wounds.  Each Warrior can only bathe once, before the animals become very territorial and scare the Warriors away."
        },
        {
          "event_n_haz_id" : 137,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "SKAVEN DOOM BELL",
          "event_n_haz_roll" : 37,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "Carefully, the Warriors peer over the top of the hill into the valley, wary of the hammering and squeaking going on.  The Warriors have found a Skaven Doom Bell construction site.  The Warriors can ignore the bell, and go about their journey, adding 1 week for the detour, or destroy the bell before it is completed.  If they destroy the bell, each Warrior takes 3D6 Wounds due to Skaven attacks, but gains 1D6*100 gold for their valiant deed."
        },
        {
          "event_n_haz_id" : 138,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "UNEVENTFUL WEEK",
          "event_n_haz_roll" : 38,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "UNEVENTFUL WEEK"
        },
        {
          "event_n_haz_id" : 139,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "GRAVEYARD",
          "event_n_haz_roll" : 39,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "The Warriors enter what appears to be a monster graveyard.  Many monsters and their skeletons litter the ground by their hundreds.  Each player roll 1D6.  A roll of 1 means a huge Emperor Dragon flies down to the sight to feed, scaring the Warriors off, and forcing them 2 weeks from their previous destination.  If no 1 is rolled, a random Warrior locates treasure.  Roll on the treasure Table as usual to discover what is found."
        },
        {
          "event_n_haz_id" : 140,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "NO MAGIC ZONE",
          "event_n_haz_roll" : 40,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "The Wizard stops the Warriors from going any further.  He declares that this is a no Magic Zone, where so many Chaos spells have been cast, that all magical energy has been drained and can not be replaced.  If the Warriors enter the area, the Wizard can not cast any spells until the beginning of the next adventure.  He may not train or learn any spells, recharge his power or staff, or do any other thing requiring magic.  The Warriors can enter happily if no Wizard is in the group.  Otherwise, a detour of 1 week must be added."
        },
        {
          "event_n_haz_id" : 141,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "CLIFF",
          "event_n_haz_roll" : 41,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "A huge cliff prevents the Warriors from travelling further onwards.  They can go to their next adventure, or add 1D3 weeks of travel to their plans."
        },
        {
          "event_n_haz_id" : 218,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "BEGGAR",
          "event_n_haz_roll" : 18,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "A leprous old beggar asks your Warrior for a gold coin. If your Warrior gives him one, roll 1D6:"
        },
        {
          "event_n_haz_id" : 142,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "DRAGONS",
          "event_n_haz_roll" : 42,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "The Warriors are stopped in their tracks by a stampede of wild animals charging towards them.  A gnome, who is running also, warns of an epic dragon raid, of dozens of dragons razing the country side.  Roll 1D6.  A roll of 1 means that a couple of dragons assail the Warriors, trying to burn them to cinders.  Each Warrior must roll 1D6 + Initiative and get over 7, or he suffers 6D6 Wounds.  A Wizard could cast Chain Lightning if he has it to prevent any damage from occurring, and thus scaring the dragons away."
        },
        {
          "event_n_haz_id" : 143,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "SNOTLINGS",
          "event_n_haz_roll" : 43,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "From out of the bush, snotling warriors assault the Warriors, yelling mighty battle cries.  Set up a battle with 2D6 Snotlings, using a dungeon board section.  Gain treasure as usual from the monsters."
        },
        {
          "event_n_haz_id" : 144,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "TRAVELLER",
          "event_n_haz_roll" : 44,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "A lone traveller greets the Warriors.  Roll 1D6 to determine his actions:"
        },
        {
          "event_n_haz_id" : 145,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "TUNNEL",
          "event_n_haz_roll" : 45,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "The Warriors discover a hidden tunnel in the hillside.  They can use it to go to the next adventure instantly if they wish.  Since no monsters know they are coming, the first event card that states monsters attack can be ignored, as the monsters have had no time to prepare for the Warrior’s coming."
        },
        {
          "event_n_haz_id" : 146,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "ROPE TRAP",
          "event_n_haz_roll" : 46,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "As the Warriors walk down the forest path, roll 1D6 for each Warrior.  The lowest score steps in a rope circle on the ground and activates a rope trap.  The Warrior is hanging upside down as tiny arrows assail the Warriors.  Chaos Sprites have sprung their trap!  Each Warrior rolls 2D6 for the number of arrows fired at him.  Then he rolls 2D6 for the number he has dodged.  If he does not dodge them all, each arrow does 1 Wound.  The Warrior hanging upside down only rolls 1D6 for dodging.  The Elf Warrior adds 3 to the amount he dodges."
        },
        {
          "event_n_haz_id" : 147,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "TRAINING GROUND",
          "event_n_haz_roll" : 47,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "A rough training ground has been set up here in the wilderness.  But only being operated by second rate trainers, only new skills may be learnt.  For every 1000 gold pieces a Warrior pays, he can roll on the Skill chart to learn a new skill.  Battle Levels can not be increased here."
        },
        {
          "event_n_haz_id" : 148,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "ROVERS",
          "event_n_haz_roll" : 48,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "A group of rough and ready Rovers gallop up to the Warriors on horses.  If the Warriors have any horse, mules, carts or warhorses, the Rovers will buy them off the Warriors for double the original price.  Or the Warriors can buy horses, mules, and carts off the Rovers for half price."
        },
        {
          "event_n_haz_id" : 149,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "MINSTREL",
          "event_n_haz_roll" : 49,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "A travelling minstrel offers to join the Warriors.  Whatever they say, he joins them anyway.  Upon reaching a settlement the minstrel decides to start playing:"
        },
        {
          "event_n_haz_id" : 150,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "CREEK",
          "event_n_haz_roll" : 50,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "A recent flood has created a creek flowing through this part of the valley.  Each player may take a water bottle full of water, which will heal 1D6 Wounds when drunken.  Warriors can drink here to heal 1D6 Wounds also, but must add 1 week to the travel time for each dice rolled."
        },
        {
          "event_n_haz_id" : 151,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "TEMPLE",
          "event_n_haz_roll" : 51,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "A tall temple stands erect before the Warriors.  If the Warriors enter, roll 1D6:"
        },
        {
          "event_n_haz_id" : 152,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "ATTACKED WAGON",
          "event_n_haz_roll" : 52,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "Sitting in the middle of the road is a wrecked wagon.  A wounded man calls the Warriors over and says that a bunch of (1-Goblins, 2-Skaven, 3-Orcs, 4-Dark Elves, 5-Chaos Warriors, 6-Beastmen) attacked his wagon and destroyed every one except him.  A random Warrior takes some of the pain off of the man’s shoulders and says he will vow to destroy any of that monster that he comes across.  For now until the end of the next adventure, that Warrior Hates that type of beast, gaining an extra attack against them, but subtracting 1 from his To Hit rolls."
        },
        {
          "event_n_haz_id" : 153,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "FIRE",
          "event_n_haz_roll" : 53,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "Waking during the middle of the night, the Warriors find that a fire is raging throughout the camp site, incinerating much forestry.  Roll 1D6 for each Warrior:"
        },
        {
          "event_n_haz_id" : 154,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "SALESMAN",
          "event_n_haz_roll" : 54,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "A travelling salesman spots the Warriors before they can get away.  He capers from side to side, playing a tune on his flute happily.  If the Warriors wish, they can buy objects from him.  Each Warrior can buy one of each and up to six trinkets.   For every item purchased, roll 1D6.  A 1 means the item was shoddy and useless.  The Warrior has been conned and must discard it.  These are his wares:"
        },
        {
          "event_n_haz_id" : 155,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "PLAGUE",
          "event_n_haz_roll" : 55,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "The Warriors come across a tiny hamlet in the grips of a deadly plague.  If the Warriors decide to stay, they can offer their aid.  For every healing potion given, and every healing spell cast, the Warriors are given 1D6*20 gold to divide amongst themselves.  After they have done all they can, roll 1D6 for each Warrior.  A roll of 1-2 means they have got the plague.  They are at -1 Toughness and -1 Strength for the next dungeon.  The Warriors then wave goodbye, and continue their journey.  If they don’t stay and help the village, then they must add 4 weeks of travel time to avoid the range of the plague."
        },
        {
          "event_n_haz_id" : 156,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "TORNADO",
          "event_n_haz_roll" : 56,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "A tornado crashes down upon the unsuspecting Warriors as they try to find cover from the storm.  Roll 1D6 for each Warrior, the lowest having been caught up by the tornado’s grasp.  What ever the lowest number was, use the following table to determine what happens:"
        },
        {
          "event_n_haz_id" : 157,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "SOLDIERS",
          "event_n_haz_roll" : 57,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "Marching solemnly towards the Warriors is a procession of soldiers, with a chained criminal behind them.  The Warriors can ignore the party, or try and help free the prisoner.  Roll 1D6:"
        },
        {
          "event_n_haz_id" : 158,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "SMALL VILLAGE",
          "event_n_haz_roll" : 58,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "The Warriors come across a small village trying to rebuild after damages done by the recent rain storm.  If the Warriors stay, the villagers will pay each one 20 gold pieces for each week they stay here.  This means adding those extra weeks to the journey."
        },
        {
          "event_n_haz_id" : 159,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "UNEVENTFUL WEEK",
          "event_n_haz_roll" : 59,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "UNEVENTFUL WEEK"
        },
        {
          "event_n_haz_id" : 160,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "POISON SPEAR",
          "event_n_haz_roll" : 60,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "Suddenly, a spear shoots out from the trees, striking the Warrior with the lowest dice roll on a 1D6.  The culprit sees he has hit his prey, and charges into the forest, laughing madly.  The Warrior who was hit has been poisoned.  From now on, his Toughness is at -2, until he is healed at a city for 500 gold pieces.  The poison can not be identified by anyone, and can not be healed by magic."
        },
        {
          "event_n_haz_id" : 161,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "WANDERING MONSTERS",
          "event_n_haz_roll" : 61,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "In the darkness of the night, a group of wandering monsters assault the Warriors.  Roll for Monsters on the appropriate Table, and have a battle.  Use a dungeon board as the battle site."
        },
        {
          "event_n_haz_id" : 162,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "STATUE",
          "event_n_haz_roll" : 62,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "A large golden statue stands before the Warriors, a monument to some Chaos god, no wonder.  Roll 1D6:"
        },
        {
          "event_n_haz_id" : 163,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "BANDIT",
          "event_n_haz_roll" : 63,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "A bandit dressed in bright coloured clothing leaps from the forest.  He says he gives money to the needy, and takes from the rich and selfish.  If each Warrior has less than 200 gold pieces, the bandit hands over a bag full of 1D6*20 gold pieces.  If a Warrior has equal to or higher than this value, then the bandit grabs the Warrior’s gold pouch, takes 200 gold pieces, gives him the pouch back, and runs into the forest.  (After dealing with all the Warriors first, of course)"
        },
        {
          "event_n_haz_id" : 164,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "UNEVENTFUL WEEK",
          "event_n_haz_roll" : 64,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "UNEVENTFUL WEEK"
        },
        {
          "event_n_haz_id" : 167,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "HARPIES",
          "event_n_haz_roll" : 67,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "Swooping from the skies comes a band of harpies, intent of ripping the Warriors limb from limb.  Roll 1D6 for each Warrior.  The Warrior with the highest score is ripped savagely, having 3D6 Wounds caused, taking armour and toughness into account.  The next highest score is attacked for 2D6.  The next is attacked for 1D6, and the lowest score is a miss.  The harpies then make for the distant mountains."
        },
        {
          "event_n_haz_id" : 168,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "UNEVENTFUL WEEK",
          "event_n_haz_roll" : 68,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "UNEVENTFUL WEEK"
        },
        {
          "event_n_haz_id" : 169,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "CIRCUS",
          "event_n_haz_roll" : 69,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "A travelling circus attracts the Warrior's attention.  Roll 1D6:"
        },
        {
          "event_n_haz_id" : 170,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "SNOW STORM",
          "event_n_haz_roll" : 70,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "A snow storm begins and lasts all week.  Warriors can give up their journey and stop now at the closest village, or add 4 weeks travel to their total in order to push their way forward to their original destination.  If the second option is chosen, roll 1D6.  A roll of 1 means the Warriors become hopelessly lost and end up back at the entrance to the dungeon they just left, and they must start the journey again."
        },
        {
          "event_n_haz_id" : 171,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "WIZARD'S TOWER",
          "event_n_haz_roll" : 71,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "Over the hill, a huge and forbidding wizard's tower stand proud.  Roll 1D6:"
        },
        {
          "event_n_haz_id" : 172,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "ORCS",
          "event_n_haz_roll" : 72,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "A band of orcs and their leading shaman ambush the Warriors.  Roll 1D6 for the number of orcs involved in the battle.  Use a dungeon board for the battle site."
        },
        {
          "event_n_haz_id" : 173,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "TEMPLE",
          "event_n_haz_roll" : 73,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "A temple devoted to Nurgle, sits like a huge wart in the country side, festering all plant life around its base.  Each Warrior roll 1D6:"
        },
        {
          "event_n_haz_id" : 174,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "NIGHT",
          "event_n_haz_roll" : 74,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "The night is bright and contains a full moon in the sky.  Roll 1D6."
        },
        {
          "event_n_haz_id" : 175,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "TREACHEROUS PATH",
          "event_n_haz_roll" : 75,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "The path ahead is treacherous and dangerous.  Roll 1D6.  A roll of 1 means that the party has fallen in a huge pile, losing 1D6*10 gold pieces from their pouches, or one item of treasure.  Any other roll, and the party manages to keep their footing."
        },
        {
          "event_n_haz_id" : 176,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "UNEVENTFUL WEEK",
          "event_n_haz_roll" : 76,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "UNEVENTFUL WEEK"
        },
        {
          "event_n_haz_id" : 177,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "SKAVEN NIGHT RUNNER",
          "event_n_haz_roll" : 77,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "A Skaven Night Runner bumps into the Warriors as he races to tell his master a message.  The Warriors kill him now, and he can not tell his message.  The next monster card drawn can be ignored. "
        },
        {
          "event_n_haz_id" : 178,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "TREASURE",
          "event_n_haz_roll" : 78,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "Simply lying on the side of the road is a magic treasure.  A lure? A trap?  If the Warriors decide to take the treasure, roll 1D6:"
        },
        {
          "event_n_haz_id" : 179,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "LEECHES",
          "event_n_haz_roll" : 79,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "Waking in the middle of the night, a random Warrior cringes to find he is covered in small black leeches.  Roll 2D6 for the leeches, and 2D6 for the Warrior.  Subtract the lowest number from the highest number.  This is the number of leeches killed, or the number of Wounds the Warrior receives.   Now roll 2D6 again for the leeches.  Subtract the number killed (if any).  If the result is zero or less, all the leeches have been disposed of.  If there are still some leeches, roll 2D6 for the Warrior.  Again, subtract the lowest from the highest.  Then begin the process again, until the Warrior has been drained dry, or all the leeches have been removed."
        },
        {
          "event_n_haz_id" : 180,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "DROUGHT",
          "event_n_haz_roll" : 80,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "A drought strikes the land in which the Warriors walk.  Unless each Warrior has a drinking source, then he loses 1D6 Wounds.  Each warrior must discard their source after use."
        },
        {
          "event_n_haz_id" : 181,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "WAVE OF MAGIC",
          "event_n_haz_roll" : 81,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "A wave of magic passes over the Warriors, and everything in the immediate vicinity.  The next time the Warriors fight a battle, they need to roll the opposite of all dice rolls.  (Example:  If a Warrior needs a 4+ to hit, he now needs 3 or less to hit.)"
        },
        {
          "event_n_haz_id" : 182,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "GOLD PIECES",
          "event_n_haz_roll" : 82,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "Lucky find!  A random Warrior finds a pouch of 1D6*100 gold pieces."
        },
        {
          "event_n_haz_id" : 183,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "DREAM",
          "event_n_haz_roll" : 83,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "A random Warrior's dreams cause him distress during the night.  He awakes to find himself covered in perspiration, and with a great headache.  For the reminder of his career, his nights are plagued by dreams of chaos creatures, as they feed on him.  Unless he visits a doctor at a city, and pays 500 gold pieces to be cured, he will be at -1 attacks for the rest of his life, even if this brings him to no attacks.  He can cast spells freely."
        },
        {
          "event_n_haz_id" : 184,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "DRYADS",
          "event_n_haz_roll" : 84,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "Flittering out of the trees, comes a band of water dryads.  In exchange for a magic item of treasure from each Warrior, the dryads will grant a boon to each of either 1 Permanent Wound, a magic item or to be healed back up to their starting quota.  Whatever happens, the water dryads head back into the forest."
        },
        {
          "event_n_haz_id" : 185,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "VOLCANO",
          "event_n_haz_roll" : 85,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "A volcano, thought to be extinct, releases a torrent of molten lava towards the party.  Unless each Warrior can roll under there Initiative on 1D6, they must take 1D6 in D6 of Wounds with no modifiers."
        },
        {
          "event_n_haz_id" : 186,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "POOL OF WATER",
          "event_n_haz_roll" : 86,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "Shimmering in the valley below is a pool of bright blue water.  If the Warriors investigate, roll 1D6:"
        },
        {
          "event_n_haz_id" : 187,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "BROKEN LEG",
          "event_n_haz_roll" : 87,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "A Warrior slips and breaks his leg.  Slowing down the journey, the Warriors must add 1 week to the total.  Upon arriving at the destination, 100 gold pieces must be paid to heal the leg, or the Warrior must miss out on the next adventure."
        },
        {
          "event_n_haz_id" : 188,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "WANDERING MONSTERS",
          "event_n_haz_roll" : 88,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "A band of wandering monsters attacks the party.  Roll accordingly, and have a battle."
        },
        {
          "event_n_haz_id" : 189,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "UNEVENTFUL WEEK",
          "event_n_haz_roll" : 89,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "UNEVENTFUL WEEK"
        },
        {
          "event_n_haz_id" : 190,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "WRONG TURN",
          "event_n_haz_roll" : 90,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "Somehow, the Warriors have made a wrong turn, and have ended up back at the dungeon entrance.  They must start the journey again."
        },
        {
          "event_n_haz_id" : 191,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "RAIN",
          "event_n_haz_roll" : 91,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "Heavy rains slow the Warriors down.  They  continue their journey, losing 1D6 Wounds each due to catching colds until they reach a settlement."
        },
        {
          "event_n_haz_id" : 192,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "ASSASSIN",
          "event_n_haz_roll" : 92,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "While travelling along the road, a masked man in black leaps out, attempting to assassinate one of the Warriors.  Select a Warrior randomly.  Then roll 3D6.  If a double is rolled, the total is the amount of wounds caused by his attack.  If a triple of any sort is rolled, the Warrior is killed outright.  A sad loss.  The rest of the Warriors finish the assassin off before he escapes, and each takes a share of 1D6*50 gold pieces, including the attacked one. (Unless killed, naturally)."
        },
        {
          "event_n_haz_id" : 193,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "CASTLE RUINS",
          "event_n_haz_roll" : 93,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "The ruins of some forgotten castle lie here.  If the Warriors wish, they may enter the castle to try and find loot and treasure.  Roll 1D6 for the number of battles that must be fought.  The battles must be fought one after the other.  Once one battle is over, take a treasure card for the kill, and set up the next fight.  Once all battles have been finished, roll another D6.  Take this many extra treasure cards, and divide them up among the Warriors evenly."
        },
        {
          "event_n_haz_id" : 194,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "BLADE VENOM",
          "event_n_haz_roll" : 94,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "The Warriors find 2 vials of Blade Venom hidden behind some bushes off to the side of the path. When coated on sharp weapons, the venom does an extra damage dice.  Each dose lasts for one battle only, until all the monsters are dead."
        },
        {
          "event_n_haz_id" : 195,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "UNEVENTFUL WEEK",
          "event_n_haz_roll" : 95,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "UNEVENTFUL WEEK"
        },
        {
          "event_n_haz_id" : 196,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "MONKS",
          "event_n_haz_roll" : 96,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "A roving band of monks offers to heal the Warriors for a small fee of 1 magic treasure.  If a Warrior gives them a treasure, he receives all his Wounds back, plus an extra Permanent Wound.  If any Warriors have any trinkets, they will take all of them in exchange for healing the whole party back to their starting quota, plus a Permanent Wound each."
        },
        {
          "event_n_haz_id" : 197,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "WANDERING MONSTERS",
          "event_n_haz_roll" : 97,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "A band of wandering monsters attacks the party, one level below their current level.  Roll accordingly, and take a treasure card after the battle."
        },
        {
          "event_n_haz_id" : 198,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "PHOENIX NEST",
          "event_n_haz_roll" : 98,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "The Warriors come across a Phoenix Nest, containing rare eggs of the Fiery Bird.  Roll 1D6 for each Warrior.  This is how many eggs he collects from the nest.  Each egg is worth 200 gold pieces and can be traded in at any shop for the correct amount of cash."
        },
        {
          "event_n_haz_id" : 199,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "HEATWAVE",
          "event_n_haz_roll" : 99,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "A heatwave is occurring across the land.  The Warriors suffer 1D6 wounds each week, these wounds are not recovered until they reach a settlement (no modifiers whatsoever!)."
        },
        {
          "event_n_haz_id" : 200,
          "event_n_haz_type" : "travel hazard",
          "event_n_haz_name" : "BOON FROM THE GODS",
          "event_n_haz_roll" : 100,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "The Warriors are granted a visit from the Gods of Good.  For the next 1D6 battles, each Warrior can add an extra dice roll to his damage done.  Also, as a gift for being such valiant adventurers, each Warrior is gifted with a magic item and 2D6*100 gold pieces.  Lucky Warriors!"
        },
        {
          "event_n_haz_id" : 201,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "UNEVENTFUL DAY",
          "event_n_haz_roll" : 1,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "UNEVENTFUL DAY"
        },
        {
          "event_n_haz_id" : 202,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "ELEPHANT",
          "event_n_haz_roll" : 2,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "As your Warrior is walking down the street, a loud commotion is heard coming from round the corner. As your Warrior is wondering what could be the matter, a large elephant comes hurtling around the corner, heading straight for your Warrior. Your Warrior can either let it pass by hiding down a side alley, or try to stop the enraged beast. Whichever you chose, roll 1D6 and consult the appropriate table:"
        },
        {
          "event_n_haz_id" : 203,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "THUG",
          "event_n_haz_roll" : 3,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "As your Warrior walks down the street whistling happily, a thug jumps out from a side street and bonks him on the head. When your Warrior wakes up he is minus (50 x your Warrior’s Battle Level) gold. Fortunately he had hidden the rest of the gold in his boots."
        },
        {
          "event_n_haz_id" : 204,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "TALENT QUEST",
          "event_n_haz_roll" : 4,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "Your Warrior is invited to perform in the local talent quest. If he accepts, roll 1D6 to see how well he performs:"
        },
        {
          "event_n_haz_id" : 205,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "MEDICINE MAN",
          "event_n_haz_roll" : 5,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "Your Warrior is surprised to see a large crowd gathering up ahead. Moving closer, he realises that they are all enthralled by “Waldo Foliky”, a travelling medicine man. He is carrying on up on stage about his many potions and what they can all do. If your Warrior wishes to buy a potion roll 1D6 x 50 for the cost and then 1D6 on the following table:"
        },
        {
          "event_n_haz_id" : 206,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "DEAD BODY",
          "event_n_haz_roll" : 6,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "While walking down the footpath your Warrior trips over and hits his nose. Cursing his clumsiness, he picks himself up and turns around. Sticking out from a side alley is a dead body. Your Warrior looks around, thinking that people might think he had killed the poor blighter, but no one has noticed. Your Warrior can either investigate or move along. If he investigates roll 1D6:"
        },
        {
          "event_n_haz_id" : 207,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "ILLNESS",
          "event_n_haz_roll" : 7,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "A strange illness sweeps through the Settlement, ignoring no one. Your Warrior must spend 50 gold and 1 week in hospital recovering. If this means he requires a roll on the Catastrophic Events Table then so be it."
        },
        {
          "event_n_haz_id" : 208,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "GOBLIN FORCE",
          "event_n_haz_roll" : 8,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "A scout reports a huge Goblin force not far from the Settlement. Your Warrior is conscripted into the army and is sent out to fight. The battle rages for many long days and nights, but the army finally wins through. Your Warrior realises that he is now far from the Settlement, the battle having travelled a long distance. He may wait for the other Warriors here for the next adventure, or travel for 1 week back to the Settlement."
        },
        {
          "event_n_haz_id" : 209,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "DROPPINGS",
          "event_n_haz_roll" : 9,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "A strangely disgusting squelp sound reaches your Warrior’s hearing.  Looking down, he has stepped in a whopping pile of dog droppings.  The next day, in any Special Location or Trader that is visited the owners may smell the vile odour.  Roll 1D6.  A roll of 1 or 2 indicates the owners of the shop instantly kick your Warrior out, instructing him to remove his boots.  (Why he didn’t do that in the first place is anyone’s guess.)  No other location may be visited that day."
        },
        {
          "event_n_haz_id" : 210,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "THROWN OUT",
          "event_n_haz_roll" : 10,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "Your Warrior’s unruly behaviour is found to be disturbing with the local residents. They kick him out on his behind. Your Warrior must wait here for his companions until they are ready for the next adventure."
        },
        {
          "event_n_haz_id" : 211,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "UNEVENTFUL DAY",
          "event_n_haz_roll" : 11,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "UNEVENTFUL DAY"
        },
        {
          "event_n_haz_id" : 212,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "MISTAKEN IDENTITY",
          "event_n_haz_roll" : 12,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "It seems that your Warrior has been mistaken for someone else. A burly gentleman, backed up by a dozen town guards behind him, demands that your Warrior pay him back the (1d6 x 100 x your Warrior’s Battle Level) that you ‘borrowed’ off him many years earlier to pay for your Warrior’s mother’s operation. Roll 1D6 (Regardless of the result, failure to pay what is owed will result in the Warrior being thrown out of the settlement and must wait outside until the other Warriors are done):"
        },
        {
          "event_n_haz_id" : 213,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "COUNTERFEIT",
          "event_n_haz_roll" : 13,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "While counting his gold, your Warrior suddenly realises that some of it is counterfeit. Roll 1D6 + 1. Divide the Warriors total gold by this number(rounding down). The result is the amount of counterfeit gold the Warrior is carrying, which must be discarded."
        },
        {
          "event_n_haz_id" : 214,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "TRAINER",
          "event_n_haz_roll" : 14,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "A visiting trainer, renown for his expertise with the Hin Ching technique offers to teach your Warrior the move for (1D6 x your Warrior’s Battle Level x 100). If your Warrior accepts, he spends 2 days in constant training, mastering the ancient technique. Your Warrior can now wield his weapon with the greatest of dexterity. (Your Warrior's Battle Level) times per adventure, your Warrior may use the skill. Regardless of how many attacks he has, your Warrior may keep on attacking any number of targets (without moving) until he misses. Each successive hit does an extra D6 Wound. eg. If your Battle Level 1 Warrior hits the 1st time, he does (1D6 + Strength) damage. If he hits the 2nd time, he does (2D6 + Strength), then (3D6 + Strength). No death blows may occur when the Hin Ching technique is in use."
        },
        {
          "event_n_haz_id" : 215,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "MAP",
          "event_n_haz_roll" : 15,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "Your Warrior, looking for something to do, decides to map the entire Settlement. For the remainder of your Warrior’s stay here, when looking for Special Locations you do not need to roll to search for them as they are all marked on his map."
        },
        {
          "event_n_haz_id" : 216,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "ARRESTED",
          "event_n_haz_roll" : 16,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "Your Warrior is mistakenly arrested for a crime he did not commit and thrown in jail. Each of your fellow Warriors must pay 1D6 x 10 gold to bail him out. If they cannot (or will not) your Warrior must spend the next 1D6 days in jail. He does not have to pay living expenses or roll on this table."
        },
        {
          "event_n_haz_id" : 217,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "URCHINS",
          "event_n_haz_roll" : 17,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "While going about his business, four young street urchins brush past your Warrior and bid him a good day. Smiling back at them, he suddenly realises that something has been stolen! Roll 1D6 to see what the cheeky urchins have taken:"
        },
        {
          "event_n_haz_id" : 221,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "BETROTHED",
          "event_n_haz_roll" : 21,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "Due to a drunken incident the previous night, your Warrior finds himself betrothed to a young lord\/lady that is considerably homely. The wedding is arranged for tomorrow, so your Warrior must either leave the Settlement immediately, or get married....."
        },
        {
          "event_n_haz_id" : 222,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "UNEVENTFUL DAY",
          "event_n_haz_roll" : 22,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "UNEVENTFUL DAY"
        },
        {
          "event_n_haz_id" : 223,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "ACCIDENT",
          "event_n_haz_roll" : 23,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "While watching a beautiful young woman walk by, your Warrior has the misfortune to bump into a rather beefy figure. Roll 1D6 to see what the outcome is:"
        },
        {
          "event_n_haz_id" : 224,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "OLD FRIEND",
          "event_n_haz_roll" : 24,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "While checking out the wares at the local market, your Warrior spots Falzon Curtblade, someone known to him from his home town. Roll 1D6 to see what happens:"
        },
        {
          "event_n_haz_id" : 225,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "BUSINESS OPPORTUNITY",
          "event_n_haz_roll" : 25,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "At the local Alehouse, your Warrior meets an entrepreneur who is certain he can undergo successful trading negotiations with the Dwarven Settlement a few miles away. He offers your Warrior a partnership. If your Warrior pays 1D6 x 100 gold he receives a certificate of partnership. From now on, when your Warrior enters a Settlement he may visit the Merchant’s Guild and enquire about the trading business. Roll 1D6:"
        },
        {
          "event_n_haz_id" : 226,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "BEGGING",
          "event_n_haz_roll" : 26,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "Short of funds, your Warrior throws on an old shirt and heads to the street corner to try his hand at begging. Roll 1D6:"
        },
        {
          "event_n_haz_id" : 227,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "LOST",
          "event_n_haz_roll" : 27,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "While searching for the local gambling establishment, your Warrior realises that he suddenly does not know where he is. It takes him all of the next day to backtrack his route to the inn where he is staying. Tomorrow, he may not visit any locations in this Settlement while he tries to find his way home. If he has a map of the Settlement, he may ignore this event."
        },
        {
          "event_n_haz_id" : 228,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "TABLOID NEWS",
          "event_n_haz_roll" : 28,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "A headline in the local paper reads “<Your Warrior’s name> in sex romp with respected Nobleman’s daughter.” For the remainder of his stay here, your Warrior will not be served in any location except for the Alehouse and Gambling House as the townsfolk are a very close community and the Nobleman’s daughter is a friend to them all."
        },
        {
          "event_n_haz_id" : 229,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "WEAPON EVALUATION",
          "event_n_haz_roll" : 29,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "At a weapon evaluation session at the local Weaponsmith, your Warrior is informed that his beginning weapon is much older than expected and is only worth half of it’s selling price. If your Warrior ever decides to sell his weapon, he will receive only one half of it’s selling price in the Roleplay Book."
        },
        {
          "event_n_haz_id" : 230,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "UNEVENTFUL DAY",
          "event_n_haz_roll" : 30,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "UNEVENTFUL DAY"
        },
        {
          "event_n_haz_id" : 231,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "UNDERPAYED",
          "event_n_haz_roll" : 31,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "A merchant runs out of a nearby shop, accusing your Warrior of underpaying him by 1D6 x 10 gold on a recent purchase. Although your Warrior does not have a clue as to what is going on, he agrees to pay the man just to get rid of him."
        },
        {
          "event_n_haz_id" : 232,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "WITCH",
          "event_n_haz_roll" : 32,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "Due to a wart on his nose, your Warrior is accused of being a witch and is chased through the streets by an angry mob. Roll 1D6:"
        },
        {
          "event_n_haz_id" : 233,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "UNEVENTFUL DAY",
          "event_n_haz_roll" : 33,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "UNEVENTFUL DAY"
        },
        {
          "event_n_haz_id" : 234,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "FIRE",
          "event_n_haz_roll" : 34,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "The Inn which your Warrior is staying in has caught fire. Attempting to be a good citizen, your Warrior races through the building, knocking on peoples doors and trying to evacuate the building. Roll 1D6 to determine what he actually does:"
        },
        {
          "event_n_haz_id" : 235,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "HEROIC INCIDENT",
          "event_n_haz_roll" : 35,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "Due to a very heroic incident, your Warrior has been bestowed a title. That title is (roll 1D6):"
        },
        {
          "event_n_haz_id" : 236,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "SHARP SWORD",
          "event_n_haz_roll" : 36,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "Thinking that it is about time he got his sword sharpened, your Warrior heads off to the local Weaponsmith and enquires about the price of sharpening a sword. The Weaponsmith happily informs him that the price is 50 gold. If your Warrior wishes to spend the money, his sword will be sharpened, and for the next adventure will do an extra +1 damage. If your Warrior does not have a sword then obviously this event is meaningless."
        },
        {
          "event_n_haz_id" : 237,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "COOKING",
          "event_n_haz_roll" : 37,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "Your Warrior decides to take cooking lessons from Mother Harbord, the Dwarven cook who works in the Tavern. For 1D6 days, your Warrior toils at baking cakes, and other goodies, but at the end, it seems that your Warrior has a skill for making Stonebread. Once every adventure, your Warrior may attempt to bake some bread. If he decides to do so, roll 1D6. If a 1 is rolled, your Warrior has been unable to find the necessary ingredients. Otherwise, making bread takes 1 complete turn, and produces 1D3 loaves."
        },
        {
          "event_n_haz_id" : 238,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "WALK IN THE FOREST",
          "event_n_haz_roll" : 38,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "Feeling stressed from his recent adventure, your Warrior takes a walk through the nearby forest. It’s tranquil atmosphere brings peace to your Warrior, who regains any lost Wounds."
        },
        {
          "event_n_haz_id" : 239,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "AUTOGRAPHS",
          "event_n_haz_roll" : 39,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "Your Warrior is mistaken for Grendel, the famous Pit Fighter (who knows why) and spends the rest of the day signing autographs on various artefacts."
        },
        {
          "event_n_haz_id" : 240,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "EMPLOYMENT",
          "event_n_haz_roll" : 40,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "Your Warrior decides to seek employment. He may work as long as he wants, but must still pay living expenses, and roll on the Settlement Event Table. Roll 1D6 on the following job table:"
        },
        {
          "event_n_haz_id" : 241,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "EXPLOSION",
          "event_n_haz_roll" : 41,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "A loud explosion not far off alerts your Warrior. Running to see what happened, your Warrior sees the Gunsmith’s barn in flames, and notices two suspicious characters running from the scene. Thinking quickly, your Warrior leaps in front of the two criminals and apprehends them, just as the Settlement’s guards arrive. Thanking your Warrior, they give you a reward of 1D6 x 50 while your Warrior proclaim that he was only doing his duty as a citizen."
        },
        {
          "event_n_haz_id" : 242,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "SALE",
          "event_n_haz_roll" : 42,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "The Weaponsmith is having his annual sale. For this day only, your Warrior may buy any item from the Weaponsmith’s at half price. All the items are identified however, and the Weaponsmith will not buy them back from your Warrior however if he wishes to sell them at a later time."
        },
        {
          "event_n_haz_id" : 243,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "FALL",
          "event_n_haz_roll" : 43,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "While walking across the bridge over the river, your Warrior loses his footing and tumbles head first into the river. How embarrassing!"
        },
        {
          "event_n_haz_id" : 244,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "UNEVENTFUL DAY",
          "event_n_haz_roll" : 44,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "UNEVENTFUL DAY"
        },
        {
          "event_n_haz_id" : 245,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "NIGHTMARE",
          "event_n_haz_roll" : 45,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "Your Warrior wakes in the middle of the night from his nightmares, perspiration running down his face. During his stay here, it looks as if the Warrior has been afflicted with some sort of disease. This disease will not harm him during the day, but at night... Unless your Warrior spends 1D6 x 100 gold at a Settlement to cure the disease, each night for the rest of his life roll 1D6 on the following table:"
        },
        {
          "event_n_haz_id" : 246,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "FIGHT",
          "event_n_haz_roll" : 46,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "Your Warrior gets in a fight with some rowdy adventurers at the Alehouse who insist that a name like <Warrior’s name> must belong to a weak willed Squig dropping. Roll 1D6:"
        },
        {
          "event_n_haz_id" : 247,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "SILLY OLD WOMAN",
          "event_n_haz_roll" : 47,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "While walking down the street your Warrior is suddenly showered by all manner of refuse. Looking upwards, your Warrior sees an old woman shaking her fist at him, complaining about the young people of these times."
        },
        {
          "event_n_haz_id" : 248,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "LOOSE STONE",
          "event_n_haz_roll" : 48,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "Your Warrior trips over a loose stone on the footpath. After picking himself up, he realises that the stone can be moved. Heaving it out of its position, he sees a cavity underneath, and judging by the shine, some treasure hidden inside. Your Warrior reaches in and pulls out (roll 1D6):"
        },
        {
          "event_n_haz_id" : 249,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "LOST BOY",
          "event_n_haz_roll" : 49,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "Your Warrior finds a little boy wandering the streets trying to find his mother. If your Warrior helps the boy, his mother will reward him with 1D6 x 5 gold."
        },
        {
          "event_n_haz_id" : 250,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "ANCIENT AMULET",
          "event_n_haz_roll" : 50,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "Your very fortunate Warrior finds an old amulet in the bottom of his pockets. What it was doing there is anyone’s guess. While holding this amulet in one hand, your Warrior has the following bonuses and penalties."
        },
        {
          "event_n_haz_id" : 251,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "DRAGON",
          "event_n_haz_roll" : 51,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "The sky suddenly darkens, and your Warrior looks up. A huge dragon flies overhead, blocking the sunlight. Roll 1D6:"
        },
        {
          "event_n_haz_id" : 252,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "STORM",
          "event_n_haz_roll" : 52,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "The clouds are dark and black today. It looks like a storm approaching. Roll 1D6:"
        },
        {
          "event_n_haz_id" : 253,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "UNEVENTFUL DAY",
          "event_n_haz_roll" : 53,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "UNEVENTFUL DAY"
        },
        {
          "event_n_haz_id" : 254,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "TRAINING",
          "event_n_haz_roll" : 54,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "A visiting trainer is in town. He offers your Warrior training. The training will cost ((1D3 x 100) x your Warrior’s Battle Level) and will take 1D6 days. When finished, your Warrior has gained an extra skill. Roll on the appropriate skill table for your Warrior. If your Warrior has other abilities than skills (eg, Blessings, Spells) then he gains another ability instead."
        },
        {
          "event_n_haz_id" : 255,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "UNEVENTFUL DAY",
          "event_n_haz_roll" : 55,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "UNEVENTFUL DAY"
        },
        {
          "event_n_haz_id" : 256,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "DARK SECRET",
          "event_n_haz_roll" : 56,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "Your Warrior harbours a deep dark secret. Take a Dark Secret card immediately. See White Dwarf 190 for rules for the Dark Secret cards. It must be used in the next adventure as well as any others you may receive."
        },
        {
          "event_n_haz_id" : 257,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "TREASURE MAP",
          "event_n_haz_roll" : 57,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "It is a very windy day. Suddenly something flies into your Warrior’s face. Starting, your Warrior grabs hold of it and finds that it an old parchment. Judging by the symbols on it, it looks like a treasure map. Take the treasure map equipment card if it is not in play already, otherwise make a note of it on your adventure record sheet. See White Dwarf 189 for rules on treasure maps."
        },
        {
          "event_n_haz_id" : 258,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "ROYAL VISIT",
          "event_n_haz_roll" : 58,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "With a fanfare of trumpets, a handful of armed guards start to clear the streets of peasants. You look up and see the King sitting in his sedan chair being carried down the centre of the street. You push forward through the crowd in the hope of getting a better look. Roll 1D6:"
        },
        {
          "event_n_haz_id" : 259,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "PHASED SPACIAL ANOMALY",
          "event_n_haz_roll" : 59,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "A twirling mass of gaseous vapours envelopes your Warrior. Roll 1D6:"
        },
        {
          "event_n_haz_id" : 260,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "TELEPORT",
          "event_n_haz_roll" : 60,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "Your Warrior is enveloped by a greenish purplish swirling mist. Coughing and spluttering, your Warrior tries to clear his way through. When finally he succeeds in dispersing the gas he does not recognise his surroundings. Your Warrior has been teleported to (Roll 1D6):"
        },
        {
          "event_n_haz_id" : 261,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "WHISPERED SECRETS",
          "event_n_haz_roll" : 61,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "In the local Alehouse, your Warrior overhears two Dwarfs talking about great treasure to be found in a nearby dungeon. At the end of the next dungeon, roll 1D6:"
        },
        {
          "event_n_haz_id" : 262,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "UNEVENTFUL DAY",
          "event_n_haz_roll" : 62,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "UNEVENTFUL DAY"
        },
        {
          "event_n_haz_id" : 263,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "NEW YEAR'S DAY",
          "event_n_haz_roll" : 63,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "Your Warrior wakes with a heavy head. Obviously those New Year’s Eve celebrations last night were successful, although your Warrior can’t remember any of them. What he can remember however, is that he had 1D6 x 40 gold more than he does now."
        },
        {
          "event_n_haz_id" : 264,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "ILLUSION",
          "event_n_haz_roll" : 64,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "The Settlement suddenly begins to shake, and suddenly vanishes before your Warrior’s eyes. The Settlement was only a mirage. All purchases made by any Warriors staying here are only illusions. Fortunately, as no people in the Settlement were substantial, the Warriors find any Gold they may have spent lying on the ground. If any Warrior has been trained, the training still applies, but somehow, the money spent on training cannot be found. All Warriors staying here may journey to the next Settlement, or start their adventure straight away."
        },
        {
          "event_n_haz_id" : 265,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "BIGOTRY",
          "event_n_haz_roll" : 65,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "The Settlement has a policy that no...(roll 1d6)...may stay or enter the Settlement while this policy is in place:"
        },
        {
          "event_n_haz_id" : 266,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "UNEVENTFUL DAY",
          "event_n_haz_roll" : 66,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "UNEVENTFUL DAY"
        },
        {
          "event_n_haz_id" : 267,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "UNEVENTFUL DAY",
          "event_n_haz_roll" : 67,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "UNEVENTFUL DAY"
        },
        {
          "event_n_haz_id" : 268,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "ASSASSIN",
          "event_n_haz_roll" : 68,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "While you Warrior is walking down the street, you get attacked by a ‘Nobleman’ which you talked to earlier.  Fight a battle with an Assassin (No Treasure, GOLD 50) (M-5, WS-4, BS-3+, S-3, T-3, W-3, I-9, A-1, DAM-1) with a bag of throwing stars, which he may use if he is not pinned and a knife. The Assassin has Ambush, Magic A."
        },
        {
          "event_n_haz_id" : 269,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "GRAVEYARD",
          "event_n_haz_roll" : 69,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "Your Warrior seems to have wandered into the Graveyard by mistake. Roll 1D6:"
        },
        {
          "event_n_haz_id" : 270,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "RENOVATIONS",
          "event_n_haz_roll" : 70,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "The Settlement is under renovation. For the remainder of their stay here, all visitors to any location, special or otherwise are required to pay a tax of 1D6 gold to help with the renovations."
        },
        {
          "event_n_haz_id" : 271,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "DEATH IN THE FAMILY",
          "event_n_haz_roll" : 71,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "Your Warrior has just been informed by a messenger of the death of a family member. While in mourning, he may no longer visit any location for 1 Week, although he still must pay living expenses per day as usual."
        },
        {
          "event_n_haz_id" : 272,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "VISITATION",
          "event_n_haz_roll" : 72,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "Noticing a crowd gathering, your Warrior decides to investigate.  For a piddly fee of 1D6 x 100, your Warrior can look upon the face of a true god who has visited the Old World in human form.  Roll 1D6:"
        },
        {
          "event_n_haz_id" : 273,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "INVENTOR",
          "event_n_haz_roll" : 73,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "Walking past a seemingly abandoned building, your Warrior is thrown off his feet by a tremendous explosion from within.  After losing 1D6 x BL Wounds, a strange little man runs from the building, apologising frantically.  His experiment went wrong, apparently.  After checking to see if your Warrior is not dead, he hands your Warrior 1D6 x 100 gold in compensation, he runs inside again."
        },
        {
          "event_n_haz_id" : 274,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "STRANGE BOX",
          "event_n_haz_roll" : 74,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "Hearing a strange wheezing groaning sound, your Warrior turns around to see a strange blue box is suddenly standing when there was nothing beforehand.  A small man with a cream coloured jacket, an umbrella, and a cream coloured fedora runs from the box into the crowd.  Shrugging, your Warrior continues on his journey."
        },
        {
          "event_n_haz_id" : 275,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "LOST ITEM",
          "event_n_haz_roll" : 75,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "Your Warrior suddenly realises that he has lost one of his items of his equipment. Randomly choose an item, including items written down on his Adventure Record Sheet. At the beginning of each turn for the remainder of his stay in this Settlement, roll 1D6. On a roll of 5-6 your Warrior manages to find his equipment, otherwise he will have to make do without it."
        },
        {
          "event_n_haz_id" : 276,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "FOUND ITEM",
          "event_n_haz_roll" : 76,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "Down a side street, your Warrior finds a piece of equipment. If any other Warrior has lost theirs in this Settlement from Event 75 then this belongs to them. Otherwise take 1 Treasure Card. "
        },
        {
          "event_n_haz_id" : 277,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "UNEVENTFUL DAY",
          "event_n_haz_roll" : 77,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "UNEVENTFUL DAY"
        },
        {
          "event_n_haz_id" : 278,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "GIANT LIZARD",
          "event_n_haz_roll" : 78,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "On the other side of the Settlement’s walls, your Warrior spies an enormous lizard, approximately 6 feet high. With a gasp, your Warrior realises that this is the famous Zomoda Lizard, sought after by many a collector. If your Warrior decides to pursue, and hopefully capture the lizard roll 1D6:"
        },
        {
          "event_n_haz_id" : 279,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "WAGER",
          "event_n_haz_roll" : 79,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "Your Warrior is invited to place a wager on the outcome of a certain race between two Snotlings. If your Warrior decides to place a bet he may bet any amount of Gold up to a maximum of 1000 Gold. To simulate the race place 4 passageway sections lengthwise on the table, and place 2 Snotling miniatures at the beginning. Get 2 other players to control a Snotling each, and take it in turns to roll 1D6 for movement. The Snotling who wins is the first to reach the end of the passageways. If the Snotling your Warrior bet on wins he receives (his bet x (1D3 + 1)) Gold. If his Snotling loses, he loses his wager. This event may only happen once per stay in a Settlement by each Warrior."
        },
        {
          "event_n_haz_id" : 280,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "VOLCANO",
          "event_n_haz_roll" : 80,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "A nearby Volcano shows signs of erupting, threatening the Settlement. The Warriors may continue to stay here if they want\/need to but at the start at each of their turns roll 1D6. If a 1 is rolled, the Volcano erupts, hot lava gushing through the city. Each Warrior must leave the Settlement immediately."
        },
        {
          "event_n_haz_id" : 281,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "EARTHQUAKE",
          "event_n_haz_roll" : 81,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "The ground beneath your Warrior's feet starts to shake, gradually building in intensity. Your Warrior is thrown to the ground. Huge cracks open in the ground, and buildings start to topple. Roll 2D6 for each Treasure Card item of equipment on the Warrior’s person. On a roll of a double 1, the item is lost, as it tumbles down the small chasm."
        },
        {
          "event_n_haz_id" : 282,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "MAN OF VISION",
          "event_n_haz_roll" : 82,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "A well built shortish man with a beard approaches your Warrior and introduces himself. “I am Godbold, Man of Vision” he proclaims. “I have just had a vision of your future, and thought it best to warn you.” Thanking him, your Warrior heads off. Your Warrior now has 1 extra point of Luck which may be used at any time. Unlike normal luck, when this Luck point is used up, it will not be recovered."
        },
        {
          "event_n_haz_id" : 283,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "EVIL MAGICIAN",
          "event_n_haz_roll" : 83,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "A deep booming sound from the Settlement bell tower alerts your Warrior to the sudden desertion of the streets. Bewildered, he is the only person left on the streets when a dark magician character materialises in front of him. “I don’t remember giving you permission to be out after curfew?” Roll 1D6:"
        },
        {
          "event_n_haz_id" : 284,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "UNEVENTFUL DAY",
          "event_n_haz_roll" : 84,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "UNEVENTFUL DAY"
        },
        {
          "event_n_haz_id" : 285,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "SPELLING BEE",
          "event_n_haz_roll" : 85,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "Your Warrior takes part in the annual “Spelling Bee” of the community. This is a day where many people gather in the Settlement’s Hall and try to spell various words. Prizes are awarded to those who spell words correctly. The Warrior makes an 'intellectual' Initiative test (roll 1D6 + Initiative, need a 7+) to attempt to spell the word.  If your Warrior correctly spells his word, he receives a book entitled “Languages of the Old World”. This book allows the Warrior to understand any language he may encounter in his adventures. Roll 1D6 and add your Warrior's Willpower. If the result is 7 or more then your Warrior has read the book correctly and can understand the language. Otherwise, the language remains shrouded in mystery...until his next turn..."
        },
        {
          "event_n_haz_id" : 286,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "UNEVENTFUL DAY",
          "event_n_haz_roll" : 86,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "UNEVENTFUL DAY"
        },
        {
          "event_n_haz_id" : 287,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "COLD",
          "event_n_haz_roll" : 87,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "Your Warrior, while tallyhooting around the Settlement last night must have caught a cold. Spend 1D6 days in bed recovering. Do not roll on this table while he is in bed, and do not pay living expenses as old Mrs Heggaty down the corridor is caring for your Warrior while he is sick."
        },
        {
          "event_n_haz_id" : 288,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "UNEVENTFUL DAY",
          "event_n_haz_roll" : 88,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "UNEVENTFUL DAY"
        },
        {
          "event_n_haz_id" : 289,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "GAME",
          "event_n_haz_roll" : 89,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "The Settlement your Warrior is staying in has developed a new game. It consists of two teams pitted against each other on a field. At each end of the field, three swords are stabbed into the ground, with a dagger balanced on top. A player stands in front of the swords and tries to hit an apple thrown at him by a member of the other team. If the swords are hit, by a missed apple, and the dagger falls off, the batting team has lost. Your Warrior takes part in this new game. Roll 1D6:"
        },
        {
          "event_n_haz_id" : 290,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "MARKET DAY",
          "event_n_haz_roll" : 90,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "Tomorrow is market day. All items (not in Special Locations) are half price. If any other Warriors visit shops tomorrow, they will also be able to purchase items at the special prices."
        },
        {
          "event_n_haz_id" : 291,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "RAID",
          "event_n_haz_roll" : 91,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "If your Warrior is not in a Village, then treat this as an Uneventful Day. While your Warrior is walking down the street, a Large Mercenary Raiding party charges through the gate. The Mercenaries slaughter everyone in the village and take all the treasure. Fortunately for your Warrior, he gets knocked unconscious by one mercenary, and the others thought he was dead. Your Warrior wakes up nursing 1D6+3 wounds (not modified for armour unless he is wearing a helmet.)"
        },
        {
          "event_n_haz_id" : 292,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "PLAGUE OF FROGS",
          "event_n_haz_roll" : 92,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "A plague of frogs has struck the Settlement. There are frogs everywhere your Warrior goes. For the rest of his stay here, every time any Warrior visits any location at all, roll 1D6. On a roll of 1, the location has been closed down, as it has been overrun by frogs. On any other roll, the location is still open for business, with the odd 2 or 7 frogs hopping around everywhere."
        },
        {
          "event_n_haz_id" : 293,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "MAGIC SPELL",
          "event_n_haz_roll" : 93,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "An apprentice Wizard in the nearby Wizard’s Tower is practising spell casting. Suddenly a wave of magic passes through the Settlement. Roll 1D6:"
        },
        {
          "event_n_haz_id" : 294,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "ROAD WORKS",
          "event_n_haz_roll" : 94,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "A bunch of mean looking Dwarves are up ahead, relaying the pavement of the streets.  For the remainder of the stay in this Settlement, all Warriors must subtract four from their roll when they try to find a special location, due to the detours they are constantly having to make to avoid the road works."
        },
        {
          "event_n_haz_id" : 295,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "CORRUPT LAW",
          "event_n_haz_roll" : 95,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "A bunch of royal King’s guard’s apprehend your Warrior, claiming he broke a law.  Roll 1D6 to find out which law he supposedly broke, and the penalty incurred:"
        },
        {
          "event_n_haz_id" : 296,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "RUNAWAY HARPSICHORD",
          "event_n_haz_roll" : 96,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "Barrelling out from a closed door, sending wood shards into the air, a run away harpsichord slams head first into your Warrior, knocking him flat.  When he awakes, he has spent 1D3 days in hospital, and is minus 10 gold hospital fee."
        },
        {
          "event_n_haz_id" : 297,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "JEWELS",
          "event_n_haz_roll" : 97,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "In the deserted streets, your Warrior sees two green emeralds surrounded in a magical glow float past him. A fat merchant in a turban is sweating and puffing as he chases after them. “Where are you going? I paid for you.”  If your Warrior decides not to ignore the strange procession, roll 1D6:"
        },
        {
          "event_n_haz_id" : 298,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "RETURN OF AN OLD FOE",
          "event_n_haz_roll" : 98,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "Your Warrior meets up with a person whom he knew years ago. The two used to be best of friends, but one day, an argument broke out over the distribution of treasure from a quest. He thought he killed more Monsters than your Warrior did, but your Warrior thought he had felled the greater amount of foes. In the end, your Warrior took most of the treasure for himself, and his friend vowed to have his revenge. Now it seems that time has come. Fight a battle against an opponent of equal Battle Level, and abilities as your Warrior. He is armed with a +4 sword. The winner does not kill his opponent, he is on 1 Wound. If your Warrior wins, gain (50 x your Warrior’s Battle Level) Gold. If your Warrior's foe wins, he takes 1 Treasure Card from your Warrior at random and vows to return."
        },
        {
          "event_n_haz_id" : 299,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "UNEVENTFUL DAY",
          "event_n_haz_roll" : 99,
          "event_n_haz_has_sub" : false,
          "event_n_haz_description" : "UNEVENTFUL DAY"
        },
        {
          "event_n_haz_id" : 300,
          "event_n_haz_type" : "settlement event",
          "event_n_haz_name" : "ORANGE MIST",
          "event_n_haz_roll" : 100,
          "event_n_haz_has_sub" : true,
          "event_n_haz_description" : "There are screams of alarm from a pedlar on the streets, as he points to the eastern horizon in fear. Your Warrior looks to see a sheet of strange orange mist descending over the Settlement. Before his very eyes, people everywhere begin to yell in agony as they are mutated into beings of chaos and unrecognisable masses. No one escapes the mutating mists. Each Warrior roll 1D6 to see the effect of the mist:"
        }
      ]);
    });
};
