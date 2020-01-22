const express = require( "express" );
const router = express.Router();
const Cars = require( "../cars/cars-router" );

//! POST REQUEST -- ADDS A NEW USER =================================
router.post( "/", ( req, res ) => {
    Cars.insert( req.body )
        .then( ( car ) => {
            res.status( 201 ).json( car );
        } )
        .catch( ( error ) => {
            // log error to server
            console.log( error );
            res.status( 500 ).json( {
                message: "Error adding the Car",
            } );
        } );
} );
//! GET REQUEST -- GETS ALL USERS ================================
router.get( "/", ( req, res ) => {
    Cars.get( req.query )
        .then( ( car ) => {
            res.status( 200 ).json( car );
        } )
        .catch( ( error ) => {
            // log error to server
            console.log( error );
            res.status( 500 ).json( {
                message: "Error retrieving the Cars",
            } );
        } );
} );

module.exports = router;
