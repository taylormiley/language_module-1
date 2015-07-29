var Translate = function() {
  var inputLanguage = "";
  var displayGreeting = document.getElementById('displayArea');
  var selection = "";

  return {
    setSelection: function(currentSelection) {
      selection = currentSelection;
    },
    getInput: function() {
      inputLanguage = $('textarea').val();
      if (selection === "German") {
        this.translateToGerman(inputLanguage);
      }
      if (selection === "French") {
        this.translateToFrench(inputLanguage);
      }
      if (selection === "Spanish") {
        this.translateToSpanish(inputLanguage);
      }
    }
  };
}();

Translate.setSelection();

$('#translate').on('click', function(){
  var currentSelection = $('select option:selected').val();
  Translate.setSelection(currentSelection);
  Translate.getInput();
});
