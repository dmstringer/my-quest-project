
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('special_table').del()
    .then(function () {
      // Inserts seed entries
      return knex('special_table').insert([
        {
          "specialtable_type": "Dragon Breath",
          "specialtable_num": 1,
          "specialtable_name": "Fire Dragon - Breathes Fire",
          "specialtable_description": "At the start of each turn roll 1D6. The number rolled indicates how many of the Warriors are engulfed in flame and fire. If the score is higher than the number of Warriors present all of them have been hit. If not all of the Warriors are hit use the Warrior counters to determine who escapes. Each Warrior hit by the fire suffers 3D6 Wounds, with no modifier for armour."
        },
        {
          "specialtable_type": "Dragon Breath",
          "specialtable_num": 2,
          "specialtable_name": "Fire Dragon - Breathes Fire",
          "specialtable_description": "At the start of each turn roll 1D6. The number rolled indicates how many of the Warriors are engulfed in flame and fire. If the score is higher than the number of Warriors present all of them have been hit. If not all of the Warriors are hit use the Warrior counters to determine who escapes. Each Warrior hit by the fire suffers 3D6 Wounds, with no modifier for armour."
        },
        {
          "specialtable_type": "Dragon Breath",
          "specialtable_num": 3,
          "specialtable_name": "Black Dragon - Breathes Smoke",
          "specialtable_description": "At the start of each turn roll 1D6. The number rolled indicates how many of the Warriors are engulfed in by the oily fumes. If the score is higher than the number of Warriors present all of them have been hit. If not all of the Warriors are hit use the Warrior counters to determine who escapes. Roll 1D6 for each Warrior hit by the smoke, subtract his Toughness from the score and multiply the result by 2. The total shows how many D6 Wounds the Warrior suffers, with no modifiers for Toughness or armour. For example, a 6 is rolled for a Warrior of Toughness 4. He suffers ((6-4)x2)D6 = 4D6 Wounds, with no modifiers for Toughness or armour."
        },
        {
          "specialtable_type": "Dragon Breath",
          "specialtable_num": 4,
          "specialtable_name": "Green Dragon - Breathes Corrosive Fumes",
          "specialtable_description": "Roll 1D6 for each Warrior and add his Toughness. If the score is 7 or more that Warrior is unaffected. If the score is 6 or less that Warrior suffers 3D6 Wounds, with no modifiers for Toughness or armour."
        },
        {
          "specialtable_type": "Dragon Breath",
          "specialtable_num": 5,
          "specialtable_name": "Blue Dragon - Spits Electricity",
          "specialtable_description": "Blue Dragons actually generate electricity that arcs from their mouths in the form of lightning, rather than breathe a noxious substance. Take one Warrior counter to determine who is hit. That Warrior suffers 2D6 Wounds, with no modifier for armour. After resolving that attack, roll another 1D6. On a score of 3, 4, 5 or 6 the lightning bolt arcs across to another Warrior. Take another Warrior counter to determine who. He also takes 2D6 Wounds, with no modifier for armour. This process continues until the lightning bolt fails to are across to another Warrior."
        },
        {
          "specialtable_type": "Dragon Breath",
          "specialtable_num": 6,
          "specialtable_name": "White Dragon - Breathes Chilling Mist",
          "specialtable_description": "At the start of each turn roll 1D6. The number rolled indicates how many of the Warriors are engulfed by the mist. If the score is higher than the number of Warriors present all of them have been hit. If not all of the Warriors are hit use the Warrior counters to determine who escapes. Each Warrior suffers 1D6 Wounds, with no modifiers for Toughness or armour. In addition, while he thaws out, for 1 turn he has a Movement of 1, he may be hit automatically, and any dice rolls made for his actions only succeed on a natural 6. Actions that do not require you to roll a dice may be carried out as normal."
        },
        {
          "specialtable_type": "Giant Attacks",
          "specialtable_num": 1,
          "specialtable_name": "Thump with Club",
          "specialtable_description": "Because of his reach the Giant can hit any Warrior up to two squares away. Take a Warrior counter to determine which Warrior is attacked. The Giant makes 1D6 attacks against the target, rolling to hit as normal. Calculate damage as normal but ignore any modifier for the target's armour."
        },
        {
          "specialtable_type": "Giant Attacks",
          "specialtable_num": 2,
          "specialtable_name": "Swing with Club",
          "specialtable_description": "Because of his reach the Giant hits all of the Warriors up to two squares away. Roll 3D6 for each eligible target. Each dice that scores a 4, 5 or 6 causes that many Wounds, with no modifier for armour. Any dice that scores 1, 2 or 3 misses as the Warrior manages to avoid the mighty weapon."
        },
        {
          "specialtable_type": "Giant Attacks",
          "specialtable_num": 3,
          "specialtable_name": "Kick Down Corridor",
          "specialtable_description": "The Giant raises a huge booted foot and drop-kicks an adjacent Warrior into the darkness. If there is more than one eligible target draw a Warrior counter to determine who is hit. The Warrior is kicked up to 7 squares in a straight line directly away from the Giant. If he hits a wall before reaching this distance he suffers 1D6 Wounds, with no modifier for armour, for each square short of 7 he flew, plus the Giant's Strength of 7. If the booted Warrior flies 2 squares then hits a wall, for instance, he suffers (7-2)=5D6 Wounds, plus 7 for the Giant's Strength, with no modifier for armour (total roll therefore equals 5D6+7)."
        },
        {
          "specialtable_type": "Giant Attacks",
          "specialtable_num": 4,
          "specialtable_name": "Pick Up",
          "specialtable_description": "Because of his reach the Giant can pick up a Warrior up to two squares away. Take a Warrior counter to see who is picked up. Place that model on the Giant's base and roll 1D6 on the following sub-table:"
        },
        {
          "specialtable_type": "Giant Attacks",
          "specialtable_num": 5,
          "specialtable_name": "Jump Up and Down",
          "specialtable_description": "Striking sparks off the stone floor with his hobnailed feet, the Giant jumps up and down on any single Warrior in an adjacent square. If there is more than one eligible target draw a Warrior counter to determine which Warrior is attacked. The chosen Warrior suffers 1D6 hits, taking damage for each hit as normal. If the target is reduced to 0 Wounds the Giant will make another 1D6 jump attacks on the next nearest adjacent Warrior. This process continues until the Giant fails to kill a Warrior within the number of attacks he has rolled or he has reduced all adjacent Warriors to 0 Wounds."
        },
        {
          "specialtable_type": "Giant Attacks",
          "specialtable_num": 6,
          "specialtable_name": "Yell and Bawl",
          "specialtable_description": "Feeling a good shout coming on, the Giant bends over until his head is at the same level as the Warriors and proceeds to yell and bellow at the top of his voice. Roll 2D6 for each Warrior. If the total is equal to or greater than the sum of the Warrior's Toughness and Strength he is knocked prone by the blast. He takes no Wounds from the attack."
        },
        {
          "specialtable_type": "Giant Pickup",
          "specialtable_num": 1,
          "specialtable_name": "Squeeze",
          "specialtable_description": "The Giant squeezes the Warrior with his mighty fist. The Warrior takes 7D6 Wounds. Roll again on this sub-table."
        },
        {
          "specialtable_type": "Giant Pickup",
          "specialtable_num": 2,
          "specialtable_name": "Hurl at Warriors",
          "specialtable_description": "The Giant picks up the Warrior and hurls him at his companions Take a Warrior counter to see which Warrior is his companions Take a Warrior counter to see which Warrior is targeted. Roll 7D6 and separate those that have an even score from those that have an odd score. The Warrior being thrown suffers a number of Wounds equal to the sum of the even dice, while the targeted Warrior suffers a number of Wounds equal to the sum of the odd dice. Neither Warrior gets any modifiers on the damage roll for Toughness or armour. The thrown Warrior is placed prone in the square originally occupied by the target Warrior. The target Warrior is pushed into an adjacent square, shuffling other models around as necessary."
        },
        {
          "specialtable_type": "Giant Pickup",
          "specialtable_num": 3,
          "specialtable_name": "Smash Against the Roof",
          "specialtable_description": "The Giant grabs the Warrior by the feet to get a good swing and begins to smash him repeatedly against the roof of the cave in a cheerfully enthusiastic fashion. This does the Warrior no good at all. The Giant smashes the Warrior against the roof 1D6 times, inflicting 7 Wounds, with no modifiers for Toughness or armour, each time. Then roll on this sub-table again"
        },
        {
          "specialtable_type": "Giant Pickup",
          "specialtable_num": 4,
          "specialtable_name": "Chew",
          "specialtable_description": "The Giant begins to chew on the Warrior with teeth the size and shape of old tombstones. The Warrior suffers 1D6 Wounds, with no modifiers for Toughness or armour. If the score on the dice is a 2, 3 4, 5 or 6 the Giant continues to chew the Warrior next turn, even if he is at 0 Wounds or less. Roll another 1D6 for Wounds. This process continues until the roll for Wounds is a 1 at which point the Giant finds a gristly bit, loses interest and drops the Warrior in the square he got him from. Place the Warrior prone. If the Warrior is reduced to -50 Wounds the Giant swallows him whole, effectively taking him out the game."
        },
        {
          "specialtable_type": "Giant Pickup",
          "specialtable_num": 5,
          "specialtable_name": "Stuff into Bag",
          "specialtable_description": "The Giant picks up the Warrior and pops him into his bag, saving him for later. The inside of the bag is smelly and dark, full of all sorts of horrible things. In one corner Is a wizened old Dwarf Prospector, who wearily gives the Warrior a key and says '.This is the key to the portcullis...” in a tired and cracked voice. The Warrior suffers no ill effects as long as the Giant has other foes to fight. If the Giant kills all of the other Warriors he is carried off and eaten at the Giant’s leisure. He may escape from the bag once the Giant is killed: place him in any empty square on the same board section. Once free he remains out of action for 1 turn due to shock."
        },
        {
          "specialtable_type": "Giant Pickup",
          "specialtable_num": 6,
          "specialtable_name": "Snatch and Grab",
          "specialtable_description": "The Giant pops the Warrior into his bag, as above. As it’s a long time since he had the prospect of such a juicy succulent feast the Giant reaches down for another Warrior immediately. Make another 1D6 roll on this sub-table."
        },
        {
          "specialtable_type": "Vampire Abilities",
          "specialtable_num": 1,
          "specialtable_name": "Transfix",
          "specialtable_description": "The Vampire transfixes one of the Warriors with his steely glare. Draw a Warrior counter to determine who is affected. Roll 1D6 and add that Warrior's Initiative. If the score is 11 or less he is transfixed for 1 turn. While transfixed the Warrior may do absolutely nothing and any Monster in combat with him automatically hits."
        },
        {
          "specialtable_type": "Vampire Abilities",
          "specialtable_num": 2,
          "specialtable_name": "Regenerate",
          "specialtable_description": "The Vampire regains 3D6 Wounds at the end of this turn, even if this takes him above his Starting Wounds score. The Vampire cannot regenerate if it is killed."
        },
        {
          "specialtable_type": "Vampire Abilities",
          "specialtable_num": 3,
          "specialtable_name": "Bite",
          "specialtable_description": "The Vampire bites all adjacent Warriors. Each suffers (the Dungeon level) Wounds, with no deductions for Toughness or armour. The Vampire then gains the total number of Wounds caused, adding them to his own Wounds, even if this takes him above his Starting Wounds score."
        },
        {
          "specialtable_type": "Vampire Abilities",
          "specialtable_num": 4,
          "specialtable_name": "Ethereal",
          "specialtable_description": "The Vampire become Ethereal 2 until the start of the next Monsters' Phase. For the duration of this state he has a Chill 3 attack rather than his normal hand-to-hand attacks."
        },
        {
          "specialtable_type": "Vampire Abilities",
          "specialtable_num": 5,
          "specialtable_name": "Cloak of Darkness",
          "specialtable_description": "The Vampire gathers a mantle of blackness around him. Until the start of the next Monsters' Phase all attacks against him are made at -1 to hit. In addition, all Warriors on the same board section as the Vampire lose 1 Attack in the next Warriors' Phase."
        },
        {
          "specialtable_type": "Vampire Abilities",
          "specialtable_num": 6,
          "specialtable_name": "Turns to Smoke",
          "specialtable_description": "At the end of the Monsters' Phase, after making any hand-to-hand attack, the Vampire vanishes in a pall of smoke. Remove the model from the board. At the start of the next Monsters' Phase take a Warrior counter and place the Vampire back on the board next to that Warrior. In addition, if the Vampire left the board on less than full Wounds he returns fully healed and back up to his Starting Wounds score."
        },
        {
          "specialtable_type": "Treasure Hoard",
          "specialtable_num": 1,
          "specialtable_name": "Gold",
          "specialtable_description": "Each player may roll as many D6 as he likes, adding up the score and multiplying it by 10 to determine how much gold his Warrior finds. However, if any of the dice score a 1 his Warrior finds nothing."
        },
        {
          "specialtable_type": "Treasure Hoard",
          "specialtable_num": 2,
          "specialtable_name": "Dungeon Room Treasure",
          "specialtable_description": "Make one roll on the Dungeon Room Treasure Table for each Warrior to determine what he finds."
        },
        {
          "specialtable_type": "Treasure Hoard",
          "specialtable_num": 3,
          "specialtable_name": "Dungeon Room Treasure",
          "specialtable_description": "Make one roll on the Dungeon Room Treasure Table for each Warrior to determine what he finds."
        },
        {
          "specialtable_type": "Treasure Hoard",
          "specialtable_num": 4,
          "specialtable_name": "Dungeon Room Treasure and Gold",
          "specialtable_description": "Make one roll on the Dungeon Room Treasure Table for each Warrior to determine what he finds. In addition, each player may roll as many D6 as he likes, adding up the score and multiplying it by 10 to determine how much extra gold his Warrior finds. However, if any of the dice score a 1 his Warrior finds no extra gold."
        },
        {
          "specialtable_type": "Treasure Hoard",
          "specialtable_num": 5,
          "specialtable_name": "Dungeon Room Treasure and Gold",
          "specialtable_description": "Make one roll on the Dungeon Room Treasure Table for each Warrior to determine what he finds. In addition, each player may roll as many D6 as he likes, adding up the score and multiplying it by 10 to determine how much extra gold his Warrior finds. However, if any of the dice score a 1 his Warrior finds no extra gold."
        },
        {
          "specialtable_type": "Treasure Hoard",
          "specialtable_num": 6,
          "specialtable_name": "Objective Room Treasure",
          "specialtable_description": "Make one roll on the Objective Room Treasure Table for each Warrior to determine what he finds."
        },
        {
          "specialtable_type": "Treasure Hoard",
          "specialtable_num": 7,
          "specialtable_name": "Objective Room Treasure",
          "specialtable_description": "Make one roll on the Objective Room Treasure Table for each Warrior to determine what he finds."
        },
        {
          "specialtable_type": "Treasure Hoard",
          "specialtable_num": 8,
          "specialtable_name": "Objective Room Treasure",
          "specialtable_description": "Make one roll on the Objective Room Treasure Table for each Warrior to determine what he finds."
        },
        {
          "specialtable_type": "Magic Armour",
          "specialtable_num": 1,
          "specialtable_name": "Chaos Armour",
          "specialtable_description": "Every time the wearer is struck roll 1D6. On a 4, 5 or 6 the blow causes no damage. In addition, the wearer has Magic Resistance 5+."
        },
        {
          "specialtable_type": "Magic Armour",
          "specialtable_num": 2,
          "specialtable_name": "Armour of Cursed Iron",
          "specialtable_description": "This armour adds the value of the attacker's Strength to the wearer's Toughness, effectively cancelling it out. If the attacker has a Strength of 5, for instance, the armour gives the wearer +5 Toughness."
        },
        {
          "specialtable_type": "Magic Armour",
          "specialtable_num": 3,
          "specialtable_name": "Armour of Doom",
          "specialtable_description": "The magical field surrounding this armour and its wearer slows down any Warrior attacking the wearer. Any Warrior attacking a Monster who wears Armour of Doom suffers -1 to hit and -1 attacks."
        },
        {
          "specialtable_type": "Magic Armour",
          "specialtable_num": 4,
          "specialtable_name": "Arcane Armour of Destruction",
          "specialtable_description": "The powerful dark energies flowing within this armour strike back at its attackers. Each time a Warrior attacks a Monster wearing this armour and causes damage roll 1D6. On a score of a 1 the blow is thrown back at the Warrior as a blast of magical energy. He immediately suffers the Wounds he has just inflicted instead, modified for Toughness and armour."
        },
        {
          "specialtable_type": "Magic Armour",
          "specialtable_num": 5,
          "specialtable_name": "Venom Armour",
          "specialtable_description": "At the end of every turn in which a Warrior remains adjacent to the wearer of this armour he stands a chance of being poisoned by the venom that constantly oozes from it. Roll 1D6. If the score is a 1. 2 or 3 your Warrior takes 1D6 Wounds, with no modifiers for Toughness or armour. This attack is Fatal Damage."
        },
        {
          "specialtable_type": "Magic Armour",
          "specialtable_num": 6,
          "specialtable_name": "Armour of Carnage",
          "specialtable_description": "This armour gives the wearer +2 Toughness. In addition, it has a bloodthirsty will of its own, and forces its wearer into battle, even if he is actually dead. While the wearer lives the armour gives him +1 Attacks. Upon the wearer's death, roll 1D6 at the start of every subsequent turn. On a score of 1 or 2 the armour crashes to the floor, empty and dead. On a score of 3, 4, 5 or 6 the armour keeps fighting by itself, animated by the powerful magic within it. The armour has the same profile as the wearer, but only has one Attack. Any further Wounds inflicted on the armour have no effect at all."
        },
        {
          "specialtable_type": "Magic Items",
          "specialtable_num": 1,
          "specialtable_name": "Ring of Resistance",
          "specialtable_description": "This ring gives the wearer Magic Resistance 6+. If the wearer already has the Magic Resistance special ability it improves his Magic Resistance Rating by +1."
        },
        {
          "specialtable_type": "Magic Items",
          "specialtable_num": 2,
          "specialtable_name": "Cloak of Shadows",
          "specialtable_description": "All Warriors attempting to hit the wearer of this cloak are at -1 to their to hit rolls."
        },
        {
          "specialtable_type": "Magic Items",
          "specialtable_num": 3,
          "specialtable_name": "Warpstone Talisman",
          "specialtable_description": "Whenever a Warrior rolls a natural 1 to hit against the wearer of this talisman the blow rebounds at full effect and he hits himself instead."
        },
        {
          "specialtable_type": "Magic Items",
          "specialtable_num": 4,
          "specialtable_name": "Doomfire Ring",
          "specialtable_description": "The wearer may use this ring to fire a bolt of power at one of the Warriors each turn. Draw a Warrior counter to determine who is targeted. Then make a roll to hit with a Ballistic Skill of 4+. If the attack hits, the target suffers 2D6+(2 x the Dungeon level) Wounds, with no modifier for armour."
        },
        {
          "specialtable_type": "Magic Items",
          "specialtable_num": 5,
          "specialtable_name": "Mask of Kadon",
          "specialtable_description": "This mask gives the wearer Fear (Dungeon Level +3). If the wearer already causes Fear it gives him Terror (his Fear Value)."
        },
        {
          "specialtable_type": "Magic Items",
          "specialtable_num": 6,
          "specialtable_name": "Collar of Vengeance",
          "specialtable_description": "Warriora adjacent to the wearer at the end of the turn suffer 1D6 Wounds with no mods for Tough. or armour. This is Fatal Damage."
        },
        {
          "specialtable_type": "Magic Weapons",
          "specialtable_num": 1,
          "specialtable_name": "Cutting Edge Sword",
          "specialtable_description": "This sword causes (+1 Wounds x the bearer's level). i.e. Monsters rolled on the Lvl 3 Monster Table inflict an extra +3 Wounds."
        },
        {
          "specialtable_type": "Magic Weapons",
          "specialtable_num": 2,
          "specialtable_name": "Sword of Distortion",
          "specialtable_description": "This sword causes the wielder's outline to shimmer, making him harder to hit. Any Warrior attempting to attack a Monster hearing this sword deducts -1 from his to hit rolls. In addition, the warping nature of this sword reduces the effect of any blows that actually strike the Monster, effectively giving it +1 Toughness."
        },
        {
          "specialtable_type": "Magic Weapons",
          "specialtable_num": 3,
          "specialtable_name": "Sword of Pain",
          "specialtable_description": "This sword ignores any non-magical armour and up to 3 points of magical armour when determining damage."
        },
        {
          "specialtable_type": "Magic Weapons",
          "specialtable_num": 4,
          "specialtable_name": "Cursed Blackblade",
          "specialtable_description": "This sword warps time around the immediate vicinity of its wielder. Once per turn you may re-roll the bearer's first attack that misses. In addition, this sword causes an extra +lD6 Wounds."
        },
        {
          "specialtable_type": "Magic Weapons",
          "specialtable_num": 5,
          "specialtable_name": "Sword of Insanity",
          "specialtable_description": "This sword gives the bearer a Fear Value equal to twice the Battle-level of the Warrior he is fighting. If the Monster wielding this sword already causes Fear it gives him a Terror Value equal to its original Fear Value."
        },
        {
          "specialtable_type": "Magic Weapons",
          "specialtable_num": 6,
          "specialtable_name": "Blade of the Damned",
          "specialtable_description": "This blade causes dble damage every time it strikes. (Roll the normal damage, multiply by 2 and then add the wielder's Str.)"
        },
        {
          "specialtable_type": "Beastmen/Chaos/Darkelf",
          "specialtable_num": 1,
          "specialtable_name": "Failure",
          "specialtable_description": "The Shaman/Sorcerer fails to cast a spell."
        },
        {
          "specialtable_type": "Beastmen/Chaos/Darkelf",
          "specialtable_num": 2,
          "specialtable_name": "Failure",
          "specialtable_description": "The Shaman/Sorcerer fails to cast a spell."
        },
        {
          "specialtable_type": "Beastmen/Chaos/Darkelf",
          "specialtable_num": 3,
          "specialtable_name": "Failure",
          "specialtable_description": "The Shaman/Sorcerer fails to cast a spell."
        },
        {
          "specialtable_type": "Beastmen/Chaos/Darkelf",
          "specialtable_num": 4,
          "specialtable_name": "Failure",
          "specialtable_description": "The Shaman/Sorcerer fails to cast a spell."
        },
        {
          "specialtable_type": "Beastmen/Chaos/Darkelf",
          "specialtable_num": 5,
          "specialtable_name": "Battle Lust",
          "specialtable_description": "The Sorcerer gives an extra (1 x the Dungeon level) Attacks to the Monsters in combat with the Warriors, distributed as evenly as possible."
        },
        {
          "specialtable_type": "Beastmen/Chaos/Darkelf",
          "specialtable_num": 6,
          "specialtable_name": "Doombolt",
          "specialtable_description": "A bolt of black fire bursts from the Sorcerer's palm towards one of the Warriors. Draw a Warrior counter to determine which Warrior is hit. The Doombolt inflicts (2 x the Dungeon level) Wounds, with no modifiers for Toughness or armour."
        },
        {
          "specialtable_type": "Beastmen/Chaos/Darkelf",
          "specialtable_num": 7,
          "specialtable_name": "Hand of Dust",
          "specialtable_description": "The Sorcerer may attack any single adjacent Warrior. If there is more than one eligible target take a Warrior counter to determine who the Sorcerer attacks. Roll 1D6 for the chosen Warrior and add his Strength to the score. Roll 2D6 for the Sorcerer and add his Strength to the score. The highest score wins. If the Warrior wins the spell fails. If the Sorcerer wins the Warrior suffers (2 x the Dungeon level) Wounds with no modifiers for Toughness or armour. If the Chaos Sorcerer is not in hand-to-hand combat ignore this result and re-roll on this table."
        },
        {
          "specialtable_type": "Beastmen/Chaos/Darkelf",
          "specialtable_num": 8,
          "specialtable_name": "Blade Wind",
          "specialtable_description": "The Sorcerer summons a storm of slashing blades. Take a Warrior counter to determine who is affected. That Warrior suffers (the Dungeon level) D6 Wounds, modified for Toughness and armour as usual."
        },
        {
          "specialtable_type": "Beastmen/Chaos/Darkelf",
          "specialtable_num": 9,
          "specialtable_name": "Soul Drain",
          "specialtable_description": "The Sorcerer creates a storm of dark magic. Roll 1D6 for each Warrior adding his Toughness to the score. If the total is equal to or more than the Dungeon level he suffers no ill effects from the spell. If the score is less than the Dungeon Level the Warrior suffers (1D6 + the Dungeon level) Wounds and the Sorcerer gains the same amount. The Sorcerer may never gain more Wounds than he started with any extra Wounds are lost in the warp. A Warrior reduced to zero Wounds by this spell is immediately killed and may not be brought back to life by any means other than those spells and magic items that raise the dead."
        },
        {
          "specialtable_type": "Beastmen/Chaos/Darkelf",
          "specialtable_num": 10,
          "specialtable_name": "Arnizipals Black Horror",
          "specialtable_description": "A black cloud issues from the Sorcerer's mouth, engulfing the Warriors in darkness. Roll i D6 for each Warrior adding his Strength to the score. If the total is 7 or more he suffers no ill effects from the spell. If the score is 6 or less he suffers (the Dungeon level) D6 Wounds, with no modifier for armour."
        },
        {
          "specialtable_type": "Beastmen/Chaos/Darkelf",
          "specialtable_num": 11,
          "specialtable_name": "Malediction of Nagash",
          "specialtable_description": "The Sorcerer causes cuts to open up on the body of one of the Warriors. Draw a Warrior counter to determine which Warrior is hit. For 1 turn that Warrior is unable to move, fire a missile weapon, and is at -2 to all of his to hit rolls in close combat. Now, and at the start of each subsequent turn, the same Warrior loses (1 x the Dungeon level) Wounds, with no modifiers for Toughness or armour, until the Sorcerer is dead."
        },
        {
          "specialtable_type": "Beastmen/Chaos/Darkelf",
          "specialtable_num": 12,
          "specialtable_name": "Transformation of Kadon",
          "specialtable_description": "The Sorcerer transforms himself into one of the following monsters. Roll 1D6: 1-2 Wyvern 3-4 Chimera 5 Manticore 6 Hydra.   If the transformation turns the Sorcerer into a Monster of less value than himself, re-roll the spell. See the Monsters section of the Bestiary for full details and profiles for these Monsters. The Sorcerer remains transformed until either he or all of the Warriors are dead. While transformed he may not cast any more spells."
        },
        {
          "specialtable_type": "Chaos Dwarf",
          "specialtable_num": 1,
          "specialtable_name": "Doomroar",
          "specialtable_description": "The Chaos Dwarf Sorcerer takes on the shape of the mighty Bull God Hashut and, with a shake of his horned head, gives a terrifying roar that goads his minions into action. This turn all Monsters get +1 Attacks."
        },
        {
          "specialtable_type": "Chaos Dwarf",
          "specialtable_num": 2,
          "specialtable_name": "Eruption",
          "specialtable_description": "The ground beneath one of the Warrior's feet erupts in a plume of magma. Draw a Warrior counter to determine which Warrior is affected. He suffers 5D6 Wounds, modified for Toughness and armour as usual."
        },
        {
          "specialtable_type": "Chaos Dwarf",
          "specialtable_num": 3,
          "specialtable_name": "Ash Cloud",
          "specialtable_description": "The dungeon is suddenly filled with clouds of smoke and ash. All of the Warriors are at -2 on their to hit rolls for the next Warriors' Phase."
        },
        {
          "specialtable_type": "Chaos Dwarf",
          "specialtable_num": 4,
          "specialtable_name": "Sorcerers Curse",
          "specialtable_description": "Cackling hideously the Chaos Dwarf Sorcerer utters a terrible curse on one of the Warriors. Draw a Warrior counter to determine who is affected. Unless he is given a healing potion or a healing spell is cast on him immediately the cursed Warrior is turned to stone and is out of the game. If he is given treatment, roll 1D6. On a score of 1. 2, 3 or 4 the Warrior is at -1 Movement, -1 Initiative and -1 to hit until the Sorcerer is dead, when he returns to normal. On a score of 5 or 6 the spell has no effect at all."
        },
        {
          "specialtable_type": "Chaos Dwarf",
          "specialtable_num": 5,
          "specialtable_name": "Lava Storm",
          "specialtable_description": "With a majestic sweep of his arm the Sorcerer creates a stream of balls of molten lava. There are 2D6 balls and they are distributed amongst the Warriors evenly. Each causes 2D6 Wounds, with no modifier for armour."
        },
        {
          "specialtable_type": "Chaos Dwarf",
          "specialtable_num": 6,
          "specialtable_name": "Flames of Azgorh",
          "specialtable_description": "The Sorcerer breathes out whirling tendrils of flame. Draw a Warrior counter to determine who is attacked. The target and every model adjacent to him, whether friend or foe, takes 2D6 Wounds, with no modifiers for Toughness or armour. Note that the Chaos Dwarf Sorcerer is the only model immune to the effects of the spell."
        },
        {
          "specialtable_type": "Necromantic",
          "specialtable_num": 1,
          "specialtable_name": "Winds of Death",
          "specialtable_description": " Reduces all of the Warriors' Attacks by -1 for the next Warriors' Phase."
        },
        {
          "specialtable_type": "Necromantic",
          "specialtable_num": 2,
          "specialtable_name": "Soul Drain",
          "specialtable_description": "Inflicts 2D6 Wounds, with no modifiers for Toughness or armour, on a single Warrior. Use the Warrior counters to determine which Warrior is affected."
        },
        {
          "specialtable_type": "Necromantic",
          "specialtable_num": 3,
          "specialtable_name": "Deathchill",
          "specialtable_description": "Reduces a single Warrior's Toughness by -2 . If this reduces his Toughness to zero he is killed and may not he healed by any means except spells and magic items, etc., that can resurrect the dead. Use the Warrior counters to determine which Warrior is affected. If the Necromancer and all of his followers are destroyed, any Warriors whose Toughness has been reduced in this combat and are still alive have the damage to their Toughness restored."
        },
        {
          "specialtable_type": "Necromantic",
          "specialtable_num": 4,
          "specialtable_name": "Summon Skeletons",
          "specialtable_description": "The Necromancer summons 6 Skeletons. They are placed on the board immediately and may move and fight this turn."
        },
        {
          "specialtable_type": "Necromantic",
          "specialtable_num": 5,
          "specialtable_name": "Summon Ghouls",
          "specialtable_description": "The Necromancer summons 6 Ghouls. They are placed on the board immediately and may move and fight this turn."
        },
        {
          "specialtable_type": "Necromantic",
          "specialtable_num": 6,
          "specialtable_name": "Summon Mummies",
          "specialtable_description": "The Necromancer summons 1D6 Mummies. They are placed on the board immediately and may move and fight this turn."
        },
        {
          "specialtable_type": "Orcs and Goblins",
          "specialtable_num": 1,
          "specialtable_name": "Failure",
          "specialtable_description": "The Shaman fails to cast a spell."
        },
        {
          "specialtable_type": "Orcs and Goblins",
          "specialtable_num": 2,
          "specialtable_name": "Failure",
          "specialtable_description": "The Shaman fails to cast a spell."
        },
        {
          "specialtable_type": "Orcs and Goblins",
          "specialtable_num": 3,
          "specialtable_name": "Failure",
          "specialtable_description": "The Shaman fails to cast a spell."
        },
        {
          "specialtable_type": "Orcs and Goblins",
          "specialtable_num": 4,
          "specialtable_name": "Failure",
          "specialtable_description": "The Shaman fails to cast a spell."
        },
        {
          "specialtable_type": "Orcs and Goblins",
          "specialtable_num": 5,
          "specialtable_name": "Ere We Go",
          "specialtable_description": "The Shaman floods his allies with power. All Orcs and Goblins on the board get fl Attack this turn and +1 Toughness next turn."
        },
        {
          "specialtable_type": "Orcs and Goblins",
          "specialtable_num": 6,
          "specialtable_name": "Waaagh!",
          "specialtable_description": "Roll 2D6 for each Warrior spellcaster on the board. If the score is equal to or greater than the Warrior's Battle-level he is knocked to the ground for 1 turn, during which time he may do nothing."
        },
        {
          "specialtable_type": "Orcs and Goblins",
          "specialtable_num": 7,
          "specialtable_name": "Brain Bursta",
          "specialtable_description": "A bolt of power erupts from the Shaman's head. Draw a Warrior counter to determine which Warrior is targeted. Roll 2D6. If the score is greater than the target's Battle-level he is hit - roll 1D6: 1 The Warrior's head explodes, killing him instantly 2-5 The Warrior suffers (2 x the Dungeon level) Wounds, with no modifiers for Toughness or armour. 6 The Warrior suffers 1D6 Wounds, with no modifiers for Toughness or armour."
        },
        {
          "specialtable_type": "Orcs and Goblins",
          "specialtable_num": 8,
          "specialtable_name": "Hand of Gork",
          "specialtable_description": "This spell moves the Shaman and any allied Monsters using missile weapons out of hand-to-hand combat with the Warriors. Move the Monsters so that they are no longer adjacent to the Warriors, moving other Monsters to make room if necessary. If the Shaman is not in hand-to-hand combat re-roll this result."
        },
        {
          "specialtable_type": "Orcs and Goblins",
          "specialtable_num": 9,
          "specialtable_name": "Fist of Gork",
          "specialtable_description": "The Shaman's arms become enwrapped with glowing bands of power. Draw a Warrior counter to determine which Warrior is targeted. That Warrior suffers 1D6 hits at the Shaman's Strength+4."
        },
        {
          "specialtable_type": "Orcs and Goblins",
          "specialtable_num": 10,
          "specialtable_name": "Da Krunch",
          "specialtable_description": "One of the Warriors is stamped on by the mighty Foot of Cork. Draw a Warrior counter to determine which Warrior is targeted. That Warrior suffers 1D6+10 Wounds."
        },
        {
          "specialtable_type": "Orcs and Goblins",
          "specialtable_num": 11,
          "specialtable_name": "Mork Save Uz!",
          "specialtable_description": "Roll 1D6 for each spellcasting Warrior. On a score of 4, 5 or 6 all of that Warriors' remaining points of Power are lost this turn. This does not affect any innate stored Power."
        },
        {
          "specialtable_type": "Orcs and Goblins",
          "specialtable_num": 12,
          "specialtable_name": "Eadbutt",
          "specialtable_description": "The Shaman magically 'eadbutts one of the Warrior spellcasters. If there is more than one spellcaster, draw a Warrior counter to determine which Warrior is targeted. Roll (1D6+ Dungeon level) for the Shaman and (1D6+ Battle level) for the target. If the Shaman wins or it is a draw add the two dice together: the target takes that many Wounds, with no modifiers for Toughness or armour, and cannot cast any magic next turn. If the Warrior wins the spell has no effect."
        },
        {
          "specialtable_type": "Orcs and Goblins",
          "specialtable_num": 13,
          "specialtable_name": "Eadbutt",
          "specialtable_description": "The Shaman magically 'eadbutts one of the Warrior spellcasters. If there is more than one spellcaster, draw a Warrior counter to determine which Warrior is targeted. Roll (1D6+ Dungeon level) for the Shaman and (1D6+ Battle level) for the target. If the Shaman wins or it is a draw add the two dice together: the target takes that many Wounds, with no modifiers for Toughness or armour, and cannot cast any magic next turn. If the Warrior wins the spell has no effect."
        },
        {
          "specialtable_type": "Orcs and Goblins",
          "specialtable_num": 14,
          "specialtable_name": "Eadbutt",
          "specialtable_description": "The Shaman magically 'eadbutts one of the Warrior spellcasters. If there is more than one spellcaster, draw a Warrior counter to determine which Warrior is targeted. Roll (1D6+ Dungeon level) for the Shaman and (1D6+ Battle level) for the target. If the Shaman wins or it is a draw add the two dice together: the target takes that many Wounds, with no modifiers for Toughness or armour, and cannot cast any magic next turn. If the Warrior wins the spell has no effect."
        },
        {
          "specialtable_type": "Skaven",
          "specialtable_num": 1,
          "specialtable_name": "Warp Power",
          "specialtable_description": "The Skaven uses the power of the warp to heal himself, curing 2D6 of his Wounds up to a maximum of his Starting Wounds. If the Skaven is already at his Starting Wounds score re-roll this result."
        },
        {
          "specialtable_type": "Skaven",
          "specialtable_num": 2,
          "specialtable_name": "Pestilent Breath",
          "specialtable_description": "The Skaven opens its jaws and black, pestilential fumes pour out and flood into the dungeon. Roll 1D6 for each Warrior and add his Toughness to the score. If the score is greater than 7 he is not affected. If the score is equal to or less than 7 he suffers (1D3 x the dungeon level) Wounds, with no modifiers for Toughness or armour."
        },
        {
          "specialtable_type": "Skaven",
          "specialtable_num": 3,
          "specialtable_name": "Warp Lightning",
          "specialtable_description": "Screeching in fury, the Skaven points its clawed hand at one of the Warriors and then blasts him with a streak of warp lightning. Draw a Warrior counter to determine who is targeted. The bolt causes (2D6 + the Dungeon level) Wounds, with no modifier for armour."
        },
        {
          "specialtable_type": "Skaven",
          "specialtable_num": 4,
          "specialtable_name": "Wither",
          "specialtable_description": "A greenish pallid glow spreads from the Skaven's outstretched paw. All adjacent Warrior suffer (1D6 + the Dungeon level) Wounds, with no modifiers for Toughness or armour. If there are no Warriors adjacent to the Skaven re-roll this result."
        },
        {
          "specialtable_type": "Skaven",
          "specialtable_num": 5,
          "specialtable_name": "Putrefy",
          "specialtable_description": "The Warriors see their surroundings begin to rot and decay, with worms and maggots writhing upon the bodies of the dead and wounded. The hallucination created by the Skaven is terrifyingly real. Roll 1D6 for each Warrior. On a score of 5 or 6 that Warrior is unaffected by the spell. On a score of 1, 2, 3 or 4 that Warrior may do nothing at all in the next Warriors' Phase."
        },
        {
          "specialtable_type": "Skaven",
          "specialtable_num": 6,
          "specialtable_name": "Scorch",
          "specialtable_description": "Flames engulf one of the Warriors, turning him into an incandescent column of fire. Draw a Warrior counter to determine who is targeted. The flames cause 4D6 Wounds, with no modifiers for Toughness or armour."
        }
      ]);
    });
}; 
