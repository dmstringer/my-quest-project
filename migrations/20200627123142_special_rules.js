const createSpecialRulesTable = `
    CREATE TABLE special_rules (
        rule_id serial PRIMARY KEY,
        rule_name text UNIQUE,
        rule_description text
    );`

const dropSpecialRulesTable = `drop table special_rules;`

exports.up = function(knex) {
    return knex.raw(createSpecialRulesTable)
};

exports.down = function(knex) {
    return knex.raw(dropSpecialRulesTable)
};
