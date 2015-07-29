var Translate = function() {
  var inputLanguage = '';
  var displayGreeting = document.getElementById('displayArea');
  var selection = '';
  
  console.log(selection);
  return {
    getInput: function() {
      inputLanguage = $('textarea').val();
      
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
    selection
  }
}();

console.log(Translate.getInput())

$('#translate').on('click', function(){
  Translate.selection = $('select option:selected').val();
  console.log(Translate.getInput());
});