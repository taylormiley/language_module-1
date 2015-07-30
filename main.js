var Translate = function() {
  var inputLanguage = "";
  var displayGreeting = document.getElementById('displayArea');
  var selection = "";

  return {
    setSelection: function(currentSelection) {
      selection = currentSelection;
      console.log(selection);
    },
    getInput: function() {
      inputLanguage = $('textarea').val().toLowerCase();
      if (selection === "German") {
        this.translateToGerman(inputLanguage);
      } else if (selection === "French") {
        this.translateToFrench(inputLanguage);
      } else if (selection === "Spanish") {
        this.translateToSpanish(inputLanguage);
      }
    }
  };
}();

$('#translate').on('click', function(){
  var currentSelection = $('select option:selected').val();
  Translate.setSelection(currentSelection);
  Translate.getInput();
});


$('#sayIt').on('click', function(){
  var translatedGreeting = $('#displayArea').text();
  responsiveVoice.speak(translatedGreeting);
});