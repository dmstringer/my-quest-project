const createSpecialTable = `
    CREATE TABLE special_table (
        specialtable_id serial PRIMARY KEY,
        specialtable_type text,
        specialtable_num int,
        specialtable_name text,
        specialtable_description text
    );`

const dropSpecialTable = `drop table special_table;`

exports.up = function(knex) {
    return knex.raw(createSpecialTable)
};

exports.down = function(knex) {
    return knex.raw(dropSpecialTable)
};
