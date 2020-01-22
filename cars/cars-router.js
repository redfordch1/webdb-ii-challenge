const express = require( "express" );
const knex = require( "knex" );

const knexConfiguration = {
    // client answers: which type (sqlite, postgres, mysql, oracle) of database?
    client: "sqlite3", // the db driver
    // the rest will depend on the type of database
    // connection could be a string or an object
    connection: {
        filename: "./data/cars.db3",
    },
    useNullAsDefault: true, // ONLY needed for SQLite
};

// db represents a connection to the database
const db = knex( knexConfiguration );

const router = express.Router();

router.get( "/", ( req, res ) => {
    //    select  *   from  fruits
    // db.select('*').from('fruits').then().catch();
    db( "cars" )
        .then( cars => {
            res.json( cars );
        } )
        .catch( err => {
            res.status( 500 ).json( { message: "Failed to retrieve fruits" } );
        } );
} );

router.get( "/:id", ( req, res ) => {
    const { id } = req.params;
    // select * from fruits where id = 2
    db( "cars" )
        // .where({ id: id })
        .where( "id", "=", id )
        .first()
        .then( cars => {
            res.json( cars );
        } )
        .catch( err => {
            res.status( 500 ).json( { message: "Failed to retrieve fruit" } );
        } );
} );

router.post( "/", ( req, res ) => {
    const fruitData = req.body;
    db( "cars" )
        .insert( carsData ) // with SQLite, by default it returns an array with the last id
        .then( ids => {
            db( "cars" )
                .where( { id: ids[ 0 ] } )
                .then( newCarEntry => {
                    res.status( 201 ).json( newCarEntry );
                } );
        } )
        .catch( err => {
            console.log( "POST error", err );
            res.status( 500 ).json( { message: "Failed to store data" } );
        } );
} );

module.exports = router;
