const array = ["tea", "eat", "tan", "ate", "nat", "bat"];

function anagramsWords(words) {
  let anagrams = {};

  for (let word of words) {
    let key = word.split('').sort().join('');

    if (!anagrams[key]) {
      anagrams[key] = [];
    }

    anagrams[key].push(word);
  }
  return Object.values(anagrams);
}

console.log(anagramsWords(array))


