//   {"merry":"frohe", "christmas":"Weihnachten", "and":"und", "happy":"gutes", 
//   "new":"neues", "year":"jahr"}

// 1.) Each team member will create one JavaScript file that contains one IIFE. Each teammate's 
//     IIFE will augment the other teammates' IIFEs.

// 2.) The lexicon should be a private variable that cannot be accessed by the other team member's 
//     module except through an accessor (getter) method.

// 3.) Each IIFE should expose, in its public interface, a method named translateTo{Language} 
//     (e.g. translateToSpanish or translateToFinnish) that accepts a single argument. 
//     That argument's value should be the text entered in by the user.

// 4.) The team should create an extra JavaScript file that handles interacting with the form 
//     elements and determining which method should be called.




// var Translate = function(german) {
//   german.translateToGerman = function(greeting) {
//     return "it work";
//   }
//   return german;
// }(Translate);

// Translate.translateToGerman();