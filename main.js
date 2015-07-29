var Translate = function() {
  var inputLanguage = '';
  var displayGreeting = document.getElementById('displayArea');
  var selection = '';

  return {
    getInput: function() {
      inputLanguage = $('textarea').val();
      console.log(inputLanguage);
      selection = Translate.selection;
      console.log(selection)
      // console.log(selection);
      // if (selection === 'French') {
      //   //call french method
      //   //displayGreeting.innerHTML += 
      // }
      // if (selection === 'German') {
      //   console.log(selection);
      //   translateToGerman(inputLanguage);
      //   //displayGreeting.innerHTML += 
      // }
      // if (selection === 'Spanish') {
      //   //call spanish method
      //   //displayGreeting.innerHTML += 
      // }
    },
  }
}();


$('#translate').on('click', function(){
  Translate.selection = $('select option:selected').val();
  console.log(Translate.getInput());
  console.log(Translate.selection);
  return Translate.selection;
});
