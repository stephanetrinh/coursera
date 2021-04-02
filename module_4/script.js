
// Keep around to check solution.
//
/*
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim

*/

// This will be invoked when the page is loaded.
//
(function() {
    // local array of names.
    //
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

    // debug, output the length of the array.
    //
    // console.log( names.length ) ;

    // Check first letter of all names,
    // decide which speaker to invoke.
    //
    for ( i = 0 ; i < names.length ; i++ ) {

      var firstLetter = names[i].charAt(0).toLowerCase( names[ i ] ) ;

      if ( firstLetter === "j" ) {
        byeSpeaker.speak( names[ i ] ) ;
      } else {
        helloSpeaker.speak( names[ i ] ) ;
      }
    }
})() ;


