function toWeirdCase(string){

  string = string.toLowerCase().split(' ')


  for (let i = 0; i < string.length; i++) {

    string[i] = string[i].split('')

    for (let j = 0; j < string[i].length; j++) {
      
      if (j % 2 == 0) { 
        string[i][j] = string[i][j].toUpperCase()
      }
    }
    string[i] = string[i].join('')
  }


  return string.join(' ')

}

console.log(toWeirdCase('Hello There'))


// parameter: string    // can contain multiple words separated by spaces
// return: same string    // even indexed characters are upper case (starting with 0 index) and odd characters are lower case. Start the index over for each word
// e.g. toWeirdCase('Hello there')
// results in 'HeLlO ThErE'