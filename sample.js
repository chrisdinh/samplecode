// once finished with the HTML/CSS
// write a script that returns the number of occurrences
// of any given letter within the "Join the 42..." paragraph
// example: the letter "j" occurs twice within the paragraph
function letterCount(letter) {
  var paragraph = "Join the 42 other donors who have already supported this project. Every dollar helps."
  paragraph = paragraph.toLowerCase();
  var count = 0;
  for (var i = 0; i < paragraph.length; i++) {
    if (paragraph.charAt(i) == letter) {
      count++;
    }
  }
  return count;
}

var jCount = letterCount("j"); /* 2 */
var oCount = letterCount("o"); /* 8 */
