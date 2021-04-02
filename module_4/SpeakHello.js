( function(window) {
    
    // local object.
    //
    var helloSpeaker = {} ;

    // constant string for message.
    //
    var speakWord = "Hello";

    // attach function.
    //
    helloSpeaker.speak = function (name) {
        console.log(speakWord + " " + name);
    } ;

    // attach to global scope.
    //
    window.helloSpeaker = helloSpeaker;

})(window) ;
