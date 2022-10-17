/**
 * @param {string} sentence
 * @return {boolean}
 */


const checkIfPangram = function(sentence) {
  let alphabetTable = {
  'a': 0,
  'b': 0,
  'c': 0,
  'd': 0,
  'e': 0,
  'f': 0,
  'g': 0,
  'h': 0,
  'i': 0,
  'j': 0,
  'k': 0,
  'l': 0,
  'm': 0,
  'n': 0,
  'o': 0,
  'p': 0,
  'q': 0,
  'r': 0,
  's': 0,
  't': 0,
  'u': 0,
  'v': 0,
  'w': 0,
  'x': 0,
  'y': 0,
  'z': 0
};
      console.log(alphabetTable)
  for(let i = 0; i < sentence.length; i++) {
    alphabetTable[[sentence[i]]]++;

  }
  
  const keys = Object.keys(alphabetTable);

  const counts = keys.map(key => alphabetTable[key]);

  const zeros = counts.filter(count => count === 0);

  return zeros.length === 0;
};

