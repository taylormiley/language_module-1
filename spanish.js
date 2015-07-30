var Translate = function(spanish) {
  var lexicon = {
    "merry": "alegre",
    "christmas": "Navidad",
    "and": "y",
    "happy": "feliz",
    "new": "nuevo",
    "year": "año"
  };

  // var vals = Object.keys(lexicon).map(function (key){
  //   return lexicon[key];
  // });
  var translatedGreeting = "";
  spanish.translateToSpanish = function(greeting) {
    var newGreeting = greeting.split(" ");
    for (var i = 0; i < newGreeting.length; i++) {
      for (var prop in lexicon) {
        if (prop === newGreeting[i]) {
          newGreeting[i] = lexicon[prop];
        }
      }
    }
    newGreeting = newGreeting.toString().replace(/,/g, " ")
    translatedGreeting = newGreeting.charAt(0).toUpperCase() + newGreeting.substr(1);
    $('#displayArea').text(translatedGreeting + "!");
  };
  return spanish;
}(Translate);