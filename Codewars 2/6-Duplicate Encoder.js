function duplicateEncode(word){
    var syllables = {};
    var res = '';
    word = word.toLowerCase();

    for (var i in word)
    {
      if (!(word[i] in syllables)) {
        syllables[word[i]] = 0;
      }
      syllables[word[i]]++;
    }

    for (var i in word)
      res += syllables[word[i]] == 1 ? '(' : ')';
    return res;
}