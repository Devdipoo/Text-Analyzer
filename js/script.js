// Business Logic

function wordCounter(text) {
    if (text.trim().length === 0) {
      return 0;
    }
    let wordCount = 0;
    const wordArray = text.split(" ");
    wordArray.forEach(function(element) {
      if (!Number(element) && element.trim().length !== 0) {
        wordCount++;
      }
    });
    return wordCount;
  }
  
  function numberOfOccurrencesInText(word, text) {
    if (noInputtedWord(word, text)) {
      return 0;
    }
    const wordArray = text.split(" ");
    let wordCount = 0;
    wordArray.forEach(function(element) {
      if (element.toLowerCase().includes(word.toLowerCase())) {
        wordCount++;
      }
    });
    return wordCount;
  }

  function badWords(word, text) {
    let words = sentence.split(" ")
    let badWords = ["zoinks", "loopdaloop", "biffaroni", "muppeteer"]

    //Iterate through  each words in the sentence

    words.forEach(function (word) {
      badWords.forEach(function (badWord) {
        if (word.toLowerCase() === badWord.toLowerCase()) {
          //Mask the middle characters with astericks

          let maskedWords = word.charAt(0) + '*'.repeat(words[i].length -2) + words[i].charAt(words[i].length -1)
            //Replace the word with the masked word
          
              words[i] = maskedWords
        }
      })
      })
      return words.join(' ');
    }
    
  

  function boldPassage(word, text) {
    if (noInputtedWord(word, text)) {
      return "";
    }
    let htmlString = "<p>";
    let textArray = text.split(" ");
    textArray.forEach(function(element, index) {
      if (element.toLowerCase().includes(word.toLowerCase())) {
        htmlString = htmlString.concat("<b>" + element + "</b>");
      } else {
        htmlString = htmlString.concat(element);
      }
      if (index !== (textArray.length - 1)) {
        htmlString = htmlString.concat(" ");
      }
    });
    return htmlString + "</p>";
  }

  function threeMostCommonWords(sentence) {
    if (noInputtedWord(sentence)) {
      return;
    }

    //Convert the sentence to Lowercase and remove punctuation
    const cleanedSentence = sentence.toLowerCase().replace(/[^\w\s]/g, '');
    const words = cleanedSentence.split(/\s+/);

    //Create a unique array of words
    const uniqueWords = [...new Set(words)];
    
    //Create an array to store each word and its count
    const wordCountsArray = [];

    //Count the occurence of each word
    uniqueWords.forEach((uniqueWord) => {
      let count = 0;
      words.forEach((word) => {
        if (uniqueWord === word) {
          count++;
        }
      })
      wordCountsArray.push([uniqueWord, count]);
    });

    //Sort the array by count in descending order
    wordCountsArray.sort((a,b) => b[1] - a[1]);

    //Get the top three most common words and their counts
    const topWords = wordCountsArray.slice(0, 3);

    //Initialize an HTML list with <ul> tag
    let list = "<ul>";

    //Loop through the top three words and create <li> tags
    topWords.forEach(element => {
      list += `<li> ${element[0]}: ${element[1]} </li> `
    });

    // Close the HTML list with </ul> tag
    list += "</ul>"

    //Return the full list as an HTML string
    return list;
  }

// Utility Logic

// function noInputtedWord(word, text) {
//   if ((text.trim().length === 0) || (word.trim().length === 0)) {
//     return true;
//   }
//   return false;
// }

  $(document).ready(function(){
    $("form#word-counter").submit(function(event){
      event.preventDefault();
      const passage = $("#text-passage").val();
      const word = $("#word").val();
      const wordCount = wordCounter(passage);
      const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
      let offensiveWord = badWords(passage)
      $("#total-count").html(wordCount);
      $("#selected-count").html(occurrencesOfWord);
      $("#bolded-passage").html(boldPassage(word, offensiveWord));
      $("topThree").html(threeMostCommonWords(passage))
    });
  });