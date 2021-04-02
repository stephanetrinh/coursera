( function(window) {
    var byeSpeaker = {}

    // local string
    //
    var speakWord = "Good Bye";

    // attach to our local object.
    //
    byeSpeaker.speak = function speak(name) {
        console.log(speakWord + " " + name);
    }

    // attach to global scope.
    //
    window.byeSpeaker = byeSpeaker;
})(window) ;
