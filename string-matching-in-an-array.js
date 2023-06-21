/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
  // create empty array for output
  //nested for loop find the sub strings
  //display output
  let output= [];
  for(let i= 0 ; i <words.length ; i++){
      for(let j=0 ; j<words.length ; j++){
          if(i !== j && words[j].includes(words[i])){
              output.push(words[i])
              break;
          }
      }
  }
  return output;
};