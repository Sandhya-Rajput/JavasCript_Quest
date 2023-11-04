function reverseStrings(str) {
    const strings = str.split(' ');
    const reversedStrings = strings.map((string) => {
      return string.split('').reverse().join('');
    });
    return reversedStrings.join(' ');
  }
  
  const sentence = 'This is a sunny day';
  const reversedSentence = reverseStrings(sentence);
  console.log(reversedSentence); 