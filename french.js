var Translate = function(french) {
  var lexicon = {
    "merry": "joyeux",
    "christmas": "Noël",
    "and": "et",
    "happy": "heureux",
    "new": "nouveau",
    "year": "année"
  };

  var vals = Object.keys(lexicon).map(function (key){
    return lexicon[key];
  });
  var translatedGreeting = "";
  french.translateToFrench = function(greeting) {
    var newGreeting = greeting.split(" ");
    for (var i = 0; i < newGreeting.length; i++) {
      for (var j = 0; j < Object.keys(lexicon).length; j++) {
        if (newGreeting[i] === Object.keys(lexicon)[j]) {
          newGreeting[i] = vals[j]; 
        } 
      }
    }
    newGreeting = newGreeting.toString().replace(/,/g, " ")
    translatedGreeting = newGreeting.charAt(0).toUpperCase() + newGreeting.substr(1);
    $('#displayArea').append(translatedGreeting + "!");
  };
  return french;
}(Translate);

Translate.translateToFrench();

