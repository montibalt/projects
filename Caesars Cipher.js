function rot13(str) {
    var result = [];
    var phrase = str.split("")
    var alphabet = ["A","B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    
    for (let i = 0; i < phrase.length; i++) {
      var j =  alphabet.indexOf(phrase[i])
   
   if (j < 0){
     result.push(phrase[i]);
    }
  
    else if (j < 13){
       result.push(alphabet[j+13]);
       }
  
    else 
      result.push(alphabet[j-13])
    }
  
    return result.join("")
  }
  
  rot13("SERR PBQR PNZC")