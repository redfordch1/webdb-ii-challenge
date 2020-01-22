
exports.up = function ( knex ) {
    return knex.schema.createTable( "cars", tbl => {
        // id column, integer, primary key
        tbl.increments();
        tbl.integer( "vin" );
        tbl.string( "make", 400 ).index();
        tbl.string( "model", 400 ).index();
        tbl.integer( "mileage" );
    } )

};

exports.down = function ( knex ) {
    return knex.schema.dropTableIfExists( "cars" )
};
