const createMonsterStatsTable = `
    CREATE TABLE monster_stats (
        monster_id serial PRIMARY KEY,
        monster_name text UNIQUE,
        wounds int,
        move int,
        weapon_skill int,
        ballistic_skill text,
        strength int,
        toughness int,
        initiative int,
        attacks text,
        gold int,
        armour text,
        damage text,
        notes1 text, notes1_val text,
        notes2 text, notes2_val text,
        notes3 text, notes3_val text,
        notes4 text, notes4_val text,
        notes5 text, notes5_val text,
        notes6 text, notes6_val text,
        notes7 text, notes7_val text,
        notes8 text, notes8_val text,
        notes9 text, notes9_val text,
        notes10 text, notes10_val text,
        notes11 text, notes11_val text,
        notes12 text, notes12_val text
    );`

const dropMonsterStatsTable = `drop table monster_stats;`

exports.up = function(knex) {
    return knex.raw(createMonsterStatsTable)
};

exports.down = function(knex) {
    return knex.raw(dropMonsterStatsTable)
};
