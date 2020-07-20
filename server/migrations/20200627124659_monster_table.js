const createMonsterTable = `
    CREATE TABLE monster_table (
        monstertable_id serial PRIMARY KEY,
        monstertable_level int,
        monstertable_d66 int,
        monster1_name text, monster1_numdice int, monster1_dietype int, monster1_plus int, monster1_andor text,
        monster2_name text, monster2_numdice int, monster2_dietype int, monster2_plus int, monster2_andor text,
        monster3_name text, monster3_numdice int, monster3_dietype int, monster3_plus int, monster3_andor text,
        monster4_name text, monster4_numdice int, monster4_dietype int, monster4_plus int, monster4_andor text,
        monster5_name text, monster5_numdice int, monster5_dietype int, monster5_plus int, monster5_andor text,
        monster6_name text, monster6_numdice int, monster6_dietype int, monster6_plus int, monster6_andor text
    );`

const dropMonsterTable = `drop table monster_table;`

exports.up = function(knex) {
    return knex.raw(createMonsterTable)
};

exports.down = function(knex) {
    return knex.raw(dropMonsterTable)
};
