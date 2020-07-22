const createEventsHazardsTable = `
    CREATE TABLE events_and_hazards (
        event_n_haz_id int PRIMARY KEY,
        event_n_haz_type text,
        event_n_haz_name text,
        event_n_haz_roll int,
        event_n_haz_has_sub boolean,
        event_n_haz_description text
    );`

const dropEventsHazardsTable = `drop table events_and_hazards;`

exports.up = function(knex) {
    return knex.raw(createEventsHazardsTable)
};

exports.down = function(knex) {
    return knex.raw(dropEventsHazardsTable)
};
