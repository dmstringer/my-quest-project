
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('events_and_hazards_subs').del()
    .then(function () {
      // Inserts seed entries
      return knex('events_and_hazards_subs').insert([
        {
          "event_n_haz_subs_id" : 1,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "PRISONERS",
          "event_n_haz_subs_roll" : "1",
          "event_n_haz_id" : 10,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "The prisoners are rich merchants, and report straight to the Captain of the Guard about their kidnap. Unfortunately, it is the Warriors who have been reported. Each Warrior must pay 1D6 x 100 gold to 'convince' the guards that they are innocent."
        },
        {
          "event_n_haz_subs_id" : 2,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "PRISONERS",
          "event_n_haz_subs_roll" : "2-6",
          "event_n_haz_id" : 10,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "The prisoners are rich merchants, and due to the kindness of the Warriors, rewards each one with 2D6 x 100 gold."
        },
        {
          "event_n_haz_subs_id" : 3,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "DEAD BODY",
          "event_n_haz_subs_roll" : "1",
          "event_n_haz_id" : 13,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "Poison Gas! A trap is sprung. Every model on this board section takes 1D6 Wounds with no modifiers for Toughness or Armour. The bag is empty."
        },
        {
          "event_n_haz_subs_id" : 4,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "DEAD BODY",
          "event_n_haz_subs_roll" : "6",
          "event_n_haz_id" : 13,
          "event_n_haz_subs_order" : 3,
          "event_n_haz_subs_description" : "The bag is a magical \"bag of carrying\". The Warrior who receives it can use it to store one item of equipment. This bag, and the item in it do not count towards a Warrior's total Treasure items when determining who receives a new one."
        },
        {
          "event_n_haz_subs_id" : 5,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "DEAD BODY",
          "event_n_haz_subs_roll" : "2-5",
          "event_n_haz_id" : 13,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "The bag contains 1D6 x 50 gold."
        },
        {
          "event_n_haz_subs_id" : 6,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "CHANGE OF PLAN",
          "event_n_haz_subs_roll" : "1-3",
          "event_n_haz_id" : 14,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "The stranger lied, and the King is perfectly safe. If the Warriors abandoned their mission, each one must lose 1D6 x 100 gold as he tries to make amends for his shame at failure."
        },
        {
          "event_n_haz_subs_id" : 7,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "CHANGE OF PLAN",
          "event_n_haz_subs_roll" : "4-6",
          "event_n_haz_id" : 14,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "The stranger was telling the truth. If the Warriors abandoned their mission, they are each given 750 gold for their loyalty. Otherwise, if they continued onwards, at the next Settlement they are refused entry, and must either travel on to the next Settlement, or begin the next adventure."
        },
        {
          "event_n_haz_subs_id" : 8,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "DEJA VU",
          "event_n_haz_subs_roll" : "1-3",
          "event_n_haz_id" : 17,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "They are correct, as they have been going around in circles! Place the Warriors back on the board section where they started. They must continue on from there."
        },
        {
          "event_n_haz_subs_id" : 9,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "DEJA VU",
          "event_n_haz_subs_roll" : "4-6",
          "event_n_haz_id" : 17,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "Although the surroundings do look the same, the Warriors are indeed on the right track."
        },
        {
          "event_n_haz_subs_id" : 10,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "FOOTPRINTS",
          "event_n_haz_subs_roll" : "1",
          "event_n_haz_id" : 19,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "A random Warrior activates a trap! A huge spiked metal ball swings out of the ceiling and slams into the Warrior. He suffers 2D6 Wounds with no modifiers for Toughness or armour."
        },
        {
          "event_n_haz_subs_id" : 11,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "FOOTPRINTS",
          "event_n_haz_subs_roll" : "6",
          "event_n_haz_id" : 19,
          "event_n_haz_subs_order" : 3,
          "event_n_haz_subs_description" : "The Warriors find a concealed door in the wall. Take 1D6 extra Dungeon cards and put them face down next to the wall. Now take an Objective Room card and place it on the bottom of the pile. The Warriors may explore this new section of the dungeon as normal. When they reach the Objective Room, roll on the Objective Room Monster Table. If all the Monsters are killed, each Warrior receives 1000 gold each instead of an Objective Room Treasure Card."
        },
        {
          "event_n_haz_subs_id" : 12,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "FOOTPRINTS",
          "event_n_haz_subs_roll" : "2-5",
          "event_n_haz_id" : 19,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "The Warriors find nothing."
        },
        {
          "event_n_haz_subs_id" : 13,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "POUCH",
          "event_n_haz_subs_roll" : "1",
          "event_n_haz_id" : 23,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "As soon as a random Warrior opens the bag, red gas escapes from the opening, affecting the Warrior. He loses 1D3 Permanent Wounds, and 1 Toughness for the rest of the adventure, until he reaches a Settlement."
        },
        {
          "event_n_haz_subs_id" : 14,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "POUCH",
          "event_n_haz_subs_roll" : "2",
          "event_n_haz_id" : 23,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "One Warrior finds 1D6 x 50 gold."
        },
        {
          "event_n_haz_subs_id" : 15,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "POUCH",
          "event_n_haz_subs_roll" : "3",
          "event_n_haz_id" : 23,
          "event_n_haz_subs_order" : 3,
          "event_n_haz_subs_description" : "One Warrior finds 1D6 x100 gold."
        },
        {
          "event_n_haz_subs_id" : 16,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "POUCH",
          "event_n_haz_subs_roll" : "4",
          "event_n_haz_id" : 23,
          "event_n_haz_subs_order" : 4,
          "event_n_haz_subs_description" : "Each Warrior finds 1D6 x 50 gold."
        },
        {
          "event_n_haz_subs_id" : 17,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "POUCH",
          "event_n_haz_subs_roll" : "5",
          "event_n_haz_id" : 23,
          "event_n_haz_subs_order" : 5,
          "event_n_haz_subs_description" : "Each Warrior finds 1D6 x 100 gold."
        },
        {
          "event_n_haz_subs_id" : 18,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "POUCH",
          "event_n_haz_subs_roll" : "6",
          "event_n_haz_id" : 23,
          "event_n_haz_subs_order" : 6,
          "event_n_haz_subs_description" : "One Warrior finds a Treasure Card."
        },
        {
          "event_n_haz_subs_id" : 19,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "WIZENED OLD MAN",
          "event_n_haz_subs_roll" : "1-2",
          "event_n_haz_id" : 26,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "The old man is actually a Master Thief in disguise. While the Warriors are looking for his spectacles, he backstabs one of them, steals 100 gold from that Warrior, and slips off into the darkness before the Warriors can react. Each stabbed Warrior loses 4 Wounds, with no modifiers whatsoever."
        },
        {
          "event_n_haz_subs_id" : 20,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "WIZENED OLD MAN",
          "event_n_haz_subs_roll" : "3-4",
          "event_n_haz_id" : 26,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "The Warriors find his spectacles and put them back on his face. \"Thankyou very much\" he says. \"By the way, the room up ahead is supposed to contain a Treasure trove.\" The next room the Warriors enter, after killing all of the Monsters present, they may take an extra Treasure Card."
        },
        {
          "event_n_haz_subs_id" : 21,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "WIZENED OLD MAN",
          "event_n_haz_subs_roll" : "5-6",
          "event_n_haz_id" : 26,
          "event_n_haz_subs_order" : 3,
          "event_n_haz_subs_description" : "After finding his spectacles, the Warriors turn to leave. \"Don't be in such a rush\" the old man exclaims. \"I have something for your kindness.\" He reaches into his robes and extracts 1D3 parchment scrolls. Each one contains a random spell for the spellcaster in the party. This spell may be cast once only at a cost of zero power."
        },
        {
          "event_n_haz_subs_id" : 22,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "GAS MASS",
          "event_n_haz_subs_roll" : "1",
          "event_n_haz_id" : 27,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "A fierce pain courses through the Warriors veins. He automatically loses (1D6 + Battle Level) Wounds with no modifiers. The Warrior emerges on the other side, just metres in front of the other Warriors. Place him 2 squares away."
        },
        {
          "event_n_haz_subs_id" : 23,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "GAS MASS",
          "event_n_haz_subs_roll" : "2",
          "event_n_haz_id" : 27,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "The Warrior jumps through the gas...and hits his head. Unfortunately, the gas was in front of a wall, and your Warrior loses 1D6+1 Wounds, only modified for Toughness unless the Warrior has a helmet."
        },
        {
          "event_n_haz_subs_id" : 24,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "GAS MASS",
          "event_n_haz_subs_roll" : "3",
          "event_n_haz_id" : 27,
          "event_n_haz_subs_order" : 3,
          "event_n_haz_subs_description" : "The Warrior steps through the gas. The Warrior seems to recognise his surroundings, and with just cause. The Warrior has appeared back at the entrance to the Dungeon. Place the Warrior back on the board section where he started. If he has the lantern, the other Warriors must wait for him unless they have an alternate light source. Otherwise, if the other Warriors have the lantern, the teleported Warrior can make his way back to them - he has already traversed this part of the dungeon, and remembers it's layout."
        },
        {
          "event_n_haz_subs_id" : 25,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "GAS MASS",
          "event_n_haz_subs_roll" : "6",
          "event_n_haz_id" : 27,
          "event_n_haz_subs_order" : 5,
          "event_n_haz_subs_description" : "The Warrior steps through the swirling mist. Instantly he is transported to the next City, leaving his fellow Warriors alone. If he had the lantern, fortunately he remembered to hand it to another Warrior before entering."
        },
        {
          "event_n_haz_subs_id" : 26,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "GAS MASS",
          "event_n_haz_subs_roll" : "4-5",
          "event_n_haz_id" : 27,
          "event_n_haz_subs_order" : 4,
          "event_n_haz_subs_description" : "The Warrior steps through the gas, but nothing happens. To that Warrior, it appears to be just an illusion."
        },
        {
          "event_n_haz_subs_id" : 27,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "CHILL",
          "event_n_haz_subs_roll" : "4-6",
          "event_n_haz_id" : 31,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "The below freezing temperature cause 1D6 + 3 Wounds to each Warrior, modified for Toughness only."
        },
        {
          "event_n_haz_subs_id" : 28,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "CHILL",
          "event_n_haz_subs_roll" : "7-9",
          "event_n_haz_id" : 31,
          "event_n_haz_subs_order" : 3,
          "event_n_haz_subs_description" : "The temperature continues to decrease, chilling the Warriors' bones. Each Warrior loses 2D6 Wounds, and the use of his arms for 1 turn. If the Warriors have frozen arms, they are at -2 To Hit."
        },
        {
          "event_n_haz_subs_id" : 29,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "CHILL",
          "event_n_haz_subs_roll" : "10-12",
          "event_n_haz_id" : 31,
          "event_n_haz_subs_order" : 4,
          "event_n_haz_subs_description" : "The temperature drops very drastically, causing frostbite to each Warrior. They each lose 3D6 Wounds, and the use of their arms for the next 1D3 turns. If the Warriors have frozen arms, they are at -2 To Hit."
        },
        {
          "event_n_haz_subs_id" : 30,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "CHILL",
          "event_n_haz_subs_roll" : "3 or Less",
          "event_n_haz_id" : 31,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "The temperature stops around zero degrees. Although cold, the Warriors press on."
        },
        {
          "event_n_haz_subs_id" : 31,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "PRISON",
          "event_n_haz_subs_roll" : "1",
          "event_n_haz_id" : 34,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "The cell appears to be empty. Moving inside to get a better look, the Warriors hear a metallic clink behind them - the cell door has shut and locked! Each turn, beginning now, a Warrior may try and pick the lock with an Initiative test (9), or force the cell door open with a Strength test (9). If he fails, an electric shock courses through his body, causing 2D6 +4 damage."
        },
        {
          "event_n_haz_subs_id" : 339,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "ORANGE MIST",
          "event_n_haz_subs_roll" : "3",
          "event_n_haz_id" : 300,
          "event_n_haz_subs_order" : 3,
          "event_n_haz_subs_description" : "The mists turn your Warrior’s sword arm into a pile of jelly.  For the next adventure, his WS is 1."
        },
        {
          "event_n_haz_subs_id" : 32,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "PRISON",
          "event_n_haz_subs_roll" : "2",
          "event_n_haz_id" : 34,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "There was a good reason why the cell was locked. It contained a berserk Barbarian. Have a fight with Barbarian three levels above your Warriors, treating him as berserk automatically each turn. Put him on full Wounds. If the Warriors defeat him, they gain (100 x Barbarian's Battle Level) Gold."
        },
        {
          "event_n_haz_subs_id" : 33,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "PRISON",
          "event_n_haz_subs_roll" : "3",
          "event_n_haz_id" : 34,
          "event_n_haz_subs_order" : 3,
          "event_n_haz_subs_description" : "As soon as a Warrior touches the cell door, his appearance changes from a powerful magical illusion. The Warrior now looks like an Orc. For the rest of this adventure, during the first turn of any combat, The Monsters will ignore this Warrior, and the Warrior is not affected by pinning."
        },
        {
          "event_n_haz_subs_id" : 34,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "PRISON",
          "event_n_haz_subs_roll" : "4",
          "event_n_haz_id" : 34,
          "event_n_haz_subs_order" : 4,
          "event_n_haz_subs_description" : "A scraggly old man thanks your Warriors kindly for releasing him, and gives them 1D6 x 50 Gold reward."
        },
        {
          "event_n_haz_subs_id" : 35,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "PRISON",
          "event_n_haz_subs_roll" : "5",
          "event_n_haz_id" : 34,
          "event_n_haz_subs_order" : 5,
          "event_n_haz_subs_description" : "The Warriors free a respected Nobleman from the clutches of Chaos. As a reward, he offers a Warrior the hand of his daughter in marriage. If he accepts, when he reaches the Settlement roll 1D6. On a roll of 1-5 the daughter rejects your Warrior. On a score of 6 the marriage goes ahead. Your Warrior is now married, and does not have to pay living expenses in any Settlement, as his wife cooks and cleans for him while he is away slaughtering evil. If the Warrior declines the offer of marriage, the Nobleman offers the Warriors lodgings in the next Settlement for free."
        },
        {
          "event_n_haz_subs_id" : 36,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "PRISON",
          "event_n_haz_subs_roll" : "6",
          "event_n_haz_id" : 34,
          "event_n_haz_subs_order" : 6,
          "event_n_haz_subs_description" : "Behind the door is an old abandoned equipment room. Most of the weapons are old and rusted, but there are two items in good shape. Take two Treasure Cards."
        },
        {
          "event_n_haz_subs_id" : 37,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "ALTAR",
          "event_n_haz_subs_roll" : "1",
          "event_n_haz_id" : 38,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "The item disappears. The Warrior waits for something to happen, but to no avail. The Treasure is lost!"
        },
        {
          "event_n_haz_subs_id" : 38,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "ALTAR",
          "event_n_haz_subs_roll" : "6",
          "event_n_haz_id" : 38,
          "event_n_haz_subs_order" : 3,
          "event_n_haz_subs_description" : "The item vanishes, only to be replaced by another such item. Take 1 Treasure Card."
        },
        {
          "event_n_haz_subs_id" : 39,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "ALTAR",
          "event_n_haz_subs_roll" : "2-5",
          "event_n_haz_id" : 38,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "The item of Treasure disappears. A few moments later, a pile of Gold appears in its place. Take 1D3 x 100 Gold."
        },
        {
          "event_n_haz_subs_id" : 40,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "HALL OF DARKNESS",
          "event_n_haz_subs_roll" : "1",
          "event_n_haz_id" : 40,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "It is so dark the Warrior moves backwards 1 square."
        },
        {
          "event_n_haz_subs_id" : 41,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "HALL OF DARKNESS",
          "event_n_haz_subs_roll" : "2",
          "event_n_haz_id" : 40,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "The darkness is so complete that the Warrior moves to the right 1 square."
        },
        {
          "event_n_haz_subs_id" : 42,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "HALL OF DARKNESS",
          "event_n_haz_subs_roll" : "3",
          "event_n_haz_id" : 40,
          "event_n_haz_subs_order" : 3,
          "event_n_haz_subs_description" : "Unable to see in the darkness, the Warrior moves left 1 square."
        },
        {
          "event_n_haz_subs_id" : 43,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "HALL OF DARKNESS",
          "event_n_haz_subs_roll" : "4-6",
          "event_n_haz_id" : 40,
          "event_n_haz_subs_order" : 4,
          "event_n_haz_subs_description" : "The Warrior takes a step forward, hoping that he will soon be out of the darkness."
        },
        {
          "event_n_haz_subs_id" : 44,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "BLACK AND WHITE",
          "event_n_haz_subs_roll" : "1",
          "event_n_haz_id" : 41,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "Black - From the ceiling burst massive streaks of lightning. The Warriors writhe in agony, losing 2D6 Wounds."
        },
        {
          "event_n_haz_subs_id" : 45,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "BLACK AND WHITE",
          "event_n_haz_subs_roll" : "1",
          "event_n_haz_id" : 41,
          "event_n_haz_subs_order" : 7,
          "event_n_haz_subs_description" : "White - From the ceiling burst streaks of lightning. The Warriors writhe in agony, losing 2D6 - 3 Wounds."
        },
        {
          "event_n_haz_subs_id" : 46,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "BLACK AND WHITE",
          "event_n_haz_subs_roll" : "2",
          "event_n_haz_id" : 41,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "Black - The flagstone the Warrior is standing on suddenly starts to drop. Unless the Warrior can pass an Inititave test, he fails to catch hold of the surrounding stones, and falls into a pit. He may be rescued by a rope, or by having the Levitation Spell cast upon him. Otherwise he must remain in the pit for the rest of his days..."
        },
        {
          "event_n_haz_subs_id" : 47,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "BLACK AND WHITE",
          "event_n_haz_subs_roll" : "2",
          "event_n_haz_id" : 41,
          "event_n_haz_subs_order" : 8,
          "event_n_haz_subs_description" : "White -The flagstone the Warrior is standing on suddenly starts to drop. Unless the Warrior can pass an Inititave test, he fails to catch hold of the surrounding stones, and falls into a pit. He may be rescued by a rope, or by having the Levitation Spell cast upon him. Otherwise, in 2D6 turns, the flagstone rises to the surface, and the Warrior is free."
        },
        {
          "event_n_haz_subs_id" : 48,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "BLACK AND WHITE",
          "event_n_haz_subs_roll" : "3",
          "event_n_haz_id" : 41,
          "event_n_haz_subs_order" : 3,
          "event_n_haz_subs_description" : "Black - The Warrior suddenly finds himself encased in a strange clear cylinder, it having shot up out of the ground beneath him. He and his fellow Warriors can try and bash through the casing. Each turn, each Warrior rolls 1D6 and adds his Strength. Keep a record of this score. When the combined score is equal to or greater than 30, the casing shatters, and the Warrior takes 2 Wounds, not modified for anything."
        },
        {
          "event_n_haz_subs_id" : 49,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "BLACK AND WHITE",
          "event_n_haz_subs_roll" : "3",
          "event_n_haz_id" : 41,
          "event_n_haz_subs_order" : 9,
          "event_n_haz_subs_description" : "White -The Warrior suddenly finds himself encased in a strange clear cylinder, it having shot up out of the ground beneath him. He and his fellow Warriors can try and bash through the casing. Each turn, each Warrior rolls 1D6 and adds his Strength. Keep a record of this score. When the combined score is equal to or greater than 20, the casing shatters, and the Warrior takes 1 Wound, not modified for anything."
        },
        {
          "event_n_haz_subs_id" : 50,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "BLACK AND WHITE",
          "event_n_haz_subs_roll" : "4",
          "event_n_haz_id" : 41,
          "event_n_haz_subs_order" : 4,
          "event_n_haz_subs_description" : "Black - Lightning strikes the Warriors' Gold, fusing half of it into a single mass. The Warrior can sell this Gold Nugget in a City, but will only get 50% of it's value."
        },
        {
          "event_n_haz_subs_id" : 51,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "BLACK AND WHITE",
          "event_n_haz_subs_roll" : "4",
          "event_n_haz_id" : 41,
          "event_n_haz_subs_order" : 10,
          "event_n_haz_subs_description" : "White -Lightning strikes the Warriors' Gold, fusing a quarter of it into a single mass. The Warrior can sell this Gold Nugget in a City, but will only get 50% of it's value."
        },
        {
          "event_n_haz_subs_id" : 52,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "BLACK AND WHITE",
          "event_n_haz_subs_roll" : "5",
          "event_n_haz_id" : 41,
          "event_n_haz_subs_order" : 5,
          "event_n_haz_subs_description" : "Black - The Warrior feels a strange tingling sensation by his side, and when he looks down, he finds that his weapon has been replaced by a strange object. Randomly choose an object belonging to the Warrior, and swap it with a randomly chosen object from another Warrior on a black square."
        },
        {
          "event_n_haz_subs_id" : 53,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "BLACK AND WHITE",
          "event_n_haz_subs_roll" : "5",
          "event_n_haz_id" : 41,
          "event_n_haz_subs_order" : 11,
          "event_n_haz_subs_description" : "White -The Warrior feels a strange tingling sensation by his side, and when he looks down, he finds that his weapon has been replaced by a strange object. Randomly choose a non-magical object belonging to the Warrior, and swap it with a randomly chosen non-magical object from another Warrior on a white square."
        },
        {
          "event_n_haz_subs_id" : 54,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "BLACK AND WHITE",
          "event_n_haz_subs_roll" : "6",
          "event_n_haz_id" : 41,
          "event_n_haz_subs_order" : 6,
          "event_n_haz_subs_description" : "Black - With a strange whizzing sound, each Warrior finds himself having swapped places with another Warrior on a black square."
        },
        {
          "event_n_haz_subs_id" : 55,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "BLACK AND WHITE",
          "event_n_haz_subs_roll" : "6",
          "event_n_haz_id" : 41,
          "event_n_haz_subs_order" : 12,
          "event_n_haz_subs_description" : "White -With a strange whizzing sound, the Warrior finds himself having appeared one square alongside another Warrior on a white square."
        },
        {
          "event_n_haz_subs_id" : 56,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "SPEED POTION",
          "event_n_haz_subs_roll" : "1",
          "event_n_haz_id" : 43,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "The Warrior starts to feel sluggish, and he struggles to catch up to the other Warriors. The potion has had an unfortunate side effect, causing the Warrior's Move to be reduced by 1D2, and his To Hit rolls to be decreased by -1."
        },
        {
          "event_n_haz_subs_id" : 57,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "SPEED POTION",
          "event_n_haz_subs_roll" : "2",
          "event_n_haz_id" : 43,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "The potion courses through the Warrior's body, filling him with warmth. Unfortunately, that is all the good it does, as the Warrior suddenly discovers that he cannot move as fast as he used to. His Move is reduced by 1."
        },
        {
          "event_n_haz_subs_id" : 58,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "SPEED POTION",
          "event_n_haz_subs_roll" : "3",
          "event_n_haz_id" : 43,
          "event_n_haz_subs_order" : 3,
          "event_n_haz_subs_description" : "The potion turns out to be a dose of the local beer from the Alehouse. The Warrior ends up drinking the whole lot as it tastes so good."
        },
        {
          "event_n_haz_subs_id" : 59,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "SPEED POTION",
          "event_n_haz_subs_roll" : "4",
          "event_n_haz_id" : 43,
          "event_n_haz_subs_order" : 4,
          "event_n_haz_subs_description" : "The Warrior's reflexes start to speed up, and the other Warriors notice a change come across him. His Move is increased by 1."
        },
        {
          "event_n_haz_subs_id" : 60,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "SPEED POTION",
          "event_n_haz_subs_roll" : "5",
          "event_n_haz_id" : 43,
          "event_n_haz_subs_order" : 5,
          "event_n_haz_subs_description" : "The Warrior's muscles tense, and his eyes open wide. His Move is increased by +2, and he gets an extra attack, as he leaps nimbly around the Monsters."
        },
        {
          "event_n_haz_subs_id" : 61,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "SPEED POTION",
          "event_n_haz_subs_roll" : "6",
          "event_n_haz_id" : 43,
          "event_n_haz_subs_order" : 6,
          "event_n_haz_subs_description" : "The Warrior collapses onto the ground, writhing in a spasm of intense strangeness. Suddenly he sits upright, his eyes darting around, staring intently at his surroundings. He leaps to his feet, and runs around the room a few times, which to the other Warriors, seems to take a few seconds. His Move is now increased by 1D4, and he receives an extra +2 Attacks. In addition, all Monsters are at -1 to hit the Warrior as he speeds blindly around them."
        },
        {
          "event_n_haz_subs_id" : 62,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "SURPRISE",
          "event_n_haz_subs_roll" : "1",
          "event_n_haz_id" : 45,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "The rock shatters, covering the Warrior and another random Warrior in spores. The two Warriors break out in fits of coughing, and it seems they will never stop. They seem to be suffocating! Suddenly they stop, and collapse to the ground, minus 2D6 Wounds."
        },
        {
          "event_n_haz_subs_id" : 63,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "SURPRISE",
          "event_n_haz_subs_roll" : "2",
          "event_n_haz_id" : 45,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "The rock breaks open, and out crawls a horde of Scorpions. There are 2D6 in total."
        },
        {
          "event_n_haz_subs_id" : 64,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "SURPRISE",
          "event_n_haz_subs_roll" : "3",
          "event_n_haz_id" : 45,
          "event_n_haz_subs_order" : 3,
          "event_n_haz_subs_description" : "The rock is hacked at, shot at, stomped on, and thrown against the wall, but it seems to be just a small rock after all."
        },
        {
          "event_n_haz_subs_id" : 65,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "SURPRISE",
          "event_n_haz_subs_roll" : "4",
          "event_n_haz_id" : 45,
          "event_n_haz_subs_order" : 4,
          "event_n_haz_subs_description" : "The small rock splits down the middle, and out tumbles 1D6x50 Gold."
        },
        {
          "event_n_haz_subs_id" : 66,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "SURPRISE",
          "event_n_haz_subs_roll" : "5",
          "event_n_haz_id" : 45,
          "event_n_haz_subs_order" : 5,
          "event_n_haz_subs_description" : "The Warrior is enveloped in a purple gas, which twirls up his nostrils and ears, and swirls around his body. Try as he might, he cannot get rid of it. The gas will remain in play for 1D6 turns, upon which it will dissipate. While enveloped in the gas, the affected Warrior must subtract -1 from his To Hit rolls, but so must any Monsters, as they cannot see him properly to hit him."
        },
        {
          "event_n_haz_subs_id" : 67,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "SURPRISE",
          "event_n_haz_subs_roll" : "6",
          "event_n_haz_id" : 45,
          "event_n_haz_subs_order" : 6,
          "event_n_haz_subs_description" : "The rock cracks in half, revealing... nothing! Frustrated, the Warrior flings the rock at the wall. With a loud explosion, the wall collapses into a pile of rubble, revealing another passageway through it. Shuffle the remaining dungeon cards, and place half of them through the wall. Luckily for the Warriors they found this secret door otherwise they might never have completed their Quest."
        },
        {
          "event_n_haz_subs_id" : 68,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "BOOK OF ...",
          "event_n_haz_subs_roll" : "- 6",
          "event_n_haz_id" : 46,
          "event_n_haz_subs_order" : 12,
          "event_n_haz_subs_description" : "The Warrior reads aloud the words, summoning a Lich to do his bidding. He is placed around the Monsters using the one-on-one rule, and has his turn after all the Warriors' turns. After the battle, he sinks back into the ground."
        },
        {
          "event_n_haz_subs_id" : 69,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "BOOK OF ...",
          "event_n_haz_subs_roll" : "- 5",
          "event_n_haz_id" : 46,
          "event_n_haz_subs_order" : 11,
          "event_n_haz_subs_description" : "The Warrior reads the words inscribed in the book, summoning 1D3 Mummies to do his bidding. They are placed around the Monsters using the one-on-one rule, and have their turn after all the Warriors' turns. After the battle, they sink back into the ground."
        },
        {
          "event_n_haz_subs_id" : 70,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "BOOK OF ...",
          "event_n_haz_subs_roll" : "- 4",
          "event_n_haz_id" : 46,
          "event_n_haz_subs_order" : 10,
          "event_n_haz_subs_description" : "The Warrior reads the words aloud, summoning 1D6 Skeletons to do his bidding. They are placed around the Monsters using the one-on-one rule, and have their turn after all the Warriors' turns. After the battle, they sink back into the ground."
        },
        {
          "event_n_haz_subs_id" : 71,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "BOOK OF ...",
          "event_n_haz_subs_roll" : "- 3",
          "event_n_haz_id" : 46,
          "event_n_haz_subs_order" : 9,
          "event_n_haz_subs_description" : "The Warrior reads aloud the words, summoning 1D6 Zombies to do his bidding. They are placed around the Monsters using the one-on-one rule, and have their turn after all the Warriors' turns. After the battle, they sink back into the ground."
        },
        {
          "event_n_haz_subs_id" : 72,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "BOOK OF ...",
          "event_n_haz_subs_roll" : "- 2",
          "event_n_haz_id" : 46,
          "event_n_haz_subs_order" : 8,
          "event_n_haz_subs_description" : "The Warrior reads the passages aloud, bringing the words to life with his incantation. A wind whips up around the Warriors' legs, slowly building into a fierce hurricane. Although they try to hold on, the wind sweeps them off their feet, and hurls them at the wall. Each Warrior loses 1D8 Wounds, with no modifiers."
        },
        {
          "event_n_haz_subs_id" : 73,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "BOOK OF ...",
          "event_n_haz_subs_roll" : "- 1",
          "event_n_haz_id" : 46,
          "event_n_haz_subs_order" : 7,
          "event_n_haz_subs_description" : "The Warrior senses that something is wrong, when halfway through the first paragraph, a skeletal hand reaches out from the pages and grasps the Warrior around the neck. Gasping for breath, the Warrior tries to pull away, but the hand has a sturdy hold. His fellow Warriors attempt to help him, but an invisible force seems to prevent them. After what seems like an eternity, the hand retracts back into the pages, leaving the Warrior with a charred neck. The Warrior loses 2D6 Wounds with no modifiers, and also 1D4 Permanent Wounds"
        },
        {
          "event_n_haz_subs_id" : 74,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "BOOK OF ...",
          "event_n_haz_subs_roll" : "1",
          "event_n_haz_id" : 46,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "Curses - This Book has long been believed to be lost. Now the Warrior has had the unfortunate luck of discovering it. As long as he carries it (and he cannot get rid of it until he pays 2D6 x 100 Gold at the Temple in a City or a Seaport) he will be at -1 To Hit, and Monsters will always attack the Warrior first. (The Warrior must always have a Monster placed next to him in the Monsters Phase.)"
        },
        {
          "event_n_haz_subs_id" : 75,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "BOOK OF ...",
          "event_n_haz_subs_roll" : "2",
          "event_n_haz_id" : 46,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "Taxes - This magical tome, believed to have been conjured up by the Wizards in service to the City Council, has somehow ended up in the dungeon. While in possession of this book, the Warrior must pay 1D6 x 10 Gold each turn whilst in a Settlement as tax for staying there. No one will voluntarily take the book off him, but he may leave it in the next dungeon he travels to."
        },
        {
          "event_n_haz_subs_id" : 76,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "BOOK OF ...",
          "event_n_haz_subs_roll" : "3",
          "event_n_haz_id" : 46,
          "event_n_haz_subs_order" : 3,
          "event_n_haz_subs_description" : "Poetry - The book contains lovely pages of verse by well known poets of Bretonnia."
        },
        {
          "event_n_haz_subs_id" : 77,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "BOOK OF ...",
          "event_n_haz_subs_roll" : "4",
          "event_n_haz_id" : 46,
          "event_n_haz_subs_order" : 4,
          "event_n_haz_subs_description" : "Smells - As the Warrior flips through the pages of this book, strange smells emanate from the pages, wafting through the dungeon. The Warrior may try and use the book to his advantage in a battle. When fighting Monsters which are not undead, the Warrior may try to disorientate them by opening the book and revealing the smells. At the end of each turn the Warrior decides to use the book, roll 1D6. If the result is greater than the amount of Monsters of a particular type left on the board section, they suffer a -1 penalty To Hit, as they are too busy retching to attempt to hit the Warriors properly. If the result is equal to or less than the number of Monsters, the smell is favourable to the Monsters, and they gain +1 To Hit."
        },
        {
          "event_n_haz_subs_id" : 78,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "BOOK OF ...",
          "event_n_haz_subs_roll" : "5",
          "event_n_haz_id" : 46,
          "event_n_haz_subs_order" : 5,
          "event_n_haz_subs_description" : "Spells - The book crackles and arcs with a peculiar energy. Inside, the archaic writing gives indication of spells from an ancient civilisation. There are 1D6 spells in the book, which can be used once each, before the page crumples and blows away in the wind. Randomly choose the spells from any spells available, from any Characters."
        },
        {
          "event_n_haz_subs_id" : 79,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "BOOK OF ...",
          "event_n_haz_subs_roll" : "6",
          "event_n_haz_id" : 46,
          "event_n_haz_subs_order" : 6,
          "event_n_haz_subs_description" : "The Necronomicon - The book is embossed with magical writings on the front and back of its black leather cover. Inside, the pages are bone white, and contain many incantations. If the Warrior decides to read from the book (he may only do this in a combat, as the book draws its power from death), roll 1D6:"
        },
        {
          "event_n_haz_subs_id" : 80,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "TREASURE PILE",
          "event_n_haz_subs_roll" : "1",
          "event_n_haz_id" : 48,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "Surprise, surprise, the Treasure is indeed a trap. The image vanishes, and the Warrior in question disappears from sight, having fallen through a large hole in the ground. With a loud squelch the Warrior is impaled upon huge metal spikes at the bottom of the pit. He loses 2D6 + 6 Wounds."
        },
        {
          "event_n_haz_subs_id" : 81,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "TREASURE PILE",
          "event_n_haz_subs_roll" : "2",
          "event_n_haz_id" : 48,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "The Treasure suddenly vanishes, and out jump <Roll on the Monster Table>. On top of any of their other special abilities, the Monsters have the Ambush ability."
        },
        {
          "event_n_haz_subs_id" : 82,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "TREASURE PILE",
          "event_n_haz_subs_roll" : "3",
          "event_n_haz_id" : 48,
          "event_n_haz_subs_order" : 3,
          "event_n_haz_subs_description" : "The Treasure seems to be only an illusion, for the Warriors cannot touch it."
        },
        {
          "event_n_haz_subs_id" : 83,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "TREASURE PILE",
          "event_n_haz_subs_roll" : "4",
          "event_n_haz_id" : 48,
          "event_n_haz_subs_order" : 4,
          "event_n_haz_subs_description" : "Most of the Treasure seems to be just lead painted to look like Gold. By scraping the paint of the Treasure, the Warrior gathers enough to sell at a Settlement for 1D6 x 50 Gold."
        },
        {
          "event_n_haz_subs_id" : 84,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "TREASURE PILE",
          "event_n_haz_subs_roll" : "5",
          "event_n_haz_id" : 48,
          "event_n_haz_subs_order" : 5,
          "event_n_haz_subs_description" : "The Warrior manages to find <Pick a Treasure Card>."
        },
        {
          "event_n_haz_subs_id" : 85,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "TREASURE PILE",
          "event_n_haz_subs_roll" : "6",
          "event_n_haz_id" : 48,
          "event_n_haz_subs_order" : 6,
          "event_n_haz_subs_description" : "Their is enough Treasure in the pile for each Warrior to take a Treasure Card."
        },
        {
          "event_n_haz_subs_id" : 86,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "PENTOGRAM",
          "event_n_haz_subs_roll" : "1",
          "event_n_haz_id" : 57,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "A random Warrior reads the incantation aloud. On completion, the book starts to glow, and the pentagram ignites in a burst of flame. Any Warriors standing in the middle 4 squares of the board section are engulfed in flame and must lose 2D6 Wounds, with no modifiers. In addition, the Warrior who reads the book is struck in the face by a huge ball of fire which hurls from the pages. Reeling back in agony, the Warrior loses 3D6 Wounds with no modifiers."
        },
        {
          "event_n_haz_subs_id" : 87,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "PENTOGRAM",
          "event_n_haz_subs_roll" : "2",
          "event_n_haz_id" : 57,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "As the Warrior reads from the pages, the room is plunged into darkness - even the lantern does not throw any light. A voice bellows from the blackness. \"Who dares summon the Champions of Khorne. There shall most definitely be Blood for the Blood God today!\" The room suddenly returns to its original lighting, and the Warriors see two Chaos Champions standing on the pentagram. The Warriors must fight them!"
        },
        {
          "event_n_haz_subs_id" : 88,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "PENTOGRAM",
          "event_n_haz_subs_roll" : "3",
          "event_n_haz_id" : 57,
          "event_n_haz_subs_order" : 3,
          "event_n_haz_subs_description" : "With a blinding flash of light, the book vanishes, and the pentagram begins to pulse with an eerie red light. Strange forms start to coalesce in the middle of the pentagram. When the forms are solid, the Warriors recognise the shapes as <Roll on the Monster Table>. The Monsters demand a fight!"
        },
        {
          "event_n_haz_subs_id" : 89,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "PENTOGRAM",
          "event_n_haz_subs_roll" : "4",
          "event_n_haz_id" : 57,
          "event_n_haz_subs_order" : 4,
          "event_n_haz_subs_description" : "A Chaos Warrior appears in the middle of the pentagram with a puff of smoke. \"I am at your bidding, lords\" he states. The Chaos Warrior will fight in any battles the Warriors have in the remainder of the dungeon, before returning to the Realm of Chaos to serve his God."
        },
        {
          "event_n_haz_subs_id" : 90,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "PENTOGRAM",
          "event_n_haz_subs_roll" : "5",
          "event_n_haz_id" : 57,
          "event_n_haz_subs_order" : 5,
          "event_n_haz_subs_description" : "As a random Warrior chants the passages from the tome, the Warriors notice an object appearing on the pentagram. The object is a small stone statue of Khorne, the Blood God. Whoever carries this statue can call upon the assistance of Khorne at anytime. Khorne will modify any dice roll by ? 1. Each time the stone idol is used, roll 1D6. If a 1 is rolled, the idol becomes red hot, forcing the Warrior to drop it. Upon hitting the floor, the statue shatters, now useless. The statue may be used as many times per turn as the Warriors wish, provided it is not destroyed."
        },
        {
          "event_n_haz_subs_id" : 91,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "PENTOGRAM",
          "event_n_haz_subs_roll" : "6",
          "event_n_haz_id" : 57,
          "event_n_haz_subs_order" : 6,
          "event_n_haz_subs_description" : "With an almighty thunder clap, the entire room starts to shake, and the book bursts in to flames. Aghast, the Warriors take a step backwards, wondering what they have done. Suddenly the floor bursts upwards, and through the gaping hole rises a red figure that is as tall as the room's height. The figure is blood red, and has two crooked horns on the top of its head. It's mouth drips saliva as it opens it to speak. \"Why have you summoned me here?\" When the Warriors do not answer, it continues. \"If you do not have a reason for calling me, then I will go, but beware. Next time you summon me with no reason, you will die!\" Each Warrior must make a Fear test against the Demon's Fear of 12. For each Warrior who passes, they may make one request from the Demon before he goes. A request can be anything the player likes, as long as it is reasonable and does not upset the balance of the game, and all other players are agreed. If the Warrior fails the Fear test, then he is stuck to the spot, as the Demon disappears back into the ground, leaving a gaping hole."
        },
        {
          "event_n_haz_subs_id" : 92,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "TRAP",
          "event_n_haz_subs_roll" : "1",
          "event_n_haz_id" : 63,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "A huge boulder swings from the wall, attached to the ceiling by a strong rope. A random Warrior takes the full force of the blow. The boulder crushes his side, breaking his sword arm and causing 2D6 Wounds with no modifiers. For the rest of this adventure, until it is healed at the Temple for 1D6 x 100 Gold, he cannot use his arm. He may still fight with his other arm, but is treated as having 1 Weapon Skill. The other Warriors must each make an Initiative test to run past the boulder, or risk the same consequences."
        },
        {
          "event_n_haz_subs_id" : 93,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "TRAP",
          "event_n_haz_subs_roll" : "2",
          "event_n_haz_id" : 63,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "An extremely sharp axe blade slices out of the wall, injuring a random Warrior in the stomach. The Warrior must lose (1D6 + Warrior's Battle Level) Wounds and spend 1D3 turns resting. While resting, the Warrior may not move or fight. If he does, he must immediately lose another 1D6 Wounds with no modifiers, and must spend another 1D3 turns resting."
        },
        {
          "event_n_haz_subs_id" : 94,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "TRAP",
          "event_n_haz_subs_roll" : "3",
          "event_n_haz_id" : 63,
          "event_n_haz_subs_order" : 3,
          "event_n_haz_subs_description" : "The wall beside the Warriors suddenly gives way. A random Warrior standing closest to the wall is buried in rubble. He loses (1D6 + Warrior's Battle Level) Wounds."
        },
        {
          "event_n_haz_subs_id" : 95,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "TRAP",
          "event_n_haz_subs_roll" : "4",
          "event_n_haz_id" : 63,
          "event_n_haz_subs_order" : 4,
          "event_n_haz_subs_description" : "From the walls shoot many small sharp darts. Determine how many strike each Warrior by taking a Warrior counter one at a time and rolling 1D6. The number rolled is the number of darts which hit the Warrior, causing 1 Wound each, with no modifiers."
        },
        {
          "event_n_haz_subs_id" : 96,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "TRAP",
          "event_n_haz_subs_roll" : "5",
          "event_n_haz_id" : 63,
          "event_n_haz_subs_order" : 5,
          "event_n_haz_subs_description" : "A random Warrior sets off a trip wire, causing a crossbow bolt to fly across the room and embed itself in the Warriors arm. The Warrior loses 1D6 Wounds."
        },
        {
          "event_n_haz_subs_id" : 97,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "TRAP",
          "event_n_haz_subs_roll" : "6",
          "event_n_haz_id" : 63,
          "event_n_haz_subs_order" : 6,
          "event_n_haz_subs_description" : "Dust is sprayed over the Warriors, causing them to break out in a coughing fit. Their coughs last for the whole of the next turn, in which they may do nothing. If they need to fight, then they are at -2 To Hit, and have -1 Weapon Skill."
        },
        {
          "event_n_haz_subs_id" : 98,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "FURNITURE",
          "event_n_haz_subs_roll" : "1",
          "event_n_haz_id" : 70,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "Bookshelf (3 x 1)"
        },
        {
          "event_n_haz_subs_id" : 99,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "FURNITURE",
          "event_n_haz_subs_roll" : "2",
          "event_n_haz_id" : 70,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "Desk (2 x 3)"
        },
        {
          "event_n_haz_subs_id" : 100,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "FURNITURE",
          "event_n_haz_subs_roll" : "3",
          "event_n_haz_id" : 70,
          "event_n_haz_subs_order" : 3,
          "event_n_haz_subs_description" : "Tomb (2 x 3)"
        },
        {
          "event_n_haz_subs_id" : 101,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "FURNITURE",
          "event_n_haz_subs_roll" : "4",
          "event_n_haz_id" : 70,
          "event_n_haz_subs_order" : 4,
          "event_n_haz_subs_description" : "Weapons Rack (1 x 3)"
        },
        {
          "event_n_haz_subs_id" : 102,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "FURNITURE",
          "event_n_haz_subs_roll" : "5",
          "event_n_haz_id" : 70,
          "event_n_haz_subs_order" : 5,
          "event_n_haz_subs_description" : "Fireplace (1 x 3)"
        },
        {
          "event_n_haz_subs_id" : 103,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "FURNITURE",
          "event_n_haz_subs_roll" : "6",
          "event_n_haz_id" : 70,
          "event_n_haz_subs_order" : 6,
          "event_n_haz_subs_description" : "Altar (2 x 3)"
        },
        {
          "event_n_haz_subs_id" : 104,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "SMUGGLED LOOT",
          "event_n_haz_subs_roll" : "1",
          "event_n_haz_id" : 71,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "Village 1D6 x 100 Gold (Warrior caught on a 6)"
        },
        {
          "event_n_haz_subs_id" : 105,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "SMUGGLED LOOT",
          "event_n_haz_subs_roll" : "2",
          "event_n_haz_id" : 71,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "Town 3D6 x 100 Gold (Warrior caught on a 5-6)"
        },
        {
          "event_n_haz_subs_id" : 106,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "SMUGGLED LOOT",
          "event_n_haz_subs_roll" : "3",
          "event_n_haz_id" : 71,
          "event_n_haz_subs_order" : 3,
          "event_n_haz_subs_description" : "City or Seaport 6D6 x 100 Gold (Warrior caught on a 4-6)"
        },
        {
          "event_n_haz_subs_id" : 107,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "BAD LUCK",
          "event_n_haz_subs_roll" : "1",
          "event_n_haz_id" : 75,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "Roll 1D6. If a one is rolled, a random Warrior drops his backpack down a well. If the Warriors have a rope, they may retrieve it safely, except that all provisions and bandages are soaked with water and must be discarded. If not, then the backpack is gone, along with all the Warrior's equipment, Gold, etc."
        },
        {
          "event_n_haz_subs_id" : 108,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "BAD LUCK",
          "event_n_haz_subs_roll" : "2",
          "event_n_haz_id" : 75,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "A Warrior trips over a rock, falling into the other Warriors, and knocking them over as well. They must spend a turn picking themselves up. While down, any Monsters can hit them automatically."
        },
        {
          "event_n_haz_subs_id" : 109,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "BAD LUCK",
          "event_n_haz_subs_roll" : "3",
          "event_n_haz_id" : 75,
          "event_n_haz_subs_order" : 3,
          "event_n_haz_subs_description" : "A portcullis slams shut behind the Warriors. If they do not have key, they must search for a secret door as explained in White Dwarf 185 or 189."
        },
        {
          "event_n_haz_subs_id" : 340,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "ORANGE MIST",
          "event_n_haz_subs_roll" : "4",
          "event_n_haz_id" : 300,
          "event_n_haz_subs_order" : 4,
          "event_n_haz_subs_description" : "The mists turn your Warrior’s arms into thick muscled bulging limbs. For the next adventure, your Warrior has +2 Strength and +1 WS."
        },
        {
          "event_n_haz_subs_id" : 110,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "BAD LUCK",
          "event_n_haz_subs_roll" : "4",
          "event_n_haz_id" : 75,
          "event_n_haz_subs_order" : 4,
          "event_n_haz_subs_description" : "There seems to be hole in a Warrior's backpack. The Warrior has already lost 1D6 x 50 Gold. Until it can be mended (by sticking a bandage on it or some other ingenious method), each turn the Warrior will lose 1D6 Gold."
        },
        {
          "event_n_haz_subs_id" : 111,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "BAD LUCK",
          "event_n_haz_subs_roll" : "5",
          "event_n_haz_id" : 75,
          "event_n_haz_subs_order" : 5,
          "event_n_haz_subs_description" : "The next battle the Warriors are in, one of them will sneeze, alerting the Monsters, and giving them the Ambush ability."
        },
        {
          "event_n_haz_subs_id" : 112,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "BAD LUCK",
          "event_n_haz_subs_roll" : "6",
          "event_n_haz_id" : 75,
          "event_n_haz_subs_order" : 6,
          "event_n_haz_subs_description" : "One of the Warriors trips over and bangs his head on a large rock. For the rest of the adventure he has amnesia. He will perform the opposite of his character. For example, if he is a Troll Slayer he will try to run away each turn. If he is a Wizard, he cannot remember how to cast any spells. Amnesia can be cured at a Temple for 1D6 x 50 Gold."
        },
        {
          "event_n_haz_subs_id" : 113,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "STREAM",
          "event_n_haz_subs_roll" : "1",
          "event_n_haz_id" : 80,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "The river is polluted, as it used as the toiletry facilities of the local Monsters who frequent it often. Each Warrior who drunk loses 1D6 Wounds immediately with no modifiers for armour."
        },
        {
          "event_n_haz_subs_id" : 114,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "STREAM",
          "event_n_haz_subs_roll" : "2",
          "event_n_haz_id" : 80,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "The river does not contain water, but the polluted run-off from a nearby Dwarven experiment. Each Warrior who drunk from it loses 3 Wounds immediately, with no modifiers."
        },
        {
          "event_n_haz_subs_id" : 115,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "STREAM",
          "event_n_haz_subs_roll" : "5",
          "event_n_haz_id" : 80,
          "event_n_haz_subs_order" : 4,
          "event_n_haz_subs_description" : "The water tastes great. Each Warrior gains 1D6 Wounds if he drank from the stream."
        },
        {
          "event_n_haz_subs_id" : 116,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "STREAM",
          "event_n_haz_subs_roll" : "6",
          "event_n_haz_id" : 80,
          "event_n_haz_subs_order" : 5,
          "event_n_haz_subs_description" : "Imbued with the magical healing properties of the Elves, each Warrior who drunk from the stream is immediately healed back up to his Starting quota of Wounds."
        },
        {
          "event_n_haz_subs_id" : 117,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "STREAM",
          "event_n_haz_subs_roll" : "3-4",
          "event_n_haz_id" : 80,
          "event_n_haz_subs_order" : 3,
          "event_n_haz_subs_description" : "The water is nice and refreshing after the long hard battles of the dungeon."
        },
        {
          "event_n_haz_subs_id" : 118,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "IDOL",
          "event_n_haz_subs_roll" : "1",
          "event_n_haz_id" : 81,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "A loud thunderclap booms out, and a streak of white lightning appears from nowhere, striking the Warrior with full force in the chest. He immediately loses 2 Wounds per Battle Level with no modifiers for anything."
        },
        {
          "event_n_haz_subs_id" : 119,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "IDOL",
          "event_n_haz_subs_roll" : "2",
          "event_n_haz_id" : 81,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "As the Warrior is praying, the idol somehow dislodges from the altar and topples on to the Warrior. He must lose (1D6 + Battle Level) Wounds. After dusting himself off, he places the idol back onto the altar."
        },
        {
          "event_n_haz_subs_id" : 120,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "IDOL",
          "event_n_haz_subs_roll" : "3",
          "event_n_haz_id" : 81,
          "event_n_haz_subs_order" : 3,
          "event_n_haz_subs_description" : "The Gods are happy. The Warrior gains 1D6 Wounds."
        },
        {
          "event_n_haz_subs_id" : 121,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "IDOL",
          "event_n_haz_subs_roll" : "4",
          "event_n_haz_id" : 81,
          "event_n_haz_subs_order" : 4,
          "event_n_haz_subs_description" : "The Gods are pleased. The Warrior gains 2D6 Wounds."
        },
        {
          "event_n_haz_subs_id" : 122,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "IDOL",
          "event_n_haz_subs_roll" : "5",
          "event_n_haz_id" : 81,
          "event_n_haz_subs_order" : 5,
          "event_n_haz_subs_description" : "The Warrior prays to the idol. Suddenly the idol's eyes light up, and the Warrior feels a warm glow spread throughout his body. He immediately is healed up to his maximum Wounds."
        },
        {
          "event_n_haz_subs_id" : 123,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "IDOL",
          "event_n_haz_subs_roll" : "6",
          "event_n_haz_id" : 81,
          "event_n_haz_subs_order" : 6,
          "event_n_haz_subs_description" : "The Warrior's prayers are answered. The Warrior may choose one of the following:  Gain 1D6 Permanent Wound,  Restore Wounds to maximum,  Gain +1 Toughness,  Gain +1 Weapon Skill or  Gain +1 Move"
        },
        {
          "event_n_haz_subs_id" : 124,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "MEDICAL SUPPLIES",
          "event_n_haz_subs_roll" : "1",
          "event_n_haz_id" : 82,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "The box opens with a faint click. Too late, a random Warrior realises that he has been the victim of a trap. He loses 1D3 Wounds immediately with no modifiers."
        },
        {
          "event_n_haz_subs_id" : 125,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "MEDICAL SUPPLIES",
          "event_n_haz_subs_roll" : "2",
          "event_n_haz_id" : 82,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "The box is empty."
        },
        {
          "event_n_haz_subs_id" : 126,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "MEDICAL SUPPLIES",
          "event_n_haz_subs_roll" : "3",
          "event_n_haz_id" : 82,
          "event_n_haz_subs_order" : 3,
          "event_n_haz_subs_description" : "The box contains 1D3 bandages and 1D3 provisions."
        },
        {
          "event_n_haz_subs_id" : 127,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "MEDICAL SUPPLIES",
          "event_n_haz_subs_roll" : "4",
          "event_n_haz_id" : 82,
          "event_n_haz_subs_order" : 4,
          "event_n_haz_subs_description" : "Inside the box is 1D6 bandages and 1D6 provisions."
        },
        {
          "event_n_haz_subs_id" : 128,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "MEDICAL SUPPLIES",
          "event_n_haz_subs_roll" : "5",
          "event_n_haz_id" : 82,
          "event_n_haz_subs_order" : 5,
          "event_n_haz_subs_description" : "The box contains 1D6 bandages and 1D6 provisions. Also, underneath everything, the Warriors find a healing potion. There is enough for 2 uses. Each use heals a Warrior of 1D6 Wounds."
        },
        {
          "event_n_haz_subs_id" : 129,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "MEDICAL SUPPLIES",
          "event_n_haz_subs_roll" : "6",
          "event_n_haz_id" : 82,
          "event_n_haz_subs_order" : 6,
          "event_n_haz_subs_description" : "Inside the box sits a pair of small glowing jewels. The Warriors recognise them as Gems of Life! (A pair of gems, one is worn, the other is kept in safety.  If the wearer dies, he is stored in the gem, and when the two are brought back together, the warrior is restored to life, as the gems crumble.  Only mundane equipment is left behind.)"
        },
        {
          "event_n_haz_subs_id" : 130,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "SKELETAL REMAINS",
          "event_n_haz_subs_roll" : "1",
          "event_n_haz_id" : 83,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "\"Leave it be. It is mine!\" A hollow voice rings out around the room. Suddenly the bones start to move, and reform into 2D6 Skeleton Warriors, each armed with a sword. Leading them is a <If the Warriors are between Battle Level 1 and 5, a Mummy, otherwise a Tomb King>. If the Warriors defeat the skeletons they may make a roll on the Monster Magic Items Table. The item they acquire can be used once per Adventure and is worth 800 Gold."
        },
        {
          "event_n_haz_subs_id" : 131,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "SKELETAL REMAINS",
          "event_n_haz_subs_roll" : "2",
          "event_n_haz_id" : 83,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "While the Warrior has his arm in the pile of bones, reaching for the item, they suddenly animate. The Warrior loses 1D6 Wounds trying to extract his arm form the mass. The bones animate into 1D6 Skeleton Warriors, each armed with a sword. If the Warriors win, they may take 1 Treasure Card."
        },
        {
          "event_n_haz_subs_id" : 132,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "SKELETAL REMAINS",
          "event_n_haz_subs_roll" : "3",
          "event_n_haz_id" : 83,
          "event_n_haz_subs_order" : 3,
          "event_n_haz_subs_description" : "Embarrassingly, the Warrior gets his hand caught in the bone pile and the other Warriors must pull it out. Unfortunately, he finds nothing."
        },
        {
          "event_n_haz_subs_id" : 133,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "SKELETAL REMAINS",
          "event_n_haz_subs_roll" : "4",
          "event_n_haz_id" : 83,
          "event_n_haz_subs_order" : 4,
          "event_n_haz_subs_description" : "After much rummaging around, the Warrior finds 1D6 x 20 Gold."
        },
        {
          "event_n_haz_subs_id" : 134,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "SKELETAL REMAINS",
          "event_n_haz_subs_roll" : "5",
          "event_n_haz_id" : 83,
          "event_n_haz_subs_order" : 5,
          "event_n_haz_subs_description" : "The Warrior finds 2D6 x 20 Gold."
        },
        {
          "event_n_haz_subs_id" : 135,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "SKELETAL REMAINS",
          "event_n_haz_subs_roll" : "6",
          "event_n_haz_id" : 83,
          "event_n_haz_subs_order" : 6,
          "event_n_haz_subs_description" : "The Warrior finds a small ring. When worn, it points the wearer to untold riches. After each battle, roll 1D6 and multiply the result by 10. This is the extra Gold the Warrior has found. If the dice scores a one, then he has found nothing."
        },
        {
          "event_n_haz_subs_id" : 136,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "SPIDER WEBS",
          "event_n_haz_subs_roll" : "1",
          "event_n_haz_id" : 84,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "A Gigantic Spider, alerting by the Warriors movement attacks, aided by 1D6 Giant Spiders."
        },
        {
          "event_n_haz_subs_id" : 137,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "SPIDER WEBS",
          "event_n_haz_subs_roll" : "2",
          "event_n_haz_id" : 84,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "A Gigantic Spider crawls out from beneath a web, attacking the Warriors."
        },
        {
          "event_n_haz_subs_id" : 138,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "SPIDER WEBS",
          "event_n_haz_subs_roll" : "3",
          "event_n_haz_id" : 84,
          "event_n_haz_subs_order" : 3,
          "event_n_haz_subs_description" : "Giant Spiders approach the Warriors from all angles and attack. Place a Giant Spider miniature next to each Warrior on this board section."
        },
        {
          "event_n_haz_subs_id" : 139,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "SPIDER WEBS",
          "event_n_haz_subs_roll" : "4-6",
          "event_n_haz_id" : 84,
          "event_n_haz_subs_order" : 4,
          "event_n_haz_subs_description" : "Spying beady eyes looking at them from beneath the webs, the Warriors hurry onwards."
        },
        {
          "event_n_haz_subs_id" : 140,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "MESSENGER",
          "event_n_haz_subs_roll" : "1-3",
          "event_n_haz_id" : 86,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "The messenger informs them that their adventure has already been completed. He says a group of Warriors returned two days ago, having finished the adventure. This is bad luck for the Warriors!. If they continue their adventure, when they get to the Objective Room, there will be no Monsters, and they may exit the dungeon. This means of course, that they get no reward, except 1D6 x 10 Gold for their troubles."
        },
        {
          "event_n_haz_subs_id" : 141,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "MESSENGER",
          "event_n_haz_subs_roll" : "4-6",
          "event_n_haz_id" : 86,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "The Messenger brings a message from <whoever sent them on this adventure>. He says they have new information that forces have been massing to totally eliminate the Warriors. Because of this, any reward they were to have received has been doubled! With this in mind, the Warriors may either turn back or continue. If they reach the Objective Room, there are more Monsters waiting for them. Roll again on the Monster Table one Battle Level higher than the Warriors. They still only receive one Objective Room Treasure Card though."
        },
        {
          "event_n_haz_subs_id" : 373,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "CHAPEL",
          "event_n_haz_subs_roll" : "6",
          "event_n_haz_id" : 125,
          "event_n_haz_subs_order" : 3,
          "event_n_haz_subs_description" : "The Gods are pleased.  Gain 1 Permanent Wound."
        },
        {
          "event_n_haz_subs_id" : 142,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "WHISPERS",
          "event_n_haz_subs_roll" : "1",
          "event_n_haz_id" : 89,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "The Warriors barge through the door, just in time to see two Snotlings giggling at them and pointing above the Warriors' heads. The Warriors look up to see two huge boulders falling from the ceiling. Draw two Warrior counters to see who the boulders hit. Each Warrior who has been hit loses 2D6 Wounds with no modifiers. Groaning, the Warriors pick themselves up and look around for the Snotlings, but they have long since vanished."
        },
        {
          "event_n_haz_subs_id" : 143,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "WHISPERS",
          "event_n_haz_subs_roll" : "2",
          "event_n_haz_id" : 89,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "The first Warrior who walks through the door (determine randomly) activates a trip wire. Fortunately for him he trips over , and a crossbow bolt plunges into the Warrior standing behind him (again determine randomly) causing (1D6 + Battle Level) Wounds."
        },
        {
          "event_n_haz_subs_id" : 144,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "WHISPERS",
          "event_n_haz_subs_roll" : "3",
          "event_n_haz_id" : 89,
          "event_n_haz_subs_order" : 3,
          "event_n_haz_subs_description" : "As the Warriors enter the room they think they spot two ghostly figures floating off into the shadows. If the Warriors call out, two Ghosts emerge and attack the Warriors. Otherwise, the Warriors can leave the room."
        },
        {
          "event_n_haz_subs_id" : 145,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "WHISPERS",
          "event_n_haz_subs_roll" : "4",
          "event_n_haz_id" : 89,
          "event_n_haz_subs_order" : 4,
          "event_n_haz_subs_description" : "The Warriors interrupt two Orcs arguing about some treasure. One seems to think that he is the rightful owner of the dagger, but the other one insists that it is his property. Make an Initiative test for all the Warriors. If any pass, then they tell the Orcs to look for a name on the dagger. \"Oy, we didn't fink of dat!\" Inscribed on the hilt of the dagger are the words \"Dis killin' thing is mine.\" \"See\", says one of the Orcs, \"It is mine!\" \"No, mine!\" bellows the other Orc. The Warriors leave the room in confusement."
        },
        {
          "event_n_haz_subs_id" : 146,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "WHISPERS",
          "event_n_haz_subs_roll" : "5",
          "event_n_haz_id" : 89,
          "event_n_haz_subs_order" : 5,
          "event_n_haz_subs_description" : "Behind the door, the Warriors see more rooms and passageways of the dungeon. Divide the remaining dungeon cards in two, and place half behind this door. The Warriors now have two choices as to where the Objective Room might be."
        },
        {
          "event_n_haz_subs_id" : 147,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "WHISPERS",
          "event_n_haz_subs_roll" : "6",
          "event_n_haz_id" : 89,
          "event_n_haz_subs_order" : 6,
          "event_n_haz_subs_description" : "As the door slowly opens, sunlight streams into the dungeon. The Warriors have found the exit! If they wish, they may now leave the dungeon and make their way to the nearest Settlement. If they choose to complete their quest, for the rest of this adventure if the Warriors ever need to roll on the escaping table, they may add +2 to their dice roll."
        },
        {
          "event_n_haz_subs_id" : 148,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "TREASURE HORDE",
          "event_n_haz_subs_roll" : "1",
          "event_n_haz_id" : 98,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "Roll as many D6s as you like and multiply the result by 10. However, if any dice come up with a 1 then the Warrior gets nothing."
        },
        {
          "event_n_haz_subs_id" : 149,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "TREASURE HORDE",
          "event_n_haz_subs_roll" : "2",
          "event_n_haz_id" : 98,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "Roll as many D6s as you like and multiply the result by 10. However, if any dice come up with a 1 then the Warrior gets nothing."
        },
        {
          "event_n_haz_subs_id" : 150,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "TREASURE HORDE",
          "event_n_haz_subs_roll" : "3",
          "event_n_haz_id" : 98,
          "event_n_haz_subs_order" : 3,
          "event_n_haz_subs_description" : "Roll on the Magic Items Table in the Warhammer Quest Roleplay Book."
        },
        {
          "event_n_haz_subs_id" : 151,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "TREASURE HORDE",
          "event_n_haz_subs_roll" : "4",
          "event_n_haz_id" : 98,
          "event_n_haz_subs_order" : 4,
          "event_n_haz_subs_description" : "Roll on the Magic Weapons and Armour Table in the Warhammer Quest Roleplay Book."
        },
        {
          "event_n_haz_subs_id" : 152,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "TREASURE HORDE",
          "event_n_haz_subs_roll" : "5",
          "event_n_haz_id" : 98,
          "event_n_haz_subs_order" : 5,
          "event_n_haz_subs_description" : "Draw two Treasure Cards."
        },
        {
          "event_n_haz_subs_id" : 153,
          "event_n_haz_subs_type" : "dungeon event",
          "event_n_haz_subs_name" : "TREASURE HORDE",
          "event_n_haz_subs_roll" : "6",
          "event_n_haz_id" : 98,
          "event_n_haz_subs_order" : 6,
          "event_n_haz_subs_description" : "Roll as many D6s as you wish and multiply the result by 100. However, if any dice come up with a 1 or a 2, roll the same number of dice again, multiply by 100 and subtract it from the first result. If the resulting number is less than zero then treat it as zero. The final result is the amount of Gold the Warrior finds."
        },
        {
          "event_n_haz_subs_id" : 154,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "ELEPHANT",
          "event_n_haz_subs_roll" : "1-2",
          "event_n_haz_id" : 202,
          "event_n_haz_subs_order" : 5,
          "event_n_haz_subs_description" : "Your Warrior leaps out in front of the elephant, weapon drawn. The beast hesitates for a moment, then tramples Your Warrior into the ground. The villagers, in their eagerness to catch the escaped elephant stomp all over your Warrior and leave him lying on the ground, nursing 1D6 Wounds."
        },
        {
          "event_n_haz_subs_id" : 155,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "ELEPHANT",
          "event_n_haz_subs_roll" : "1-3",
          "event_n_haz_id" : 202,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "The elephant turns down the same alley as your Warrior. With a bellow, the elephant stomps right over your unfortunate Warrior, causing 1D6 Wounds."
        },
        {
          "event_n_haz_subs_id" : 156,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "ELEPHANT",
          "event_n_haz_subs_roll" : "3-4",
          "event_n_haz_id" : 202,
          "event_n_haz_subs_order" : 6,
          "event_n_haz_subs_description" : "Your Warrior jumps out in front of the beast, a plan formulating in his mind, but before he can do anything, the elephant heads off in the other direction! After looking befuddled for a few moments, your Warrior shrugs and then goes on about his business."
        },
        {
          "event_n_haz_subs_id" : 157,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "ELEPHANT",
          "event_n_haz_subs_roll" : "4-6",
          "event_n_haz_id" : 202,
          "event_n_haz_subs_order" : 3,
          "event_n_haz_subs_description" : "The elephant rushes down the main street, people from the nearby circus chasing after it. Your Warrior is safe."
        },
        {
          "event_n_haz_subs_id" : 158,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "ELEPHANT",
          "event_n_haz_subs_roll" : "5-6",
          "event_n_haz_id" : 202,
          "event_n_haz_subs_order" : 7,
          "event_n_haz_subs_description" : "Your Warrior draws his weapon and approaches the elephant. The beast stops for a second, wondering about this new obstacle in its path, but that is all Your Warrior needs. With a flourish, your Warrior slams the hilt of his weapon into the beasts skull, knocking it out cold. The crowd chasing it thank you kindly, and hand you a reward of 50 gold."
        },
        {
          "event_n_haz_subs_id" : 159,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "ELEPHANT",
          "event_n_haz_subs_roll" : "-",
          "event_n_haz_id" : 202,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "If your Warrior hides down an alley and lets it pass:"
        },
        {
          "event_n_haz_subs_id" : 160,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "ELEPHANT",
          "event_n_haz_subs_roll" : "-",
          "event_n_haz_id" : 202,
          "event_n_haz_subs_order" : 4,
          "event_n_haz_subs_description" : "If your Warrior tries to stop the elephant:"
        },
        {
          "event_n_haz_subs_id" : 161,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "TALENT QUEST",
          "event_n_haz_subs_roll" : "1",
          "event_n_haz_id" : 204,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "Your Warrior begins a rendition of “Romity and Iggiette”, a love poem about two Ogres who couldn’t be together because of different coloured warts, written by Hefty GigBig, Ogre Entrepreneur.  A trapdoor, which was specifically designed for these type of occurrences, deposits Your Warrior in a dark pit full of less fortunate entertainer’s bones.  The fall and humiliation contribute to a loss of 1D6 Wounds.  Your Warrior climbs out on top of all the bones."
        },
        {
          "event_n_haz_subs_id" : 162,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "TALENT QUEST",
          "event_n_haz_subs_roll" : "2",
          "event_n_haz_id" : 204,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "Your Warrior bursts into his favourite chorus from the well known Alehouse jig, “The Goblin Hunter and his Squig.”, by Uggy Brittlebot, well renown (for something anyway) Goblin Poet.   The rotten tomatoes from the crowd do 1 Wound damage(no modifiers)."
        },
        {
          "event_n_haz_subs_id" : 163,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "TALENT QUEST",
          "event_n_haz_subs_roll" : "3",
          "event_n_haz_id" : 204,
          "event_n_haz_subs_order" : 3,
          "event_n_haz_subs_description" : "As he is about to make his debut, Your Warrior is overcome with stage fright.  He decides it would be in his best interests to change his mind and watch other entertainers make fools of themselves."
        },
        {
          "event_n_haz_subs_id" : 164,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "TALENT QUEST",
          "event_n_haz_subs_roll" : "4",
          "event_n_haz_id" : 204,
          "event_n_haz_subs_order" : 4,
          "event_n_haz_subs_description" : "Your Warrior’s tap dance routine raises a few laughs (which it wasn’t supposed to do).  As he leaves the stage, he collects 20 gold which was tossed at him."
        },
        {
          "event_n_haz_subs_id" : 165,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "TALENT QUEST",
          "event_n_haz_subs_roll" : "5",
          "event_n_haz_id" : 204,
          "event_n_haz_subs_order" : 5,
          "event_n_haz_subs_description" : "Your Warrior sings a lovely tune about blue birds and golden dew drops in the morning sun.  After the hardened barbarians and pirates have stopped gagging, the women in the audience gift Your Warrior with flowers, kisses, and a small gathering of 1D6 x 10 gold."
        },
        {
          "event_n_haz_subs_id" : 166,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "TALENT QUEST",
          "event_n_haz_subs_roll" : "6",
          "event_n_haz_id" : 204,
          "event_n_haz_subs_order" : 6,
          "event_n_haz_subs_description" : "After performing a segment from the masterful production of Drachenfels by Detlef Sierck, master theatre writer and performer, Your Warrior receives a standing ovation for his soliloquy.  He receives an offer from an interested contractor, asking if he would like to stay a week and perform for him.  If Your Warrior wishes this, he must spend another seven days in town.  During this time, he can’t visit any Special Locations or a Trader.  At the end, he receives a handsome fee of 1D6 x 100 gold for the use of his epic talent."
        },
        {
          "event_n_haz_subs_id" : 167,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "MEDICINE MAN",
          "event_n_haz_subs_roll" : "1",
          "event_n_haz_id" : 205,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "The strange green potion which claims to be “The One True Elixir of Life” turns out to be a poison of some sort. From now on at the end of each turn, your Warrior loses 1 Wound until healed at either a town or a city for 300 gold."
        },
        {
          "event_n_haz_subs_id" : 168,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "MEDICINE MAN",
          "event_n_haz_subs_roll" : "2",
          "event_n_haz_id" : 205,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "The potion your Warrior has bought is a dud! It tastes more like urine than “Nectar of the Gods.” Your Warrior spits it out in disgust and walks off. If this event ever comes up again, your Warrior will refuse to buy another potion."
        },
        {
          "event_n_haz_subs_id" : 169,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "MEDICINE MAN",
          "event_n_haz_subs_roll" : "3",
          "event_n_haz_id" : 205,
          "event_n_haz_subs_order" : 3,
          "event_n_haz_subs_description" : "The potion tastes pleasant but no noticeable effect can be observed by your Warrior."
        },
        {
          "event_n_haz_subs_id" : 170,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "MEDICINE MAN",
          "event_n_haz_subs_roll" : "4",
          "event_n_haz_id" : 205,
          "event_n_haz_subs_order" : 4,
          "event_n_haz_subs_description" : "The potion is a healing potion which cures 2  Wounds."
        },
        {
          "event_n_haz_subs_id" : 171,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "MEDICINE MAN",
          "event_n_haz_subs_roll" : "5",
          "event_n_haz_id" : 205,
          "event_n_haz_subs_order" : 5,
          "event_n_haz_subs_description" : "Your Warrior buys a bottle marked “Fyting Poshun”. Unable to decipher it’s strange meaning, your Warrior gulps it down in one go. Immediately he feels nauseous, but then the feeling passes and he feels like he could fight anything. For the next dungeon your Warrior gains +1 to his to hit rolls."
        },
        {
          "event_n_haz_subs_id" : 172,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "MEDICINE MAN",
          "event_n_haz_subs_roll" : "6",
          "event_n_haz_id" : 205,
          "event_n_haz_subs_order" : 6,
          "event_n_haz_subs_description" : "The Warrior asks for a strange green potion but the medicine man gives him the one next to it by mistake. Hesitantly, your Warrior takes a mouthful, then finding it refreshing drinks the whole lot. For the next dungeon if your Warrior rolls a natural 6 to hit he inflicts an extra 2 Wounds in battle."
        },
        {
          "event_n_haz_subs_id" : 173,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "DEAD BODY",
          "event_n_haz_subs_roll" : "1",
          "event_n_haz_id" : 206,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "As your Warrior bends down to look at the body, it jumps up surprising your Warrior and tries to steal his gold. A struggle ensues. Roll 1D6 for the bandit and 1D6 for your Warrior. The highest number wins. If the bandit wins he manages to steal 200 gold before being smacked up by your Warrior and runs away. If your Warrior wins he gives the bandit a kick up the backside and continues on his way.  Reroll both dice if they come up the same."
        },
        {
          "event_n_haz_subs_id" : 174,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "DEAD BODY",
          "event_n_haz_subs_roll" : "2",
          "event_n_haz_id" : 206,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "As your Warrior turns the body over, it’s hand reaches up and clasps onto your Warrior’s arm. It sits upright, and your Warrior realises it is a Dark Elf. Fight a battle with 1 Dark Elf Warrior (no crossbow) using a dungeon passageway as the combat zone. If your Warrior wins, do not take a Treasure Card."
        },
        {
          "event_n_haz_subs_id" : 175,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "DEAD BODY",
          "event_n_haz_subs_roll" : "3",
          "event_n_haz_id" : 206,
          "event_n_haz_subs_order" : 3,
          "event_n_haz_subs_description" : "A few villagers notice you searching the body. Unwilling  to cause an incident you move away."
        },
        {
          "event_n_haz_subs_id" : 176,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "DEAD BODY",
          "event_n_haz_subs_roll" : "4",
          "event_n_haz_id" : 206,
          "event_n_haz_subs_order" : 4,
          "event_n_haz_subs_description" : "The body is only that of an old man. You find 1D6 x 5 gold."
        },
        {
          "event_n_haz_subs_id" : 177,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "DEAD BODY",
          "event_n_haz_subs_roll" : "5",
          "event_n_haz_id" : 206,
          "event_n_haz_subs_order" : 5,
          "event_n_haz_subs_description" : "The body is that of a well respected nobleman of the Settlement. You hurriedly search his body and find 1D6 x 100 gold."
        },
        {
          "event_n_haz_subs_id" : 178,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "DEAD BODY",
          "event_n_haz_subs_roll" : "6",
          "event_n_haz_id" : 206,
          "event_n_haz_subs_order" : 6,
          "event_n_haz_subs_description" : "A strange aura surrounds the body. Unperturbed, your Warrior searches the body and his eyes light up at what he finds. Take 1 Treasure Card."
        },
        {
          "event_n_haz_subs_id" : 179,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "MISTAKEN IDENTITY",
          "event_n_haz_subs_roll" : "1",
          "event_n_haz_id" : 212,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "The gentleman suddenly remembers that it was actually (amount x 2) gold that you had borrowed and demands it immediately."
        },
        {
          "event_n_haz_subs_id" : 180,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "MISTAKEN IDENTITY",
          "event_n_haz_subs_roll" : "2",
          "event_n_haz_id" : 212,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "No matter how hard your Warrior tries to convince the man of his error he refuses to give in. Roll again on this chart, adding +1 to the roll."
        },
        {
          "event_n_haz_subs_id" : 181,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "MISTAKEN IDENTITY",
          "event_n_haz_subs_roll" : "3",
          "event_n_haz_id" : 212,
          "event_n_haz_subs_order" : 3,
          "event_n_haz_subs_description" : "The man agrees to accept half (rounding up) of the money."
        },
        {
          "event_n_haz_subs_id" : 182,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "MISTAKEN IDENTITY",
          "event_n_haz_subs_roll" : "4",
          "event_n_haz_id" : 212,
          "event_n_haz_subs_order" : 4,
          "event_n_haz_subs_description" : "The man agrees to accept 100 gold as payment of your Warrior’s debt to him.."
        },
        {
          "event_n_haz_subs_id" : 183,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "MISTAKEN IDENTITY",
          "event_n_haz_subs_roll" : "5",
          "event_n_haz_id" : 212,
          "event_n_haz_subs_order" : 5,
          "event_n_haz_subs_description" : "After telling him that your Warrior cannot possibly pay him the money the man says that your Warrior does not have to pay him the money.....for now.  If this event happens to your Warrior again do not roll. You must pay the man back his money, or if you do not have enough, Treasure Cards equalling it’s value."
        },
        {
          "event_n_haz_subs_id" : 184,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "MISTAKEN IDENTITY",
          "event_n_haz_subs_roll" : "6",
          "event_n_haz_id" : 212,
          "event_n_haz_subs_order" : 6,
          "event_n_haz_subs_description" : "Your Warrior finally convinces the man that he has the wrong person. After apologising profusely he moves off down the street, and into the Alehouse."
        },
        {
          "event_n_haz_subs_id" : 185,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "URCHINS",
          "event_n_haz_subs_roll" : "1",
          "event_n_haz_id" : 217,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "All his gold"
        },
        {
          "event_n_haz_subs_id" : 186,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "URCHINS",
          "event_n_haz_subs_roll" : "2",
          "event_n_haz_id" : 217,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "1 Treasure Card Weapon"
        },
        {
          "event_n_haz_subs_id" : 187,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "URCHINS",
          "event_n_haz_subs_roll" : "3",
          "event_n_haz_id" : 217,
          "event_n_haz_subs_order" : 3,
          "event_n_haz_subs_description" : "1 Treasure Card (if have none other than Treasure Card Weapons, then 1 Treasure Card Weapon.)"
        },
        {
          "event_n_haz_subs_id" : 188,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "URCHINS",
          "event_n_haz_subs_roll" : "4",
          "event_n_haz_id" : 217,
          "event_n_haz_subs_order" : 4,
          "event_n_haz_subs_description" : "Your starting item of equipment. (If lantern, may buy another at the General Store for 200 gold, stock 5.)"
        },
        {
          "event_n_haz_subs_id" : 189,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "URCHINS",
          "event_n_haz_subs_roll" : "5",
          "event_n_haz_id" : 217,
          "event_n_haz_subs_order" : 5,
          "event_n_haz_subs_description" : "(1D6 x 200) gold"
        },
        {
          "event_n_haz_subs_id" : 190,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "URCHINS",
          "event_n_haz_subs_roll" : "6",
          "event_n_haz_id" : 217,
          "event_n_haz_subs_order" : 6,
          "event_n_haz_subs_description" : "(1D6 x 100) gold"
        },
        {
          "event_n_haz_subs_id" : 191,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "BEGGAR",
          "event_n_haz_subs_roll" : " - 1",
          "event_n_haz_id" : 218,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "Distaster! Your Warrior has contracted a debilitating leprous curse. Your Warrior sickens to the point where he now has 1 Permanent Wound, Strength 1, Toughness 1, etc., the worst of all abilities.  The curse on your Warrior can be cured by visiting a City Temple and donating 2D6 x 100 gold."
        },
        {
          "event_n_haz_subs_id" : 192,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "BEGGAR",
          "event_n_haz_subs_roll" : "1",
          "event_n_haz_id" : 218,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "The beggars hand touches yours. Yuck! Roll 1D6 to see if your Warrior has caught leprosy:"
        },
        {
          "event_n_haz_subs_id" : 193,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "BEGGAR",
          "event_n_haz_subs_roll" : "6",
          "event_n_haz_id" : 218,
          "event_n_haz_subs_order" : 5,
          "event_n_haz_subs_description" : "The beggar is actually the King in disguise. For your Warrior's generous nature he offers to make him the King’s Champion. From now on, every time your Warrior stays in any city, the King will have told the council about his arrival. He does not have to pay living expenses for the duration of his stay there. In addition, the King offers you a horse, saying that no Champion of his will be seen on foot."
        },
        {
          "event_n_haz_subs_id" : 194,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "BEGGAR",
          "event_n_haz_subs_roll" : "2-5",
          "event_n_haz_id" : 218,
          "event_n_haz_subs_order" : 4,
          "event_n_haz_subs_description" : "The beggar thanks your Warrior for his generosity. If he wishes to give the beggar another gold coin, roll again on this table, adding +1 to the dice roll, unless the number rolled is a 1."
        },
        {
          "event_n_haz_subs_id" : 195,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "BEGGAR",
          "event_n_haz_subs_roll" : " - 2-6",
          "event_n_haz_id" : 218,
          "event_n_haz_subs_order" : 3,
          "event_n_haz_subs_description" : "With a sigh of relief your Warrior realises that the beggars deadly disease has not inflicted him."
        },
        {
          "event_n_haz_subs_id" : 196,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "ACCIDENT",
          "event_n_haz_subs_roll" : "1",
          "event_n_haz_id" : 223,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "It seems your Warrior has have encountered a visiting Ogre. He proceeds to give him a good bashing for 1d6+4 Wounds before tossing him out of his path."
        },
        {
          "event_n_haz_subs_id" : 197,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "ACCIDENT",
          "event_n_haz_subs_roll" : "2",
          "event_n_haz_id" : 223,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "Your Warrior has walked into one of the councillors of the city who proceeds to give him a lecture on manners. Just when your Warrior thinks it is all over, the councillor has the audacity to fine him 1D6 x 10 gold."
        },
        {
          "event_n_haz_subs_id" : 198,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "ACCIDENT",
          "event_n_haz_subs_roll" : "3",
          "event_n_haz_id" : 223,
          "event_n_haz_subs_order" : 3,
          "event_n_haz_subs_description" : "Your Warrior has bumped into an angry Halfling warrior who punches him in the face causing 1D3 wounds, with no deductions."
        },
        {
          "event_n_haz_subs_id" : 199,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "ACCIDENT",
          "event_n_haz_subs_roll" : "4",
          "event_n_haz_id" : 223,
          "event_n_haz_subs_order" : 4,
          "event_n_haz_subs_description" : "Your Warrior has ploughed straight into the local drunk, whom he knocks out of his way with ease."
        },
        {
          "event_n_haz_subs_id" : 200,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "ACCIDENT",
          "event_n_haz_subs_roll" : "5",
          "event_n_haz_id" : 223,
          "event_n_haz_subs_order" : 5,
          "event_n_haz_subs_description" : "Your Warrior has walked straight into the local merchant. After helping him collect his wares which have been strewn all over the ground, your Warrior helps dusts him down. The merchant walks away shaking his head in amazement. It is not until he has turned the corner that your Warrior notices 1D6 x 10 gold lying on the ground - it must have fallen out of the merchants overcrowded pockets. Your Warrior pockets the gold and walks off before the merchant has noticed he is missing any."
        },
        {
          "event_n_haz_subs_id" : 374,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "CHAPEL",
          "event_n_haz_subs_roll" : "2-5",
          "event_n_haz_id" : 125,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "The Gods do not listen today."
        },
        {
          "event_n_haz_subs_id" : 201,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "ACCIDENT",
          "event_n_haz_subs_roll" : "6",
          "event_n_haz_id" : 223,
          "event_n_haz_subs_order" : 6,
          "event_n_haz_subs_description" : "Your Warrior has knocked over a small gentleman who insists that it is all his fault. Bemused, your Warrior listens to the explanation given by the man and tries not to blurt out laughing. As compensation, he gives your Warrior 2D6 x 10 gold."
        },
        {
          "event_n_haz_subs_id" : 202,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "OLD FRIEND",
          "event_n_haz_subs_roll" : "1",
          "event_n_haz_id" : 224,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "Your Warrior does not want Falzon to see him so, taking off the lid of a nearby basket, he hides inside. To your Warrior's horror he realises that slithering next to him is a Cobra. With a cry, he leaps out of the basket, but not before the Cobra bites him, doing 1D6 Wounds."
        },
        {
          "event_n_haz_subs_id" : 203,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "OLD FRIEND",
          "event_n_haz_subs_roll" : "2",
          "event_n_haz_id" : 224,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "Falzon notices you and comes your Warrior's way. He claims to have acquired the legendary Swindle Bell, a bell with powers so immense that one ring can destroy even the toughest of enemies. He offers to sell it to your Warrior for 400 gold because he needs the money. If your Warrior buys the bell, roll 1D6:"
        },
        {
          "event_n_haz_subs_id" : 204,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "OLD FRIEND",
          "event_n_haz_subs_roll" : "3",
          "event_n_haz_id" : 224,
          "event_n_haz_subs_order" : 5,
          "event_n_haz_subs_description" : "Falzon spots your Warrior and comes over to him. Grinning cheerfully, he shakes your Warrior's hand and the two of them head off to the Alehouse to reminisce about old times. After talking (and drinking) most of the night, your Warrior heads off to the inn, where he proceeds to sleep the entire next day. Your Warrior may visit no locations tomorrow and does not need to roll on this table. He must still pay living expenses however."
        },
        {
          "event_n_haz_subs_id" : 205,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "OLD FRIEND",
          "event_n_haz_subs_roll" : "4",
          "event_n_haz_id" : 224,
          "event_n_haz_subs_order" : 6,
          "event_n_haz_subs_description" : "Falzon tells your Warrior that he is a member of a travelling circus which has made it’s way to this Settlement. He is a famous juggler, his most amazing act is juggling five Squiggly beasts while singing “The Goblin Hunter and his Squig”. He gives your Warrior a free ticket to the circus."
        },
        {
          "event_n_haz_subs_id" : 206,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "OLD FRIEND",
          "event_n_haz_subs_roll" : "5",
          "event_n_haz_id" : 224,
          "event_n_haz_subs_order" : 7,
          "event_n_haz_subs_description" : "It seems that Falzon had heard your Warrior was in town and had travelled here to repay a debt of 1D3 x 100 gold pieces which he borrowed off your Warrior many years ago. Amazed that he would travel many miles to this Settlement just to repay him, your Warrior thanks him kindly."
        },
        {
          "event_n_haz_subs_id" : 207,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "OLD FRIEND",
          "event_n_haz_subs_roll" : "6",
          "event_n_haz_id" : 224,
          "event_n_haz_subs_order" : 8,
          "event_n_haz_subs_description" : "Just after your Warrior left, Falzon started training as a healer. Upon seeing you, he offers to heal you of any Wounds for free."
        },
        {
          "event_n_haz_subs_id" : 208,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "OLD FRIEND",
          "event_n_haz_subs_roll" : " - 1-3",
          "event_n_haz_id" : 224,
          "event_n_haz_subs_order" : 3,
          "event_n_haz_subs_description" : "The bell is useless. Your Warrior has been fooled."
        },
        {
          "event_n_haz_subs_id" : 209,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "OLD FRIEND",
          "event_n_haz_subs_roll" : " - 4-6",
          "event_n_haz_id" : 224,
          "event_n_haz_subs_order" : 4,
          "event_n_haz_subs_description" : "The bell is actually the fabled Swindle Bell. Once per lifetime, your Warrior may ring the bell. It’s tone is so piercing that it will destroy an entire dungeon board section of monsters immediately. Your Warrior and any other Warriors adjacent to him will be safe from the effects of the bell."
        },
        {
          "event_n_haz_subs_id" : 210,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "BUSINESS OPPORTUNITY",
          "event_n_haz_subs_roll" : "1",
          "event_n_haz_id" : 225,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "The trading negotiations have fallen flat, and the Merchants inform your Warrior that he owes 1D6 x 50 gold for expenses. The Warrior's investment was a waste of money!"
        },
        {
          "event_n_haz_subs_id" : 211,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "BUSINESS OPPORTUNITY",
          "event_n_haz_subs_roll" : "6",
          "event_n_haz_id" : 225,
          "event_n_haz_subs_order" : 3,
          "event_n_haz_subs_description" : "Business is booming! Your Warrior may collect 1D6 x 50 gold in profits."
        },
        {
          "event_n_haz_subs_id" : 212,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "BUSINESS OPPORTUNITY",
          "event_n_haz_subs_roll" : "2-5",
          "event_n_haz_id" : 225,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "The trading is progressing nicely, with monthly wagonloads of ale being sold to the Dwarves. Your Warrior may collect 1D6 x 10 gold in profits."
        },
        {
          "event_n_haz_subs_id" : 213,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "BEGGING",
          "event_n_haz_subs_roll" : "1",
          "event_n_haz_id" : 226,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "On their routine patrol through the streets, the guards discover your Warrior illegally begging and throw him out of the Settlement."
        },
        {
          "event_n_haz_subs_id" : 214,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "BEGGING",
          "event_n_haz_subs_roll" : "6",
          "event_n_haz_id" : 226,
          "event_n_haz_subs_order" : 3,
          "event_n_haz_subs_description" : "Your Warrior earns 1D6 x 10 gold"
        },
        {
          "event_n_haz_subs_id" : 215,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "BEGGING",
          "event_n_haz_subs_roll" : "2-5",
          "event_n_haz_id" : 226,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "Your Warrior gains 1D6 x 5 gold from begging."
        },
        {
          "event_n_haz_subs_id" : 216,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "WITCH",
          "event_n_haz_subs_roll" : "1-2",
          "event_n_haz_id" : 232,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "Your Warrior succeeds in escaping by clambering over the fence surrounding the Settlement where he must wait for the other Warriors."
        },
        {
          "event_n_haz_subs_id" : 217,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "WITCH",
          "event_n_haz_subs_roll" : "3-4",
          "event_n_haz_id" : 232,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "Your Warrior manages to lose the insane crowd by leading them on a chase through the intertwining backstreets of the Settlement."
        },
        {
          "event_n_haz_subs_id" : 218,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "WITCH",
          "event_n_haz_subs_roll" : "5-6",
          "event_n_haz_id" : 232,
          "event_n_haz_subs_order" : 3,
          "event_n_haz_subs_description" : "Your Warrior turns angrily to the mob and demands an explanation for their behaviour. Sheepishly they back away and give him 50 gold as compensation before returning to their houses."
        },
        {
          "event_n_haz_subs_id" : 219,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "FIRE",
          "event_n_haz_subs_roll" : "1",
          "event_n_haz_id" : 234,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "It appears to have been a false alarm. When your Warrior returns to his room, he is angry to find that half of his gold has been stolen."
        },
        {
          "event_n_haz_subs_id" : 220,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "FIRE",
          "event_n_haz_subs_roll" : "2",
          "event_n_haz_id" : 234,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "Thinking of old Mrs Pebbles downstairs, your Warrior leaps down the stairs three at a time. Unfortunately that happens to be more than he can handle and with a trip, your Warrior tumbles head over heels down the rickety stairs until he lands in an unconscious pile at the bottom. When he awakes, he realises that someone else has saved his life, and not a moment too soon either. Your unlucky Warrior has lost 4 Wounds due to smoke inhalation."
        },
        {
          "event_n_haz_subs_id" : 221,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "FIRE",
          "event_n_haz_subs_roll" : "3",
          "event_n_haz_id" : 234,
          "event_n_haz_subs_order" : 3,
          "event_n_haz_subs_description" : "Your Warrior runs to the room opposite his and tries to wake a sleeping man. Unhappy at being woken, the man punches your Warrior full in the face, causing him to lose 2 Wounds, no modifiers."
        },
        {
          "event_n_haz_subs_id" : 222,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "FIRE",
          "event_n_haz_subs_roll" : "4",
          "event_n_haz_id" : 234,
          "event_n_haz_subs_order" : 4,
          "event_n_haz_subs_description" : "Burning timbers falling around him, your Warrior ushers the inn patrons out into the street - just in time too, as the whole place collapses in a cloud of smoke and burning wood. Your Warrior is congratulated for his good timing and in a ceremony given by the council is given a good citizen award."
        },
        {
          "event_n_haz_subs_id" : 223,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "FIRE",
          "event_n_haz_subs_roll" : "5",
          "event_n_haz_id" : 234,
          "event_n_haz_subs_order" : 5,
          "event_n_haz_subs_description" : "A burning beam has fallen in front of a door just around the corner from your Warrior's room, trapping the occupant inside. Acquiring the assistance of two other strong men. your Warrior helps move the beam enough for the trapped man to escape. Showering your Warrior with thanks, the rescued man gives him a reward of 1D6 x 30 gold."
        },
        {
          "event_n_haz_subs_id" : 224,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "FIRE",
          "event_n_haz_subs_roll" : "6",
          "event_n_haz_id" : 234,
          "event_n_haz_subs_order" : 6,
          "event_n_haz_subs_description" : "While making sure all the rooms are evacuated, your Warrior notices a very interesting item in one of the rooms. Thinking that it won’t hurt to borrow it for a while, your Warrior stows it in his pack and races outside. Take 1 Treasure Card."
        },
        {
          "event_n_haz_subs_id" : 225,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "HEROIC INCIDENT",
          "event_n_haz_subs_roll" : "1",
          "event_n_haz_id" : 235,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "Champion"
        },
        {
          "event_n_haz_subs_id" : 226,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "HEROIC INCIDENT",
          "event_n_haz_subs_roll" : "1",
          "event_n_haz_id" : 235,
          "event_n_haz_subs_order" : 8,
          "event_n_haz_subs_description" : "the King’s daughter"
        },
        {
          "event_n_haz_subs_id" : 227,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "HEROIC INCIDENT",
          "event_n_haz_subs_roll" : "2",
          "event_n_haz_id" : 235,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "Saviour"
        },
        {
          "event_n_haz_subs_id" : 228,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "HEROIC INCIDENT",
          "event_n_haz_subs_roll" : "2",
          "event_n_haz_id" : 235,
          "event_n_haz_subs_order" : 9,
          "event_n_haz_subs_description" : "the Realm"
        },
        {
          "event_n_haz_subs_id" : 229,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "HEROIC INCIDENT",
          "event_n_haz_subs_roll" : "3",
          "event_n_haz_id" : 235,
          "event_n_haz_subs_order" : 3,
          "event_n_haz_subs_description" : "Rescuer"
        },
        {
          "event_n_haz_subs_id" : 230,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "HEROIC INCIDENT",
          "event_n_haz_subs_roll" : "3",
          "event_n_haz_id" : 235,
          "event_n_haz_subs_order" : 10,
          "event_n_haz_subs_description" : "the Empire"
        },
        {
          "event_n_haz_subs_id" : 231,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "HEROIC INCIDENT",
          "event_n_haz_subs_roll" : "4",
          "event_n_haz_id" : 235,
          "event_n_haz_subs_order" : 4,
          "event_n_haz_subs_description" : "Hero"
        },
        {
          "event_n_haz_subs_id" : 232,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "HEROIC INCIDENT",
          "event_n_haz_subs_roll" : "4",
          "event_n_haz_id" : 235,
          "event_n_haz_subs_order" : 11,
          "event_n_haz_subs_description" : "the nearby caves"
        },
        {
          "event_n_haz_subs_id" : 233,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "HEROIC INCIDENT",
          "event_n_haz_subs_roll" : "5",
          "event_n_haz_id" : 235,
          "event_n_haz_subs_order" : 5,
          "event_n_haz_subs_description" : "Defender"
        },
        {
          "event_n_haz_subs_id" : 234,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "HEROIC INCIDENT",
          "event_n_haz_subs_roll" : "5",
          "event_n_haz_id" : 235,
          "event_n_haz_subs_order" : 12,
          "event_n_haz_subs_description" : "those in need"
        },
        {
          "event_n_haz_subs_id" : 235,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "HEROIC INCIDENT",
          "event_n_haz_subs_roll" : "6",
          "event_n_haz_id" : 235,
          "event_n_haz_subs_order" : 6,
          "event_n_haz_subs_description" : "Lord"
        },
        {
          "event_n_haz_subs_id" : 236,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "HEROIC INCIDENT",
          "event_n_haz_subs_roll" : "6",
          "event_n_haz_id" : 235,
          "event_n_haz_subs_order" : 13,
          "event_n_haz_subs_description" : "Good"
        },
        {
          "event_n_haz_subs_id" : 237,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "HEROIC INCIDENT",
          "event_n_haz_subs_roll" : " - ",
          "event_n_haz_id" : 235,
          "event_n_haz_subs_order" : 7,
          "event_n_haz_subs_description" : "of (roll 1D6):"
        },
        {
          "event_n_haz_subs_id" : 238,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "EMPLOYMENT",
          "event_n_haz_subs_roll" : "1",
          "event_n_haz_id" : 240,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "Your Warrior finds gainful employment in the local abattoirs. Here, he slaughters beasts and prepares them for sale at the Settlement’s butchers. For every day in employment. your Warrior earns 1D6 x 5 gold (roll only once to determine the amount your Warrior is paid each day), but must lose 1 Wound due to the terrible smell of rotting carcasses."
        },
        {
          "event_n_haz_subs_id" : 239,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "EMPLOYMENT",
          "event_n_haz_subs_roll" : "2",
          "event_n_haz_id" : 240,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "Pete, the local Weaponsmith employs your Warrior to help him forge weapons. Unfortunately, although your Warrior tries his best, their is just no demand for crooked swords these days. Pete gives your Warrior 1D6 x 10 gold for his willing, but useless help. Your Warrior may only work here for 1 day."
        },
        {
          "event_n_haz_subs_id" : 240,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "EMPLOYMENT",
          "event_n_haz_subs_roll" : "3",
          "event_n_haz_id" : 240,
          "event_n_haz_subs_order" : 3,
          "event_n_haz_subs_description" : "Your Warrior offers to help a wizened old crone tend to her garden. After much hard work, and weed pulling, your Warrior shows the old lady his effort. Pleased, she takes your Warrior's hand and places 1D6 gold coins into it, thanking him for a job well done. Disappointed at the low pay, your Warrior thinks he might look for other needy old crones and help them, and in doing so earn slightly more money."
        },
        {
          "event_n_haz_subs_id" : 241,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "EMPLOYMENT",
          "event_n_haz_subs_roll" : "4",
          "event_n_haz_id" : 240,
          "event_n_haz_subs_order" : 4,
          "event_n_haz_subs_description" : "Your Warrior helps out at the bakery, kneading and rolling bread, and baking it in the large oven. After the day has finished, your Warrior looks at his work proudly, but his most challenging task was baking the pastries. Your Warrior gains 1D6 x 10 gold for today’s work."
        },
        {
          "event_n_haz_subs_id" : 242,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "EMPLOYMENT",
          "event_n_haz_subs_roll" : "5",
          "event_n_haz_id" : 240,
          "event_n_haz_subs_order" : 5,
          "event_n_haz_subs_description" : "Your Warrior helps a family of Gnomes move house. They explain that they are trying to escape this noisy Settlement as it ruins their concentration while building garden ornaments. Your Warrior spends 1D3 days carrying all their luggage to the next village, but earns 1D6 x 100 gold for his help."
        },
        {
          "event_n_haz_subs_id" : 243,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "EMPLOYMENT",
          "event_n_haz_subs_roll" : "6",
          "event_n_haz_id" : 240,
          "event_n_haz_subs_order" : 6,
          "event_n_haz_subs_description" : "A wizard has employed your Warrior as a test subject while he performs many new spells. After spending the day as a chicken, toad, turkey, and various other animals, your bemused Warrior leaves the wizard’s tower confused, but 1 Treasure Card richer. As the wizard finally perfected his spells, he does not require your assistance again tomorrow."
        },
        {
          "event_n_haz_subs_id" : 244,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "NIGHTMARE",
          "event_n_haz_subs_roll" : "1-2",
          "event_n_haz_id" : 245,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "His dreams bring him great distress - he dreams he is in a fight with a Minotaur, and losing. When he awakes in the morning he finds that his Wounds have been reduced by 2."
        },
        {
          "event_n_haz_subs_id" : 245,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "NIGHTMARE",
          "event_n_haz_subs_roll" : "3-6",
          "event_n_haz_id" : 245,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "Although tossing and turning throughout the night, your Warrior wakes to no ill effect."
        },
        {
          "event_n_haz_subs_id" : 246,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "FIGHT",
          "event_n_haz_subs_roll" : "1",
          "event_n_haz_id" : 246,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "The adventurers easily overpower your Warrior and make off with half his gold."
        },
        {
          "event_n_haz_subs_id" : 247,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "FIGHT",
          "event_n_haz_subs_roll" : "6",
          "event_n_haz_id" : 246,
          "event_n_haz_subs_order" : 3,
          "event_n_haz_subs_description" : "Your Warrior easily teaches the adventures a lesson and demands half of their gold (which comes to 1d6 x 100) as compensation."
        },
        {
          "event_n_haz_subs_id" : 248,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "FIGHT",
          "event_n_haz_subs_roll" : "2-5",
          "event_n_haz_id" : 246,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "Just as the fight is going your Warrior's way, the Barkeep breaks it up and insists that you all leave immediately."
        },
        {
          "event_n_haz_subs_id" : 249,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "LOOSE STONE",
          "event_n_haz_subs_roll" : "1",
          "event_n_haz_id" : 248,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "...The stone slams down hard on your Warrior's hand, almost snapping it in two. For the next adventure, your Warrior’s to Hit rolls will be at -1."
        },
        {
          "event_n_haz_subs_id" : 250,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "LOOSE STONE",
          "event_n_haz_subs_roll" : "2",
          "event_n_haz_id" : 248,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "1D6 x 5 gold."
        },
        {
          "event_n_haz_subs_id" : 251,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "LOOSE STONE",
          "event_n_haz_subs_roll" : "3",
          "event_n_haz_id" : 248,
          "event_n_haz_subs_order" : 3,
          "event_n_haz_subs_description" : "1D6 x 10 gold"
        },
        {
          "event_n_haz_subs_id" : 252,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "LOOSE STONE",
          "event_n_haz_subs_roll" : "4",
          "event_n_haz_id" : 248,
          "event_n_haz_subs_order" : 4,
          "event_n_haz_subs_description" : "1D6 x100 gold"
        },
        {
          "event_n_haz_subs_id" : 253,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "LOOSE STONE",
          "event_n_haz_subs_roll" : "5",
          "event_n_haz_id" : 248,
          "event_n_haz_subs_order" : 5,
          "event_n_haz_subs_description" : "1 Treasure Card"
        },
        {
          "event_n_haz_subs_id" : 254,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "LOOSE STONE",
          "event_n_haz_subs_roll" : "6",
          "event_n_haz_id" : 248,
          "event_n_haz_subs_order" : 6,
          "event_n_haz_subs_description" : "1 Objective Room Treasure Card"
        },
        {
          "event_n_haz_subs_id" : 255,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "ANCIENT AMULET",
          "event_n_haz_subs_roll" : " - ",
          "event_n_haz_id" : 250,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "Strength\t+1"
        },
        {
          "event_n_haz_subs_id" : 256,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "ANCIENT AMULET",
          "event_n_haz_subs_roll" : " - ",
          "event_n_haz_id" : 250,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "Toughness\t+1"
        },
        {
          "event_n_haz_subs_id" : 257,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "ANCIENT AMULET",
          "event_n_haz_subs_roll" : " - ",
          "event_n_haz_id" : 250,
          "event_n_haz_subs_order" : 3,
          "event_n_haz_subs_description" : "Damage Dice\t+1"
        },
        {
          "event_n_haz_subs_id" : 258,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "ANCIENT AMULET",
          "event_n_haz_subs_roll" : " - ",
          "event_n_haz_id" : 250,
          "event_n_haz_subs_order" : 4,
          "event_n_haz_subs_description" : "Initiative\t-2"
        },
        {
          "event_n_haz_subs_id" : 259,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "ANCIENT AMULET",
          "event_n_haz_subs_roll" : " - ",
          "event_n_haz_id" : 250,
          "event_n_haz_subs_order" : 5,
          "event_n_haz_subs_description" : "to Hit\t-1"
        },
        {
          "event_n_haz_subs_id" : 260,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "DRAGON",
          "event_n_haz_subs_roll" : " - 6",
          "event_n_haz_id" : 251,
          "event_n_haz_subs_order" : 4,
          "event_n_haz_subs_description" : "1D3 Wounds"
        },
        {
          "event_n_haz_subs_id" : 261,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "DRAGON",
          "event_n_haz_subs_roll" : " - 1",
          "event_n_haz_id" : 251,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "2D6 Wounds"
        },
        {
          "event_n_haz_subs_id" : 262,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "DRAGON",
          "event_n_haz_subs_roll" : "1",
          "event_n_haz_id" : 251,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "The dragon picks this Settlement as his target, and flies closer. His mouth opens, and breathes fire over everything and everyone. Your Warrior is burned. Roll 1D6 to determine the extent of the damage with no modifiers for Toughness and Armour:"
        },
        {
          "event_n_haz_subs_id" : 263,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "DRAGON",
          "event_n_haz_subs_roll" : "2",
          "event_n_haz_id" : 251,
          "event_n_haz_subs_order" : 5,
          "event_n_haz_subs_description" : "The dragon flies lower and breathes fire over the Settlement. Roll 1D6 and add your Warrior's Initiative. If the result is greater than 7 then your Warrior ducks out of the way and escapes unharmed. Otherwise the fire inflicts 1D6 Wounds with no modifiers for Toughness and Armour."
        },
        {
          "event_n_haz_subs_id" : 264,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "DRAGON",
          "event_n_haz_subs_roll" : "3-4",
          "event_n_haz_id" : 251,
          "event_n_haz_subs_order" : 6,
          "event_n_haz_subs_description" : "Fortunately your Warrior has the Intelligence to duck out of the way, just in time as the dragon lets loose a stream of fire. Roll 1D6 and add your Warrior's Initiative. If the result is greater than 7 then the flame misses your Warrior and he escapes unharmed. Otherwise the fire inflicts 1D3 Wounds with no modifiers for Toughness and Armour."
        },
        {
          "event_n_haz_subs_id" : 265,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "DRAGON",
          "event_n_haz_subs_roll" : "5-6",
          "event_n_haz_id" : 251,
          "event_n_haz_subs_order" : 7,
          "event_n_haz_subs_description" : "The dragon flies past the Settlement, into the mountains. The Settlement has escaped unharmed."
        },
        {
          "event_n_haz_subs_id" : 266,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "DRAGON",
          "event_n_haz_subs_roll" : " - 2-5",
          "event_n_haz_id" : 251,
          "event_n_haz_subs_order" : 3,
          "event_n_haz_subs_description" : "1D6 Wounds"
        },
        {
          "event_n_haz_subs_id" : 267,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "STORM",
          "event_n_haz_subs_roll" : "1-2",
          "event_n_haz_id" : 252,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "In a few hours, the storm has hit. Rain pelts down upon the Settlement and lightning flashes, lighting up the sky. Peals of thunder roll across the heavens. When your Warrior wakes in the morning, the storm has left the Settlement devastated. If your Warrior has plans of leaving the city today, he must wait another two days as he helps rebuild the city. During this time he may not visit any locations, special or otherwise, but must still roll on this table and pay living expenses."
        },
        {
          "event_n_haz_subs_id" : 268,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "STORM",
          "event_n_haz_subs_roll" : "3-4",
          "event_n_haz_id" : 252,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "The storm hits sooner than expected. The rain pours down, and in no time at all has flooded the city streets. As your Warrior tries to make it back to the inn, dogs and cats float past him. When he finally makes it, your Warrior finds that he has caught a cold. He must spend the next 1D3 days in bed, and therefore need not roll on this table for events, though he still must pay his living expenses."
        },
        {
          "event_n_haz_subs_id" : 269,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "STORM",
          "event_n_haz_subs_roll" : "5-6",
          "event_n_haz_id" : 252,
          "event_n_haz_subs_order" : 3,
          "event_n_haz_subs_description" : "The clouds float overhead, and just a trickle falls out of them. They move onwards."
        },
        {
          "event_n_haz_subs_id" : 270,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "ROYAL VISIT",
          "event_n_haz_subs_roll" : " - 1",
          "event_n_haz_id" : 258,
          "event_n_haz_subs_order" : 7,
          "event_n_haz_subs_description" : "The crossbow bolt flies straight and true, piercing the King’s heart. He dies instantly. Your Warrior was unable to save his hero. Subtract 1 from his Luck score for the next adventure."
        },
        {
          "event_n_haz_subs_id" : 271,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "ROYAL VISIT",
          "event_n_haz_subs_roll" : "1",
          "event_n_haz_id" : 258,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "Carelessly, you push over one of the guards. He arrests you in the name of the law and takes you to jail. Each of your fellow Warriors may pay 1D6 x 10 gold to bail him out. If they cannot (or will not) your Warrior must spend the next 1D6 days in jail. He does not have to pay living expenses or roll on this table."
        },
        {
          "event_n_haz_subs_id" : 272,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "ROYAL VISIT",
          "event_n_haz_subs_roll" : "2",
          "event_n_haz_id" : 258,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "In your rush to reach the front of the crowd, you barge into a respected nobleman. Grabbing you by the scruff of your neck, he demands payment for his embarrassment. Your Warrior must pay him 1D6 x 20 gold."
        },
        {
          "event_n_haz_subs_id" : 273,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "ROYAL VISIT",
          "event_n_haz_subs_roll" : "3",
          "event_n_haz_id" : 258,
          "event_n_haz_subs_order" : 3,
          "event_n_haz_subs_description" : "The crowd is plenty. Unfortunately your Warrior is unable to get a glimpse of the King."
        },
        {
          "event_n_haz_subs_id" : 274,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "ROYAL VISIT",
          "event_n_haz_subs_roll" : "4",
          "event_n_haz_id" : 258,
          "event_n_haz_subs_order" : 4,
          "event_n_haz_subs_description" : "The crowd is sparse. Fortunately your Warrior makes it to the front of the crowd and is able to see His Majesty."
        },
        {
          "event_n_haz_subs_id" : 275,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "ROYAL VISIT",
          "event_n_haz_subs_roll" : "5",
          "event_n_haz_id" : 258,
          "event_n_haz_subs_order" : 5,
          "event_n_haz_subs_description" : "The King (with his almighty generosity) is throwing out gold into the crowd. Your Warrior leaps into the air and catches 1D6 x 10 gold."
        },
        {
          "event_n_haz_subs_id" : 276,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "ROYAL VISIT",
          "event_n_haz_subs_roll" : "6",
          "event_n_haz_id" : 258,
          "event_n_haz_subs_order" : 6,
          "event_n_haz_subs_description" : "Out of the corner of his eye your Warrior spots a shifty looking character struggling to get through the crowd. In his hands he holds a pistol crossbow. Everyone else in their eagerness to see the King has not noticed this character. Your Warrior starts to move after him and jumps him just in time as he fires. Roll 1D6:"
        },
        {
          "event_n_haz_subs_id" : 277,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "ROYAL VISIT",
          "event_n_haz_subs_roll" : " - 2-6",
          "event_n_haz_id" : 258,
          "event_n_haz_subs_order" : 8,
          "event_n_haz_subs_description" : "Your Warrior has saved the King! As the guards escort the would be assassin away, the King approaches your Warrior and thanks him for his service to the Empire. He offers your Warrior a reward of 1 Objective Room Treasure Card, or 1D6 x 200 gold."
        },
        {
          "event_n_haz_subs_id" : 278,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "PHASED SPACIAL ANOMALY",
          "event_n_haz_subs_roll" : "1-2",
          "event_n_haz_id" : 259,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "Roll once on the Hazard Table."
        },
        {
          "event_n_haz_subs_id" : 279,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "PHASED SPACIAL ANOMALY",
          "event_n_haz_subs_roll" : "3-4",
          "event_n_haz_id" : 259,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "Roll once on the Dungeon Event Table"
        },
        {
          "event_n_haz_subs_id" : 280,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "PHASED SPACIAL ANOMALY",
          "event_n_haz_subs_roll" : "5-6",
          "event_n_haz_id" : 259,
          "event_n_haz_subs_order" : 3,
          "event_n_haz_subs_description" : "Roll again on the Settlement Event Table."
        },
        {
          "event_n_haz_subs_id" : 281,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "TELEPORT",
          "event_n_haz_subs_roll" : "1-2",
          "event_n_haz_id" : 260,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "A Village"
        },
        {
          "event_n_haz_subs_id" : 282,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "TELEPORT",
          "event_n_haz_subs_roll" : "3-4",
          "event_n_haz_id" : 260,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "A Town"
        },
        {
          "event_n_haz_subs_id" : 283,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "TELEPORT",
          "event_n_haz_subs_roll" : "5-6",
          "event_n_haz_id" : 260,
          "event_n_haz_subs_order" : 3,
          "event_n_haz_subs_description" : "A City"
        },
        {
          "event_n_haz_subs_id" : 284,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "WHISPERED SECRETS",
          "event_n_haz_subs_roll" : "1",
          "event_n_haz_id" : 261,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "It was not this dungeon that they were talking about!"
        },
        {
          "event_n_haz_subs_id" : 285,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "WHISPERED SECRETS",
          "event_n_haz_subs_roll" : "2-6",
          "event_n_haz_id" : 261,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "Your Warrior finds a treasure hoard. Take 1 Objective Room Treasure, on top of the one received from killing all Objective Room Monsters."
        },
        {
          "event_n_haz_subs_id" : 286,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "BIGOTRY",
          "event_n_haz_subs_roll" : "1",
          "event_n_haz_id" : 265,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "No Humans"
        },
        {
          "event_n_haz_subs_id" : 287,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "BIGOTRY",
          "event_n_haz_subs_roll" : "2",
          "event_n_haz_id" : 265,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "No Dwarves"
        },
        {
          "event_n_haz_subs_id" : 288,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "BIGOTRY",
          "event_n_haz_subs_roll" : "3",
          "event_n_haz_id" : 265,
          "event_n_haz_subs_order" : 3,
          "event_n_haz_subs_description" : "No Elves"
        },
        {
          "event_n_haz_subs_id" : 289,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "BIGOTRY",
          "event_n_haz_subs_roll" : "4",
          "event_n_haz_id" : 265,
          "event_n_haz_subs_order" : 4,
          "event_n_haz_subs_description" : "No Non-Humans"
        },
        {
          "event_n_haz_subs_id" : 290,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "BIGOTRY",
          "event_n_haz_subs_roll" : "5",
          "event_n_haz_id" : 265,
          "event_n_haz_subs_order" : 5,
          "event_n_haz_subs_description" : "No Men of Faith"
        },
        {
          "event_n_haz_subs_id" : 291,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "BIGOTRY",
          "event_n_haz_subs_roll" : "6",
          "event_n_haz_id" : 265,
          "event_n_haz_subs_order" : 6,
          "event_n_haz_subs_description" : "No Wizards"
        },
        {
          "event_n_haz_subs_id" : 292,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "GRAVEYARD",
          "event_n_haz_subs_roll" : "1",
          "event_n_haz_id" : 269,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "Your Warrior is attacked by 1d2 skeletons (with swords). Fight a battle as normal."
        },
        {
          "event_n_haz_subs_id" : 293,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "GRAVEYARD",
          "event_n_haz_subs_roll" : "2",
          "event_n_haz_id" : 269,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "Your Warrior falls down a freshly dug grave. Unfortunately, whoever dug it is still here. Have a fight with one Ghoul."
        },
        {
          "event_n_haz_subs_id" : 294,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "GRAVEYARD",
          "event_n_haz_subs_roll" : "3",
          "event_n_haz_id" : 269,
          "event_n_haz_subs_order" : 3,
          "event_n_haz_subs_description" : "Your Warrior, in his haste to find the exit, drops 1D6 x 20 gold."
        },
        {
          "event_n_haz_subs_id" : 295,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "GRAVEYARD",
          "event_n_haz_subs_roll" : "4",
          "event_n_haz_id" : 269,
          "event_n_haz_subs_order" : 4,
          "event_n_haz_subs_description" : "Your Warrior manages to find his way out of the Graveyard in one piece"
        },
        {
          "event_n_haz_subs_id" : 296,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "GRAVEYARD",
          "event_n_haz_subs_roll" : "5",
          "event_n_haz_id" : 269,
          "event_n_haz_subs_order" : 5,
          "event_n_haz_subs_description" : "“Boo!” Your Warrior falls over in fright, cursing his fellow Warrior who has since run away. Standing up, your Warrior realises that he has landed in a small pile of 1D6 x 20 gold"
        },
        {
          "event_n_haz_subs_id" : 297,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "GRAVEYARD",
          "event_n_haz_subs_roll" : "6",
          "event_n_haz_id" : 269,
          "event_n_haz_subs_order" : 6,
          "event_n_haz_subs_description" : "Your Warrior decides to dig up the grave of the Nobleman’s daughter (There seems to be a lot of them about). On her body he finds 1 item of treasure. Take 1 Treasure Card."
        },
        {
          "event_n_haz_subs_id" : 298,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "VISITATION",
          "event_n_haz_subs_roll" : "1",
          "event_n_haz_id" : 272,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "Your Warrior hands over his gold and takes a look into the enclosed tent.  It seems the ‘god’ has gone for an ale break."
        },
        {
          "event_n_haz_subs_id" : 299,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "VISITATION",
          "event_n_haz_subs_roll" : "2",
          "event_n_haz_id" : 272,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "The ‘god’ is not in the tent.  Apologising, the collector hands your Warrior his money back."
        },
        {
          "event_n_haz_subs_id" : 300,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "VISITATION",
          "event_n_haz_subs_roll" : "3",
          "event_n_haz_id" : 272,
          "event_n_haz_subs_order" : 3,
          "event_n_haz_subs_description" : "She’s very pretty.  Inspired, your Warrior gains an extra attack which he may use at any time during the next adventure."
        },
        {
          "event_n_haz_subs_id" : 301,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "VISITATION",
          "event_n_haz_subs_roll" : "4",
          "event_n_haz_id" : 272,
          "event_n_haz_subs_order" : 4,
          "event_n_haz_subs_description" : "She smiles politely at you, sending shivers up your Warrior’s spine.  For the next adventure, your Warrior gains an extra attack each combat, which he may use when he wishes."
        },
        {
          "event_n_haz_subs_id" : 302,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "VISITATION",
          "event_n_haz_subs_roll" : "5",
          "event_n_haz_id" : 272,
          "event_n_haz_subs_order" : 5,
          "event_n_haz_subs_description" : "The God is a mighty warlord from the unearthly plains.  He mentally instructs your Warrior in the ways of the sword.  Your Warrior may roll on the Imperial Noble’s Sword Skill table twice, and pick one of those skills.  When he leaves, he notices a shining sabre attached to his belt."
        },
        {
          "event_n_haz_subs_id" : 303,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "VISITATION",
          "event_n_haz_subs_roll" : "6",
          "event_n_haz_id" : 272,
          "event_n_haz_subs_order" : 6,
          "event_n_haz_subs_description" : "It’s Sigmar himself, and he seems to be taking a very special interest in your Warrior.  Roll 1D3.  These points can be added to any attributes permanently, but not more than 1 per attribute."
        },
        {
          "event_n_haz_subs_id" : 304,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "GIANT LIZARD",
          "event_n_haz_subs_roll" : "1",
          "event_n_haz_id" : 278,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "The guards catch your Warrior scaling the walls (why he didn’t walk through the gates is anyone’s guess). They march him straight off to jail. Each of your fellow Warriors may pay 1D6 x 10 gold to bail him out. If they cannot (or will not) your Warrior must spend the next 1D6 days in jail. He does not have to pay living expenses or roll on this table."
        },
        {
          "event_n_haz_subs_id" : 305,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "GIANT LIZARD",
          "event_n_haz_subs_roll" : "2",
          "event_n_haz_id" : 278,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "Your Warrior manages to throw his arms around the lizard’s neck and after a fierce struggle comes away with 1D6 +4 Wounds, but the lizard has sped away into the distance."
        },
        {
          "event_n_haz_subs_id" : 306,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "GIANT LIZARD",
          "event_n_haz_subs_roll" : "3",
          "event_n_haz_id" : 278,
          "event_n_haz_subs_order" : 3,
          "event_n_haz_subs_description" : "By the time your Warrior manages to reach the Settlement’s Gates, the lizard is nowhere to be seen. He tells the Watch to be on the lookout for a giant green lizard. Their response : a fine of 50 Gold for creating falsehoods."
        },
        {
          "event_n_haz_subs_id" : 307,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "GIANT LIZARD",
          "event_n_haz_subs_roll" : "4",
          "event_n_haz_id" : 278,
          "event_n_haz_subs_order" : 4,
          "event_n_haz_subs_description" : "By the time your Warrior manages to reach the Settlement’s Gates, the lizard is nowhere to be seen."
        },
        {
          "event_n_haz_subs_id" : 308,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "GIANT LIZARD",
          "event_n_haz_subs_roll" : "5",
          "event_n_haz_id" : 278,
          "event_n_haz_subs_order" : 5,
          "event_n_haz_subs_description" : "The lizard willingly follows your Warrior back through the gates of the Settlement, but gradually takes the lead. It leads your Warrior to a small oak door in the side of a building. After knocking, your Warrior enters. A Dwarf looks up at you exclaiming “My Wanda, you’ve found my Wanda”, obviously talking about his lizard. He gives your Warrior a reward of 1D6 x 50 Gold for finding her, before leading her away to the stables."
        },
        {
          "event_n_haz_subs_id" : 309,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "GIANT LIZARD",
          "event_n_haz_subs_roll" : "6",
          "event_n_haz_id" : 278,
          "event_n_haz_subs_order" : 6,
          "event_n_haz_subs_description" : "Your Warrior manages to ensnare the lizard with a craftily devised trap, and then searches for the Rare Animal Handler. Roll the appropriate dice for finding Special Locations. The roll must be rqual to 8 or above. If your Warrior manages to find the Animal Handler he is rewarded with a hefty sum of 4D6 x 50 gold."
        },
        {
          "event_n_haz_subs_id" : 310,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "EVIL MAGICIAN",
          "event_n_haz_subs_roll" : "1",
          "event_n_haz_id" : 283,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "The sorcerer blasts your Warrior for 3D6 Wounds of fire damage and chases him out of the Settlement, where he must wait for his fellow companions to join him."
        },
        {
          "event_n_haz_subs_id" : 311,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "EVIL MAGICIAN",
          "event_n_haz_subs_roll" : "2",
          "event_n_haz_id" : 283,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "With a flick of his wrist, the sorcerer summons a group of monsters to dispose of your Warrior. Roll once on the Dungeon-Level 1 level higher than your Warrior’s Battle-Level. (Then divide the amount by four - The other Warriors don’t get to fight this battle.) Once the monsters are dead, the Sorcerer vanishes. Take a Treasure Card for the battle as usual."
        },
        {
          "event_n_haz_subs_id" : 312,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "EVIL MAGICIAN",
          "event_n_haz_subs_roll" : "3",
          "event_n_haz_id" : 283,
          "event_n_haz_subs_order" : 3,
          "event_n_haz_subs_description" : "With a flurry of movement, the dark wizard teleports your Warrior away from the Settlement by 1D6 days.  He must return to the same Settlement before the other Warriors are allowed their turns.  Treat his journey as if it were from a dungeon to a Settlement as normal."
        },
        {
          "event_n_haz_subs_id" : 313,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "EVIL MAGICIAN",
          "event_n_haz_subs_roll" : "4",
          "event_n_haz_id" : 283,
          "event_n_haz_subs_order" : 4,
          "event_n_haz_subs_description" : "The magician seems hell bent on casting a malicious spell at your Warrior, but cursing, he teleports himself away instead."
        },
        {
          "event_n_haz_subs_id" : 314,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "EVIL MAGICIAN",
          "event_n_haz_subs_roll" : "5",
          "event_n_haz_id" : 283,
          "event_n_haz_subs_order" : 5,
          "event_n_haz_subs_description" : "Seeing how powerful and almighty your Warrior is, the apprentice gulps and runs away, dropping a pouch of 1D6 x 50 gold."
        },
        {
          "event_n_haz_subs_id" : 315,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "EVIL MAGICIAN",
          "event_n_haz_subs_roll" : "6",
          "event_n_haz_id" : 283,
          "event_n_haz_subs_order" : 6,
          "event_n_haz_subs_description" : "The trickster pulls a rabbit out of his hat with pride. “Do us a favour, will ya, guv?” He hands your Warrior a book. “Take this spell book to me master. He will reward you gents ‘andsomly.” Grasping the spell book, your Warrior realises it contains 1D3 new spells for the Wizard or Elf Ranger (you choose) which, when given to the appropriate character, can be taken randomly from the cards, or rolled from the tables."
        },
        {
          "event_n_haz_subs_id" : 316,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "GAME",
          "event_n_haz_subs_roll" : "1-2",
          "event_n_haz_id" : 289,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "Your Warrior’s team loses. Unfortunately, a wager was placed, and your Warrior is required to spend 1D6 x 50 Gold."
        },
        {
          "event_n_haz_subs_id" : 317,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "GAME",
          "event_n_haz_subs_roll" : "3-4",
          "event_n_haz_id" : 289,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "The game is a tie. No team wins, and no team loses. Your Warrior goes home, disappointed that he could not show his skill."
        },
        {
          "event_n_haz_subs_id" : 318,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "GAME",
          "event_n_haz_subs_roll" : "5-6",
          "event_n_haz_id" : 289,
          "event_n_haz_subs_order" : 3,
          "event_n_haz_subs_description" : "Your Warrior's team wins the games. Fortunately a wager was placed, and your Warrior's share is 1D6 x 50 Gold."
        },
        {
          "event_n_haz_subs_id" : 319,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "MAGIC SPELL",
          "event_n_haz_subs_roll" : "1",
          "event_n_haz_id" : 293,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "Your Warrior suddenly collapses in pain. It seems the spell had adverse effects. Lose 1D6 Wounds immediately, not modified by anything."
        },
        {
          "event_n_haz_subs_id" : 320,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "MAGIC SPELL",
          "event_n_haz_subs_roll" : "2",
          "event_n_haz_id" : 293,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "Your Warrior's bandages and provisions have mysteriously been swapped around. Any provisions your Warrior had are now bandages, and vice versa."
        },
        {
          "event_n_haz_subs_id" : 321,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "MAGIC SPELL",
          "event_n_haz_subs_roll" : "3",
          "event_n_haz_id" : 293,
          "event_n_haz_subs_order" : 3,
          "event_n_haz_subs_description" : "The boots your Warrior is wearing suddenly sprout wings and lift your Warrior up off the ground. For the next adventure, your Warrior's Move is increased by +2, and he may not be pinned."
        },
        {
          "event_n_haz_subs_id" : 322,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "MAGIC SPELL",
          "event_n_haz_subs_roll" : "4",
          "event_n_haz_id" : 293,
          "event_n_haz_subs_order" : 4,
          "event_n_haz_subs_description" : "Your Warrior's weapons have been sharpened, or improved. For the next adventure, any weapon your Warrior had on him at the time of the spell causes an extra +1 damage."
        },
        {
          "event_n_haz_subs_id" : 323,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "MAGIC SPELL",
          "event_n_haz_subs_roll" : "5",
          "event_n_haz_id" : 293,
          "event_n_haz_subs_order" : 5,
          "event_n_haz_subs_description" : "Your Warrior's beard suddenly develops a life of its own, waving about and grasping at the air. For the next adventure, once per turn, your Warrior may make an extra beard attack. He must be standing directly in front of the target, and the to hit roll is 6+. If the beard successfully hits, 1 Wound is caused, only modified by armour. If your Warrior has no beard, then ignore this event."
        },
        {
          "event_n_haz_subs_id" : 324,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "MAGIC SPELL",
          "event_n_haz_subs_roll" : "6",
          "event_n_haz_id" : 293,
          "event_n_haz_subs_order" : 6,
          "event_n_haz_subs_description" : "Your Warrior feels stronger all of a sudden. Increase his Wounds to their maximum, and for the next adventure, his Strength is increased by +2."
        },
        {
          "event_n_haz_subs_id" : 325,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "CORRUPT LAW",
          "event_n_haz_subs_roll" : "1",
          "event_n_haz_id" : 295,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "Murder. Your Warrior must spend the rest of his adventuring career in prison, forfeit all his treasure and equipment, or hope that his fellow Warriors will pay the fine of 2D6 x 100 gold for his release, each."
        },
        {
          "event_n_haz_subs_id" : 326,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "CORRUPT LAW",
          "event_n_haz_subs_roll" : "2",
          "event_n_haz_id" : 295,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "Manslaughter. Your Warrior must spend 3D6 days in jail or have his fellow Warriors pay a fine of 1D6 x 100 gold each."
        },
        {
          "event_n_haz_subs_id" : 327,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "CORRUPT LAW",
          "event_n_haz_subs_roll" : "3",
          "event_n_haz_id" : 295,
          "event_n_haz_subs_order" : 3,
          "event_n_haz_subs_description" : "Breaking and Entering. You Warrior must pay a fine of 1D6 x 200 gold pieces or face 2D6 days in jail."
        },
        {
          "event_n_haz_subs_id" : 328,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "CORRUPT LAW",
          "event_n_haz_subs_roll" : "4",
          "event_n_haz_id" : 295,
          "event_n_haz_subs_order" : 4,
          "event_n_haz_subs_description" : "Burglary. Your Warrior is to spend 1D6 days in jail or have his fellow Warriors pay 1D6 x 20 gold for his release."
        },
        {
          "event_n_haz_subs_id" : 329,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "CORRUPT LAW",
          "event_n_haz_subs_roll" : "5",
          "event_n_haz_id" : 295,
          "event_n_haz_subs_order" : 5,
          "event_n_haz_subs_description" : "Insulting a superior officer.  Your Warrior is given a quick beating and left lying in the road. Lose 1D6 Wounds, not modified for anything."
        },
        {
          "event_n_haz_subs_id" : 330,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "CORRUPT LAW",
          "event_n_haz_subs_roll" : "6",
          "event_n_haz_id" : 295,
          "event_n_haz_subs_order" : 6,
          "event_n_haz_subs_description" : "Walking on the grass. Your Warrior is warned to stay on the pavement and keep of the grass. Do not let it happen again!"
        },
        {
          "event_n_haz_subs_id" : 331,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "JEWELS",
          "event_n_haz_subs_roll" : "1",
          "event_n_haz_id" : 297,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "Easily outrunning the fat merchant, your Warrior greedily grabs the magical fleeing gems. The gems erupt in a shower of magical power and fragments, causing your Warrior to lose 3D6 Wounds."
        },
        {
          "event_n_haz_subs_id" : 332,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "JEWELS",
          "event_n_haz_subs_roll" : "2",
          "event_n_haz_id" : 297,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "Catching up to the gems, your Warrior does not notice the mysterious looking black clad thieves as they smack him over the head with an iron club. When he awakens, your Warrior has lost 1D6 x 100 gold pieces. The merchant, thieves or the emeralds are nowhere in sight."
        },
        {
          "event_n_haz_subs_id" : 333,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "JEWELS",
          "event_n_haz_subs_roll" : "3",
          "event_n_haz_id" : 297,
          "event_n_haz_subs_order" : 3,
          "event_n_haz_subs_description" : "The merchant sees he has competition and runs even faster, falling flat on his face. Bungling, your Warrior, in his fit of mirth, slams head first into a tree, losing sight of the gems and 3 Wounds, not modified for anything."
        },
        {
          "event_n_haz_subs_id" : 334,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "JEWELS",
          "event_n_haz_subs_roll" : "4",
          "event_n_haz_id" : 297,
          "event_n_haz_subs_order" : 4,
          "event_n_haz_subs_description" : "The merchant is too limber for your Warrior, who loses sight of the gems and merchant in the darkness of the night."
        },
        {
          "event_n_haz_subs_id" : 335,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "JEWELS",
          "event_n_haz_subs_roll" : "5",
          "event_n_haz_id" : 297,
          "event_n_haz_subs_order" : 5,
          "event_n_haz_subs_description" : "Pushing the merchant over as he makes a grab for the gems, your Warrior snatches them and hides them in his pouch. Each gem is worth 200 gold pieces. At the beginning of every turn that the magical gems remain in his possession, when he should have sold them by now, roll 1D6. On a roll of 1, 2 or 3, the magical emeralds flee the Warrior’s pouch and are lost in the crowds."
        },
        {
          "event_n_haz_subs_id" : 336,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "JEWELS",
          "event_n_haz_subs_roll" : "6",
          "event_n_haz_id" : 297,
          "event_n_haz_subs_order" : 6,
          "event_n_haz_subs_description" : "The gems have an entrancing effect on your Warrior, and he feels himself being pulled onwards. Out of the Settlement he runs, always just out of reach of the emeralds. After what seems like hours, the gems enter a cavern system, taking your Warrior, and the fat merchant, to a treasure filled cave. The gems, now happy to be home, embed themselves in the wall. Your Warrior can take 1 treasure card and 2D6 x 100 gold. Unfortunately, he is now so far from the Settlement, he must wait for his fellow Warriors outside."
        },
        {
          "event_n_haz_subs_id" : 337,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "ORANGE MIST",
          "event_n_haz_subs_roll" : "1",
          "event_n_haz_id" : 300,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "In agony, your Warrior is transformed into a strange creature of limited strength and intelligence. Roll on Dungeon Level 1 to see which creature he has been turned into for the next adventure only. Use common sense when determining what type of equipment this creature can use. The effects of the mists last until the part has finished the next adventure."
        },
        {
          "event_n_haz_subs_id" : 338,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "ORANGE MIST",
          "event_n_haz_subs_roll" : "2",
          "event_n_haz_id" : 300,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "In agony, your Warrior is transformed into a strange creature of power. Roll on Dungeon Level 3 to see which creature he has been turned into for the next adventure only. Use common sense when determining what type of equipment this creature can use. The effects of the mists last until the part has finished the next adventure."
        },
        {
          "event_n_haz_subs_id" : 341,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "ORANGE MIST",
          "event_n_haz_subs_roll" : "5",
          "event_n_haz_id" : 300,
          "event_n_haz_subs_order" : 5,
          "event_n_haz_subs_description" : "Your Warrior mutates into a huge handsome barbarian. For the next adventure, your Warrior has the following bonuses:  +3 WS, +2 BS, +2 Toughness, -1 Move, and he can not cast any spells at all, or use blessings."
        },
        {
          "event_n_haz_subs_id" : 342,
          "event_n_haz_subs_type" : "settlement event",
          "event_n_haz_subs_name" : "ORANGE MIST",
          "event_n_haz_subs_roll" : "6",
          "event_n_haz_id" : 300,
          "event_n_haz_subs_order" : 6,
          "event_n_haz_subs_description" : "In agony, your Warrior is transformed into a strange creature of unlimited strength and intelligence. Roll on Dungeon Level 8 to see which creature he has been turned into for the next adventure only. Use common sense when determining what type of equipment this creature can use. The effects of the mists last until the party has finished the next adventure."
        },
        {
          "event_n_haz_subs_id" : 343,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "CAVE",
          "event_n_haz_subs_roll" : "1",
          "event_n_haz_id" : 102,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "As the Warriors descend, the tunnel collapses on to them.  Roll 5D6 Wounds for every Warrior.  The Warriors drag themselves to safety."
        },
        {
          "event_n_haz_subs_id" : 344,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "CAVE",
          "event_n_haz_subs_roll" : "2",
          "event_n_haz_id" : 102,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "The room is a Minotaur’s lair.  Set up a battlefield using a dungeon room section, and decide who the minotaur fights by drawing a dungeon counter as usual.  The Warriors can not leave until the beast is destroyed."
        },
        {
          "event_n_haz_subs_id" : 345,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "CAVE",
          "event_n_haz_subs_roll" : "3",
          "event_n_haz_id" : 102,
          "event_n_haz_subs_order" : 3,
          "event_n_haz_subs_description" : "2D6 Giant Rats assault the party.  See 2 for how to handle this combat."
        },
        {
          "event_n_haz_subs_id" : 346,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "CAVE",
          "event_n_haz_subs_roll" : "4",
          "event_n_haz_id" : 102,
          "event_n_haz_subs_order" : 4,
          "event_n_haz_subs_description" : "The tunnel empties into an alcove too small for any Warriors to fit through.  They can not get into the cavern beyond."
        },
        {
          "event_n_haz_subs_id" : 347,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "CAVE",
          "event_n_haz_subs_roll" : "5",
          "event_n_haz_id" : 102,
          "event_n_haz_subs_order" : 5,
          "event_n_haz_subs_description" : "The tunnel ends in a large cavern, with small piles of treasure everywhere.  Each Warrior gains 1D6*10 gold pieces."
        },
        {
          "event_n_haz_subs_id" : 348,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "CAVE",
          "event_n_haz_subs_roll" : "6",
          "event_n_haz_id" : 102,
          "event_n_haz_subs_order" : 6,
          "event_n_haz_subs_description" : "On a pedestal at the end of the tunnel is a magic item.  Roll once on the Magic Item List."
        },
        {
          "event_n_haz_subs_id" : 349,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "AMBUSH",
          "event_n_haz_subs_roll" : "1",
          "event_n_haz_id" : 103,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "The Warrior is attacked from behind by a rider and has 2D6*100 gold taken from him."
        },
        {
          "event_n_haz_subs_id" : 350,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "AMBUSH",
          "event_n_haz_subs_roll" : "2",
          "event_n_haz_id" : 103,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "The Warrior is attacked from behind by a rider and has 2D6*10 gold taken from him."
        },
        {
          "event_n_haz_subs_id" : 351,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "AMBUSH",
          "event_n_haz_subs_roll" : "3",
          "event_n_haz_id" : 103,
          "event_n_haz_subs_order" : 3,
          "event_n_haz_subs_description" : "The Warrior is knocked unconscious by many blows.  His Wounds are now 0, and the Warriors rest a full week without travel for him to heal, unless he can be healed as normal by potions, magic, etc."
        },
        {
          "event_n_haz_subs_id" : 352,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "AMBUSH",
          "event_n_haz_subs_roll" : "4",
          "event_n_haz_id" : 103,
          "event_n_haz_subs_order" : 4,
          "event_n_haz_subs_description" : "The Warrior manages to fend of the many blows and escapes unscathed from the ambush."
        },
        {
          "event_n_haz_subs_id" : 353,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "AMBUSH",
          "event_n_haz_subs_roll" : "5",
          "event_n_haz_id" : 103,
          "event_n_haz_subs_order" : 5,
          "event_n_haz_subs_description" : "The Warrior takes down many goblins, and scoops up 2D6*10 gold before fleeing to safety."
        },
        {
          "event_n_haz_subs_id" : 354,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "AMBUSH",
          "event_n_haz_subs_roll" : "6",
          "event_n_haz_id" : 103,
          "event_n_haz_subs_order" : 6,
          "event_n_haz_subs_description" : "The Warrior dispatches with many goblin scum and earns 2D6*100 gold in the process of escaping."
        },
        {
          "event_n_haz_subs_id" : 355,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "CARAVANS",
          "event_n_haz_subs_roll" : "1",
          "event_n_haz_id" : 106,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "For some reason, the Caravan owners do not want to be seen with the Warriors.  They threaten them to take a different route, or face the consequences.  The Warriors must add 1 week to the journey."
        },
        {
          "event_n_haz_subs_id" : 356,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "CARAVANS",
          "event_n_haz_subs_roll" : "2",
          "event_n_haz_id" : 106,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "The Caravans ignore the Warriors."
        },
        {
          "event_n_haz_subs_id" : 357,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "CARAVANS",
          "event_n_haz_subs_roll" : "3",
          "event_n_haz_id" : 106,
          "event_n_haz_subs_order" : 3,
          "event_n_haz_subs_description" : "Smiling politely, the leader offers the party a ride.  (Which they can accept if they don’t have any horses, mules, or carts.)  The ride takes 2 weeks off travel time."
        },
        {
          "event_n_haz_subs_id" : 358,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "CARAVANS",
          "event_n_haz_subs_roll" : "4",
          "event_n_haz_id" : 106,
          "event_n_haz_subs_order" : 4,
          "event_n_haz_subs_description" : "The Caravans are merchant caravans, selling armour, weapons, and general goods.  All items of Stock with a number higher than 6 are not available, but all available goods are 20 gold cheaper.  If any Warrior is accused of Time Wasting, see the result for 1."
        },
        {
          "event_n_haz_subs_id" : 359,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "CARAVANS",
          "event_n_haz_subs_roll" : "5",
          "event_n_haz_id" : 106,
          "event_n_haz_subs_order" : 5,
          "event_n_haz_subs_description" : "If a Wizard is in the party, he can sense dark magic coming from a caravan.  Upon sliding open the curtain, a Chaos Sorcerer sits.  The Warriors have uncovered a sinister plot of dark sorcery.  The Caravans make a break for it, but not before the Chaos Sorcerer is slain, and his possessions are taken.  Roll on the Magic Item Table once, or take a card.  If no Warriors are Wizards, treat this as 2."
        },
        {
          "event_n_haz_subs_id" : 360,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "CARAVANS",
          "event_n_haz_subs_roll" : "6",
          "event_n_haz_id" : 106,
          "event_n_haz_subs_order" : 6,
          "event_n_haz_subs_description" : "The leader informs the Warriors that the daughter of a wealthy Baron is in the caravan.  He offers each Warrior 500 gold if they will be her bodyguards until they reach their destination. If they accept, the first event that harms a Warrior, does no damage, but kills the Baron’s daughter instead.  Of course, this means that no gold is forthcoming...."
        },
        {
          "event_n_haz_subs_id" : 361,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "CHAOS MAGIC",
          "event_n_haz_subs_roll" : "1",
          "event_n_haz_id" : 113,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "All the Warriors are turned into chickens for a short period of time.  When they transform back, one magic treasure has been stolen by a farmer, wondering why his chickens had it.  Determine this randomly."
        },
        {
          "event_n_haz_subs_id" : 362,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "CHAOS MAGIC",
          "event_n_haz_subs_roll" : "2",
          "event_n_haz_id" : 113,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "One Warrior (Random) is plucked from the ground and flown miles away amongst the black lightning.  The lightning finally drops him, and he is 1D6 weeks away from his chosen destination, alone.  This means he may be closer, or farther away from it.  When rolling for hazards, roll separately for the Warrior alone.  He has also lost 1D6*10 gold from his pockets."
        },
        {
          "event_n_haz_subs_id" : 363,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "CHAOS MAGIC",
          "event_n_haz_subs_roll" : "3",
          "event_n_haz_id" : 113,
          "event_n_haz_subs_order" : 3,
          "event_n_haz_subs_description" : "The lightning deposits a large fireball amongst the Warriors, frying them all for 3D6 Wounds.  Toughness and Armor can be taken into account."
        },
        {
          "event_n_haz_subs_id" : 364,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "CHAOS MAGIC",
          "event_n_haz_subs_roll" : "4",
          "event_n_haz_id" : 113,
          "event_n_haz_subs_order" : 4,
          "event_n_haz_subs_description" : "As the lightning passes, a random Warrior realizes his weapon is glowing.  The next successful hit causes double damage. (Double damage before adding strength and other bonuses.)  The power of the weapon then fades."
        },
        {
          "event_n_haz_subs_id" : 365,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "CHAOS MAGIC",
          "event_n_haz_subs_roll" : "5",
          "event_n_haz_id" : 113,
          "event_n_haz_subs_order" : 5,
          "event_n_haz_subs_description" : "A large patch of the ground has been turned to gold.  If the Wizard casts Ogre Strength on someone, or the Dwarf has a set of lock picks, the ground can be broken, and each Warrior gets 3D6*10 worth of gold fragments."
        },
        {
          "event_n_haz_subs_id" : 366,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "CHAOS MAGIC",
          "event_n_haz_subs_roll" : "6",
          "event_n_haz_id" : 113,
          "event_n_haz_subs_order" : 6,
          "event_n_haz_subs_description" : "The Wizard feels a surge of power inside his mind.  For the next 1D6 spells he casts, he does not need to spend any power at all, though he must still roll in the Power Phase.  This does mean that he could cast 6 Casting Level 12 spells in a single turn without the slightest bit of strain."
        },
        {
          "event_n_haz_subs_id" : 367,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "TRADERS",
          "event_n_haz_subs_roll" : "1",
          "event_n_haz_id" : 116,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "The box contains a dead rat which stinks so badly, it causes him to lose 1 Wound due to suffocation."
        },
        {
          "event_n_haz_subs_id" : 368,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "TRADERS",
          "event_n_haz_subs_roll" : "2",
          "event_n_haz_id" : 116,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "The box is empty."
        },
        {
          "event_n_haz_subs_id" : 369,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "TRADERS",
          "event_n_haz_subs_roll" : "3-6",
          "event_n_haz_id" : 116,
          "event_n_haz_subs_order" : 3,
          "event_n_haz_subs_description" : "The box contains, as the traders said, a great weapon.  Roll on the Magic Weapons and Armour Table, but keep rolling until a weapon is found.  Reroll any armour rolls.  Then roll a number of D6 equal to the number you got for this roll.  If a 1 is rolled, the weapon is useless, and can not be used.  The traders have sold a false item.  Of course, the shop owners don’t know this.  The Warrior can try to sell the item for its value, but roll 1D6.  A 1-2 means the owner saw through the Warrior’s scam and threw him out, taking the item, and 1D6*10 gold for compensation."
        },
        {
          "event_n_haz_subs_id" : 370,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "PATH",
          "event_n_haz_subs_roll" : "1-3",
          "event_n_haz_id" : 119,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "The path takes you around in a circle, back to the dungeon entrance you started from.  The Warriors must start their journey again."
        },
        {
          "event_n_haz_subs_id" : 371,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "PATH",
          "event_n_haz_subs_roll" : "4-6",
          "event_n_haz_id" : 119,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "The path is, gratefully, a shortcut to the Warrior’s destination.  The Warrior’s travels are over.  No more rolls on the Hazard table are necessary."
        },
        {
          "event_n_haz_subs_id" : 372,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "CHAPEL",
          "event_n_haz_subs_roll" : "1",
          "event_n_haz_id" : 125,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "The Gods are angered.  Lose 1 Permanent Wound."
        },
        {
          "event_n_haz_subs_id" : 375,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "TALISMAN",
          "event_n_haz_subs_roll" : "1-2",
          "event_n_haz_id" : 126,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "The Warrior begins to transform before the other’s very eyes. Make a roll on the\tMonster Chart one lower than the Battle level that the Warrior is currently on (min Battle level 1). The Warrior is now that monster for the duration of the next quest. He has all the statistics of that monster, including wounds. Therefore any special abilities which relate to the Warrior are ignored."
        },
        {
          "event_n_haz_subs_id" : 376,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "TALISMAN",
          "event_n_haz_subs_roll" : "3-4",
          "event_n_haz_id" : 126,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "There is an inscription on the back saying ‘Only with the Talisman can you enter the Valley of Fire....’"
        },
        {
          "event_n_haz_subs_id" : 377,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "TALISMAN",
          "event_n_haz_subs_roll" : "5-6",
          "event_n_haz_id" : 126,
          "event_n_haz_subs_order" : 3,
          "event_n_haz_subs_description" : "The Warrior begins to transform before the other’s very eyes. Make a roll on the Monster Table one higher than the Battle level that the Warrior is currently on (max Battle level 10). The Warrior is now that monster for the duration of the next quest. He has all the statistics of that monster, including wounds. Therefore any special abilities which relate to the Warrior are ignored.  If a Warrior is turned into a beast of some kind, he may not visit any Special Locations, not even the Alehouse or Gambling House.  But he can, if he wishes, visit any shop as normal.  Except if he is a giant rat, or similar beast.  Use common sense in these situations.  Also, the talisman, after transforming the Warrior, disintegrates, leaving no sign of it.  Only if a 3-4 is rolled, can a Warrior keep the talisman."
        },
        {
          "event_n_haz_subs_id" : 378,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "POTIONS",
          "event_n_haz_subs_roll" : "1",
          "event_n_haz_id" : 128,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "Feeling sickened, the Warrior groans in agony, and falls to the ground.  When he awakens, he is at -1 Toughness for the next quest."
        },
        {
          "event_n_haz_subs_id" : 379,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "POTIONS",
          "event_n_haz_subs_roll" : "2",
          "event_n_haz_id" : 128,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "The potion causes motion sickness.  For the next quest, the warrior is at -1 Attacks.  The minimum is 1 attack, though."
        },
        {
          "event_n_haz_subs_id" : 380,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "POTIONS",
          "event_n_haz_subs_roll" : "3",
          "event_n_haz_id" : 128,
          "event_n_haz_subs_order" : 3,
          "event_n_haz_subs_description" : "The Warrior goes berserk, slashing all adjacent Warriors and Monsters for 1D6 Wounds each.  The effect then wears off."
        },
        {
          "event_n_haz_subs_id" : 381,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "POTIONS",
          "event_n_haz_subs_roll" : "4",
          "event_n_haz_id" : 128,
          "event_n_haz_subs_order" : 4,
          "event_n_haz_subs_description" : "Suddenly, the Warrior feels very amorous towards the old lady, and gives her a huge kiss on the cheek.  Smiling and blushing, the old lady giggles and runs away.  No Warriors may by any more potions this visit."
        },
        {
          "event_n_haz_subs_id" : 382,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "POTIONS",
          "event_n_haz_subs_roll" : "5",
          "event_n_haz_id" : 128,
          "event_n_haz_subs_order" : 5,
          "event_n_haz_subs_description" : "The Warriors muscles begin to bulge.  For the next adventure,( Or for the rest of this one, if currently on one) his Strength is at +1."
        },
        {
          "event_n_haz_subs_id" : 383,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "POTIONS",
          "event_n_haz_subs_roll" : "6",
          "event_n_haz_id" : 128,
          "event_n_haz_subs_order" : 6,
          "event_n_haz_subs_description" : "The Warrior feels extremely bold, and feels as if he could take on a whole hoard of demons.  For the next adventure, his Strength, Toughness and Luck are increased by 1 point each."
        },
        {
          "event_n_haz_subs_id" : 384,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "OGRES",
          "event_n_haz_subs_roll" : "1",
          "event_n_haz_id" : 129,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "Ogres return home for the evening, and smash the Warriors with mighty clubs.  Each Warrior takes 3D6 Wounds before charging frantically out."
        },
        {
          "event_n_haz_subs_id" : 385,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "OGRES",
          "event_n_haz_subs_roll" : "2",
          "event_n_haz_id" : 129,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "The Warriors hear Ogres returning home, and make a wild dash into the forests nearby.  Unfortunately, this is in the opposite direction to their destination, and they must add 1 week to travel time."
        },
        {
          "event_n_haz_subs_id" : 386,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "OGRES",
          "event_n_haz_subs_roll" : "3",
          "event_n_haz_id" : 129,
          "event_n_haz_subs_order" : 3,
          "event_n_haz_subs_description" : "Nothing is found in the remains of the animals the ogres have been eating."
        },
        {
          "event_n_haz_subs_id" : 387,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "OGRES",
          "event_n_haz_subs_roll" : "4",
          "event_n_haz_id" : 129,
          "event_n_haz_subs_order" : 4,
          "event_n_haz_subs_description" : "A random Warrior finds a cache of 1D6*20 gold on a corpse."
        },
        {
          "event_n_haz_subs_id" : 388,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "OGRES",
          "event_n_haz_subs_roll" : "5",
          "event_n_haz_id" : 129,
          "event_n_haz_subs_order" : 5,
          "event_n_haz_subs_description" : "Each Warrior is lucky enough to collect 2D6*20 gold for themselves."
        },
        {
          "event_n_haz_subs_id" : 389,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "OGRES",
          "event_n_haz_subs_roll" : "6",
          "event_n_haz_id" : 129,
          "event_n_haz_subs_order" : 6,
          "event_n_haz_subs_description" : "A random Warrior locates an item of treasure on a dark elf corpse.  Draw 1 treasure card, but do not roll on any tables."
        },
        {
          "event_n_haz_subs_id" : 390,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "SERPENT PILLARS",
          "event_n_haz_subs_roll" : "1",
          "event_n_haz_id" : 130,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "The Warriors find themselves back at the Dungeon entrance they have travelled from.  They must begin the journey again."
        },
        {
          "event_n_haz_subs_id" : 391,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "SERPENT PILLARS",
          "event_n_haz_subs_roll" : "6",
          "event_n_haz_id" : 130,
          "event_n_haz_subs_order" : 3,
          "event_n_haz_subs_description" : "The Warriors emerge from the two pillars in a huge city.  The journey is over."
        },
        {
          "event_n_haz_subs_id" : 392,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "SERPENT PILLARS",
          "event_n_haz_subs_roll" : "2-5",
          "event_n_haz_id" : 130,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "The Warriors haven’t seem to have gone anywhere.  Perhaps that is all they were in the first place."
        },
        {
          "event_n_haz_subs_id" : 393,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "NIGHT",
          "event_n_haz_subs_roll" : "1",
          "event_n_haz_id" : 135,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "Giant Bats flutter out from the undergrowth and swoop towards the Warriors.  Each Warrior must take 1D6 Wounds because of the fury of the Attack.  If any Warrior is reduced to 0 or less, the Bats begin feeding.  By the time the Warriors have scarred them away, all that remains of the Warrior is a bloodied corpse, too far gone to be resurrected or saved.  That Warrior is out of the game."
        },
        {
          "event_n_haz_subs_id" : 394,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "NIGHT",
          "event_n_haz_subs_roll" : "2",
          "event_n_haz_id" : 135,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "Night Goblin Archers launch a volley of arrows towards the Warriors.  Each Warrior takes 1D6 Wounds.  Each Warrior now rolls 1D6.  On a score of 1, the arrow that hit him was poisoned, causing the Warrior to lose 1 point of Strength for the next quest.  After that, the effects wear off."
        },
        {
          "event_n_haz_subs_id" : 395,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "NIGHT",
          "event_n_haz_subs_roll" : "3",
          "event_n_haz_id" : 135,
          "event_n_haz_subs_order" : 3,
          "event_n_haz_subs_description" : "The eyes turn out only to be owls, searching for rodent prey."
        },
        {
          "event_n_haz_subs_id" : 396,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "NIGHT",
          "event_n_haz_subs_roll" : "4",
          "event_n_haz_id" : 135,
          "event_n_haz_subs_order" : 4,
          "event_n_haz_subs_description" : "The eyes are actually lights of a nearby village in the trees.  The Warriors can stop their journey here at the village if they desire, or continue."
        },
        {
          "event_n_haz_subs_id" : 397,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "NIGHT",
          "event_n_haz_subs_roll" : "5",
          "event_n_haz_id" : 135,
          "event_n_haz_subs_order" : 5,
          "event_n_haz_subs_description" : "The Elf identifies them as Fire Berries growing on trees.  Each Warrior can take 1D6 worth of them.  Each berry can be thrown in battle as an additional attack.  They explode on contact with the ground, causing 1D6+1 damage to all Monsters and Warriors in a 2 by 2 squared area, taking armor and toughness into account.  Each berry can be used once."
        },
        {
          "event_n_haz_subs_id" : 398,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "NIGHT",
          "event_n_haz_subs_roll" : "6",
          "event_n_haz_id" : 135,
          "event_n_haz_subs_order" : 6,
          "event_n_haz_subs_description" : "The eyes are actually Will-o-the-Wisps, taunting the Warriors to follow them into the forest.  If they do, roll 1D6:"
        },
        {
          "event_n_haz_subs_id" : 399,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "NIGHT",
          "event_n_haz_subs_roll" : "1-3",
          "event_n_haz_id" : 135,
          "event_n_haz_subs_order" : 7,
          "event_n_haz_subs_description" : "- \tThe wisps lose the Warriors in the forest, and they spend 2 weeks finding their way out again."
        },
        {
          "event_n_haz_subs_id" : 400,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "NIGHT",
          "event_n_haz_subs_roll" : "4-6",
          "event_n_haz_id" : 135,
          "event_n_haz_subs_order" : 8,
          "event_n_haz_subs_description" : "- \tThe wisps take them to a hidden  High Elf city.  The Warrior’s journey is over."
        },
        {
          "event_n_haz_subs_id" : 401,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "TRAVELLER",
          "event_n_haz_subs_roll" : "1",
          "event_n_haz_id" : 144,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "His sword is suddenly in his hand, darting left and right with furious intention.  Each Warrior takes 2D6 Wounds before he vanishes into the forest."
        },
        {
          "event_n_haz_subs_id" : 402,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "TRAVELLER",
          "event_n_haz_subs_roll" : "2",
          "event_n_haz_id" : 144,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "He spits at a random Warrior’s feet, smacking him across the face for 1D6 Wounds.  He then wanders off."
        },
        {
          "event_n_haz_subs_id" : 403,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "TRAVELLER",
          "event_n_haz_subs_roll" : "3",
          "event_n_haz_id" : 144,
          "event_n_haz_subs_order" : 3,
          "event_n_haz_subs_description" : "The traveller demands a toll fee of 50 gold pieces per Warrior to pass..  Each can pay, or he spreads lies about the warriors and all purchases cost  1D6x10 more in the next settlement."
        },
        {
          "event_n_haz_subs_id" : 404,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "TRAVELLER",
          "event_n_haz_subs_roll" : "4",
          "event_n_haz_id" : 144,
          "event_n_haz_subs_order" : 4,
          "event_n_haz_subs_description" : "He waves good bye and wanders off down the road."
        },
        {
          "event_n_haz_subs_id" : 405,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "TRAVELLER",
          "event_n_haz_subs_roll" : "5",
          "event_n_haz_id" : 144,
          "event_n_haz_subs_order" : 5,
          "event_n_haz_subs_description" : "He offers directions to the Warriors, taking 1 week off their travel times."
        },
        {
          "event_n_haz_subs_id" : 406,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "TRAVELLER",
          "event_n_haz_subs_roll" : "6",
          "event_n_haz_id" : 144,
          "event_n_haz_subs_order" : 6,
          "event_n_haz_subs_description" : "He offers to sharpen a random Warrior’s weapon.  For the next adventure, it does an extra Wound damage."
        },
        {
          "event_n_haz_subs_id" : 440,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "WAKE UP",
          "event_n_haz_subs_roll" : "2",
          "event_n_haz_id" : 165,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "The Warrior sits up to find a Snotling dragging his gold pouch away.  Roll 1D6 for the Warrior and add his Initiative, if the score is higher than 7, the snotling is crushed under the Warriors quick sword.  Otherwise, the snotling is too fast, and drags the pouch to safety within the trees.  Fortunately, his small sword ripped a hole in the pouch, and a quarter of the Warrior’s fortune lies in a hole by the roadside."
        },
        {
          "event_n_haz_subs_id" : 407,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "MINSTREL",
          "event_n_haz_subs_roll" : "1",
          "event_n_haz_id" : 149,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "His playing is awful!  The guards seize him and your Warriors and throw them in the jail for 1D6 days.  The Warriors are at the settlement now, but start off in prison, which means they do not have to pay living expenses or roll on the Settlements Event Table.  Of course, a Warrior could always bribe a guard to let him free.  Pay 1D6*50 gold and roll 1D6.  1-3 and the guard takes the gold and spits in the Warrior’s face laughing.  4-6 and the Warrior is released.  Only one attempt at bribing can be attempted per Warrior.  If 1 Warrior gets out, the others do not, unless they pay also."
        },
        {
          "event_n_haz_subs_id" : 408,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "MINSTREL",
          "event_n_haz_subs_roll" : "2",
          "event_n_haz_id" : 149,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "The Minstrel is kicked out of the city with the Warriors.  They can then travel to the next quest, or to the next settlement, which means rerolling for hazards all over again."
        },
        {
          "event_n_haz_subs_id" : 409,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "MINSTREL",
          "event_n_haz_subs_roll" : "3",
          "event_n_haz_id" : 149,
          "event_n_haz_subs_order" : 3,
          "event_n_haz_subs_description" : "Only one person claps in the distance.  The rest are silent.  Bowing his head in shame, the minstrel wanders off.  The Warriors are free to enter the city."
        },
        {
          "event_n_haz_subs_id" : 410,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "MINSTREL",
          "event_n_haz_subs_roll" : "4",
          "event_n_haz_id" : 149,
          "event_n_haz_subs_order" : 4,
          "event_n_haz_subs_description" : "A small round of applause is forthcoming.  The crowd collect together a small offering of 2D6*10 gold too share amongst the Warriors.  (The minstrel does not seem to notice that he gets nothing)"
        },
        {
          "event_n_haz_subs_id" : 411,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "MINSTREL",
          "event_n_haz_subs_roll" : "5",
          "event_n_haz_id" : 149,
          "event_n_haz_subs_order" : 5,
          "event_n_haz_subs_description" : "The guards roar with applause, showering the Warriors with gold.  Each Warrior gains 1D6*50 gold pieces."
        },
        {
          "event_n_haz_subs_id" : 412,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "MINSTREL",
          "event_n_haz_subs_roll" : "6",
          "event_n_haz_id" : 149,
          "event_n_haz_subs_order" : 6,
          "event_n_haz_subs_description" : "Everyone is so impressed with the minstrel that they urge him to stay for ever to be their musician.  The Warriors are soon forgotten.  Oh well.  Fame does that to people sometimes."
        },
        {
          "event_n_haz_subs_id" : 413,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "TEMPLE",
          "event_n_haz_subs_roll" : "1",
          "event_n_haz_id" : 151,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "The temple is home to a group of monsters.  Roll on the Monster Table 1 Battle Level above the highest Warrior’s own Level, and fight a battle using a dungeon room section.  Treasure is as usual."
        },
        {
          "event_n_haz_subs_id" : 414,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "TEMPLE",
          "event_n_haz_subs_roll" : "2",
          "event_n_haz_id" : 151,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "Dark Chaos Priests are chanting sorcery here.  Upon noticing the Warriors, they turn their attention towards them.  Each Warrior is forced to lose either 1D6 wounds, 1 Strength or 1 Toughness, due to the chanting power.  These are lost until the end of the next adventure (or the one presently in)."
        },
        {
          "event_n_haz_subs_id" : 415,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "TEMPLE",
          "event_n_haz_subs_roll" : "3",
          "event_n_haz_id" : 151,
          "event_n_haz_subs_order" : 3,
          "event_n_haz_subs_description" : "A temple wall, weak from years of disuse, collapses onto the Warriors, each one taking 3D6 Wounds, and is otherwise empty."
        },
        {
          "event_n_haz_subs_id" : 416,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "TEMPLE",
          "event_n_haz_subs_roll" : "4",
          "event_n_haz_id" : 151,
          "event_n_haz_subs_order" : 4,
          "event_n_haz_subs_description" : "The temple is empty and long forgotten."
        },
        {
          "event_n_haz_subs_id" : 417,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "TEMPLE",
          "event_n_haz_subs_roll" : "5",
          "event_n_haz_id" : 151,
          "event_n_haz_subs_order" : 5,
          "event_n_haz_subs_description" : "The Warriors each find 1D6*20 gold pieces."
        },
        {
          "event_n_haz_subs_id" : 418,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "TEMPLE",
          "event_n_haz_subs_roll" : "6",
          "event_n_haz_id" : 151,
          "event_n_haz_subs_order" : 6,
          "event_n_haz_subs_description" : "The temple’s altar gifts each Warrior with 1 Permanent Wound."
        },
        {
          "event_n_haz_subs_id" : 419,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "FIRE",
          "event_n_haz_subs_roll" : "1",
          "event_n_haz_id" : 153,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "Due to intense heat, the Warrior’s gold is melted into one huge nugget, making its value halve."
        },
        {
          "event_n_haz_subs_id" : 420,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "FIRE",
          "event_n_haz_subs_roll" : "6",
          "event_n_haz_id" : 153,
          "event_n_haz_subs_order" : 3,
          "event_n_haz_subs_description" : "While collecting possessions to leave, the Warrior discovers a cache of jewels in the ground worth 100 gp.  While collecting them, the fire singes him for 2 Wounds. Armour and Toughness do not protect him."
        },
        {
          "event_n_haz_subs_id" : 421,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "FIRE",
          "event_n_haz_subs_roll" : "2-5",
          "event_n_haz_id" : 153,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "Luckily, the Warrior is not affected by the fire, other than minor burns as he runs from the heat."
        },
        {
          "event_n_haz_subs_id" : 422,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "SALESMAN",
          "event_n_haz_subs_roll" : "1",
          "event_n_haz_id" : 154,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "* Healing Potion (50 gp): Heals 1D6 Wounds.  One use."
        },
        {
          "event_n_haz_subs_id" : 423,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "SALESMAN",
          "event_n_haz_subs_roll" : "2",
          "event_n_haz_id" : 154,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "* Lucky Charm (50 gp): The Charm allows the Warrior to reroll any dice roll once per adventure."
        },
        {
          "event_n_haz_subs_id" : 424,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "SALESMAN",
          "event_n_haz_subs_roll" : "3",
          "event_n_haz_id" : 154,
          "event_n_haz_subs_order" : 3,
          "event_n_haz_subs_description" : "* Bronze Wristbands (30 gp): A Warrior wearing these can ignore 1 Wound, then they break."
        },
        {
          "event_n_haz_subs_id" : 425,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "SALESMAN",
          "event_n_haz_subs_roll" : "4",
          "event_n_haz_id" : 154,
          "event_n_haz_subs_order" : 4,
          "event_n_haz_subs_description" : "* Chalk (20 gp): When escaping, the Warriors need not roll on the Escaping Table, as they hsave marked their way out with the chalk.  One use."
        },
        {
          "event_n_haz_subs_id" : 426,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "SALESMAN",
          "event_n_haz_subs_roll" : "5",
          "event_n_haz_id" : 154,
          "event_n_haz_subs_order" : 5,
          "event_n_haz_subs_description" : "* Trinkets (20 gp): A trinket can given to people demanding gold while the Warriors are  travelling in the wilderness, instead of paying the normal price.  Roll 1D6.  On a 1-3, the original gold must be paid, on a 4-6, the trinket is accepted."
        },
        {
          "event_n_haz_subs_id" : 427,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "TORNADO",
          "event_n_haz_subs_roll" : "1",
          "event_n_haz_id" : 156,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "The Warrior is thrown up in the air, and is brought crashing to the ground.  He has lost 1D6*100 gold from his pockets and has broken both his legs.  The other Warriors must carry him, or place him on a cart, which adds 1 week to their journey.  As soon as the Warriors arrive at their destination, the wounded Warrior must pay 100 gp to be healed.  If he does not have this much left after losing it all in the tornado, then the healer will take all good he does have, plus an item of treasure.  (The Warrior chooses)"
        },
        {
          "event_n_haz_subs_id" : 428,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "TORNADO",
          "event_n_haz_subs_roll" : "2",
          "event_n_haz_id" : 156,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "The Warrior is tossed around like a rag doll, but manages to keep his grip on to the log he had grasped.  All that happens is he gets a few lumps and scratches, and a whopping headache, totalling 2D6 Wounds."
        },
        {
          "event_n_haz_subs_id" : 429,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "TORNADO",
          "event_n_haz_subs_roll" : "3-6",
          "event_n_haz_id" : 156,
          "event_n_haz_subs_order" : 3,
          "event_n_haz_subs_description" : "The Warrior manages to reach safety with the rest of his team."
        },
        {
          "event_n_haz_subs_id" : 430,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "SOLDIERS",
          "event_n_haz_subs_roll" : "1-2",
          "event_n_haz_id" : 157,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "The soldiers drive the Warriors off, taking 1D6*10 gold from each of them."
        },
        {
          "event_n_haz_subs_id" : 431,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "SOLDIERS",
          "event_n_haz_subs_roll" : "3-4",
          "event_n_haz_id" : 157,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "The Warriors manage to kill all the soldiers, but not before they slaughter the prisoner.  Each Warrior does manage to find 1D6*10 gold on the bodies of the fallen."
        },
        {
          "event_n_haz_subs_id" : 432,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "SOLDIERS",
          "event_n_haz_subs_roll" : "5-6",
          "event_n_haz_id" : 157,
          "event_n_haz_subs_order" : 3,
          "event_n_haz_subs_description" : "The Warriors defeat the soldiers, freeing the prisoner.  He thanks them, and journeys with them to the next settlement, where he immediately pays each Warrior 100 gold pieces."
        },
        {
          "event_n_haz_subs_id" : 433,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "STATUE",
          "event_n_haz_subs_roll" : "1",
          "event_n_haz_id" : 162,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "The Statue animates, swiping its huge arms around in a circle.  It causes any two random Warriors the loss of 4D6 Wounds.  If more than 12 Wounds are caused, the Warriors arms have been smashed.  He can no longer fight until he is healed by paying 100 to the local settlement healer."
        },
        {
          "event_n_haz_subs_id" : 434,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "STATUE",
          "event_n_haz_subs_roll" : "2",
          "event_n_haz_id" : 162,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "From the mouth of the Statue emits a dark gas.  Each Warrior is weakened and starts the next adventure with -1 to their To Hit rolls."
        },
        {
          "event_n_haz_subs_id" : 435,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "STATUE",
          "event_n_haz_subs_roll" : "3",
          "event_n_haz_id" : 162,
          "event_n_haz_subs_order" : 3,
          "event_n_haz_subs_description" : "The Statue is deadly to the touch, causing a random Warrior 1D6 Wounds when he accidentally touched it."
        },
        {
          "event_n_haz_subs_id" : 436,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "STATUE",
          "event_n_haz_subs_roll" : "4",
          "event_n_haz_id" : 162,
          "event_n_haz_subs_order" : 4,
          "event_n_haz_subs_description" : "The Statue is just that.  A statue."
        },
        {
          "event_n_haz_subs_id" : 437,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "STATUE",
          "event_n_haz_subs_roll" : "5",
          "event_n_haz_id" : 162,
          "event_n_haz_subs_order" : 5,
          "event_n_haz_subs_description" : "At the base of the Statue lies small offerings of gold to a deity.  The gold comes to 300 gold pieces, which is to be divided up amongst the Warriors."
        },
        {
          "event_n_haz_subs_id" : 438,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "STATUE",
          "event_n_haz_subs_roll" : "6",
          "event_n_haz_id" : 162,
          "event_n_haz_subs_order" : 6,
          "event_n_haz_subs_description" : "The Statue is extremely light weight, and can be traded in to a shop for 2000 gold pieces.  A random Warrior gets this gold if no one can decide who wants it."
        },
        {
          "event_n_haz_subs_id" : 439,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "WAKE UP",
          "event_n_haz_subs_roll" : "1",
          "event_n_haz_id" : 165,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "A huge Bull Centaur grins evilly down at the Warrior, bringing his axe downwards.  Make a To Hit roll.  If the roll hits, do damage accordingly.  While the Warrior is still stunned, the Centaur makes a run for it into the trees.  Don’t forget, that if a Bull Centaur gets 5 or 6 on his To Hit roll, he causes 2D6 Damage Dice, instead of 1D6.  It only gets 1 attack, not two."
        },
        {
          "event_n_haz_subs_id" : 441,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "WAKE UP",
          "event_n_haz_subs_roll" : "3",
          "event_n_haz_id" : 165,
          "event_n_haz_subs_order" : 3,
          "event_n_haz_subs_description" : "A Giant Rat is rummaging through the Warrior’s possessions.  Roll 1D6.  If the result is a 1-3, \t\tthen the rat runs off with an item of equipment before the Warrior can stop it.  Otherwise, the rat is killed easily."
        },
        {
          "event_n_haz_subs_id" : 442,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "WAKE UP",
          "event_n_haz_subs_roll" : "4",
          "event_n_haz_id" : 165,
          "event_n_haz_subs_order" : 4,
          "event_n_haz_subs_description" : "A nest of spiders has made its home in the Warriors hair.  Roll 1D6, and take that many Wounds, with no modifiers for Toughness or armour.  The spiders are then easily disposed of."
        },
        {
          "event_n_haz_subs_id" : 443,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "WAKE UP",
          "event_n_haz_subs_roll" : "5",
          "event_n_haz_id" : 165,
          "event_n_haz_subs_order" : 5,
          "event_n_haz_subs_description" : "There is nothing wrong.  It must have been the Warrior’s imagination."
        },
        {
          "event_n_haz_subs_id" : 444,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "WAKE UP",
          "event_n_haz_subs_roll" : "6",
          "event_n_haz_id" : 165,
          "event_n_haz_subs_order" : 6,
          "event_n_haz_subs_description" : "While trying to steal the Warrior’s possessions, a thief dropped his bag of goods.  The bag contains 1D6*50 gold, and 1 treasure card."
        },
        {
          "event_n_haz_subs_id" : 445,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "CIRCUS",
          "event_n_haz_subs_roll" : "1",
          "event_n_haz_id" : 169,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "The circus turns out to be a slave trader with his slaves in disguise.  The Warriors make a break for it, but not before one Warrior is brutally bashed over the head with a club for 1D6 Wounds, and has 1D6*10 gold stolen"
        },
        {
          "event_n_haz_subs_id" : 446,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "CIRCUS",
          "event_n_haz_subs_roll" : "2",
          "event_n_haz_id" : 169,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "The circus is made up of amateurs and useless artisans.  A very boring show!  The Warriors are waylaid a week, and must add 1 to their travel plans."
        },
        {
          "event_n_haz_subs_id" : 447,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "CIRCUS",
          "event_n_haz_subs_roll" : "3",
          "event_n_haz_id" : 169,
          "event_n_haz_subs_order" : 3,
          "event_n_haz_subs_description" : "The show is short and entertaining, well worth the 10 gold that each hero must pay for popcorn.  Its damn good popcorn."
        },
        {
          "event_n_haz_subs_id" : 448,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "CIRCUS",
          "event_n_haz_subs_roll" : "4",
          "event_n_haz_id" : 169,
          "event_n_haz_subs_order" : 4,
          "event_n_haz_subs_description" : "The circus announces some very famous people who will be performing.  Watching the circus teaches the warriors a special move they can use in the next dungeon.  Once, they each can use an acrobatic move to break pin automatically."
        },
        {
          "event_n_haz_subs_id" : 449,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "CIRCUS",
          "event_n_haz_subs_roll" : "5",
          "event_n_haz_id" : 169,
          "event_n_haz_subs_order" : 5,
          "event_n_haz_subs_description" : "The circus is actually a highly regarded noble of wealthy birth under cover with his retinue.  The noble offers to take the Warriors to his destination, which is a city.  If they accept, no more rolls on the Hazard table are necessary, and their journey ends here."
        },
        {
          "event_n_haz_subs_id" : 450,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "CIRCUS",
          "event_n_haz_subs_roll" : "6",
          "event_n_haz_id" : 169,
          "event_n_haz_subs_order" : 6,
          "event_n_haz_subs_description" : "The ring master offers a position to the Warriors as clowns.  If they accept, each Warrior gains 50*Weeks remaining of journey gold, and arrive at their destination safely, with no more hazard rolls required.  Time spent with the travelling circus was well worth it, especially since they were headed in the same direction as the Warriors."
        },
        {
          "event_n_haz_subs_id" : 451,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "WIZARD'S TOWER",
          "event_n_haz_subs_roll" : "1-3",
          "event_n_haz_id" : 171,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "The tower belongs to an evil necromancer, who proceeds to blast the Warriors for coming within a hundred feet of the tower.  Each Warrior takes 2D6 Wounds."
        },
        {
          "event_n_haz_subs_id" : 452,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "WIZARD'S TOWER",
          "event_n_haz_subs_roll" : "4-6",
          "event_n_haz_id" : 171,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "The tower belongs to a just and good warlock, who invites the Warriors in for a feast and a round of drinks.  Each Warrior gains 2D6 Wounds."
        },
        {
          "event_n_haz_subs_id" : 453,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "TEMPLE",
          "event_n_haz_subs_roll" : "1",
          "event_n_haz_id" : 173,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "The temple radiates such evil that the Warrior is engulfed in a radius of pure disgust, emanating from the statue of Nurgle on top of the temple walls.  He loses faith in his abilities for the next quest.  This means that he may only attack creatures that attack him first.  He may not choose an opponent.  Therefore, if no one attacks him, he will not fight that turn."
        },
        {
          "event_n_haz_subs_id" : 454,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "TEMPLE",
          "event_n_haz_subs_roll" : "2",
          "event_n_haz_id" : 173,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "The temple causes the Warrior to be sick.  He is at -1 toughness for the next quest only."
        },
        {
          "event_n_haz_subs_id" : 455,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "TEMPLE",
          "event_n_haz_subs_roll" : "3",
          "event_n_haz_id" : 173,
          "event_n_haz_subs_order" : 3,
          "event_n_haz_subs_description" : "The temple causes the Warrior to be weakened.  He is at -1 strength for the next quest only."
        },
        {
          "event_n_haz_subs_id" : 456,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "TEMPLE",
          "event_n_haz_subs_roll" : "4",
          "event_n_haz_id" : 173,
          "event_n_haz_subs_order" : 4,
          "event_n_haz_subs_description" : "The Warrior is disgusted with the monstrosity, but it does not effect him."
        },
        {
          "event_n_haz_subs_id" : 457,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "TEMPLE",
          "event_n_haz_subs_roll" : "5",
          "event_n_haz_id" : 173,
          "event_n_haz_subs_order" : 5,
          "event_n_haz_subs_description" : "Searching, he finds a pouch of gold worth 1D6*20 gold pieces."
        },
        {
          "event_n_haz_subs_id" : 458,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "TEMPLE",
          "event_n_haz_subs_roll" : "6",
          "event_n_haz_id" : 173,
          "event_n_haz_subs_order" : 6,
          "event_n_haz_subs_description" : "Searching, he finds a magical treasure lying amongst the diseased plant life at the base of the tower.  Take a treasure card."
        },
        {
          "event_n_haz_subs_id" : 459,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "NIGHT",
          "event_n_haz_subs_roll" : "1-3",
          "event_n_haz_id" : 174,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "Nothing happens"
        },
        {
          "event_n_haz_subs_id" : 460,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "NIGHT",
          "event_n_haz_subs_roll" : "4-6",
          "event_n_haz_id" : 174,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "A random Warrior begins to show signs of aggression.  The next battle, at the beginning of his turn, roll 1D6.  A 6 means that the magic of the full moon has angered him enough to attack his opponent with such vigour and malice, he gets an extra attack, +1 To Hit, and +2 to Damage.  Keep rolling before every battle until the Warrior gets these bonuses.  Only one roll is made per battle though."
        },
        {
          "event_n_haz_subs_id" : 461,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "TREASURE",
          "event_n_haz_subs_roll" : "1-3",
          "event_n_haz_id" : 178,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "It is indeed a trap.  A group of monsters attack the Warriors, one level above their current battle level.  Roll accordingly.  Once dead, two treasure card can be taken.  One for the kill, and for the item on the road."
        },
        {
          "event_n_haz_subs_id" : 462,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "TREASURE",
          "event_n_haz_subs_roll" : "4-6",
          "event_n_haz_id" : 178,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "The item doesn't seem to belong to any one.  Take a treasure card."
        },
        {
          "event_n_haz_subs_id" : 463,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "POOL OF WATER",
          "event_n_haz_subs_roll" : "1",
          "event_n_haz_id" : 186,
          "event_n_haz_subs_order" : 1,
          "event_n_haz_subs_description" : "The pool is poisoned, causing the Warriors to lose 1 Wound each, due to the noxious fumes."
        },
        {
          "event_n_haz_subs_id" : 464,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "POOL OF WATER",
          "event_n_haz_subs_roll" : "2",
          "event_n_haz_id" : 186,
          "event_n_haz_subs_order" : 2,
          "event_n_haz_subs_description" : "In a fit of rage, the wizard character throws himself into the water, and pulls himself sorely out minus one randomly chosen spell.."
        },
        {
          "event_n_haz_subs_id" : 465,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "POOL OF WATER",
          "event_n_haz_subs_roll" : "3",
          "event_n_haz_id" : 186,
          "event_n_haz_subs_order" : 3,
          "event_n_haz_subs_description" : "Nothing happens."
        },
        {
          "event_n_haz_subs_id" : 466,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "POOL OF WATER",
          "event_n_haz_subs_roll" : "4",
          "event_n_haz_id" : 186,
          "event_n_haz_subs_order" : 4,
          "event_n_haz_subs_description" : "The pool is clear and fresh, providing a good resting place for the Warriors.  Each can gain 1D6 Wounds back immediately."
        },
        {
          "event_n_haz_subs_id" : 467,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "POOL OF WATER",
          "event_n_haz_subs_roll" : "5",
          "event_n_haz_id" : 186,
          "event_n_haz_subs_order" : 5,
          "event_n_haz_subs_description" : "In a fit of rage, the wizard character throws himself into the water, and pulls himself sorely out, smiling as he has learnt another spell.  (Of 1D6 level.  Select randomly)"
        },
        {
          "event_n_haz_subs_id" : 468,
          "event_n_haz_subs_type" : "travel hazard",
          "event_n_haz_subs_name" : "POOL OF WATER",
          "event_n_haz_subs_roll" : "6",
          "event_n_haz_id" : 186,
          "event_n_haz_subs_order" : 6,
          "event_n_haz_subs_description" : "A golden hand rises from the lake, and presents a random Warrior with a magic item.  Take a treasure card."
        }
      ]);
    });
}; 
