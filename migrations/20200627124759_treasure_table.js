const createTreasureTable = `
    CREATE TABLE treasure_table (
        treasuretable_id serial PRIMARY KEY,
        treasuretable_type text,
        treasuretable_num int,
        treasuretable_name text,
        treasuretable_cost text,
        treasuretable_description text
    );`

const dropTreasureTable = `drop table treasure_table;`

exports.up = function(knex) {
    return knex.raw(createTreasureTable)
};

exports.down = function(knex) {
    return knex.raw(dropTreasureTable)
};