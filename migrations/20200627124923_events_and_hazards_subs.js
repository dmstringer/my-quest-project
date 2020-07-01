const createEventsHazardsSubsTable = `
    CREATE TABLE events_and_hazards_subs (
        event_n_haz_subs_id serial PRIMARY KEY,
        event_n_haz_subs_type text,
        event_n_haz_subs_name text,
        event_n_haz_subs_roll text,
        event_n_haz_id int REFERENCES events_and_hazards (event_n_haz_id),
        event_n_haz_subs_order int,
        event_n_haz_subs_description text
    );`

const dropEventsHazardsSubsTable = `drop table events_and_hazards_subs;`

exports.up = function(knex) {
    return knex.raw(createEventsHazardsSubsTable)
};

exports.down = function(knex) {
    return knex.raw(dropEventsHazardsSubsTable)
};