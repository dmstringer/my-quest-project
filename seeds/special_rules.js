
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('special_rules').del()
    .then(function () {
      // Inserts seed entries
      return knex('special_rules').insert([
        {
          "rule_name": "Ambush",
          "rule_description": "Make one set of immediate attacks on a D6 roll of n+, then fight as normal in the Monsters Phase. Wizards may cast spells before these attacks."
        },
        {
          "rule_name": "Ambush Auto",
          "rule_description": "Make one set of immediate attacks automatically, then fight as normal in the Monsters Phase. Wizards may cast spells before these attacks."
        },
        {
          "rule_name": "Ambush Magic",
          "rule_description": "Make one set of immediate attacks on a D6 roll of n+, then fight as normal in the Monsters Phase. Wizards may NOT cast spells before these attacks."
        },
        {
          "rule_name": "Ambush Magic Auto",
          "rule_description": "Make one set of immediate attacks automatically, then fight as normal in the Monsters Phase. Wizards may NOT cast spells before these attacks."
        },
        {
          "rule_name": "Armed with [1-2] Bows or [4-6] Spears",
          "rule_description": "Monsters are armed with one or the other of the weapons listed. Roll a D6 to determine."
        },
        {
          "rule_name": "Armed with [1-3] Bows or [4-6] Swords",
          "rule_description": "Monsters are armed with one or the other of the weapons listed. Roll a D6 to determine."
        },
        {
          "rule_name": "Armed with Axe of Khorne",
          "rule_description": "Causes +2 Wounds. Also, if hit roll is a natural 6 the blow causes double damage."
        },
        {
          "rule_name": "Armed with Ball and Chain",
          "rule_description": "Always attempts to get adjacent to as many Warriors as it can. At end of Monsters Phase, all adjacent Warriors take 1D6+3 W, no mods for armour. If dmg roll is natural 1 Fanatic kills himself."
        },
        {
          "rule_name": "Armed with Blunderbuss",
          "rule_description": "Place as ranged. Each Dwarf makes a single hit roll to determine if all targets in a direction are hit or not. Each blast causes 1D6 Wounds (modified for T and Arm) on each Warrior in area of affect."
        },
        {
          "rule_name": "Armed with Bows",
          "rule_description": "Place as ranged. Roll to hit using Ballistic Skill and 1D6 plus the Strength of the bow for damage."
        },
        {
          "rule_name": "Armed with Crossbows",
          "rule_description": "Place as ranged. Roll to hit using Ballistic Skill and 1D6 plus the Strength of the bow for damage. One shot per turn."
        },
        {
          "rule_name": "Armed with Daemon Whip",
          "rule_description": "At the start of each turn randomly determine which Warrior is ensnared. That Warrior is immediately moved adjacent to Bloodthirster, moving models as necessary."
        },
        {
          "rule_name": "Armed with Doom Glaive",
          "rule_description": "Any Warrior hit by Glaive suffers an extra 2 Wounds, with no mods for T or Arm."
        },
        {
          "rule_name": "Armed with Halberds",
          "rule_description": "Gives +1 Strength, -2 Initiative, cannot use sheild at same time. Fight in Ranks."
        },
        {
          "rule_name": "Armed with Hellblade",
          "rule_description": "Hellblades cause extra 1D3 Wounds, with no mods for T or Arm."
        },
        {
          "rule_name": "Armed with Jezzail (Str 5, Ignore 3 points of Armour)",
          "rule_description": "Placed as ranged. A Str. 5 weapon that ingores up to 3 points of victims armour."
        },
        {
          "rule_name": "Armed with Nets",
          "rule_description": "Roll to hit as normal. Warrior hit by net is enmeshed. If another Netter attacks an enmeshed Warrior, roll D6. (1-3) Netter auto hits with his net. (4-6) Attacks with club at +2 to hit inflicting 1D6+Str. At start of Warrior Phase roll (1D6 + Str - number of nets ensnaring him). If roll is 7+, warrior breaks free from all nets and fights normally."
        },
        {
          "rule_name": "Armed with Plague Censers",
          "rule_description": "Make normal hit roll. If hit, causes 1D6+Str, plus make a Toughness check. Roll 1D6+Toughness. If 7 or more, unaffected. If less, take additional 1D3 W with no mods for T or Arm."
        },
        {
          "rule_name": "Armed with Poison Wind Globes",
          "rule_description": "Place as ranged. Work out ranged hits as normal. Target Warrior and all adjacent Warriors rolls 1D6+Toughness. If 6 or less suffer 1D3 W with no mods for T or Arm."
        },
        {
          "rule_name": "Armed with Spears (fight in Ranks)",
          "rule_description": "Gives +1 Initiative on first round. Fights in Ranks."
        },
        {
          "rule_name": "Armed with Swords",
          "rule_description": "Melee weapon. Damage is 1D6+Str."
        },
        {
          "rule_name": "Armed with Warpfire Thrower",
          "rule_description": "Place as ranged. Place in teams of two. If one is killed, may only make melee attacks. Randomly determine which Warrior is targeted by the team. If there is more than one team, distribute their hits accordingly. Each time a warpfire thrower is fired, the flames form a 1-square wide corridor that travels across the room in a straight line toward the target, hitting everything in its path. If a model is hit by a warpfire thrower, it suffers 3D6 Wounds. If the dice come up with 2 or 3 natural 1's the warpfire thrower has misfired, roll on the following table: ( 1-4 Kaboom! The warpfire thrower explodes, causing 4D6 Wounds on every model in the room. Roll 1D6 for each additional warpfire thrower in the room. On a 1, 2 or 3 it too blows up, causing the same damage and requiring you to make another 1D6 roll for each intact warpfire thrower, and so on.  5-6 Click-whoosh! The warpfire thrower backfires, causing 3D6 Wounds against its crew. ) In addition, roll 1D6 for each item of magical treasure the victim is carrying. On a roll of 1 the item is rendered useless for the rest of the dungeon. At the start of the next dungeon the item may be used normally again."
        },
        {
          "rule_name": "Assassinate",
          "rule_description": "Normal melee attack that ignores armour. In addition, if hit roll was a natural n+, the blow also ignores Toughness."
        },
        {
          "rule_name": "Aura of Slaanesh",
          "rule_description": "Cannot try to escape from pinning and Warriors are at -1 to all to-hit rolls."
        },
        {
          "rule_name": "Beast Handler (Chaos Hounds or Warhounds)",
          "rule_description": "Roll 1D6 to determine composition of pack. (1-3) 1D6 Chaos Hounds. (4-6) 1D6 Warhounds. Beasts are always placed first."
        },
        {
          "rule_name": "Beastman Magic",
          "rule_description": "Place as ranged. May cast a number of spells per turn from those available. Missile weapon attacks against Magic-using monsters are at -1."
        },
        {
          "rule_name": "Break",
          "rule_description": "At end of each turn, roll 1D6. If score is greater than or equal to remaining number of Monsters, they break and run. No gold for Mosters that run, but Treasure for group as normal."
        },
        {
          "rule_name": "Breathe Fire",
          "rule_description": "At start of each turn, roll 1D6. This is the number of Warriors engulfed. All hit by the fire suffer nD6 Wounds, with no mods for armour."
        },
        {
          "rule_name": "Breathe Fire (Ambush Auto)",
          "rule_description": "At start of each turn, roll 1D6. This is the number of Warriors engulfed. All hit by the fire suffer nD6 Wounds, with no mods for armour."
        },
        {
          "rule_name": "Chaos Dwarf Magic",
          "rule_description": "Place as ranged. May cast a number of spells per turn from those available. Missile weapon attacks against Magic-using monsters are at -1."
        },
        {
          "rule_name": "Chaos Magic",
          "rule_description": "Place as ranged. May cast a number of spells per turn from those available. Missile weapon attacks against Magic-using monsters are at -1."
        },
        {
          "rule_name": "Chill",
          "rule_description": "Roll to hit as normal, causing nD6 Wounds with no mods for Tor Arm."
        },
        {
          "rule_name": "Daemonic",
          "rule_description": "Warriors to-hit rolls are reduced by n if using non-magical weapons. Attacks with magic weapons are as normal."
        },
        {
          "rule_name": "Dark Elf Magic",
          "rule_description": "Place as ranged. May cast a number of spells per turn from those available. Missile weapon attacks against Magic-using monsters are at -1."
        },
        {
          "rule_name": "Death Fog",
          "rule_description": "At the end of each turn all adjacent Warriors take 2 Wounds with no mods for T or Arm. If ever taken to 0 Wounds by Fog, Starting Wounds is reduced by -1D3 permanetly."
        },
        {
          "rule_name": "Deathleap",
          "rule_description": "Roll attack as normal, but roll 2D6+2 for damage. Once Giant Rat has attacked, roll 1D6. On a (3-6) the Giant Rat has opened itself up to the Warrior and he kills it automatically."
        },
        {
          "rule_name": "Die--Blue Horrors",
          "rule_description": "For each Pink Horror that dies, two Blue Horrors spring up next to the Warrior that killed it. If not possible, place in nearest empty square."
        },
        {
          "rule_name": "Dodge",
          "rule_description": "A Monster will avoid a Warriors attack on a D6 roll of n+."
        },
        {
          "rule_name": "Drag and Rend",
          "rule_description": "At the start of each turn the Wyvern attacks a random Warrior. Make a normal hit roll. If hit, does no dmg but drags Warrior to nearest adjacent square. Then make normal attacks. If 2 or more of these hit, the Warrior has been stung."
        },
        {
          "rule_name": "Dragon Breath (Ambush Magic Auto)",
          "rule_description": "A Dragon's Breath weapon is used in addition to its normal melee attacks. The Breath weapon (and thus type of dragon) is determined randomly."
        },
        {
          "rule_name": "Drain Power",
          "rule_description": "At start of each Monsters Phase roll 3D6. Wizards lose that many points of Power. If Wizards Power is drained, each Drain point left inflicts 1 Wound with no mods for T or Arm. Wizard may spend any Power Tokens to fulfill deficit."
        },
        {
          "rule_name": "Ethereal",
          "rule_description": "Can never be pinned and may move freely thru other Monsters and obsticles. If attacked with non-magical weapons, to hit rolls are reduced by n. Magical weapons attack as normal."
        },
        {
          "rule_name": "Fear",
          "rule_description": "Warriors roll 1D6 + BL. Must BEAT Monsters Fear Value n. If not, Warrior is at -1 to hit for this Monster for rest of combat. Casting Numbers are  +1 for afraid Wizards."
        },
        {
          "rule_name": "Fight In Ranks",
          "rule_description": "May engage an opponent in melee from 2 squares away as long as the square between is either empty or contains friendly models."
        },
        {
          "rule_name": "Flamer of Tzeentch Attack",
          "rule_description": "Does not make normal attacks. Instead it immolates the board section with pink fire. Roll 1D6 for each Flamer on a board section. Every model on the board section suffers this as Wounds (mods for T and Arm apply). Flamers are immune to the fire."
        },
        {
          "rule_name": "Fly",
          "rule_description": "May not be pinned. Flys to a random Warrior within its Movement range at the start of each Monsters Phase."
        },
        {
          "rule_name": "Frenzy",
          "rule_description": "Roll 1D6. If equal to or over Frenzy Rating n, the Monster gets 2 x its normal number of attacks for rest of combat."
        },
        {
          "rule_name": "Gang Up",
          "rule_description": "Place as many monsters around a random Warrior as you can. Repeat until all monsters are placed. Each group around a Warrior makes one combined attack per attack in its profile. For each monster above 1 add +1 to hit and +1 to Str."
        },
        {
          "rule_name": "Giant Attacks",
          "rule_description": "At start of each Monsters Phase each Giant on the board will make a type of attack."
        },
        {
          "rule_name": "Goblin Magic",
          "rule_description": "Place as ranged. May cast a number of spells per turn from those available. Missile weapon attacks against Magic-using monsters are at -1."
        },
        {
          "rule_name": "Greater Daemon",
          "rule_description": "Non-magical weapon attacks are at -2. Magical at -1. Roll 1D6+Battle Level against Greater Daemon Terror Value n. If Warrior beats, fights as normal. If not he fights with a further -2. If a natural 1, Warrior may do nothing for 1 full turn. Terrorized Wizards have casting costs increased by +2. Greater Daemon get +1 on its Magic Table rolls if it casts spells. They normally use the Chaos Magic table."
        },
        {
          "rule_name": "Hate Elves",
          "rule_description": "Monster gains +1 Attacks when fighting that type of Warrior. Though all attacks are made at -1 to hit."
        },
        {
          "rule_name": "Herd Squigs",
          "rule_description": "Move as a pair and remain adjacent. Stays on same board section as Squig to keep control of it. Squigs become wild if both Herders are not there. Controlled Squigs never fall asleep and only attack another Squig on a nat 6. If both Squig Hunters are present in a team and they attack a Warrior with their prodder they inflict an extra 1D6 Wounds on top of their normal damage roll."
        },
        {
          "rule_name": "Ignore Blows",
          "rule_description": "Roll 1D6 each time Monster is hit. If equal to or higher than its Ignore Blow Rating n+, the hit is shrugged off and causes no damage."
        },
        {
          "rule_name": "Ignore Pain",
          "rule_description": "Each time Monster is hit subtract its Ignore Pain Rating n from the number of Wounds caused, in addition to subtracting Toughness and armour."
        },
        {
          "rule_name": "Large Monster",
          "rule_description": "A random player places the model anywhere on the board, facing any direction, moving any models as required. Determine a second random Warrior for Monsters initial attacks. Spells cast at Large Monster require the Monsters Level in extra points of Power."
        },
        {
          "rule_name": "Magic Armour",
          "rule_description": "Determine a random type of Magic Armour for the Monster. Groups of Monster have the same Magic Armour."
        },
        {
          "rule_name": "Magic Dispel",
          "rule_description": "Roll 1D6 for any Warrior spell cast. If roll is equal to or better than Magical Dispel Rating n+ the spell has no effect at all and the Power used to cast it is wasted."
        },
        {
          "rule_name": "Magic Drain",
          "rule_description": "Roll 1D6 once per turn during the Power Phase, immediately after the Wizards Power Roll. If equal to or greater than Magic Drain Rating n+, the Wizard loses all his Power for that turn."
        },
        {
          "rule_name": "Magic Item",
          "rule_description": "Determine a random type of Magic Item/Items for the Monster. Groups of Monster have the same Magic Items."
        },
        {
          "rule_name": "Magic Resistance",
          "rule_description": "Natural protection against spells. Roll 1D6 for any Warrior spell cast at this Monster. If roll is equal to or better than the Magic Resistance Rating n+ the effects of the spell are ignored for this Monster only."
        },
        {
          "rule_name": "Magic Resistance (Ring)",
          "rule_description": "Spell protection provided by item. Roll 1D6 for any Warrior spell cast at this Monster. If roll is equal to or better than the Magic Resistance Rating n+ the effects of the spell are ignored for this Monster only."
        },
        {
          "rule_name": "Magic Source",
          "rule_description": "Unconsciously acts as a source of power for other spellcasters. While on the board, the Wizard doubles the result of his Power roll each turn on anything other than a roll of 1. A 1 gets 1 Power Point as normal."
        },
        {
          "rule_name": "Magic Weapon",
          "rule_description": "Determine a random type of Magic Weapon for the Monster. Groups of Monster have the same Magic Weapon."
        },
        {
          "rule_name": "Manticore Sting (Ambush Magic Auto)",
          "rule_description": "During Monsters Phase, in addition to normal attacks and after moving, each Warrior adjacent to Manticore is automatically hit and suffers 3D6 Wounds, mod for T and Arm. This attack is Poisonous."
        },
        {
          "rule_name": "Necromantic Magic",
          "rule_description": "Place as ranged. May cast a number of spells per turn from those available. Missile weapon attacks against Magic-using monsters are at -1."
        },
        {
          "rule_name": "Never Pinned",
          "rule_description": "Determine a random Warrior each turn for the Monster to target. Missile troops try to move to locations that allow them to make shots."
        },
        {
          "rule_name": "None",
          "rule_description": "No Special Rules apply to this Monster."
        },
        {
          "rule_name": "Orc Magic",
          "rule_description": "Place as ranged. May cast a number of spells per turn from those available. Missile weapon attacks against Magic-using monsters are at -1."
        },
        {
          "rule_name": "Paralysis",
          "rule_description": "At end of each turn, if wounded by this Monster, deduct 1 from Movement. Killed if reduced to 0. At start of each turn, after very first such wound, roll 1D6+Str. If 8 or greater, paralysis wears off and Movement returns to normal. When all Monsters are dead the paralysis wears off automatically and Movement returns to normal. Paralysis can also be cured by a healing spell or healing potion, but not by bandages, provisions, or the like."
        },
        {
          "rule_name": "Parry",
          "rule_description": "When Monster is attacked, roll 1D6. If roll is equal to or greater than Parry value n, the Monster turns the blow and it causes no damage."
        },
        {
          "rule_name": "Petrify",
          "rule_description": "Attacking this Monster is at -2 to hit because they are trying to avoid gaze. If Warrior rolls Nat 1 on hit, they have caught gaze and suffers 3D6 W with no mods for T or Arm, plus -1 to Movement for rest of dungeon. Monsters with a Petrify attack also have natural Magic Resistance 4+ and, if their Resistance Roll is a natural 6, may immediately turn their Petrify attack on the spellcaster that attacked them and inflict the effects given above."
        },
        {
          "rule_name": "Plague",
          "rule_description": "If Warrior is reduced to 0 Wounds by this Monster, Toughness is reduced permanently by -1 after healed. If reduced to 0 Toughness, Warrior is killed and removed."
        },
        {
          "rule_name": "Poison",
          "rule_description": "If Warrior is reduced to 0 Wounds by this Monster, Strength is reduced permanently by -1 after healed. If reduced to 0 Strength, Warrior is killed and removed."
        },
        {
          "rule_name": "Power of Tzeentch",
          "rule_description": "Any spells cast at L of C's minions: Advanced Magic Dispel 4+ (4-5) Magic Dispel as normal. (6) Deflected back at caster. Any beneficial magic cast by Warriors is: (4-5) Dispelled (6) Affects L of C instead.  Spells cast at L of C: Advanced Magic Resistance 4+ . In addition, if the Resistance roll scores a 5 or 6 the spell is deflected rather than simply resisted and affects the Warrior who cast it instead. Note that Magic Resistance only protects of the Lord of Change from spells, not from blows by magical weapons and the like."
        },
        {
          "rule_name": "Protection Ring",
          "rule_description": "Magical Ring that gives an extra +n to Toughness."
        },
        {
          "rule_name": "Regenerate",
          "rule_description": "At end of each turn, Monster regains nD6 Wounds.  Cannot regenerate if reduced to 0 Wounds."
        },
        {
          "rule_name": "Skaven Magic",
          "rule_description": "Place as ranged. May cast a number of spells per turn from those available. Missile weapon attacks against Magic-using monsters are at -1."
        },
        {
          "rule_name": "Skitterleap",
          "rule_description": "Vermin Lord moves through the warp and reappears next to its chosen victim. Its affects are: Not subject to pinning and may move through obstacles."
        },
        {
          "rule_name": "Slime Trail",
          "rule_description": "Any Warrior who finishes turn in a square adjacent to Beast of Nurgle suffers 1 Wound with no mods for T or Arm."
        },
        {
          "rule_name": "Sorcerous Exhalation",
          "rule_description": "Breath of whirling tendrils of protective magic. All attacks made with magical weapons against Lammasu are at -2 to hit."
        },
        {
          "rule_name": "Sting",
          "rule_description": "If all Monsters normal attacks hit in a single turn, sting does (damage) listed. Is also a Poison Attack."
        },
        {
          "rule_name": "Stream of Corruption",
          "rule_description": "Special Vomit attack. Once per turn at start of Monsters Phase randomly determine Warrior on same board section. See text for effects."
        },
        {
          "rule_name": "Tattoos",
          "rule_description": "If Monster is hit, roll 1D6. If score is n or more, the blow has no effect."
        },
        {
          "rule_name": "Terror",
          "rule_description": "Warriors roll 1D6+BL. Must BEAT Monsters Terror Value n. If not, Warrior is at -2 to hit Monster. Casting Numbers are +2 for afraid Wizards."
        },
        {
          "rule_name": "Throw Spears",
          "rule_description": "As Monsters are placed, they throw (weapons) in a single special attack. Roll Ballistic as normal, causing (Monsters Normal Damage Dice) + Str n Wounds. After Throw, attack in Monsters Phase as normal."
        },
        {
          "rule_name": "Tomb Rot",
          "rule_description": "Any Warrior that ends a turn adjacent to this Monster takes an extra 1Dn Wounds, with no mods for T or Arm."
        },
        {
          "rule_name": "Treasure Horde",
          "rule_description": "When Dragon is killed, randomly determine a Treasure Hoard Entry. (1D6 + n)"
        },
        {
          "rule_name": "Vampire",
          "rule_description": "At start of the Monsters Phase, determine the Vampires single special attack. This is in addition to its normal melee attacks."
        },
        {
          "rule_name": "Vomit",
          "rule_description": "In addition to normal attacks roll 1D6. If 5 or 6 Monster vomits on target. If target has any armour, including shields or a helmet, he looses one piece (Warriors choice) as acid eats it. If no armour, lose 1D6 +2 Wounds with no mod for Toughness."
        },
        {
          "rule_name": "Web",
          "rule_description": "If Warrior isn't webbed, make a hit role. If hit, Warrior is now webbed and may do nothing till free. If Warrior is webbed, remaining attacks auto-hit, doing 1Dn Wounds with no mods for T or Arm. Other Monsters hit webbed Warriors at + 2. At the start of each Warriors Phase, roll 1D6 for each Warrior that has been webbed and add Strength. If the total is 7 or more, he pulls himself free and may act normally this turn."
        },
        {
          "rule_name": "Weeping Blade",
          "rule_description": "Weeping Blades are considered Poison Attacks. If Warrior is reduced to 0 Wounds by this Monster, Strength is reduced permanently by -1 after healed. If reduced to 0 Strength, Warrior is killed and removed."
        },
        {
          "rule_name": "Wild Squig Attack",
          "rule_description": "In the Phase they appear and each Monster Phase thereafter, roll 1D6 for each wild Squig. (1) Falls asleep. Does nothing this turn. (2-4) Attacks a random Warrior. (5-6) Attacks the nearest Monster."
        }
      ]);
    });
}; 
